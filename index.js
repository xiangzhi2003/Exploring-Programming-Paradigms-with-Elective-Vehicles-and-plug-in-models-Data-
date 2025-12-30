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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ============================================================
// OPERATION 1: Display the total number of vehicles produced by each manufacturing company.
// ============================================================
function countVehiclesByManufacturer(data, manufacturer) {
  // Initialize counter variable to zero
  let count = 0;

  // Use for loop to iterate through each vehicle in the data array
  for (let i = 0; i < data.length; i++) {
    // Check if current vehicle's Manufacturer matches the input
    if (data[i].Manufacturer === manufacturer) {
      // Increment counter when match is found
      count = count + 1;
    }
  }

  // Return the final count
  return count;
}

// Test Operation 1 - Display count for ALL manufacturers (A-Z order)
console.log("\n===== OPERATION 1: Display the total number of vehicles produced by each manufacturing company. =====");
console.log("Input: Acura ; Output:", countVehiclesByManufacturer(vehicles, "Acura"));
console.log("Input: Audi ; Output:", countVehiclesByManufacturer(vehicles, "Audi"));
console.log("Input: BMW ; Output:", countVehiclesByManufacturer(vehicles, "BMW"));
console.log("Input: BYD ; Output:", countVehiclesByManufacturer(vehicles, "BYD"));
console.log("Input: Cadillac ; Output:", countVehiclesByManufacturer(vehicles, "Cadillac"));
console.log("Input: Canoo ; Output:", countVehiclesByManufacturer(vehicles, "Canoo"));
console.log("Input: Changan ; Output:", countVehiclesByManufacturer(vehicles, "Changan"));
console.log("Input: Chevrolet ; Output:", countVehiclesByManufacturer(vehicles, "Chevrolet"));
console.log("Input: Citroen ; Output:", countVehiclesByManufacturer(vehicles, "Citroen"));
console.log("Input: Dacia ; Output:", countVehiclesByManufacturer(vehicles, "Dacia"));
console.log(
  "Input: Faraday Future ; Output:",
  countVehiclesByManufacturer(vehicles, "Faraday Future")
);
console.log("Input: Ferrari ; Output:", countVehiclesByManufacturer(vehicles, "Ferrari"));
console.log("Input: Fisker ; Output:", countVehiclesByManufacturer(vehicles, "Fisker"));
console.log("Input: Ford ; Output:", countVehiclesByManufacturer(vehicles, "Ford"));
console.log("Input: Geely ; Output:", countVehiclesByManufacturer(vehicles, "Geely"));
console.log("Input: Genesis ; Output:", countVehiclesByManufacturer(vehicles, "Genesis"));
console.log("Input: GMC ; Output:", countVehiclesByManufacturer(vehicles, "GMC"));
console.log(
  "Input: Great Wall Motors ; Output:",
  countVehiclesByManufacturer(vehicles, "Great Wall Motors")
);
console.log("Input: Honda ; Output:", countVehiclesByManufacturer(vehicles, "Honda"));
console.log("Input: Hyundai ; Output:", countVehiclesByManufacturer(vehicles, "Hyundai"));
console.log("Input: Jaguar ; Output:", countVehiclesByManufacturer(vehicles, "Jaguar"));
console.log("Input: Jeep ; Output:", countVehiclesByManufacturer(vehicles, "Jeep"));
console.log("Input: Kia ; Output:", countVehiclesByManufacturer(vehicles, "Kia"));
console.log(
  "Input: Lamborghini ; Output:",
  countVehiclesByManufacturer(vehicles, "Lamborghini")
);
console.log("Input: Li Auto ; Output:", countVehiclesByManufacturer(vehicles, "Li Auto"));
console.log("Input: Lotus ; Output:", countVehiclesByManufacturer(vehicles, "Lotus"));
console.log(
  "Input: Lucid Motors ; Output:",
  countVehiclesByManufacturer(vehicles, "Lucid Motors")
);
console.log("Input: Mahindra ; Output:", countVehiclesByManufacturer(vehicles, "Mahindra"));
console.log("Input: Maserati ; Output:", countVehiclesByManufacturer(vehicles, "Maserati"));
console.log("Input: Mazda ; Output:", countVehiclesByManufacturer(vehicles, "Mazda"));
console.log(
  "Input: Mercedes-Benz ; Output:",
  countVehiclesByManufacturer(vehicles, "Mercedes-Benz")
);
console.log("Input: MG ; Output:", countVehiclesByManufacturer(vehicles, "MG"));
console.log("Input: Mini ; Output:", countVehiclesByManufacturer(vehicles, "Mini"));
console.log("Input: NIO ; Output:", countVehiclesByManufacturer(vehicles, "NIO"));
console.log("Input: Nissan ; Output:", countVehiclesByManufacturer(vehicles, "Nissan"));
console.log("Input: Opel ; Output:", countVehiclesByManufacturer(vehicles, "Opel"));
console.log("Input: Peugeot ; Output:", countVehiclesByManufacturer(vehicles, "Peugeot"));
console.log(
  "Input: Pininfarina ; Output:",
  countVehiclesByManufacturer(vehicles, "Pininfarina")
);
console.log("Input: Polestar ; Output:", countVehiclesByManufacturer(vehicles, "Polestar"));
console.log("Input: Porsche ; Output:", countVehiclesByManufacturer(vehicles, "Porsche"));
console.log("Input: Renault ; Output:", countVehiclesByManufacturer(vehicles, "Renault"));
console.log("Input: Rimac ; Output:", countVehiclesByManufacturer(vehicles, "Rimac"));
console.log("Input: Rivian ; Output:", countVehiclesByManufacturer(vehicles, "Rivian"));
console.log("Input: Seat ; Output:", countVehiclesByManufacturer(vehicles, "Seat"));
console.log("Input: Skoda ; Output:", countVehiclesByManufacturer(vehicles, "Skoda"));
console.log("Input: Subaru ; Output:", countVehiclesByManufacturer(vehicles, "Subaru"));
console.log("Input: Tesla ; Output:", countVehiclesByManufacturer(vehicles, "Tesla"));
console.log("Input: Toyota ; Output:", countVehiclesByManufacturer(vehicles, "Toyota"));
console.log("Input: VinFast ; Output:", countVehiclesByManufacturer(vehicles, "VinFast"));
console.log(
  "Input: Volkswagen ; Output:",
  countVehiclesByManufacturer(vehicles, "Volkswagen")
);
console.log("Input: Volvo ; Output:", countVehiclesByManufacturer(vehicles, "Volvo"));
console.log("Input: XPeng ; Output:", countVehiclesByManufacturer(vehicles, "XPeng"));
console.log("Input: Zeekr ; Output:", countVehiclesByManufacturer(vehicles, "Zeekr"));

