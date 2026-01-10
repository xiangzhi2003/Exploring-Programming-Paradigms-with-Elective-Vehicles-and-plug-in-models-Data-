// ============================================================
// OPERATION 1: Display total number of vehicles by manufacturer
// (uniqueManufacturers is also used by Operation 2 and 3)
// ============================================================

// vehicles: Array to store all vehicle data from JSON file
let vehicles = [];

// uniqueManufacturers: Array to store unique manufacturer names (used by Op 1, 2, 3)
let uniqueManufacturers = [];

// extractUniqueManufacturers: Extract unique manufacturer names from vehicles array
// Uses nested for loop to find unique values, then bubble sort to sort alphabetically
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
      uniqueManufacturers[uniqueManufacturers.length] =
        vehicles[i].Manufacturer;
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

// populateManufacturerDropdowns: Fill dropdown menus with manufacturer options
// Populates dropdowns for Operation 1, 2, and 3
function populateManufacturerDropdowns() {
  let manufacturerSelects = [
    document.getElementById("op1Manufacturer"),
    document.getElementById("op2Manufacturer"),
    document.getElementById("op3Manufacturer"),
  ];
  for (let s = 0; s < manufacturerSelects.length; s++) {
    for (let i = 0; i < uniqueManufacturers.length; i++) {
      let option = document.createElement("option");
      option.value = uniqueManufacturers[i];
      option.textContent = uniqueManufacturers[i];
      manufacturerSelects[s].appendChild(option);
    }
  }
}

// countVehiclesByManufacturer: Count how many vehicles belong to a specific manufacturer
// Parameters: data (array), manufacturer (string)
// Returns: count (number)
function countVehiclesByManufacturer(data, manufacturer) {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].Manufacturer === manufacturer) {
      count = count + 1;
    }
  }
  return count;
}

// getAllManufacturerCounts: Get vehicle counts for all manufacturers
// Returns array of objects sorted by count (highest first) using bubble sort
function getAllManufacturerCounts(data) {
  let results = [];
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

// runOperation1: Execute Operation 1 - Display vehicle count by manufacturer
// Gets selected manufacturer, counts vehicles, and displays results
function runOperation1() {
  let manufacturer = document.getElementById("op1Manufacturer").value;
  let resultBox = document.getElementById("op1Result");

  if (manufacturer === "") {
    resultBox.className = "result-box show";
    resultBox.innerHTML =
      '<div class="error-box"><div class="error-icon">⚠️</div>Please select a manufacturer.</div>';
    return;
  }

  if (manufacturer === "ALL") {
    let allCounts = getAllManufacturerCounts(vehicles);
    let maxCount = allCounts[0].count;
    let html =
      '<div class="result-header"><div class="result-icon">📊</div><div><div class="result-title">All Manufacturers - Vehicle Count</div><div class="result-subtitle">Sorted by number of vehicles (highest first)</div></div></div>';
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
        "</span></div></div></div>";
    }
    html += "</div>";
    resultBox.className = "result-box show";
    resultBox.innerHTML = html;
  } else {
    let count = countVehiclesByManufacturer(vehicles, manufacturer);
    let html =
      '<div class="result-header"><div class="result-icon">🏭</div><div><div class="result-title">' +
      manufacturer +
      '</div><div class="result-subtitle">Vehicle count</div></div></div>';
    html +=
      '<div class="data-grid"><div class="data-card"><div class="data-card-value">' +
      count +
      '</div><div class="data-card-label">Total Vehicles</div></div></div>';
    resultBox.className = "result-box show";
    resultBox.innerHTML = html;
  }
}

// ============================================================
// OPERATION 2: List models by manufacturer
// ============================================================

// getModelDetails: Get all unique models for a specific manufacturer
// Parameters: data (array), manufacturer (string)
// Returns: array of model objects with name, minPrice, maxPrice, count
function getModelDetails(data, manufacturer) {
  let models = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].Manufacturer === manufacturer) {
      let found = false;
      for (let j = 0; j < models.length; j++) {
        if (models[j].name === data[i].Model) {
          found = true;
          if (data[i].Price_USD < models[j].minPrice) {
            models[j].minPrice = data[i].Price_USD;
          }
          if (data[i].Price_USD > models[j].maxPrice) {
            models[j].maxPrice = data[i].Price_USD;
          }
          models[j].count = models[j].count + 1;
        }
      }
      if (found === false) {
        models[models.length] = {
          name: data[i].Model,
          minPrice: data[i].Price_USD,
          maxPrice: data[i].Price_USD,
          count: 1,
        };
      }
    }
  }
  return models;
}

