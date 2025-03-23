import React from "react";
import { useState, useEffect } from "react";
import clsx from "clsx";

const Login = () => {
	const [first, setfirst] = useState(true);
	const [showHide1, setShowHide1] = useState(true);
	const [showHide2, setShowHide2] = useState(true);

	const [ email, setEmail ] = useState( "" );
	const [ password, setPassword ] = useState( "" )
	const [ email1, setEmail1 ] = useState( "" )
	const [password1, setPassword1] = useState("");
	const [ password2, setPassword2 ] = useState( "" );

	const [ check, setCheck ] = useState( false );
	
	useEffect( () => {
		console.log( password1 )
		console.log(password2)
		if ( password1 != password2 )
		{
			setCheck( true );
		}
		else
		{
			setCheck( false );
		}
	}, [password2])
	

	const handleShowHide1 = () => {
		setShowHide1((e) => !e);
	};

	const handleShowHide2 = () => {
		setShowHide2((e) => !e);
	};

	const handleClick = () => {
		setfirst( ( prevState ) => !prevState );
		setShowHide1( true )
		setShowHide2( true )
		setPassword1( "" )
		setPassword2( "" )
		setPassword("")
	};

	const handleRegister = () => {

	}



	return (
		<div className=" flex flex-col items-center justify-center h-screen">
			<div className="flex flex-col items-center min-h-96  w-full max-w-[500px] bg-white rounded-3xl ml-5 mr-5">
				<div id="toggle" className="flex justify-center mt-3 gap-0.5">
					<div
						onClick={handleClick}
						className={clsx(
							"h-10 w-32 bg-[#46C990] flex justify-center items-center font-poppins font-bold text-[20px] text-[#000AOB] rounded-t-3xl cursor-pointer transition-colors duration-700",
							!first && "bg-slate-300"
						)}
					>
						Login
					</div>
					<div
						onClick={handleClick}
						className={clsx(
							"h-10 w-32 bg-[#46C990] flex justify-center items-center font-poppins font-bold text-[20px] text-[#000AOB] rounded-t-3xl cursor-pointer transition-colors duration-700",
							first && "bg-slate-300"
						)}
					>
						Register
					</div>
				</div>

				<div
					className={clsx(
						"flex flex-col items-center mt-12 w-[80%] gap-6",
						!first && "hidden transition-all duration-500"
					)}
					id="login"
				>
					<div className="w-full flex flex-col ">
						<div>Username</div>
						<div className="flex shadow-xl">
							<img
								src="/user.png"
								className="size-6 opacity-50 mt-2.5 ml-1"
								alt=""
							/>
							<input
								type="email"
								name="username"
								id=""
								placeholder="Type ur username"
								className="w-full h-11 focus:outline-none ml-4"
								required
								onChange={ ( e ) => setEmail( e.target.value ) }
								value={email}
							/>
						</div>
					</div>
					<div className="w-full flex flex-col">
						<div>Password</div>
						<div className="flex shadow-xl justify-center">
							<img
								src="/locked-computer.png"
								className="size-6 opacity-50 mt-2.5 ml-1"
								alt=""
							/>
							<input
								type={showHide1 ? "password" : "text"}
								name="username"
								id=""
								placeholder="Type ur password"
								className="w-full h-11 focus:outline-none ml-4"
								required
								value={ password }
								onChange={(e)=> setPassword(e.target.value)}
							/>

							<img
								onClick={handleShowHide1}
								src={showHide1 ? "/hidden.png" : "visibility-button.png"}
								className="size-7 mt-2.5 mr-1.5 opacity-40 "
								alt=""
							/>
						</div>
					</div>

					<div className="h-10 w-24 mt-5 bg-slate-300 flex justify-center items-center uppercase font-poppins rounded-2xl font-bold hover:bg-[#46C990] duration-500 cursor-pointer">
						Login
					</div>
				</div>

				<div
					className={clsx(
						"flex flex-col items-center mt-12 w-[80%] gap-6",
						first && "hidden transition-all duration-500"
					)}
					id="login"
				>
					<div className="w-full flex flex-col ">
						<div>Username</div>
						<div className="flex shadow-xl">
							<img
								src="/user.png"
								className="size-6 opacity-50 mt-2.5 ml-1"
								alt=""
							/>
							<input
								type="email"
								name="username"
								id=""
								placeholder="Type ur username"
								className="w-full h-11 focus:outline-none ml-4 font-medium"
								required
								onChange={ ( e ) => setEmail1( e.target.value ) }
								value={email1}
							/>
						</div>
					</div>
					<div className="w-full flex flex-col">
						<div>Password</div>
						<div className="flex shadow-xl">
							<img
								src="/locked-computer.png"
								className="size-6 opacity-50 mt-2.5 ml-1"
								alt=""
							/>
							<input
								type="password"
								name="password1"
								id="password1"
								placeholder="Type ur password"
								className="w-full h-11 focus:outline-none ml-4 font-medium"
								onChange={(e) => setPassword1(e.target.value)}
								required
								value={password1}
							/>
						</div>
					</div>

					<div className="w-full flex flex-col">
						<div>Rewrite Password</div>
						<div className="flex shadow-xl">
							<img
								src="/locked-computer.png"
								className="size-6 opacity-50 mt-2.5 ml-1"
								alt=""
							/>
							<input
								type={showHide2 ? "password" : "text"}
								name="password2"
								id="password2"
								placeholder="Rewrite ur password"
								className="w-full h-11 focus:outline-none ml-4 font-medium "
								onChange={(e) => setPassword2(e.target.value)}
								required
								value={password2}
							/>

							<img
								onClick={handleShowHide2}
								src={showHide2 ? "/hidden.png" : "visibility-button.png"}
								className="size-7 mt-2.5 mr-1.5 opacity-40 "
								alt=""
							/>
						</div>

						<div
							className={clsx("text-red-500 mt-3 ml-10", !check && "hidden")}
						>
							* Password missmatch
						</div>
					</div>

					<div className="h-10 w-24 mt-5 bg-slate-300 flex justify-center items-center uppercase font-poppins rounded-2xl font-bold hover:bg-[#46C990] duration-500 cursor-pointer mb-10 "
						onClick={handleRegister}
					>
						Register
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