// ============================================================
// OPERATION 2: List Models by Manufacturer
// Purpose: Find and print all unique model names for a specific manufacturer
// Input: data array, manufacturer name (string)
// Output: prints unique model names to console with numbered list
// ============================================================
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
  console.log("Input: " + manufacturer + " ; Output:");
  for (let k = 0; k < models.length; k++) {
    console.log("  " + (k + 1) + ". " + models[k]);
  }
}

// Test Operation 2 - Display models for ALL manufacturers (A-Z order)
console.log("\n===== OPERATION 2: List Models by Manufacturer =====");
listModelsByManufacturer(vehicles, "Acura");
listModelsByManufacturer(vehicles, "Audi");
listModelsByManufacturer(vehicles, "BMW");
listModelsByManufacturer(vehicles, "BYD");
listModelsByManufacturer(vehicles, "Cadillac");
listModelsByManufacturer(vehicles, "Canoo");
listModelsByManufacturer(vehicles, "Changan");
listModelsByManufacturer(vehicles, "Chevrolet");
listModelsByManufacturer(vehicles, "Citroen");
listModelsByManufacturer(vehicles, "Dacia");
listModelsByManufacturer(vehicles, "Faraday Future");
listModelsByManufacturer(vehicles, "Ferrari");
listModelsByManufacturer(vehicles, "Fisker");
listModelsByManufacturer(vehicles, "Ford");
listModelsByManufacturer(vehicles, "Geely");
listModelsByManufacturer(vehicles, "Genesis");
listModelsByManufacturer(vehicles, "GMC");
listModelsByManufacturer(vehicles, "Great Wall Motors");
listModelsByManufacturer(vehicles, "Honda");
listModelsByManufacturer(vehicles, "Hyundai");
listModelsByManufacturer(vehicles, "Jaguar");
listModelsByManufacturer(vehicles, "Jeep");
listModelsByManufacturer(vehicles, "Kia");
listModelsByManufacturer(vehicles, "Lamborghini");
listModelsByManufacturer(vehicles, "Li Auto");
listModelsByManufacturer(vehicles, "Lotus");
listModelsByManufacturer(vehicles, "Lucid Motors");
listModelsByManufacturer(vehicles, "Mahindra");
listModelsByManufacturer(vehicles, "Maserati");
listModelsByManufacturer(vehicles, "Mazda");
listModelsByManufacturer(vehicles, "Mercedes-Benz");
listModelsByManufacturer(vehicles, "MG");
listModelsByManufacturer(vehicles, "Mini");
listModelsByManufacturer(vehicles, "NIO");
listModelsByManufacturer(vehicles, "Nissan");
listModelsByManufacturer(vehicles, "Opel");
listModelsByManufacturer(vehicles, "Peugeot");
listModelsByManufacturer(vehicles, "Pininfarina");
listModelsByManufacturer(vehicles, "Polestar");
listModelsByManufacturer(vehicles, "Porsche");
listModelsByManufacturer(vehicles, "Renault");
listModelsByManufacturer(vehicles, "Rimac");
listModelsByManufacturer(vehicles, "Rivian");
listModelsByManufacturer(vehicles, "Seat");
listModelsByManufacturer(vehicles, "Skoda");
listModelsByManufacturer(vehicles, "Subaru");
listModelsByManufacturer(vehicles, "Tesla");
listModelsByManufacturer(vehicles, "Toyota");
listModelsByManufacturer(vehicles, "VinFast");
listModelsByManufacturer(vehicles, "Volkswagen");
listModelsByManufacturer(vehicles, "Volvo");
listModelsByManufacturer(vehicles, "XPeng");
listModelsByManufacturer(vehicles, "Zeekr");
