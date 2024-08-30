const express = require("express");
const mongoose = require("mongoose");
const alienRouter = require("./Routes/alien.js");

//const url = "mongodb://127.0.0.1:27017/LAB2";
//const url ="mongodb://127.0.0.1:27020,127.0.0.1:27021,127.0.0.1:27022/LAB2?replicaSet=m101";
const url =
  "mongodb+srv://marojuvarshitha28:9392982029@mycluster.ayc0p.mongodb.net/";
const app = express();

mongoose
  .connect(url, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());
app.use("/alien", alienRouter);
app.listen(9000, () => {
  console.log("Server started");
});
