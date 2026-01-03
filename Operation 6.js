// Import the file system module for reading files
const fs = require("fs");

// Read the JSON file from the file system
// Using synchronous read for simplicity
const rawData = fs.readFileSync("electric_vehicles_dataset.json", "utf8");

// Parse the JSON string into a JavaScript array of objects
const vehicles = JSON.parse(rawData);

// ============================================================
// OPERATION 6: Find Best Selling EV in 2024
// Purpose: Find the vehicle with the highest Units_Sold_2024
// Input: data array
// Output: prints best selling vehicle details to console
// ============================================================

function findBestSellingEV2024(data) {
  // Initialize variables to track best selling vehicle
  let bestSellingVehicle = null;
  let highestSales = 0;

  // Use for loop to find vehicle with highest sales
  for (let i = 0; i < data.length; i++) {
    if (data[i].Units_Sold_2024 > highestSales) {
      highestSales = data[i].Units_Sold_2024;
      bestSellingVehicle = data[i];
    }
  }

  // Display the best selling vehicle
  if (bestSellingVehicle === null) {
    console.log("No vehicles found in dataset");
  } else {
    console.log("Best Selling EV in 2024:");
    console.log("  Manufacturer: " + bestSellingVehicle.Manufacturer);
    console.log("  Model: " + bestSellingVehicle.Model);
    console.log("  Units Sold: " + bestSellingVehicle.Units_Sold_2024);
    console.log("  Year: " + bestSellingVehicle.Year);
    console.log("  Price: $" + bestSellingVehicle.Price_USD);
  }
}
