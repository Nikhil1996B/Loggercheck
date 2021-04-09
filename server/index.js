const express = require("express");
var cors = require("cors");

const logger = require("./logger");

const app = express();

// enable cors for now
app.options("*", cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.post("/logger", (req, res, next) => {
  let logdata = req.body;
  logger.info(logdata);
  res.status(200).send({ msg: "logging successful" });
});

app.get("/", (req, res, next) => {
  res.status(200).send("Logger initialised");
});

app.listen(7000, () => {
  console.log("listening on port 7000");
});
