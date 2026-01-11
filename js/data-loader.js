// =============================================================================
// DATA-LOADER.JS - Data Loading and Initialization
// =============================================================================
// This file contains functions for loading data from JSON,
// extracting unique values, and populating dropdown menus.
// =============================================================================

/**
 * extractUniqueManufacturers - Extract unique manufacturer names from vehicles array
 * Uses nested for loop to find unique values, then bubble sort to sort alphabetically
 * Populates: uniqueManufacturers global array
 */
function extractUniqueManufacturers() {
  uniqueManufacturers = [];

  // Loop through all vehicles to find unique manufacturers
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

  // Sort manufacturers alphabetically using bubble sort
  for (let i = 0; i < uniqueManufacturers.length - 1; i++) {
    for (let j = 0; j < uniqueManufacturers.length - 1 - i; j++) {
      if (uniqueManufacturers[j] > uniqueManufacturers[j + 1]) {
        let temp = uniqueManufacturers[j];
        uniqueManufacturers[j] = uniqueManufacturers[j + 1];
        uniqueManufacturers[j + 1] = temp;
      }
    }
  }
}

/**
 * extractUniqueChargingTypes - Extract unique charging types from vehicles array
 * Uses nested for loop to find unique values, then bubble sort to sort alphabetically
 * Populates: uniqueChargingTypes global array
 */
function extractUniqueChargingTypes() {
  uniqueChargingTypes = [];

  // Loop through all vehicles to find unique charging types
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

  // Sort charging types alphabetically using bubble sort
  for (let i = 0; i < uniqueChargingTypes.length - 1; i++) {
    for (let j = 0; j < uniqueChargingTypes.length - 1 - i; j++) {
      if (uniqueChargingTypes[j] > uniqueChargingTypes[j + 1]) {
        let temp = uniqueChargingTypes[j];
        uniqueChargingTypes[j] = uniqueChargingTypes[j + 1];
        uniqueChargingTypes[j + 1] = temp;
      }
    }
  }
}

/**
 * populateManufacturerDropdowns - Fill dropdown menu with manufacturer options
 * Populates dropdown for Operation 1 (combined with 2 and 3)
 */
function populateManufacturerDropdowns() {
  let manufacturerSelect = document.getElementById("op1Manufacturer");
  if (manufacturerSelect !== null) {
    for (let i = 0; i < uniqueManufacturers.length; i++) {
      let option = document.createElement("option");
      option.value = uniqueManufacturers[i];
      option.textContent = uniqueManufacturers[i];
      manufacturerSelect.appendChild(option);
    }
  }
}

/**
 * populateChargingTypeDropdown - Fill dropdown menu with charging type options
 * Populates dropdown for Operation 4
 */
function populateChargingTypeDropdown() {
  let chargingSelect = document.getElementById("op4ChargingType");
  for (let i = 0; i < uniqueChargingTypes.length; i++) {
    let option = document.createElement("option");
    option.value = uniqueChargingTypes[i];
    option.textContent = uniqueChargingTypes[i];
    chargingSelect.appendChild(option);
  }
}

/**
 * loadData - Fetch JSON data and initialize the application
 * Loads vehicle data from JSON file, extracts unique values, and sets up UI
 */
function loadData() {
  fetch("electric_vehicles_dataset.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Store vehicle data in global array
      vehicles = data;

      // Extract unique values for dropdowns
      extractUniqueManufacturers();
      extractUniqueChargingTypes();

      // Hide loading message and show main content
      document.getElementById("loadingMessage").style.display = "none";
      document.getElementById("mainContent").style.display = "block";

      // Count unique models for statistics
      let uniqueModels = [];
      for (let i = 0; i < vehicles.length; i++) {
        let found = false;
        for (let j = 0; j < uniqueModels.length; j++) {
          if (uniqueModels[j] === vehicles[i].Model) {
            found = true;
          }
        }
        if (found === false) {
          uniqueModels[uniqueModels.length] = vehicles[i].Model;
        }
      }

      // Update statistics in header
      document.getElementById("totalVehicles").textContent =
        vehicles.length.toLocaleString();
      document.getElementById("totalManufacturers").textContent =
        uniqueManufacturers.length;
      document.getElementById("totalModels").textContent =
        uniqueModels.length;

      // Populate dropdown menus
      populateManufacturerDropdowns();
      populateChargingTypeDropdown();
    })
    .catch(function (error) {
      // Show error message if data loading fails
      document.getElementById("loadingMessage").innerHTML =
        '<div class="error-box"><div class="error-icon">⚠️</div>Error loading data. Please ensure the JSON file is in the same directory.</div>';
    });
}
