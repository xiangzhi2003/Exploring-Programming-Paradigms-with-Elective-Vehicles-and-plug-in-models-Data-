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

  // Use for loop to iterate through all vehicles
  for (let i = 0; i < data.length; i++) {
    // Check if charging type matches
    if (data[i].Charging_Type === chargingType) {
      totalChargeTime = totalChargeTime + data[i].Charge_Time_hr;
      count = count + 1;
    }
  }

  // Calculate and print result
  if (count === 0) {
    console.log("Charging Type: " + chargingType);
    console.log("Output: No vehicles found with this charging type");
  } else {
    let averageChargeTime = totalChargeTime / count;
    console.log("Charging Type: " + chargingType);
    console.log("Number of Vehicles: " + count);
    console.log("Average Charge Time: " + averageChargeTime.toFixed(2) + " hours");
  }
}

// Import readline module for user input
const readline = require("readline");

// Create readline interface for interactive input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Test Operation 4 - Interactive user input
console.log(
  "\n===== OPERATION 4: Calculate the average charging time for a specific charging type. ====="
);
console.log("Please enter a charging type from the following list:");
console.log(uniqueChargingTypes);

rl.question("Enter charging type: ", function (answer) {
  calculateAverageChargeTime(vehicles, answer);
  rl.close();
});