// runOperation2: Execute Operation 2 - List all models by manufacturer
// Gets selected manufacturer and displays list of models with price ranges
function runOperation2() {
  let manufacturer = document.getElementById("op2Manufacturer").value;
  let resultBox = document.getElementById("op2Result");

  if (manufacturer === "") {
    resultBox.className = "result-box show";
    resultBox.innerHTML =
      '<div class="error-box"><div class="error-icon">⚠️</div>Please select a manufacturer.</div>';
    return;
  }

  let models = getModelDetails(vehicles, manufacturer);
  let html =
    '<div class="result-header"><div class="result-icon">📋</div><div><div class="result-title">' +
    manufacturer +
    ' Models</div><div class="result-subtitle">Found ' +
    models.length +
    " unique model(s)</div></div></div>";

  if (models.length > 0) {
    html += '<div class="model-list">';
    for (let i = 0; i < models.length; i++) {
      html +=
        '<div class="model-item"><div class="model-number">' +
        (i + 1) +
        '</div><div><div class="model-name">' +
        models[i].name +
        "</div></div></div>";
    }
    html += "</div>";
  } else {
    html +=
      '<div class="error-box"><div class="error-icon">🔍</div>No models found for this manufacturer.</div>';
  }
  resultBox.className = "result-box show";
  resultBox.innerHTML = html;
}

// ============================================================
// OPERATION 3: Find longest range model for manufacturer
// (generateStars helper is also used by Operation 5 and 6)
// ============================================================

// generateStars: Convert numeric safety rating to star symbols
// Parameters: rating (number 1-5)
// Returns: string of filled and empty stars (e.g., "★★★☆☆")
// Used by Operation 3, 5, and 6
function generateStars(rating) {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars += "★";
    } else {
      stars += "☆";
    }
  }
  return stars;
}

// findLongestRangeVehicle: Find vehicle with longest range for a manufacturer
// Parameters: data (array), manufacturer (string)
// Returns: vehicle object with longest Range_km, or null if not found
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

// runOperation3: Execute Operation 3 - Find longest range model
// Gets selected manufacturer and displays vehicle with longest range
function runOperation3() {
  let manufacturer = document.getElementById("op3Manufacturer").value;
  let resultBox = document.getElementById("op3Result");

  if (manufacturer === "") {
    resultBox.className = "result-box show";
    resultBox.innerHTML =
      '<div class="error-box"><div class="error-icon">⚠️</div>Please select a manufacturer.</div>';
    return;
  }

  let vehicle = findLongestRangeVehicle(vehicles, manufacturer);

  if (vehicle === null) {
    resultBox.className = "result-box show";
    resultBox.innerHTML =
      '<div class="error-box"><div class="error-icon">🔍</div>No vehicles found for this manufacturer.</div>';
    return;
  }

  let html =
    '<div class="result-header"><div class="result-icon">🔋</div><div><div class="result-title">Longest Range Vehicle</div><div class="result-subtitle">For ' +
    manufacturer +
    "</div></div></div>";
  html +=
    '<div class="vehicle-highlight"><div class="vehicle-name">' +
    vehicle.Manufacturer +
    '</div><div class="vehicle-model">' +
    vehicle.Model +
    '</div><div class="vehicle-specs"><div class="spec-item"><div class="spec-value">' +
    vehicle.Range_km +
    ' km</div><div class="spec-label">Range</div></div><div class="spec-item"><div class="spec-value">' +
    vehicle.Battery_Capacity_kWh +
    ' kWh</div><div class="spec-label">Battery</div></div><div class="spec-item"><div class="spec-value">$' +
    Math.round(vehicle.Price_USD).toLocaleString() +
    '</div><div class="spec-label">Price</div></div><div class="spec-item"><div class="spec-value">' +
    vehicle.Year +
    '</div><div class="spec-label">Year</div></div></div></div>';
  html +=
    '<div class="data-grid"><div class="data-card"><div class="data-card-value">' +
    vehicle.Charging_Type +
    '</div><div class="data-card-label">Charging Type</div></div><div class="data-card"><div class="data-card-value">' +
    vehicle.Charge_Time_hr +
    ' hrs</div><div class="data-card-label">Charge Time</div></div><div class="data-card"><div class="data-card-value"><span class="safety-stars">' +
    generateStars(vehicle.Safety_Rating) +
    '</span></div><div class="data-card-label">Safety Rating</div></div><div class="data-card"><div class="data-card-value">' +
    vehicle.Color +
    '</div><div class="data-card-label">Color</div></div></div>';
  resultBox.className = "result-box show";
  resultBox.innerHTML = html;
}

