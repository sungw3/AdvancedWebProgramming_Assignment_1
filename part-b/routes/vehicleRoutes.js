const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.post('/add', vehicleController.addVehicle);
router.get('/viewall', vehicleController.getAllVehicles);
router.get('/view/:id', vehicleController.getVehicleById);
router.delete('/delete/:id', vehicleController.deleteVehicle);

module.exports = router;