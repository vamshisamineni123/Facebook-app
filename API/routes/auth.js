const router = require("express").Router();
const User = require("../models/User");

router.get("/register", async (req, res) => {
  const user = await new User({
    username: "john",
    email: "vamshi@gmail.com",
    password: "12345"
  });


  await user.save();
  res.send("ok");
});
router.post("/",(req,res)=>{
    res.send("i am dng great")
  })

module.exports=router
