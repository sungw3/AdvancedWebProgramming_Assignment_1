const Car = require('../models/Car');
const Bike = require('../models/Bike');
const Truck = require('../models/Truck');
let vehicles = require('../data/vehicleData');

// Add a vehicle
exports.addVehicle = (req, res) => {
    // Vehicle is defined by the client as either 'Car', 'Bike', or 'Truck'
    const { type, id, brand, price, extraFeature } = req.body;
    let newVehicle;

    if (type === 'Car') {
        newVehicle = new Car(id, brand, price, extraFeature);
    } else if (type === 'Bike') {
        newVehicle = new Bike(id, brand, price, extraFeature);
    } else if (type === 'Truck') {
        newVehicle = new Truck(id, brand, price, extraFeature);
    } else {
        return res.json({ message: "Choose a type from Car, Bike, Truck." });
    }

    vehicles.push(newVehicle);
    res.json({ message: "Vehicle added successfully!", vehicle: newVehicle });
};

// Retrieve all vehicles
exports.getAllVehicles = (req, res) => {
    res.json(vehicles);
};

// Retrieve one vehicle by ID
exports.getVehicleById = (req, res) => {
    const vehicleId = req.params.id;
    const vehicle = vehicles.find(v => v.id == vehicleId);
    
    if (vehicle) {
        res.json(vehicle);
    } else {
        res.json({ message: "Vehicle not found." });
    }
};

// Delete a vehicle by ID
exports.deleteVehicle = (req, res) => {
    const vehicleId = req.params.id;
    const initialLength = vehicles.length;
    
    vehicles = vehicles.filter(v => v.id != vehicleId);
    
    if (vehicles.length < initialLength) {
        res.json({ message: "Vehicle deleted successfully!" });
    } else {
        res.json({ message: "No vehicle found to delete." });
    }
};