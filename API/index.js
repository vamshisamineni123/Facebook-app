const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
helmet=require('helmet')
//const userRoute= require("./routes/users");
const authRoute=require("./routes/auth");
const morgan = require('morgan');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => console.log(err));

 app.use(express.json())
app.use(helmet())
//app.use(morgan("common"))
//app.use("/api/user",userRoute)
app.use("/api/auth",authRoute)


  app.listen(3000, () => {
    
    console.log('Server is running on port 3000');
  });