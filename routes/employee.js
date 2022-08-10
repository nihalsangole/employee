const router = require('express').Router();
const Employee = require('../models/Employee');
const emailvalidator = require('email-validator');
const { validate } = require('../models/Employee');


console.log(emailvalidator.validate('nihalsangole@gmail.com'));

router.get('/', async (req, res) => {
  try {
    res.status(200).json('hello freinds');
  } catch (err) {}
});
// create Employee
router.post('/register', async (req, res) => {
  if (emailvalidator.validate(req.body.email) == false) {
    res.status(200).json('enter corret email');
  } else {
    const newEmployee = new Employee({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      mobileNO: req.body.mobileNo,
    });
    try {
      const savedEmployee = await newEmployee.save();
      res.status(200).json(savedEmployee);
    } catch (err) {
      res.status(500).json(err);
    }
  }
});
// update user

router.put('/:id', async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedEmployee);
  } catch (err) {
    res.status.json(err);
  }
});

//delete user

router.delete('/:id', async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(200).json('Employee has been deleted...');
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