// ============================================================
// OPERATION 4: Calculate average charging time by type
// ============================================================

// uniqueChargingTypes: Array to store unique charging type names
let uniqueChargingTypes = [];

// extractUniqueChargingTypes: Extract unique charging types from vehicles array
// Uses nested for loop to find unique values, then bubble sort to sort alphabetically
function extractUniqueChargingTypes() {
  uniqueChargingTypes = [];
  for (let i = 0; i < vehicles.length; i++) {
    let found = false;
    for (let j = 0; j < uniqueChargingTypes.length; j++) {
      if (uniqueChargingTypes[j] === vehicles[i].Charging_Type) {
        found = true;
      }
    }
    if (found === false) {
      uniqueChargingTypes[uniqueChargingTypes.length] =
        vehicles[i].Charging_Type;
    }
  }
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

// populateChargingTypeDropdown: Fill dropdown menu with charging type options
// Populates dropdown for Operation 4
function populateChargingTypeDropdown() {
  let chargingSelect = document.getElementById("op4ChargingType");
  for (let i = 0; i < uniqueChargingTypes.length; i++) {
    let option = document.createElement("option");
    option.value = uniqueChargingTypes[i];
    option.textContent = uniqueChargingTypes[i];
    chargingSelect.appendChild(option);
  }
}

// calculateAverageChargeTime: Calculate average charging time for a specific charging type
// Parameters: data (array), chargingType (string)
// Returns: object with average, count, min, max values
function calculateAverageChargeTime(data, chargingType) {
  let totalChargeTime = 0;
  let count = 0;
  let minTime = 999999;
  let maxTime = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].Charging_Type === chargingType) {
      totalChargeTime = totalChargeTime + data[i].Charge_Time_hr;
      count = count + 1;
      if (data[i].Charge_Time_hr < minTime) {
        minTime = data[i].Charge_Time_hr;
      }
      if (data[i].Charge_Time_hr > maxTime) {
        maxTime = data[i].Charge_Time_hr;
      }
    }
  }
  if (count === 0) {
    return { average: 0, count: 0, min: 0, max: 0 };
  }
  return {
    average: totalChargeTime / count,
    count: count,
    min: minTime,
    max: maxTime,
  };
}

// getAllChargingTypeStats: Get charging time statistics for all charging types
// Returns array of objects sorted by average time (fastest first) using bubble sort
function getAllChargingTypeStats(data) {
  let results = [];
  for (let c = 0; c < uniqueChargingTypes.length; c++) {
    let stats = calculateAverageChargeTime(data, uniqueChargingTypes[c]);
    if (stats.count > 0) {
      results[results.length] = {
        type: uniqueChargingTypes[c],
        average: stats.average,
        count: stats.count,
        min: stats.min,
        max: stats.max,
      };
    }
  }
  // Sort by average time ascending (fastest first) using bubble sort
  for (let i = 0; i < results.length - 1; i++) {
    for (let j = 0; j < results.length - 1 - i; j++) {
      if (results[j].average > results[j + 1].average) {
        let temp = results[j];
        results[j] = results[j + 1];
        results[j + 1] = temp;
      }
    }
  }
  return results;
}

