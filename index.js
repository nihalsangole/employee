const express = require('express');
const app = express();
const EmployeeRouter = require('./routes/employee');
const mongoose = require('mongoose');
const PORT = 5050;
const DB = 'mongodb://localhost:27017/employee';
const multer = require('multer');
const path = require('path');
mongoose
  .connect(DB)
  .then(() => {
    console.log('DB connection successful');
  })
  .catch((err) => {
    console.log(err);
  });
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.use(express.json());
app.use('/api/employee', EmployeeRouter);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

//upload image
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    return res.status(200).json('File uploded successfully');
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log('backend server is running');
});
