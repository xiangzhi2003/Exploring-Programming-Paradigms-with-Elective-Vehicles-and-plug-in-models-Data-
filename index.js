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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Import the file system module for reading files
const fs = require("fs");

// Read the JSON file from the file system
// Using synchronous read for simplicity
const rawData = fs.readFileSync("electric_vehicles_dataset.json", "utf8");

// Parse the JSON string into a JavaScript array of objects
const vehicles = JSON.parse(rawData);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Verify data loaded successfully
console.log("=".repeat(50));
console.log("\nData loaded successfully!");
console.log("Total vehicles in dataset:", vehicles.length);

// List all unique manufacturers from the JSON file
let uniqueManufacturers = [];
for (let i = 0; i < vehicles.length; i++) {
  let found = false;
  for (let j = 0; j < uniqueManufacturers.length; j++) {
    if (uniqueManufacturers[j] === vehicles[i].Manufacturer) {
      found = true;
    }
  }
  if (found === false) {
    uniqueManufacturers[uniqueManufacturers.length] = vehicles[i].Manufacturer;
  }
}
console.log("\nManufacturers in dataset:", uniqueManufacturers, "\n");
console.log("=".repeat(50));

// Show all models for each manufacturer
console.log("\n===== All Models by Manufacturer =====\n");

for (let m = 0; m < uniqueManufacturers.length; m++) {
  let currentManufacturer = uniqueManufacturers[m];
  let models = [];

  // Find all unique models for this manufacturer
  for (let i = 0; i < vehicles.length; i++) {
    if (vehicles[i].Manufacturer === currentManufacturer) {
      // Check if model already exists
      let found = false;
      for (let j = 0; j < models.length; j++) {
        if (models[j] === vehicles[i].Model) {
          found = true;
        }
      }
      if (found === false) {
        models[models.length] = vehicles[i].Model;
      }
    }
  }

  // Display manufacturer and its models
  console.log(currentManufacturer + ":");
  for (let k = 0; k < models.length; k++) {
    console.log("  " + (k + 1) + ". " + models[k]);
  }
  console.log("");
}

console.log("=".repeat(50));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








