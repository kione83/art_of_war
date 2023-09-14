import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Course = ({ courseData }) => {
    console.log("Course component is rendering!")
    return (
		<Box>
			<Container>
				<Box mt={4}>
					<Typography variant="h4" gutterBottom>
						Course Content
					</Typography>
					{/* Here you can add the components or elements that display the course content */}
					<Typography variant="body1" paragraph>
						{courseData.content}
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Course;
