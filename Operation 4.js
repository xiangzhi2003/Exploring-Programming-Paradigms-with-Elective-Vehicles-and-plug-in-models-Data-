// Import the file system module for reading files
const fs = require("fs");

// Read the JSON file from the file system
// Using synchronous read for simplicity
const rawData = fs.readFileSync("electric_vehicles_dataset.json", "utf8");

// Parse the JSON string into a JavaScript array of objects
const vehicles = JSON.parse(rawData);

// List all unique charging types from the JSON file
let uniqueChargingTypes = [];
for (let i = 0; i < vehicles.length; i++) {
  let found = false;
  for (let j = 0; j < uniqueChargingTypes.length; j++) {
    if (uniqueChargingTypes[j] === vehicles[i].Charging_Type) {
      found = true;
    }
  }
  if (found === false) {
    uniqueChargingTypes[uniqueChargingTypes.length] = vehicles[i].Charging_Type;
  }
}

console.log("Unique Charging Types:", uniqueChargingTypes);

// ============================================================
// OPERATION 4: Calculate Average Charge Time by Charging Type
// Purpose: Calculate the average charging time for a specific charging type
// Input: data array, charging type (string)
// Output: prints average charge time to console
// ============================================================

function calculateAverageChargeTime(data, chargingType) {
  // Initialize variables to track total charge time and count
  let totalChargeTime = 0;
  let count = 0;

  // TODO: Add loop logic to calculate average
}
