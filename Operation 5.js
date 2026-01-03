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

  // Use for loop to filter only 2025 vehicles
  for (let i = 0; i < data.length; i++) {
    if (data[i].Year === 2025) {
      vehicles2025[vehicles2025.length] = data[i];
    }
  }

  // Step 2: Sort by Safety_Rating using bubble sort (descending order)
  for (let i = 0; i < vehicles2025.length - 1; i++) {
    for (let j = 0; j < vehicles2025.length - 1 - i; j++) {
      // Compare safety ratings - swap if current is less than next
      if (vehicles2025[j].Safety_Rating < vehicles2025[j + 1].Safety_Rating) {
        // Swap vehicles
        let temp = vehicles2025[j];
        vehicles2025[j] = vehicles2025[j + 1];
        vehicles2025[j + 1] = temp;
      }
    }
  }

  // Step 3: Display top 5 safest vehicles
  console.log("Top 5 Safest 2025 Vehicles:");

  // Determine how many to display (max 5 or less if fewer vehicles)
  let displayCount = 5;
  if (vehicles2025.length < 5) {
    displayCount = vehicles2025.length;
  }

  // Display the top vehicles with ranking
  for (let k = 0; k < displayCount; k++) {
    console.log(
      "  " +
        (k + 1) +
        ". " +
        vehicles2025[k].Manufacturer +
        " " +
        vehicles2025[k].Model +
        " - Safety Rating: " +
        vehicles2025[k].Safety_Rating
    );
  }
}
