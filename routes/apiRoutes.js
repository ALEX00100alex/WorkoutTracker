const Workout = require('../models/workout');
const mongoose = require('mongoose');
const app = require("express").Router();


// getLastWorkout
app.get("/api/workouts", async (req, res) => {
    console.log("Hello");
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
   try {
    console.log("range");
    const range = await Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: '$exercises.duration' },
        },
    }]);
    console.log(range);
    res.json(range);
} catch (err) {
    res.status(400).json( {message: err})
}
});

module.exports = app;