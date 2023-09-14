import React, { cloneElement, useState } from "react";
import {
	Drawer,
	List,
	ListItemText,
	IconButton,
	ListItemButton,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SchoolIcon from "@mui/icons-material/School";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerClosedWidth = 40; // the width when drawer is closed
const drawerOpenWidth =160; // the width when drawer is open
const useStyles = makeStyles((theme) => ({
	drawer: {
		width: drawerOpenWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
	},
	drawerPaper: {
		top: "64px",
		height: `calc(100% - 64px)`,
		[theme.breakpoints.down("xs")]: {
			top: "56px",
			height: `calc(100% - 56px)`,
		},
	},
	drawerOpen: {
		width: drawerOpenWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		overflowX: "hidden", // Ensures content remains hidden
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden", // Ensures content remains hidden
		width: drawerClosedWidth,
	},
	arrowBackground: {
		backgroundColor: "#333", // Dark Gray
		height: "100%",
		display: "flex",
		alignItems: "center", // Vertically center the icon
		justifyContent: "center", // Horizontally center the icon
	},
	centeredMenuItems: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center", // Horizontal centering
		height: "100%",
	},
	centeredList: {
		width: "100%",
		textAlign: "center",
		padding: 0, // Remove default padding
	},
	centeredListItem: {
		justifyContent: "center", // Center the content
	},
	largeIcon: {
		fontSize: "2rem", // or any other size you want
	},
}));
function Sidebar() {
	const [open, setOpen] = useState(true);
	const theme = useTheme();
	const classes = useStyles();
    const menuItems = [
			{ text: "Dashboard", icon: <DashboardIcon /> },
			{ text: "Account", icon: <AccountBoxIcon /> },
			{ text: "Courses", icon: <SchoolIcon /> },
			{ text: "Calendar", icon: <CalendarMonthOutlinedIcon /> },
			{ text: "Settings", icon: <SettingsIcon /> },
			{ text: "Admin", icon: <AdminPanelSettingsIcon /> },
		];
	return (
		<div>
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx(classes.drawerPaper, {
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}
			>
				<div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
					<div
						onClick={() => setOpen(!open)}
						className={classes.arrowBackground}
					>
						<IconButton>
							{open ? (
								<ChevronLeftIcon sx={{ color: "white" }} />
							) : (
								<ChevronRightIcon sx={{ color: "white" }} />
							)}
						</IconButton>
					</div>
					<div className={classes.centeredMenuItems}>
						<List className={classes.centeredList}>
							{menuItems.map((item) => (
								<ListItemButton
									key={item.text}
									className={classes.centeredListItem}
								>
									<div style={{ textAlign: "center", marginTop: "15px" }}>
										<div>
											{cloneElement(item.icon, {
												className: classes.largeIcon,
											})}
										</div>
										<ListItemText primary={item.text} />
									</div>
								</ListItemButton>
							))}
						</List>
					</div>
				</div>
			</Drawer>
		</div>
	);
}

export default Sidebar;
