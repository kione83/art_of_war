import React from "react";
import { Box } from "@mui/material";
import CourseCard from "./CourseCard";

export default function CourseCardsContainer({ courses }) {
	return (
		<Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" p={2} ml={12}>
			{courses.map((course) => (
				<CourseCard key={course.id} course={course} />
			))}
		</Box>
	);
}