// runOperation4: Execute Operation 4 - Calculate average charging time
// Gets selected charging type and displays charging time statistics
function runOperation4() {
  let chargingType = document.getElementById("op4ChargingType").value;
  let resultBox = document.getElementById("op4Result");

  if (chargingType === "") {
    resultBox.className = "result-box show";
    resultBox.innerHTML =
      '<div class="error-box"><div class="error-icon">⚠️</div>Please select a charging type.</div>';
    return;
  }

  if (chargingType === "ALL") {
    let allStats = getAllChargingTypeStats(vehicles);
    let html =
      '<div class="result-header"><div class="result-icon">⚡</div><div><div class="result-title">All Charging Types - Average Time</div><div class="result-subtitle">Sorted by fastest charging time</div></div></div>';
    html +=
      '<table class="data-table"><tr><th>Charging Type</th><th>Avg Time</th><th>Min</th><th>Max</th><th>Vehicles</th></tr>';
    for (let i = 0; i < allStats.length; i++) {
      html +=
        "<tr><td>" +
        allStats[i].type +
        "</td><td><strong>" +
        allStats[i].average.toFixed(2) +
        " hrs</strong></td><td>" +
        allStats[i].min.toFixed(1) +
        " hrs</td><td>" +
        allStats[i].max.toFixed(1) +
        " hrs</td><td>" +
        allStats[i].count +
        "</td></tr>";
    }
    html += "</table>";
    resultBox.className = "result-box show";
    resultBox.innerHTML = html;
  } else {
    let result = calculateAverageChargeTime(vehicles, chargingType);
    if (result.count === 0) {
      resultBox.className = "result-box show";
      resultBox.innerHTML =
        '<div class="error-box"><div class="error-icon">🔍</div>No vehicles found with this charging type.</div>';
      return;
    }
    let html =
      '<div class="result-header"><div class="result-icon">⚡</div><div><div class="result-title">' +
      chargingType +
      '</div><div class="result-subtitle">Charging time statistics</div></div></div>';
    html +=
      '<div class="data-grid"><div class="data-card"><div class="data-card-value">' +
      result.average.toFixed(2) +
      ' hrs</div><div class="data-card-label">Average Charge Time</div></div><div class="data-card"><div class="data-card-value">' +
      result.min.toFixed(1) +
      ' hrs</div><div class="data-card-label">Fastest</div></div><div class="data-card"><div class="data-card-value">' +
      result.max.toFixed(1) +
      ' hrs</div><div class="data-card-label">Slowest</div></div><div class="data-card"><div class="data-card-value">' +
      result.count +
      '</div><div class="data-card-label">Total Vehicles</div></div></div>';
    resultBox.className = "result-box show";
    resultBox.innerHTML = html;
  }
}

// ============================================================
// OPERATION 5: Rank top 5 safest vehicles from 2025
// ============================================================

// findTopSafest2025Vehicles: Find and rank top 5 safest vehicles from year 2025
// Parameters: data (array)
// Returns: object with top5 array and total2025 count
// Uses bubble sort to sort by Safety_Rating descending
function findTopSafest2025Vehicles(data) {
  // Step 1: Filter only 2025 vehicles
  let vehicles2025 = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].Year === 2025) {
      vehicles2025[vehicles2025.length] = data[i];
    }
  }
  // Step 2: Sort by Safety_Rating descending using bubble sort
  for (let i = 0; i < vehicles2025.length - 1; i++) {
    for (let j = 0; j < vehicles2025.length - 1 - i; j++) {
      if (vehicles2025[j].Safety_Rating < vehicles2025[j + 1].Safety_Rating) {
        let temp = vehicles2025[j];
        vehicles2025[j] = vehicles2025[j + 1];
        vehicles2025[j + 1] = temp;
      }
    }
  }
  // Step 3: Get top 5 (or less if fewer vehicles)
  let top5 = [];
  let displayCount = 5;
  if (vehicles2025.length < 5) {
    displayCount = vehicles2025.length;
  }
  for (let k = 0; k < displayCount; k++) {
    top5[top5.length] = vehicles2025[k];
  }
  return { top5: top5, total2025: vehicles2025.length };
}

