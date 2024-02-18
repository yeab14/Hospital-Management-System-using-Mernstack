const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// Routes for doctors
router.post('/doctors', doctorController.createDoctor);
router.get('/doctors/:id', doctorController.getDoctorById);
router.put('/doctors/:id', doctorController.updateDoctor);
router.delete('/doctors/:id', doctorController.deleteDoctor);

module.exports = router;
