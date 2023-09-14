import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Course from "./components/layout/Course";
import { Box } from "@mui/material";

function MainContent() {
	const location = useLocation();
	const isInsideCourse = location.pathname.includes("/course");
	const sampleCourseData = {
		title: "Introduction to React",
		content: "Here's the course content for Introduction to React...",
	};

	return (
		<Box style={{ flex: 1}}>
      <Navbar isInsideCourse={isInsideCourse} courseTitle={sampleCourseData.title} />
			<Sidebar />
			<Routes>
				<Route index element={<Home />} />
				<Route
					path="/course"
					element={<Course courseData={sampleCourseData} />}
				/>
			</Routes>
		</Box>
	);
}

function App() {
	const theme = createTheme();

	return (
		<ThemeProvider theme={theme}>
			<Box
				style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
				className="App"
			>
				<BrowserRouter>
					<MainContent />
				</BrowserRouter>
				<Footer />
			</Box>
		</ThemeProvider>
	);
}

export default App;