// runOperation5: Execute Operation 5 - Rank top 5 safest 2025 vehicles
// Displays table of top 5 safest vehicles from year 2025
function runOperation5() {
  let resultBox = document.getElementById("op5Result");
  let result = findTopSafest2025Vehicles(vehicles);

  let html =
    '<div class="result-header"><div class="result-icon">🛡️</div><div><div class="result-title">Top 5 Safest 2025 Vehicles</div><div class="result-subtitle">From ' +
    result.total2025 +
    " vehicles manufactured in 2025</div></div></div>";

  if (result.top5.length === 0) {
    html +=
      '<div class="error-box"><div class="error-icon">🔍</div>No 2025 vehicles found in the dataset.</div>';
  } else {
    html +=
      '<table class="data-table"><tr><th>Rank</th><th>Manufacturer</th><th>Model</th><th>Safety</th><th>Range</th><th>Price</th></tr>';
    for (let i = 0; i < result.top5.length; i++) {
      let v = result.top5[i];
      html +=
        '<tr><td><span class="rank-badge rank-' +
        (i + 1) +
        '">' +
        (i + 1) +
        "</span></td><td><strong>" +
        v.Manufacturer +
        "</strong></td><td>" +
        v.Model +
        '</td><td><span class="safety-stars">' +
        generateStars(v.Safety_Rating) +
        "</span></td><td>" +
        v.Range_km +
        " km</td><td>$" +
        Math.round(v.Price_USD).toLocaleString() +
        "</td></tr>";
    }
    html += "</table>";
  }
  resultBox.className = "result-box show";
  resultBox.innerHTML = html;
}

// ============================================================
// OPERATION 6: Find best-selling EV in 2024
// ============================================================

// findBestSellingEV2024: Find the vehicle with highest Units_Sold_2024
// Parameters: data (array)
// Returns: object with best-selling vehicle and total sales across all vehicles
function findBestSellingEV2024(data) {
  let bestVehicle = null;
  let highestSales = 0;
  let totalSales = 0;
  for (let i = 0; i < data.length; i++) {
    totalSales = totalSales + data[i].Units_Sold_2024;
    if (data[i].Units_Sold_2024 > highestSales) {
      highestSales = data[i].Units_Sold_2024;
      bestVehicle = data[i];
    }
  }
  return { vehicle: bestVehicle, totalSales: totalSales };
}

// getTopSellers: Get top N best-selling vehicles
// Parameters: data (array), count (number of top sellers to return)
// Returns: array of top selling vehicles sorted by Units_Sold_2024 descending
// Uses bubble sort to sort by sales
function getTopSellers(data, count) {
  // Copy array to avoid modifying original
  let sorted = [];
  for (let i = 0; i < data.length; i++) {
    sorted[sorted.length] = data[i];
  }
  // Sort by Units_Sold_2024 descending using bubble sort
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = 0; j < sorted.length - 1 - i; j++) {
      if (sorted[j].Units_Sold_2024 < sorted[j + 1].Units_Sold_2024) {
        let temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }
  // Get top N vehicles
  let top = [];
  let limit = count;
  if (sorted.length < count) {
    limit = sorted.length;
  }
  for (let k = 0; k < limit; k++) {
    top[top.length] = sorted[k];
  }
  return top;
}

