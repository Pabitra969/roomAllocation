import React from "react";

const TeamEntry = () => {
	return (
		<div className=" flex flex-col items-center justify-center h-screen gap-8 ">
			<div
				className="flex flex-row max-lg:flex max-lg:flex-col bg-white w-[90%] min-h-28 items-center justify-around rounded-2xl mt-20 max-lg:gap-6"
				id="room entry"
			>
				<div className="flex flex-col max-lg:mt-5" id="room-no">
					<div className="ml-4 font-poppins font-medium">Team Name</div>
					<div className="flex flex-row h-10 rounded-2xl shadow-[0_20px_20px_rgba(0,0,0,.3)] items-center">
						<img
							src="/collaboration.png"
							alt="room"
							className="size-7 mr-4 ml-3 opacity-40"
						/>
						<input type="text" className="focus:outline-none mr-4" />
					</div>
				</div>

				<div className="flex flex-col" id="room-no">
					<div className="ml-4 font-poppins font-medium">Member Number</div>
					<div className="flex flex-row h-10 rounded-2xl shadow-[0_20px_20px_rgba(0,0,0,.3)] items-center">
						<img
							src="/teamwork.png"
							alt="room"
							className="size-8 mr-4 ml-3 opacity-40"
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
					<div>Team No</div>
					<div>Member No</div>
					<div>Room No</div>
					<div className="mr-24">Floor</div>
				</div>

				<div
					className="flex flex-row mt-2 hover:bg-slate-200 min-h-10 transition-colors duration-500 items-center "
					id="room-1"
				>
					<div className="flex flex-row justify-around w-[95%]">
						<div className="">201</div>
						<div className="">50</div>
						<div className="">50</div>
						<div className="">1</div>
					</div>
					<div className="w-[5.5rem] cursor-pointer ">
						<img
							src="/edit-button.png"
							alt="edit"
							className="size-7 mr-4 ml-3"
						/>
					</div>
				</div>

				<div
					className="flex flex-row mt-2 hover:bg-slate-200 min-h-10 transition-colors duration-500 items-center "
					id="room-2"
				>
					<div className="flex flex-row justify-around w-[95%]">
						<div className="">201</div>
						<div className="">50</div>
						<div className="">50</div>
						<div className="">1</div>
					</div>
					<div className="w-[5.5rem] cursor-pointer ">
						<img
							src="/edit-button.png"
							alt="edit"
							className="size-7 mr-4 ml-3"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamEntry;
