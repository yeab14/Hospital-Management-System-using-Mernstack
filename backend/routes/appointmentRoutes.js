const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// Routes for appointments
router.post('/appointments', appointmentController.createAppointment);
router.get('/appointments/:id', appointmentController.getAppointmentById);
router.put('/appointments/:id', appointmentController.updateAppointment);
router.delete('/appointments/:id', appointmentController.deleteAppointment);

module.exports = router;

