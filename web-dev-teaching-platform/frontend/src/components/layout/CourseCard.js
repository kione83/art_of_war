import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	IconButton,
	Badge,
    Box,
} from "@mui/material";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import ChatIcon from "@mui/icons-material/Chat";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	cardHover: {
		transition: "all 0.3s ease",
		"&:hover": {
			transform: "translateY(-5px)",
			boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
		},
	},
});

export default function CourseCard({ course }) {
    const classes = useStyles();
	return (
        <Card className={classes.cardHover} style={{ width: 380, maxWidth: 800, height: 300, margin: 20 }}>
			<CardMedia
				component="img"
                alt={course.title}
				height="160"
				image={course.imageUrl}
			/>
			<CardContent>
				<Typography variant="h6" component="div">
					{course.title}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{course.startDate} - {course.endDate}
				</Typography>
			</CardContent>
			<Box display="flex" justifyContent="space-around" p={1}>
				<IconButton>
					<Badge badgeContent={course.unreadAnnouncements} color="error">
						<AnnouncementIcon />
					</Badge>
				</IconButton>
				<IconButton>
					<Badge badgeContent={course.unreadDiscussions} color="error">
						<ChatIcon />
					</Badge>
				</IconButton>
				<IconButton>
					<Badge badgeContent={course.pendingAssignments} color="error">
						<AssignmentIcon />
					</Badge>
				</IconButton>
			</Box>
		</Card>
	);
}
