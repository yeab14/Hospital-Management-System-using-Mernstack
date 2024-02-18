// models/user.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'doctor', 'receptionist'], default: 'doctor' },
  // You can add more fields as needed
});

module.exports = mongoose.model('User', userSchema);
