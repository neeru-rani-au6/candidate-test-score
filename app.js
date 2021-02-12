var createError = require("http-errors");
var express = require("express");
var path = require("path");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const morgan = require("morgan");

const routes = require("./routes");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use("/api", routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
const PORT = process.env.PORT || 5000;
mongoose
  .connect("mongodb://127.0.0.1:27017/candidateScore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT);
    console.log("server Started");
  })
  .catch((err) => {
    console.log("Error in connecting to DataBase", err.message);
  });
