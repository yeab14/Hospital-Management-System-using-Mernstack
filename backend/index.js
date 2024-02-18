// index.js

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Import MongoDB models

// Import routes
const doctorRoutes = require('./routes/doctorRoutes');
const patientRoutes = require('./routes/patientRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const authRoutes = require('./routes/authRoutes');

// Initialize Express app
const app = express();

// Define port
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/hospital_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  // Start server after successfully connecting to MongoDB
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api', [doctorRoutes, patientRoutes, appointmentRoutes]);
app.use('/api/auth', authRoutes);



