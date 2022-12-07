const express = require("express");
const connect = require("./db/db");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
const ipRouter = require("./routes/ip.routes");

app.use(cors());

app.use(express.json());

app.use("/ip", ipRouter);

app.get("/", (req, res) => {
  res.send("welcome to Ip chek API");
});

app.listen(PORT, async () => {
  await connect();
  console.log("server started");
});
