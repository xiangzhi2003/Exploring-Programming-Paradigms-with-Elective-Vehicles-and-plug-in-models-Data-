// =============================================================================
// MAIN.JS - Global Variables and Application Entry Point
// =============================================================================
// This file contains global variables shared across all operation files
// and the window.onload handler that starts the application.
// =============================================================================

// vehicles: Array to store all vehicle data loaded from JSON file
let vehicles = [];

// uniqueManufacturers: Array to store unique manufacturer names
// Used by: Operation 1, 2, 3
let uniqueManufacturers = [];

// uniqueChargingTypes: Array to store unique charging type names
// Used by: Operation 4
let uniqueChargingTypes = [];

/**
 * window.onload - Start the application when page loads
 */
window.onload = function () {
  loadData();
};
