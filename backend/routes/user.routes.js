const express = require("express");
const userModel = require("../model/user.model");

const app = express.Router();

app.post("/signup", async (req, res) => {
  try {
    let { email } = req.body;
    let user = await userModel.findOne({ email });
    if (user) {
      return res.status(401).send({ message: "Email Already Exist" });
    } else {
      let newUser = await userModel.create(req.body);
      return res
        .status(200)
        .send({ user: newUser, message: "SignUp Successfull" });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await userModel.findOne({email, password});
    if (user) {
      return res.status(200).send({ message: "Login Successfull" });
    } else {
      return res.status(401).send({ message: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;
