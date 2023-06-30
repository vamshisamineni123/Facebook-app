const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('api/posts', postRoute);
app.use('/api/categories', categoryRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});