// runOperation6: Execute Operation 6 - Find best-selling EV in 2024
// Displays best-selling vehicle with details and top 5 sellers table
function runOperation6() {
  let resultBox = document.getElementById("op6Result");
  let result = findBestSellingEV2024(vehicles);

  if (result.vehicle === null) {
    resultBox.className = "result-box show";
    resultBox.innerHTML =
      '<div class="error-box"><div class="error-icon">🔍</div>No vehicles found in the dataset.</div>';
    return;
  }

  let v = result.vehicle;
  let marketShare = ((v.Units_Sold_2024 / result.totalSales) * 100).toFixed(2);

  let html =
    '<div class="result-header"><div class="result-icon">🏆</div><div><div class="result-title">Best-Selling EV in 2024</div><div class="result-subtitle">Champion of electric vehicle sales</div></div></div>';
  html +=
    '<div class="vehicle-highlight"><div class="trophy-animate" style="font-size: 3rem; margin-bottom: 10px;">🏆</div><div class="vehicle-name">' +
    v.Manufacturer +
    '</div><div class="vehicle-model">' +
    v.Model +
    '</div><div class="vehicle-specs"><div class="spec-item"><div class="spec-value">' +
    v.Units_Sold_2024.toLocaleString() +
    '</div><div class="spec-label">Units Sold</div></div><div class="spec-item"><div class="spec-value">' +
    marketShare +
    '%</div><div class="spec-label">Market Share</div></div><div class="spec-item"><div class="spec-value">$' +
    Math.round(v.Price_USD).toLocaleString() +
    '</div><div class="spec-label">Price</div></div><div class="spec-item"><div class="spec-value">' +
    v.Year +
    '</div><div class="spec-label">Model Year</div></div></div></div>';
  html +=
    '<div class="data-grid"><div class="data-card"><div class="data-card-value">' +
    v.Range_km +
    ' km</div><div class="data-card-label">Range</div></div><div class="data-card"><div class="data-card-value">' +
    v.Battery_Capacity_kWh +
    ' kWh</div><div class="data-card-label">Battery</div></div><div class="data-card"><div class="data-card-value">' +
    v.Charge_Time_hr +
    ' hrs</div><div class="data-card-label">Charge Time</div></div><div class="data-card"><div class="data-card-value"><span class="safety-stars">' +
    generateStars(v.Safety_Rating) +
    '</span></div><div class="data-card-label">Safety</div></div></div>';

  let top5 = getTopSellers(vehicles, 5);
  html +=
    '<h3 style="margin: 30px 0 15px; color: #00d9ff;">Top 5 Best Sellers in 2024</h3>';
  html +=
    '<table class="data-table"><tr><th>Rank</th><th>Manufacturer</th><th>Model</th><th>Units Sold</th><th>Price</th></tr>';
  for (let i = 0; i < top5.length; i++) {
    html +=
      '<tr><td><span class="rank-badge rank-' +
      (i + 1) +
      '">' +
      (i + 1) +
      "</span></td><td><strong>" +
      top5[i].Manufacturer +
      "</strong></td><td>" +
      top5[i].Model +
      "</td><td>" +
      top5[i].Units_Sold_2024.toLocaleString() +
      "</td><td>$" +
      Math.round(top5[i].Price_USD).toLocaleString() +
      "</td></tr>";
  }
  html += "</table>";

  resultBox.className = "result-box show";
  resultBox.innerHTML = html;
}

// ============================================================
// PAGE LOAD: Load data and initialize UI
// ============================================================

// showPanel: Switch between operation panels (tab navigation)
// Parameters: panelNumber (1-6)
// Hides all panels and shows the selected one, updates tab styling
function showPanel(panelNumber) {
  // Hide all panels
  for (let i = 1; i <= 6; i++) {
    document.getElementById("panel" + i).className = "operation-panel";
  }
  // Remove active class from all tabs
  let tabs = document.getElementsByClassName("nav-tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].className = "nav-tab";
  }
  // Show selected panel and highlight tab
  document.getElementById("panel" + panelNumber).className =
    "operation-panel active";
  tabs[panelNumber - 1].className = "nav-tab active";
}

// loadData: Fetch JSON data and initialize the application
// Loads vehicle data from JSON file, extracts unique values, and sets up UI
function loadData() {
  fetch("electric_vehicles_dataset.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Store vehicle data
      vehicles = data;
      // Extract unique values for dropdowns (Operation 1 and 4)
      extractUniqueManufacturers();
      extractUniqueChargingTypes();
      // Hide loading message and show main content
      document.getElementById("loadingMessage").style.display = "none";
      document.getElementById("mainContent").style.display = "block";
      // Update statistics in header
      document.getElementById("totalVehicles").textContent =
        vehicles.length.toLocaleString();
      document.getElementById("totalManufacturers").textContent =
        uniqueManufacturers.length;
      document.getElementById("totalChargingTypes").textContent =
        uniqueChargingTypes.length;
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

// window.onload: Start the application when page loads
window.onload = function () {
  loadData();
};
