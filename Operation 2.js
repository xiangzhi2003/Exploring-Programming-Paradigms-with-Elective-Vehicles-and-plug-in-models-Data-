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
// OPERATION 2: List Models by Manufacturer
// Purpose: Find and print all unique model names for a specific manufacturer
// Input: data array, manufacturer name (string)
// Output: prints unique model names to console with numbered list
// ============================================================
// Import readline module for user input
const readline = require("readline");

// Create readline interface for interactive input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function listModelsByManufacturer(data, manufacturer) {
  // Initialize empty array to store unique models
  let models = [];

  // Use for loop to iterate through all vehicles
  for (let i = 0; i < data.length; i++) {
    // Check if manufacturer matches
    if (data[i].Manufacturer === manufacturer) {
      // Check if model already exists in array (avoid duplicates)
      let found = false;
      for (let j = 0; j < models.length; j++) {
        if (models[j] === data[i].Model) {
          found = true;
        }
      }
      // Only add if not found (unique)
      if (found === false) {
        models[models.length] = data[i].Model;
      }
    }
  }

  // Print with numbered list
  console.log("Manufacturer: " + manufacturer);
  console.log("Models:");
  for (let k = 0; k < models.length; k++) {
    console.log("  " + (k + 1) + ". " + models[k]);
  }
}

// Test Operation 2 - Interactive user input
console.log(
  "\n===== OPERATION 2: Search and display the list of models available from a specific manufacturing company. ====="
);
console.log("Please enter a manufacturer from the following list:");
console.log(uniqueManufacturers);

rl.question("Enter manufacturer : ", function (answer) {
  listModelsByManufacturer(vehicles, answer);
  rl.close();
});
