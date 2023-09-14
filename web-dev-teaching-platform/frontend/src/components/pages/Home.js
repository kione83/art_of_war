import React from "react";
import CourseCardsContainer from "../layout/CourseCardsContainer";

// Sample data for the courses, you can replace this with actual API data later.
const courses = [
	{
		id: 1,
		title: "Introduction to Python",
		imageUrl:
			"https://miro.medium.com/v2/resize:fit:840/1*RJMxLdTHqVBSijKmOO5MAg.jpeg",
		startDate: "01/01/2023",
		endDate: "31/01/2023",
		unreadAnnouncements: 2,
		unreadDiscussions: 5,
		pendingAssignments: 3,
	},
	{
		id: 2,
		title: "Introduction to Web Development",
		imageUrl:
			"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200203200336/13-Things-You-Should-Know-Before-You-Enter-In-Web-Development.png",
		startDate: "01/01/2023",
		endDate: "31/01/2023",
		unreadAnnouncements: 4,
		unreadDiscussions: 1,
		pendingAssignments: 2,
	},
	{
		id: 3,
		title: "Introduction to Python",
		imageUrl:
			"https://miro.medium.com/v2/resize:fit:840/1*RJMxLdTHqVBSijKmOO5MAg.jpeg",
		startDate: "01/01/2023",
		endDate: "31/01/2023",
		unreadAnnouncements: 1,
		unreadDiscussions: 0,
		pendingAssignments: 0,
	},
	{
		id: 4,
		title: "Introduction to Web Development",
		imageUrl:
			"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200203200336/13-Things-You-Should-Know-Before-You-Enter-In-Web-Development.png",
		startDate: "01/01/2023",
		endDate: "31/01/2023",
		unreadAnnouncements: 2,
		unreadDiscussions: 5,
		pendingAssignments: 3,
	},
	{
		id: 5,
		title: "Introduction to Python",
		imageUrl:
			"https://miro.medium.com/v2/resize:fit:840/1*RJMxLdTHqVBSijKmOO5MAg.jpeg",
		startDate: "01/01/2023",
		endDate: "31/01/2023",
		unreadAnnouncements: 4,
		unreadDiscussions: 1,
		pendingAssignments: 2,
	},
	{
		id: 6,
		title: "Introduction to Web Development",
		imageUrl:
			"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200203200336/13-Things-You-Should-Know-Before-You-Enter-In-Web-Development.png",
		startDate: "01/01/2023",
		endDate: "31/01/2023",
		unreadAnnouncements: 1,
		unreadDiscussions: 0,
		pendingAssignments: 0,
	},
	// ... add more course objects
];

export default function Home() {
	return <CourseCardsContainer courses={courses} />;
}
