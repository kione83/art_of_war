import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom";

const Navbar = ({ courseTitle="" }) => {
	    const location = useLocation();
		const isInsideCourse = location.pathname.includes("/course");
	return (
		<AppBar position="static" style={{ height: "64px" }}>
			<Toolbar>
				{isInsideCourse ? (
					<>
						<MenuIcon fontSize="large" style={{ marginRight: 15 }} />
						<Typography variant="h6">{courseTitle}</Typography>
					</>
				) : (
					<Typography variant="h6" style={{ flexGrow: 1 }}>
						Teaching Platform
					</Typography>
				)}
				<Button color="inherit">Login</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
