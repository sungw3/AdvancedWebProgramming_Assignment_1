const express = require('express');
const app = express();
const vehicleRoutes = require('./routes/vehicleRoutes');

app.use(express.json()); // for parsing application/json
app.use('/vehicles', vehicleRoutes); // connecting routes

module.exports = app;