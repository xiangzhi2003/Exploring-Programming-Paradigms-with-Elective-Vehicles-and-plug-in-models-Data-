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
const fs = require("fs");

// Read the JSON file from the file system
// Using synchronous read for simplicity
const rawData = fs.readFileSync("electric_vehicles_dataset.json", "utf8");

// Parse the JSON string into a JavaScript array of objects
const vehicles = JSON.parse(rawData);

// Verify data loaded successfully
console.log("=".repeat(50));
console.log("Data loaded successfully!");
console.log("Total vehicles in dataset:", vehicles.length);
console.log("=".repeat(50));

// ============================================================
// OPERATION 1: Count Vehicles by Manufacturer or Model
// Purpose: Count how many vehicles match a specific manufacturer OR model name
// Input: data array, search term (string) - can be manufacturer or model name
// Output: count (number)
// ============================================================
function countVehicles(data, searchTerm) {
  // Initialize counter variable to zero
  let count = 0;

  // Use for loop to iterate through each vehicle in the data array
  for (let i = 0; i < data.length; i++) {
    // Check if current vehicle's Manufacturer OR Model matches the input
    if (data[i].Manufacturer === searchTerm || data[i].Model === searchTerm) {
      // Increment counter when match is found
      count = count + 1;
    }
  }

  // Return the final count
  return count;
}

// Test Operation 1 - Display count for ALL manufacturers
console.log("\n===== OPERATION 1: Count Vehicles by Manufacturer =====");
console.log("Input: Acura ; Output:", countVehicles(vehicles, "Acura"));
console.log("Input: Lamborghini ; Output:", countVehicles(vehicles, "Lamborghini"));
console.log("Input: NIO ; Output:", countVehicles(vehicles, "NIO"));
console.log("Input: Audi ; Output:", countVehicles(vehicles, "Audi"));
console.log("Input: XPeng ; Output:", countVehicles(vehicles, "XPeng"));
console.log("Input: Jeep ; Output:", countVehicles(vehicles, "Jeep"));
console.log("Input: Changan ; Output:", countVehicles(vehicles, "Changan"));
console.log("Input: Citroen ; Output:", countVehicles(vehicles, "Citroen"));
console.log("Input: Rimac ; Output:", countVehicles(vehicles, "Rimac"));
console.log("Input: Volkswagen ; Output:", countVehicles(vehicles, "Volkswagen"));
console.log("Input: Jaguar ; Output:", countVehicles(vehicles, "Jaguar"));
console.log("Input: Mini ; Output:", countVehicles(vehicles, "Mini"));
console.log("Input: BMW ; Output:", countVehicles(vehicles, "BMW"));
console.log("Input: Faraday Future ; Output:", countVehicles(vehicles, "Faraday Future"));
console.log("Input: Tesla ; Output:", countVehicles(vehicles, "Tesla"));
console.log("Input: Maserati ; Output:", countVehicles(vehicles, "Maserati"));
console.log("Input: Polestar ; Output:", countVehicles(vehicles, "Polestar"));
console.log("Input: Skoda ; Output:", countVehicles(vehicles, "Skoda"));
console.log("Input: Geely ; Output:", countVehicles(vehicles, "Geely"));
console.log("Input: Chevrolet ; Output:", countVehicles(vehicles, "Chevrolet"));
console.log("Input: Lucid Motors ; Output:", countVehicles(vehicles, "Lucid Motors"));
console.log("Input: Porsche ; Output:", countVehicles(vehicles, "Porsche"));
console.log("Input: Toyota ; Output:", countVehicles(vehicles, "Toyota"));
console.log("Input: Li Auto ; Output:", countVehicles(vehicles, "Li Auto"));
console.log("Input: Volvo ; Output:", countVehicles(vehicles, "Volvo"));
console.log("Input: Seat ; Output:", countVehicles(vehicles, "Seat"));
console.log("Input: MG ; Output:", countVehicles(vehicles, "MG"));
console.log("Input: Nissan ; Output:", countVehicles(vehicles, "Nissan"));
console.log("Input: Ford ; Output:", countVehicles(vehicles, "Ford"));
console.log("Input: GMC ; Output:", countVehicles(vehicles, "GMC"));
console.log("Input: Cadillac ; Output:", countVehicles(vehicles, "Cadillac"));
console.log("Input: VinFast ; Output:", countVehicles(vehicles, "VinFast"));
console.log("Input: Great Wall Motors ; Output:", countVehicles(vehicles, "Great Wall Motors"));
console.log("Input: Mazda ; Output:", countVehicles(vehicles, "Mazda"));
console.log("Input: Honda ; Output:", countVehicles(vehicles, "Honda"));
console.log("Input: Kia ; Output:", countVehicles(vehicles, "Kia"));
console.log("Input: BYD ; Output:", countVehicles(vehicles, "BYD"));
console.log("Input: Rivian ; Output:", countVehicles(vehicles, "Rivian"));
console.log("Input: Opel ; Output:", countVehicles(vehicles, "Opel"));
console.log("Input: Hyundai ; Output:", countVehicles(vehicles, "Hyundai"));
console.log("Input: Lotus ; Output:", countVehicles(vehicles, "Lotus"));
console.log("Input: Dacia ; Output:", countVehicles(vehicles, "Dacia"));
console.log("Input: Mercedes-Benz ; Output:", countVehicles(vehicles, "Mercedes-Benz"));
console.log("Input: Zeekr ; Output:", countVehicles(vehicles, "Zeekr"));
console.log("Input: Genesis ; Output:", countVehicles(vehicles, "Genesis"));
console.log("Input: Subaru ; Output:", countVehicles(vehicles, "Subaru"));
console.log("Input: Canoo ; Output:", countVehicles(vehicles, "Canoo"));
console.log("Input: Fisker ; Output:", countVehicles(vehicles, "Fisker"));
console.log("Input: Renault ; Output:", countVehicles(vehicles, "Renault"));
console.log("Input: Ferrari ; Output:", countVehicles(vehicles, "Ferrari"));
console.log("Input: Mahindra ; Output:", countVehicles(vehicles, "Mahindra"));
console.log("Input: Peugeot ; Output:", countVehicles(vehicles, "Peugeot"));
console.log("Input: Pininfarina ; Output:", countVehicles(vehicles, "Pininfarina"));
