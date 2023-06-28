const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet=require('helmet')
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/catagories");
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
app.use(morgan("common"))
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/catagories", categoryRoute);



  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });