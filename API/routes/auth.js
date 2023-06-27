const router = require("express").Router();
const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
  const user = new User({
    username: "vamshi",
    email: "vamshi@emial.com",
    password: "abc",
  });

  // try {
    await user.save();
    res.send("ok")
  //   res.status(200).json(savedUser);
  // } catch (error) {
  //   res.status(500).json({ message: "Failed to save user", error });
  // }
});

module.exports = router;
