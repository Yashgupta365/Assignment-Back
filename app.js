const express = require("express");
const morgan = require("morgan");
const AppError = require("./utils/appError.js");
const newsRouter = require("./routes/newsRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

route = express.Router();

// 1) GLOBAL MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Body parser, reading data from body into req.body
app.use(express.json());

app.use((req, res, next) => {
  console.log("Midleware");
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.requestTime);
  next();
});

// 3) ROUTES
app.use("/api/v1/user", userRouter);
app.use("/api/v1/news", newsRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// app.use(globalErrorHandler);

module.exports = app;
