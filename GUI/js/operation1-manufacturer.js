// =============================================================================
// OPERATION1-MANUFACTURER.JS - Operations 1, 2, 3 (Manufacturer-based)
// =============================================================================
// Operation 1: Display total number of vehicles by manufacturer
// Operation 2: List models by manufacturer
// Operation 3: Find longest range model for manufacturer
// =============================================================================


// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * countVehiclesByManufacturer - Count how many vehicles belong to a specific manufacturer
 * @param {Array} data - Array of vehicle objects
 * @param {string} manufacturer - Manufacturer name to count
 * @returns {number} - Count of vehicles for that manufacturer
 */
function countVehiclesByManufacturer(data, manufacturer) {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].Manufacturer === manufacturer) {
      count = count + 1;
    }
  }
  return count;
}

/**
 * getAllManufacturerCounts - Get vehicle counts for all manufacturers
 * @param {Array} data - Array of vehicle objects
 * @returns {Array} - Array of objects with manufacturer and count, sorted by count descending
 */
function getAllManufacturerCounts(data) {
  let results = [];

  // Count vehicles for each manufacturer
  for (let m = 0; m < uniqueManufacturers.length; m++) {
    let count = countVehiclesByManufacturer(data, uniqueManufacturers[m]);
    results[results.length] = {
      manufacturer: uniqueManufacturers[m],
      count: count,
    };
  }

  // Sort by count descending using bubble sort
  for (let i = 0; i < results.length - 1; i++) {
    for (let j = 0; j < results.length - 1 - i; j++) {
      if (results[j].count < results[j + 1].count) {
        let temp = results[j];
        results[j] = results[j + 1];
        results[j + 1] = temp;
      }
    }
  }

  return results;
}

/**
 * getUniqueModels - Get all unique model names for a specific manufacturer
 * @param {Array} data - Array of vehicle objects
 * @param {string} manufacturer - Manufacturer name to filter by
 * @returns {Array} - Array of unique model names sorted alphabetically
 */
function getUniqueModels(data, manufacturer) {
  let models = [];

  // Find all unique models for this manufacturer
  for (let i = 0; i < data.length; i++) {
    if (data[i].Manufacturer === manufacturer) {
      let found = false;
      for (let j = 0; j < models.length; j++) {
        if (models[j] === data[i].Model) {
          found = true;
        }
      }
      if (found === false) {
        models[models.length] = data[i].Model;
      }
    }
  }

  // Sort alphabetically using bubble sort
  for (let i = 0; i < models.length - 1; i++) {
    for (let j = 0; j < models.length - 1 - i; j++) {
      if (models[j] > models[j + 1]) {
        let temp = models[j];
        models[j] = models[j + 1];
        models[j + 1] = temp;
      }
    }
  }

  return models;
}

/**
 * findLongestRangeVehicle - Find vehicle with longest range for a manufacturer
 * @param {Array} data - Array of vehicle objects
 * @param {string} manufacturer - Manufacturer name to filter by
 * @returns {Object|null} - Vehicle object with longest Range_km, or null if not found
 */
function findLongestRangeVehicle(data, manufacturer) {
  let bestVehicle = null;
  let longestRange = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].Manufacturer === manufacturer) {
      if (data[i].Range_km > longestRange) {
        longestRange = data[i].Range_km;
        bestVehicle = data[i];
      }
    }
  }

  return bestVehicle;
}


// =============================================================================
// OPERATION 1: Display Total Vehicles by Manufacturer (Combined with 2 & 3)
// =============================================================================

/**
 * runOperation1 - Execute Operation 1, 2, 3: Display manufacturer info
 * Shows vehicle count, model list, and longest range for selected manufacturer
 */
