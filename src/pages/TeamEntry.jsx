import React, { useState, useEffect } from "react";
import db from "../appwrite/databases.js";
import { Query } from "appwrite";

const TeamEntry = () => {
	const [teams, setTeams] = useState([]);

	const init = async () => {
		const response = await db.teams.list([Query.orderDesc("$createdAt")]);

		setTeams( response.documents );
	};

	useEffect(() => {
		init();
	}, []);

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
					className="flex flex-row justify-around sticky top-0 h-14 bg-slate-200 items-center rounded-t-2xl shadow-xl border-b-[2px] z-10  border-slate-300 font-bold text-[17px]"
					id="list-header"
				>
					<div className="ml-9">Team Name</div>
					<div className="-mr-16 ml-2">Team No</div>
					<div className="-mr-16 ml-6">Member No</div>
					<div className="-mr-2 ml-3">Room No</div>
					<div className="mr-[10.5rem]">Floor</div>
				</div>

				{teams.map((team) => (
					<div
						className="flex flex-row mt-2 hover:bg-slate-200 min-h-10 transition-colors duration-500 items-center justify-center "
						id="team"
						key={team.$id}
					>
						<div className="flex flex-row justify-around w-[95%]">
							<div className="flex justify-center items-center w-36">
								{team.team_name}
							</div>
							<div className="flex justify-center items-center">
								{team.team_no}
							</div>
							<div className="flex justify-center items-center">
								{team.member_no}
							</div>
							<div className="flex justify-center items-center">
								{team.allocated_room_no}
							</div>
							<div className="flex justify-center items-center">
								{team.floor}
							</div>
						</div>
						<div className="w-[5.5rem] cursor-pointer ">
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

export default TeamEntry;
