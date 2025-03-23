import React from "react";
import { useEffect, useState } from "react";

import { databases } from "../appwrite/config";

const RoomEntry = () => {
	const [rooms, setrooms] = useState([]);

	const init = async () => {
		const response = await databases.listDocuments(
			import.meta.env.VITE_DATABASE_ID,
			import.meta.env.VITE_COLLECTION_ROOM_ID
		);
		setrooms(response.documents);
	};

	useEffect(() => {
		init();
		console.log(rooms)
	}, []);

	return (
		<div className=" flex flex-col items-center justify-center h-screen gap-8 ">
			<div
				className="flex flex-row max-lg:flex max-lg:flex-col bg-white w-[90%] min-h-28 items-center justify-around rounded-2xl mt-20 max-lg:gap-6"
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
						<input type="text" className="focus:outline-none mr-4" />
					</div>
				</div>

				<div className="flex flex-col" id="room-no">
					<div className="ml-4 font-poppins font-medium">Capacity</div>
					<div className="flex flex-row h-10 rounded-2xl shadow-[0_20px_20px_rgba(0,0,0,.3)] items-center">
						<img
							src="/group.png"
							alt="room"
							className="size-7 mr-4 ml-3 opacity-40"
						/>
						<input type="text" className="focus:outline-none mr-4" />
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
						<input type="text" className="focus:outline-none mr-4" />
					</div>
				</div>

				<div className="w-48 h-16 rounded-2xl flex items-center justify-center shadow-[0_20px_20px_rgba(0,0,0,.3)] bg-[#46C990] hover:bg-[#D4E21E] duration-500 transition-colors max-lg:mb-5">
					<button className="font-poppins font-bold uppercase text-[20px w-48 h-16">
						{" "}
						+ Add
					</button>
				</div>
			</div>

			<div
				className="bg-white w-[90%] flex flex-col  min-h-[60%] max-h-[60%] max-lg:min-h-[40%] max-lg:max-h-[40%] rounded-2xl font-poppins  "
				id="roomList"
			>
				<div
					className="flex flex-row justify-around h-14 bg-slate-200 items-center rounded-t-2xl shadow-xl border-b-[2px] z-10  border-slate-300 font-bold text-[17px]"
					id="list-header"
				>
					<div>Room No</div>
					<div>Capacity</div>
					<div className="mr-24">Floor</div>
				</div>
			</div>

			
		</div>
	);
};

export default RoomEntry;
