const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/createuser", async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      location: req.body.location,
    });
    res.send("user created successfully");
  } catch (error) {
    res.send(error);
  }
});

router.post("/login", async (req, res) => {
  let email = req.body.email;
  try {
    let userData = await User.findOne({ email });

    if (!userData) {
      return res.status(400).json({ errors: "email is not correct" });
    }
    if (req.body.password !== userData.password) {
      return res.status(400).json({ errors: "password is not correct" });
    }
    return res.send(userData);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
