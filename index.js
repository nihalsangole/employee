const express = require('express');
const app = express();
const EmployeeRouter = require('./routes/employee');
const mongoose = require('mongoose');
const PORT = 5050;
const DB = 'mongodb://localhost:27017/employee';
mongoose
  .connect(DB)
  .then(() => {
    console.log('DB connection successful');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use('/api/employee', EmployeeRouter);

app.listen(PORT, () => {
  console.log('backend server is running');
});
