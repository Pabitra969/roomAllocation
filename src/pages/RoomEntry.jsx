import React from "react";
import { useEffect, useState } from "react";
import db from "../appwrite/databases.js";
import { Query } from "appwrite";
import clsx from "clsx";

const RoomEntry = () => {
	const [rooms, setrooms] = useState([]);

	const init = async () => {
		try {
			const response = await db.rooms.list([Query.orderDesc("$createdAt")]);
			setrooms(response.documents);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		init();
	}, []);

	const [room_no, setRoom_no] = useState(null);
	const [capacity, setCapacity] = useState(null);
	const [floor, setFloor] = useState("");

	const handleAdd = async () => {
		if (room_no == null) {
			alert("Room no should not be empty");
			return;
		} else if (capacity == null) {
			alert("Capacity should not be empty");
			return;
		} else if (floor.trim() == "") {
			alert("floor should not be empty");
		}

		const isDuplicate = rooms.some((room) => room.room_no === room_no);
		if (isDuplicate) {
			alert("Room number already exists!");
			return;
		}

		console.log(typeof room_no, typeof capacity, floor);
		const payload = {
			room_no: room_no,
			capacity: capacity,
			floor: floor,
		};

		try {
			const response = await db.rooms.create(payload);
			setrooms((prevState) => [response, ...prevState]);
			setRoom_no("");
			setCapacity("");
			setFloor("");
		} catch (error) {
			alert(error);
		}
	};

	const [id_to_update, setId_to_update] = useState(null);
	const [checkEdit, setCheckEdit] = useState(false);
	const handleEdit = async (room) => {
		setCheckEdit(true);
		setId_to_update(room.$id);
		setRoom_no(room.room_no);
		setCapacity(room.capacity);
		setFloor(room.floor);
	};

	const handleCancel = () => {
		setCheckEdit(false);
		setId_to_update(null);
		setRoom_no("");
		setCapacity("");
		setFloor("");
	};

	const handleUpdate = async () => {
		const confirmUpdate = window.confirm(
			"Are you sure you want to update this room?"
		);

		if (confirmUpdate) {
			try {
				// Example update payload (Modify as per your requirement)
				const updatedRoom = {
					room_no: room_no, // Replace with actual data
					capacity: capacity, // Replace with actual data
					floor: floor, // Replace with actual data
				};

				// Call Appwrite's update function
				await db.rooms.update(id_to_update, updatedRoom);

				alert("Room updated successfully!");

				// Refresh room list after update
				init();
			} catch (error) {
				console.error("Error updating room:", error);
				alert("Failed to update room.");
			}

			setCheckEdit(false);
			setId_to_update(null);
			setRoom_no("");
			setCapacity("");
			setFloor("");
			
		} else {
			console.log("Update cancelled.");
		}
	};

	const handleDelete = async (room) => {
		const confirmUpdate = window.confirm(
			"Are you sure you want to delete this room?"
		);

		if (confirmUpdate) {
			try {
				// Call Appwrite's update function
				await db.rooms.delete(room.$id);

				alert("Room deleted successfully!");

				// Refresh room list after update
				init();
			} catch (error) {
				console.error("Error deleting room:", error);
				alert("Failed to delete room.");
			}
		} else {
			console.log("Update cancelled.");
		}
	}

	return (
		<div className=" flex flex-col items-center justify-center h-screen gap-8 overflow-hidden">
			<div
				className="flex flex-row max-lg:flex max-lg:flex-col bg-white w-[90%] min-h-28 items-center justify-around rounded-2xl mt-16 lg:mt-20 max-lg:gap-6"
				id="room entry"
			>
				<div className="flex flex-col max-lg:mt-5" id="room-no">
					<div className="ml-4 font-poppins font-medium">Room no</div>
					<div className="flex flex-row h-10 rounded-2xl shadow-[0_20px_20px_rgba(0,0,0,.3)] items-center">
						<img
							src="/home.png"
							alt="room"
							className="size-7 mr-4 ml-3 opacity-40"
						/>
						<input
							onChange={(e) => setRoom_no(Number(e.target.value))}
							type="number"
							value={room_no}
							className="focus:outline-none mr-4"
						/>
					</div>
				</div>

				<div className="flex flex-col" id="capacity">
					<div className="ml-4 font-poppins font-medium">Capacity</div>
					<div className="flex flex-row h-10 rounded-2xl shadow-[0_20px_20px_rgba(0,0,0,.3)] items-center">
						<img
							src="/group.png"
							alt="room"
							className="size-7 mr-4 ml-3 opacity-40"
						/>
						<input
							onChange={(e) => setCapacity(Number(e.target.value))}
							type="number"
							value={capacity}
							className="focus:outline-none mr-4"
						/>
					</div>
				</div>

				<div className="flex flex-col" id="Floor">
					<div className="ml-4 font-poppins font-medium">Floor</div>
					<div className="flex flex-row h-10 rounded-2xl shadow-[0_20px_20px_rgba(0,0,0,.3)] items-center">
						<img
							src="/stairs.png"
							alt="room"
							className="size-7 mr-4 ml-3 opacity-40"
						/>
						<input
							onChange={(e) => setFloor(e.target.value)}
							type="text"
							value={floor}
							className="focus:outline-none mr-4"
						/>
					</div>
				</div>

				<div
					className={clsx(
						"w-48 h-16 rounded-2xl flex items-center justify-center shadow-[0_20px_20px_rgba(0,0,0,.3)] bg-[#46C990] hover:bg-[#D4E21E] duration-500 transition-colors max-lg:mb-5",
						checkEdit && "hidden"
					)}
					id="add"
				>
					<button
						onClick={handleAdd}
						className="font-poppins font-bold uppercase text-[20px w-48 h-16"
					>
						+ Add
					</button>
				</div>

				<div className="flex flex-row gap-8">
					<div
						className={clsx(
							"w-24 h-16 rounded-2xl flex items-center justify-center shadow-[0_20px_20px_rgba(0,0,0,.3)] bg-[#ffa0a0] hover:bg-[#ff3232] duration-500 transition-colors max-lg:mb-5",
							!checkEdit && "hidden"
						)}
						id="update"
					>
						<button
							onClick={handleUpdate}
							className="font-poppins font-bold uppercase text-[20px w-48 h-16"
						>
							Update
						</button>
					</div>
					<div
						className={clsx(
							"w-24 h-16 rounded-2xl flex items-center justify-center shadow-[0_20px_20px_rgba(0,0,0,.3)] bg-[#84e9bd] hover:bg-[#46C990] duration-500 transition-colors max-lg:mb-5",
							!checkEdit && "hidden"
						)}
						id="cancel"
					>
						<button
							onClick={handleCancel}
							className="font-poppins font-bold uppercase text-[20px w-48 h-16"
						>
							Cancel
						</button>
					</div>
				</div>
			</div>

			<div
				className="bg-white w-[90%] flex flex-col  min-h-[60%] max-h-[60%] max-lg:min-h-[40%] max-lg:max-h-[40%] rounded-2xl font-poppins overflow-y-scroll scrollbar-hide "
				id="roomList"
			>
				<div
					className="flex flex-row sticky top-0 justify-around min-h-14 bg-slate-200 items-center rounded-t-2xl shadow-xl border-b-[2px] z-20  border-slate-300 font-bold text-[17px]"
					id="list-header"
				>
					<div>Room No</div>
					<div>Capacity</div>
					<div className="mr-24">Floor</div>
				</div>

				{rooms.map((room) => (
					<div
						className="flex flex-row mt-2 hover:bg-slate-200 min-h-10 transition-colors duration-500 items-center "
						id="room-list"
						key={room.$id}
					>
						<div className="flex flex-row justify-around w-[95%]">
							<div className="">{room.room_no}</div>
							<div className="">{room.capacity}</div>
							<div className="-mr-20"> {room.floor} </div>
						</div>
						<div
							className="w-[5.5rem] cursor-pointer "
							onClick={() => handleEdit(room)}
						>
							<img
								src="/edit-button.png"
								alt="edit"
								className="size-7 mr-3 ml-3 opacity-30 hover:opacity-100 duration-500"
							/>
						</div>
						<div
							className="w-[5.5rem] cursor-pointer "
							onClick={() => handleDelete(room)}
						>
							<img
								src="/delete.png"
								alt="delete"
								className="size-7 mr-3 ml-3 opacity-30 hover:opacity-100 duration-500"
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RoomEntry;
