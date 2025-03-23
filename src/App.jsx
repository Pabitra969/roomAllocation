import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import RoomEntry from "./pages/RoomEntry";
import TeamEntry from "./pages/TeamEntry";

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/login" element={ <Login /> } />
				<Route path="/room-entry" element={ <RoomEntry /> } ></Route>
				<Route path="/team-entry" element={ <TeamEntry/> } ></Route>
			</Routes>
		</Router>
	);
};

export default App;
