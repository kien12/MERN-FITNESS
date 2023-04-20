const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../../models/Users.js");

const router = express.Router();

router.post("/register", async (req, res) => {
  const {username, password } = req.body;

  const user = await UserModel.findOne({ username });

  res.json(user);
});

router.post("/login");

module.exports = router;