function runOperation1() {
  let manufacturer = document.getElementById("op1Manufacturer").value;
  let resultBox = document.getElementById("op1Result");

  // Validate selection
  if (manufacturer === "") {
    resultBox.className = "result-box show";
    resultBox.innerHTML =
      '<div class="error-box"><div class="error-icon">⚠️</div>Please select a manufacturer.</div>';
    return;
  }

  // Handle "ALL" manufacturers selection
  if (manufacturer === "ALL") {
    let allCounts = getAllManufacturerCounts(vehicles);

    if (allCounts.length === 0) {
      resultBox.className = "result-box show";
      resultBox.innerHTML =
        '<div class="error-box"><div class="error-icon">🔍</div>No vehicles found in the dataset.</div>';
      return;
    }

    let maxCount = allCounts[0].count;
    let html =
      '<div class="result-header"><div class="result-icon">📊</div><div><div class="result-title">All Manufacturers - Vehicle Count</div><div class="result-subtitle">Sorted by number of vehicles (highest first)</div></div></div>';

    // Build bar chart
    html += '<div class="bar-chart">';
    for (let i = 0; i < allCounts.length; i++) {
      let percentage = (allCounts[i].count / maxCount) * 100;
      html +=
        '<div class="bar-item"><div class="bar-label">' +
        allCounts[i].manufacturer +
        '</div><div class="bar-container"><div class="bar-fill" style="width: ' +
        percentage +
        '%"><span class="bar-value">' +
        allCounts[i].count +
        '</span></div></div></div>';
    }
    html += '</div>';

    resultBox.className = "result-box show";
    resultBox.innerHTML = html;
    return;
  }

  // Operation 1: Count vehicles for selected manufacturer
  let count = countVehiclesByManufacturer(vehicles, manufacturer);

  if (count === 0) {
    resultBox.className = "result-box show";
    resultBox.innerHTML =
      '<div class="error-box"><div class="error-icon">🔍</div>No vehicles found for this manufacturer.</div>';
    return;
  }

  // Operation 2: Get unique models with count
  let modelCounts = [];
  for (let i = 0; i < vehicles.length; i++) {
    if (vehicles[i].Manufacturer === manufacturer) {
      let found = false;
      for (let j = 0; j < modelCounts.length; j++) {
        if (modelCounts[j].name === vehicles[i].Model) {
          modelCounts[j].count = modelCounts[j].count + 1;
          found = true;
        }
      }
      if (found === false) {
        modelCounts[modelCounts.length] = { name: vehicles[i].Model, count: 1 };
      }
    }
  }

  // Sort models alphabetically using bubble sort
  for (let i = 0; i < modelCounts.length - 1; i++) {
    for (let j = 0; j < modelCounts.length - 1 - i; j++) {
      if (modelCounts[j].name > modelCounts[j + 1].name) {
        let temp = modelCounts[j];
        modelCounts[j] = modelCounts[j + 1];
        modelCounts[j + 1] = temp;
      }
    }
  }

  // Operation 3: Find longest range vehicle
  let longestVehicle = findLongestRangeVehicle(vehicles, manufacturer);

  // Build combined result HTML
  let html =
    '<div class="result-header"><div class="result-icon">🏭</div><div><div class="result-title">' +
    manufacturer +
    '</div><div class="result-subtitle">Manufacturer Information</div></div></div>';

  // Vehicle Count Card
  html +=
    '<div class="data-grid"><div class="data-card"><div class="data-card-value">' +
    count +
    '</div><div class="data-card-label">Total Vehicles</div></div></div>';

  // Model List Table with Count
  html += '<div class="result-section">';
  html += '<h3 class="section-title">📋 Available Models</h3>';
  html += '<table class="data-table" style="table-layout: fixed; width: 100%;"><tr><th style="width: 33.33%;">No.</th><th style="width: 33.33%;">Model Name</th><th style="width: 33.33%;">Count</th></tr>';
  for (let i = 0; i < modelCounts.length; i++) {
    html += '<tr><td>' + (i + 1) + '</td><td>' + modelCounts[i].name + '</td><td>' + modelCounts[i].count + '</td></tr>';
  }
  html += '</table>';
  html += '</div>';

  // Longest Range Section
  html += '<div class="result-section">';
  html += '<h3 class="section-title">🔋 Longest Range Model</h3>';
  if (longestVehicle !== null) {
    html += '<div class="vehicle-highlight">';
    html += '<div class="vehicle-model">' + longestVehicle.Model + '</div>';
    html += '<div class="vehicle-specs">';
    html +=
      '<div class="spec-item"><div class="spec-value">' +
      longestVehicle.Range_km +
      ' km</div><div class="spec-label">Range</div></div>';
    html += '</div>';
    html += '</div>';
  }
  html += '</div>';

  resultBox.className = "result-box show";
  resultBox.innerHTML = html;
}


