// ============================================================
// APLC Javascript Assignment Phase 1 - Imperative Programming Paradigm
// ============================================================
// Student: [Chiang Xiang Zhi]
// Student ID: [TP077553]
// Date: [30th December 2025]
//
// Description: This program processes Electric Vehicle data
// using ONLY imperative programming constructs:
// - for/while loops
// - if/else statements
// - mutable variables (let/var)
//
// PROHIBITED: .map(), .filter(), .reduce(), .find(), .forEach(), .sort()
// ============================================================

// Import the file system module for reading files
const fs = require('fs');

// Read the JSON file from the file system
// Using synchronous read for simplicity
const rawData = fs.readFileSync('electric_vehicles_dataset.json', 'utf8');

// Parse the JSON string into a JavaScript array of objects
const vehicles = JSON.parse(rawData);

// Verify data loaded successfully
console.log('='.repeat(50));
console.log('Data loaded successfully!');
console.log('Total vehicles in dataset:', vehicles.length);
console.log('='.repeat(50));

// ============================================================
// OPERATION 1: Count Vehicles by Manufacturer
// Purpose: Count how many vehicles belong to a specific manufacturer
// Input: data array, manufacturer name (string)
// Output: count (number)
// ============================================================
function countVehiclesByManufacturer(data, manufacturer) {
    // TODO: Implement counting logic
}
