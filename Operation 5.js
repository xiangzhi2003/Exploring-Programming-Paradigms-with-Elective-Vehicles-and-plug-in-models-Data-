// Import the file system module for reading files
const fs = require("fs");

// Read the JSON file from the file system
// Using synchronous read for simplicity
const rawData = fs.readFileSync("electric_vehicles_dataset.json", "utf8");

// Parse the JSON string into a JavaScript array of objects
const vehicles = JSON.parse(rawData);

// ============================================================
// OPERATION 5: Rank Top 5 Safest 2025 Vehicles
// Purpose: Find and rank the top 5 vehicles from 2025 with highest safety rating
// Input: data array
// Output: prints top 5 safest 2025 vehicles to console
// ============================================================

function findTopSafest2025Vehicles(data) {
  // Step 1: Filter vehicles from year 2025
  let vehicles2025 = [];

  // TODO: Add loop to filter 2025 vehicles
}