// =============================================================================
// OPERATION 2: List Models by Manufacturer
// =============================================================================

/**
 * runOperation2 - Execute Operation 2: List models by manufacturer
 * Gets selected manufacturer and displays list of available models
 */
function runOperation2() {
  let manufacturer = document.getElementById("op2Manufacturer").value;
  let resultBox = document.getElementById("op2Result");

  // Validate selection
  if (manufacturer === "") {
    resultBox.className = "result-box show";
    resultBox.innerHTML =
      '<div class="error-box"><div class="error-icon">⚠️</div>Please select a manufacturer.</div>';
    return;
  }

  // Get unique models for selected manufacturer
  let models = getUniqueModels(vehicles, manufacturer);

  // Handle no models found
  if (models.length === 0) {
    resultBox.className = "result-box show";
    resultBox.innerHTML =
      '<div class="error-box"><div class="error-icon">🔍</div>No models found for this manufacturer.</div>';
    return;
  }

  // Build result HTML
  let html =
    '<div class="result-header"><div class="result-icon">📋</div><div><div class="result-title">' +
    manufacturer +
    ' Models</div><div class="result-subtitle">List of available models</div></div></div>';

  html += '<div class="model-list">';
  for (let i = 0; i < models.length; i++) {
    html +=
      '<div class="model-item"><div class="model-number">' +
      (i + 1) +
      '</div><div class="model-name">' +
      models[i] +
      '</div></div>';
  }
  html += '</div>';

  resultBox.className = "result-box show";
  resultBox.innerHTML = html;
}


// =============================================================================
// OPERATION 3: Find Longest Range Model for Manufacturer
// =============================================================================

/**
 * runOperation3 - Execute Operation 3: Find longest range model
 * Gets selected manufacturer and displays vehicle with longest range
 */
function runOperation3() {
  let manufacturer = document.getElementById("op3Manufacturer").value;
  let resultBox = document.getElementById("op3Result");

  // Validate selection
  if (manufacturer === "") {
    resultBox.className = "result-box show";
    resultBox.innerHTML =
      '<div class="error-box"><div class="error-icon">⚠️</div>Please select a manufacturer.</div>';
    return;
  }

  // Find longest range vehicle
  let vehicle = findLongestRangeVehicle(vehicles, manufacturer);

  // Handle no vehicle found
  if (vehicle === null) {
    resultBox.className = "result-box show";
    resultBox.innerHTML =
      '<div class="error-box"><div class="error-icon">🔍</div>No vehicles found for this manufacturer.</div>';
    return;
  }

  // Build result HTML
  let html =
    '<div class="result-header"><div class="result-icon">🔋</div><div><div class="result-title">Longest Range Vehicle</div><div class="result-subtitle">For ' +
    manufacturer +
    '</div></div></div>';

  html += '<div class="vehicle-highlight">';
  html += '<div class="vehicle-model">' + vehicle.Model + '</div>';
  html += '<div class="vehicle-specs">';
  html +=
    '<div class="spec-item"><div class="spec-value">' +
    vehicle.Range_km +
    ' km</div><div class="spec-label">Range</div></div>';
  html += '</div>';
  html += '</div>';

  resultBox.className = "result-box show";
  resultBox.innerHTML = html;
}
