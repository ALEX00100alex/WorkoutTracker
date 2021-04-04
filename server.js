const express = require("express");
// const mongojs = require("mongojs");
const path = require("path");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", { useNewUrlParser: true });

const db = mongoose.connect;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname + "/public/stats.html"));
});

app.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
});


// getLastWorkout
app.get("/api/workouts", (req,res) => {

})

// addExercise
app.put("/api/workouts/:id", (req,res) => {

})

// createWorkout
app.post("/api/workouts/", (req,res) => {

})

// getWorkoutsInRange
app.get("/api/workouts/range", (req,res) => {

})


app.listen(3010, () => {
    console.log("App running on port 3010!");
  });