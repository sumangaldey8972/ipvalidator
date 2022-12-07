const express = require("express");
const rateLimiterUsingThirdParty = require("../middlewaire/ip.middlewaire");
const ipModel = require("../model/ip.models");

const app = express.Router();

app.use(rateLimiterUsingThirdParty);

let count = 0;
app.get("/", async (req, res) => {
  try {
    count = count + 1;
    if (count === 100) {
      res.send({
        message: "You have exceeded the 100 requests in 24 hrs limit!",
      });
    } else {
      let items = await ipModel.find();
      res.send({ data: items });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/", async (req, res) => {
  try {
    count = count + 1;
    console.log(count);
    if (count === 100) {
      res.send({
        message: "You have exceeded the 100 requests in 24 hrs limit!",
      });
    } else {
      let newIp = req.body;
      await ipModel.create(newIp);
      res.send({ data: newIp });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;
