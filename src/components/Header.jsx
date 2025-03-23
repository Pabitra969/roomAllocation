import React, { useState } from "react";
import Button from "../components/Button";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Header = () => {
	const [onClick, setOnClick] = useState(true);

	const handleClick = () => {
		setOnClick((prevState) => !prevState);
	};

	return (
		<header className="fixed top-0 left-0 z-50 w-full py-5 flex justify-around max-lg:justify-between px-6 font-poppins lg:bg-[#00575C]">
			<div id="logo">
				<Link to="/">
					<a className=" hover:cursor-pointer">
						<img src="/vite.svg" alt="logo" className="size-12" />
					</a>
				</Link>
			</div>

			<div
				id="details"
				className={clsx(
					"absolute min-h-dvh w-screen pt-52 pb-80 pr-24 lg:pr-0 lg: -ml-6 lg:pb-0  lg:ml-0 lg:min-h-0 lg:pt-0  lg:relative text-2xl flex flex-col lg:flex-row max-lg:text-4xl max-lg:justify-between font-bold uppercase items-center justify-around text-white  mt-16 lg:mt-0 bg-[#007b82] lg:bg-[#00575C]",
					onClick ? "max-lg:hidden" : ""
				)}
			>
				<div
					onClick={handleClick}
					className="hover:cursor-pointer hover:bg-[#D4E21E] hover:duration-500 hover:text-black min-h-10 flex justify-center pt-1 rounded-2xl min-w-36 max-lg:min-w-40"
				>
					Home
				</div>
				<div
					onClick={handleClick}
					className="hover:cursor-pointer hover:bg-[#D4E21E] hover:duration-500 hover:text-black min-h-10 flex justify-center pt-1 rounded-2xl min-w-36 max-lg:min-w-44"
				>
					<Link to="/room-entry">
						<div>About</div>
					</Link>
				</div>
				<div
					onClick={handleClick}
					className="hover:cursor-pointer hover:bg-[#D4E21E] hover:duration-500 hover:text-black min-h-10 flex justify-center pt-1 rounded-2xl min-w-40 max-lg:min-w-56"
				>
					<Link to="/team-entry">
						<div>Contact</div>
					</Link>
				</div>

				<div
					onClick={handleClick}
					className="lg:hidden hover:cursor-pointer hover:bg-[#D4E21E] hover:duration-500 hover:text-black min-h-10 flex justify-center pt-1 rounded-2xl min-w-40 "
				>
					<Link to="/login">Login</Link>
				</div>
			</div>

			<div id="hamBurgerButton" className="lg:hidden" onClick={handleClick}>
				<img
					src={onClick ? "/hamburger.svg" : "Untitled.svg"}
					alt="buttton"
					className="size-8 mt-1.5"
				/>
			</div>

			<div
				id="loginButton"
				className="max-lg:hidden flex items-center justify-center font-bold text-2xl uppercase min-h-3 min-w-36 rounded-2xl curso bg-white hover:bg-[#D4E21E] hover:duration-500 cursor-pointer"
			>
				<Link to="/login">
					<div>Login</div>
				</Link>
			</div>
		</header>
	);
};

export default Header;
