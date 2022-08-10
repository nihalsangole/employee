const mongoose = require('mongoose');

const fullnameSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
});
const EmployeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    require: true,
  },
  mobileNO: {
    type: Number,
    require: true,
  },
  dateOfBirth: {
    type: Date,
    trim: true,
  },
  photoUrl: {
    type: String,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  professionalskills: {
    Communication: { type: Boolean, default: false },
    AbilityToWorkUnderPressure: { type: Boolean, default: false },
    DecisionMaking: { type: Boolean, default: false },
    TimeManagement: { type: Boolean, default: false },
    SelfMotivation: { type: Boolean, default: false },
    ConflictResolution: { type: Boolean, default: false },
    Leadership: { type: Boolean, default: false },
    Adaptability: { type: Boolean, default: false },
  },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
