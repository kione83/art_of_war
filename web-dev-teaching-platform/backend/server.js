require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");

const router = require("./routes/");

const app = express();

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB Config
const db = process.env.MONGODB_URI;
console.log(db);
// Connect to MongoDB
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log("MongoDB successfully connected"))
	.catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api", router);

if (process.env.NODE_ENV === "production") {
	// set static folder
	app.use(express.static("frontend/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
	});
}

const port = process.env.PORT || 5000;

// process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
