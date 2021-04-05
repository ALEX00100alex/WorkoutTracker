const express = require("express");
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

mongoose.connection.on('error', (err) =>
  console.log(`error in mongoose conneciton: ${err.message}`)
);

app.listen(3010, () => {
    console.log("App running on port 3010!");
  });

  module.exports = app;