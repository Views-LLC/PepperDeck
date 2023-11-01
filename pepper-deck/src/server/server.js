const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./routes/Router");
const SignupRouter = require("./routes/SignupRouter");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //for form data
app.use(cookieParser());

//Router to serve signup
app.use("/userAccess", SignupRouter);

// NEED TO SET THIS UP
// Router to serve middleware & response
app.use("/route", router);

// Global error handler
app.use((req, res) =>
  res.status(404).send("Status Code 404: Page not found...")
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred in global error handler" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

module.exports = app.listen(PORT, () =>
  console.log("Listening in on PORT: ", PORT)
);
