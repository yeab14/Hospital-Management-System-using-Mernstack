const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Routes for patients
router.post('/patients', patientController.createPatient);
router.get('/patients/:id', patientController.getPatientById);
router.put('/patients/:id', patientController.updatePatient);
router.delete('/patients/:id', patientController.deletePatient);

module.exports = router;
