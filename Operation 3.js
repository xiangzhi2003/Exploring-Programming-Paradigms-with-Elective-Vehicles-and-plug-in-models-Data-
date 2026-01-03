// Import the file system module for reading files
const fs = require("fs");

// Read the JSON file from the file system
// Using synchronous read for simplicity
const rawData = fs.readFileSync("electric_vehicles_dataset.json", "utf8");

// Parse the JSON string into a JavaScript array of objects
const vehicles = JSON.parse(rawData);

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

// ============================================================
// OPERATION 3: Find Longest Range Model per Manufacturer
// Purpose: Find the model with the longest range (km) for a specific manufacturer
// Input: data array, manufacturer name (string)
// Output: prints model name and range to console
// ============================================================

// Import readline module for user input
const readline = require("readline");

// Create readline interface for interactive input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findLongestRangeModel(data, manufacturer) {
  // Initialize variables to track the longest range model
  let longestRangeModel = "";
  let longestRange = 0;

  // Use for loop to iterate through all vehicles
  for (let i = 0; i < data.length; i++) {
    // Check if manufacturer matches
    if (data[i].Manufacturer === manufacturer) {
      // Check if current vehicle has longer range
      if (data[i].Range_km > longestRange) {
        longestRange = data[i].Range_km;
        longestRangeModel = data[i].Model;
      }
    }
  }

  // Print result
  if (longestRangeModel === "") {
    console.log("Manufacturer: " + manufacturer);
    console.log("Output: No vehicles found");
  } else {
    console.log("Manufacturer: " + manufacturer);
    console.log("Longest Range Model: " + longestRangeModel);
    console.log("Range: " + longestRange + " km");
  }
}

// Test Operation 3 - Interactive user input
console.log(
  "\n===== OPERATION 3: Find the model with the longest range (km) for a specific manufacturer. ====="
);
console.log("Please enter a manufacturer from the following list:");
console.log(uniqueManufacturers);

rl.question("Enter manufacturer: ", function (answer) {
  findLongestRangeModel(vehicles, answer);
  rl.close();
});
