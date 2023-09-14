import React from "react";
import { Container, Typography } from "@mui/material";

const Footer = () => {
	return (
		<Container
			style={{
				padding: "20px",
				marginTop: "20px",
				backgroundColor: "#f4f4f4",
				borderTop: "1px solid #eaeaea",
			}}
		>
			<Typography variant="body1" align="center">
				©2023 Teaching Platform
			</Typography>
		</Container>
	);
};

export default Footer;
