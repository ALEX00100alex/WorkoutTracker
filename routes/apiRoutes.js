const Workout = require('../models/workout');
const mongoose = require('mongoose');
const express = require("express");
const app = express();

// getLastWorkout
app.get("/api/workouts", async (req, res) => {
    const workouts = await Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: '$exercises.duration' },
        }
    }]);
    console.log(workouts);
    res.json(workouts);
});

// addExercise
app.put("/api/workouts/:id", async (req, res) => {
    await Workout.findOneAndUpdate({ _id: req.params.id }, 
        { $push: { exercises: req.body } }, { new: true })
        .then(workouts => {
            res.json(workouts);
        })
});

// createWorkout
app.post("/api/workouts/", async (req, res) => {
    const workouts = await Workout.create(req.body);
    console.log(req.body);
    res.json(workouts);
});

// getWorkoutsInRange
app.get("/api/workouts/range", async (req, res) => {
    const range = await Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: '$exercises.duration' },
        },
        $limit: 7,
    }]);
    console.log(range);
    res.json(range);
});

module.exports = app;