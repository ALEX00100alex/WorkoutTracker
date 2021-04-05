const express = require('express');
const app = express();
const path = require("path");


app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname + "/public/stats.html"));
});

app.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

module.exports = app;