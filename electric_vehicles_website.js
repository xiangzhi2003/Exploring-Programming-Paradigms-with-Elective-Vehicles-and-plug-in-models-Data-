// // =============================================================
// // OPERATION 1: Display total number of vehicles by manufacturer
// // (uniqueManufacturers is used by Operation 1)
// // =============================================================

// // vehicles: Array to store all vehicle data from JSON file
// let vehicles = [];

// // uniqueManufacturers: Array to store unique manufacturer names (used by Op 1, 2, 3)
// let uniqueManufacturers = [];

// // extractUniqueManufacturers: Extract unique manufacturer names from vehicles array
// // Uses nested for loop to find unique values, then bubble sort to sort alphabetically
// function extractUniqueManufacturers() {
//   uniqueManufacturers = [];
//   // Loop through all vehicles to find unique manufacturers
//   for (let i = 0; i < vehicles.length; i++) {
//     let found = false;
//     for (let j = 0; j < uniqueManufacturers.length; j++) {
//       if (uniqueManufacturers[j] === vehicles[i].Manufacturer) {
//         found = true;
//       }
//     }
//     if (found === false) {
//       uniqueManufacturers[uniqueManufacturers.length] =
//         vehicles[i].Manufacturer;
//     }
//   }
//   // Sort manufacturers alphabetically using bubble sort
//   for (let i = 0; i < uniqueManufacturers.length - 1; i++) {
//     for (let j = 0; j < uniqueManufacturers.length - 1 - i; j++) {
//       if (uniqueManufacturers[j] > uniqueManufacturers[j + 1]) {
//         let temp = uniqueManufacturers[j];
//         uniqueManufacturers[j] = uniqueManufacturers[j + 1];
//         uniqueManufacturers[j + 1] = temp;
//       }
//     }
//   }
// }

// // populateManufacturerDropdowns: Fill dropdown menu with manufacturer options
// // Populates dropdown for Operation 1 (combined with 2 and 3)
// function populateManufacturerDropdowns() {
//   let manufacturerSelect = document.getElementById("op1Manufacturer");
//   if (manufacturerSelect !== null) {
//     for (let i = 0; i < uniqueManufacturers.length; i++) {
//       let option = document.createElement("option");
//       option.value = uniqueManufacturers[i];
//       option.textContent = uniqueManufacturers[i];
//       manufacturerSelect.appendChild(option);
//     }
//   }
// }

// // countVehiclesByManufacturer: Count how many vehicles belong to a specific manufacturer
// // Parameters: data (array), manufacturer (string)
// // Returns: count (number)
// function countVehiclesByManufacturer(data, manufacturer) {
//   let count = 0;
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].Manufacturer === manufacturer) {
//       count = count + 1;
//     }
//   }
//   return count;
// }

// // getAllManufacturerCounts: Get vehicle counts for all manufacturers
// // Returns array of objects sorted by count (highest first) using bubble sort
// function getAllManufacturerCounts(data) {
//   let results = [];
//   for (let m = 0; m < uniqueManufacturers.length; m++) {
//     let count = countVehiclesByManufacturer(data, uniqueManufacturers[m]);
//     results[results.length] = {
//       manufacturer: uniqueManufacturers[m],
//       count: count,
//     };
//   }
//   // Sort by count descending using bubble sort
//   for (let i = 0; i < results.length - 1; i++) {
//     for (let j = 0; j < results.length - 1 - i; j++) {
//       if (results[j].count < results[j + 1].count) {
//         let temp = results[j];
//         results[j] = results[j + 1];
//         results[j + 1] = temp;
//       }
//     }
//   }
//   return results;
// }

// // runOperation1: Execute Operation 1, 2, 3 - Display manufacturer info
// // Shows vehicle count, model list, and longest range for selected manufacturer
// function runOperation1() {
//   let manufacturer = document.getElementById("op1Manufacturer").value;
//   let resultBox = document.getElementById("op1Result");

//   if (manufacturer === "") {
//     resultBox.className = "result-box show";
//     resultBox.innerHTML =
//       '<div class="error-box"><div class="error-icon">⚠️</div>Please select a manufacturer.</div>';
//     return;
//   }

//   if (manufacturer === "ALL") {
//     let allCounts = getAllManufacturerCounts(vehicles);
//     if (allCounts.length === 0) {
//       resultBox.className = "result-box show";
//       resultBox.innerHTML =
//         '<div class="error-box"><div class="error-icon">🔍</div>No vehicles found in the dataset.</div>';
//       return;
//     }
//     let maxCount = allCounts[0].count;
//     let html =
//       '<div class="result-header"><div class="result-icon">📊</div><div><div class="result-title">All Manufacturers - Vehicle Count</div><div class="result-subtitle">Sorted by number of vehicles (highest first)</div></div></div>';
//     html += '<div class="bar-chart">';
//     for (let i = 0; i < allCounts.length; i++) {
//       let percentage = (allCounts[i].count / maxCount) * 100;
//       html +=
//         '<div class="bar-item"><div class="bar-label">' +
//         allCounts[i].manufacturer +
//         '</div><div class="bar-container"><div class="bar-fill" style="width: ' +
//         percentage +
//         '%"><span class="bar-value">' +
//         allCounts[i].count +
//         '</span></div></div></div>';
//     }
//     html += '</div>';
//     resultBox.className = "result-box show";
//     resultBox.innerHTML = html;
//     return;
//   }

//   // Operation 1: Count vehicles
//   let count = countVehiclesByManufacturer(vehicles, manufacturer);

//   if (count === 0) {
//     resultBox.className = "result-box show";
//     resultBox.innerHTML =
//       '<div class="error-box"><div class="error-icon">🔍</div>No vehicles found for this manufacturer.</div>';
//     return;
//   }

//   // Operation 2: Get unique models with count
//   let modelCounts = [];
//   for (let i = 0; i < vehicles.length; i++) {
//     if (vehicles[i].Manufacturer === manufacturer) {
//       let found = false;
//       for (let j = 0; j < modelCounts.length; j++) {
//         if (modelCounts[j].name === vehicles[i].Model) {
//           modelCounts[j].count = modelCounts[j].count + 1;
//           found = true;
//         }
//       }
//       if (found === false) {
//         modelCounts[modelCounts.length] = { name: vehicles[i].Model, count: 1 };
//       }
//     }
//   }
//   // Sort alphabetically using bubble sort
//   for (let i = 0; i < modelCounts.length - 1; i++) {
//     for (let j = 0; j < modelCounts.length - 1 - i; j++) {
//       if (modelCounts[j].name > modelCounts[j + 1].name) {
//         let temp = modelCounts[j];
//         modelCounts[j] = modelCounts[j + 1];
//         modelCounts[j + 1] = temp;
//       }
//     }
//   }

//   // Operation 3: Find longest range vehicle
//   let longestVehicle = findLongestRangeVehicle(vehicles, manufacturer);

//   // Build combined result HTML
//   let html =
//     '<div class="result-header"><div class="result-icon">🏭</div><div><div class="result-title">' +
//     manufacturer +
//     '</div><div class="result-subtitle">Manufacturer Information</div></div></div>';

//   // Vehicle Count Card
//   html +=
//     '<div class="data-grid"><div class="data-card"><div class="data-card-value">' +
//     count +
//     '</div><div class="data-card-label">Total Vehicles</div></div></div>';

//   // Model List Table with Count
//   html += '<div class="result-section">';
//   html += '<h3 class="section-title">📋 Available Models</h3>';
//   html += '<table class="data-table" style="table-layout: fixed; width: 100%;"><tr><th style="width: 33.33%;">No.</th><th style="width: 33.33%;">Model Name</th><th style="width: 33.33%;">Count</th></tr>';
//   for (let i = 0; i < modelCounts.length; i++) {
//     html += '<tr><td>' + (i + 1) + '</td><td>' + modelCounts[i].name + '</td><td>' + modelCounts[i].count + '</td></tr>';
//   }
//   html += '</table>';
//   html += '</div>';

//   // Longest Range
//   html += '<div class="result-section">';
//   html += '<h3 class="section-title">🔋 Longest Range Model</h3>';
//   if (longestVehicle !== null) {
//     html += '<div class="vehicle-highlight">';
//     html += '<div class="vehicle-model">' + longestVehicle.Model + '</div>';
//     html += '<div class="vehicle-specs">';
//     html +=
//       '<div class="spec-item"><div class="spec-value">' +
//       longestVehicle.Range_km +
//       ' km</div><div class="spec-label">Range</div></div>';
//     html += '</div>';
//     html += '</div>';
//   }
//   html += '</div>';

//   resultBox.className = "result-box show";
//   resultBox.innerHTML = html;
// }

// // ============================================================
// // OPERATION 2: List models by manufacturer
// // ============================================================

// // getUniqueModels: Get all unique model names for a specific manufacturer
// // Parameters: data (array), manufacturer (string)
// // Returns: array of unique model names sorted alphabetically
// function getUniqueModels(data, manufacturer) {
//   let models = [];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].Manufacturer === manufacturer) {
//       let found = false;
//       for (let j = 0; j < models.length; j++) {
//         if (models[j] === data[i].Model) {
//           found = true;
//         }
//       }
//       if (found === false) {
//         models[models.length] = data[i].Model;
//       }
//     }
//   }
//   // Sort alphabetically using bubble sort
//   for (let i = 0; i < models.length - 1; i++) {
//     for (let j = 0; j < models.length - 1 - i; j++) {
//       if (models[j] > models[j + 1]) {
//         let temp = models[j];
//         models[j] = models[j + 1];
//         models[j + 1] = temp;
//       }
//     }
//   }
//   return models;
// }

// // runOperation2: Execute Operation 2 - List models by manufacturer
// // Gets selected manufacturer and displays list of available models
// function runOperation2() {
//   let manufacturer = document.getElementById("op2Manufacturer").value;
//   let resultBox = document.getElementById("op2Result");

//   if (manufacturer === "") {
//     resultBox.className = "result-box show";
//     resultBox.innerHTML =
//       '<div class="error-box"><div class="error-icon">⚠️</div>Please select a manufacturer.</div>';
//     return;
//   }

//   let models = getUniqueModels(vehicles, manufacturer);

//   if (models.length === 0) {
//     resultBox.className = "result-box show";
//     resultBox.innerHTML =
//       '<div class="error-box"><div class="error-icon">🔍</div>No models found for this manufacturer.</div>';
//     return;
//   }

//   let html =
//     '<div class="result-header"><div class="result-icon">📋</div><div><div class="result-title">' +
//     manufacturer +
//     ' Models</div><div class="result-subtitle">List of available models</div></div></div>';

//   html += '<div class="model-list">';
//   for (let i = 0; i < models.length; i++) {
//     html +=
//       '<div class="model-item"><div class="model-number">' +
//       (i + 1) +
//       '</div><div class="model-name">' +
//       models[i] +
//       '</div></div>';
//   }
//   html += '</div>';

//   resultBox.className = "result-box show";
//   resultBox.innerHTML = html;
// }

// // ============================================================
// // OPERATION 3: Find longest range model for manufacturer
// // ============================================================

// // findLongestRangeVehicle: Find vehicle with longest range for a manufacturer
// // Parameters: data (array), manufacturer (string)
// // Returns: vehicle object with longest Range_km, or null if not found
// function findLongestRangeVehicle(data, manufacturer) {
//   let bestVehicle = null;
//   let longestRange = 0;
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].Manufacturer === manufacturer) {
//       if (data[i].Range_km > longestRange) {
//         longestRange = data[i].Range_km;
//         bestVehicle = data[i];
//       }
//     }
//   }
//   return bestVehicle;
// }

// // runOperation3: Execute Operation 3 - Find longest range model
// // Gets selected manufacturer and displays vehicle with longest range
// function runOperation3() {
//   let manufacturer = document.getElementById("op3Manufacturer").value;
//   let resultBox = document.getElementById("op3Result");

//   if (manufacturer === "") {
//     resultBox.className = "result-box show";
//     resultBox.innerHTML =
//       '<div class="error-box"><div class="error-icon">⚠️</div>Please select a manufacturer.</div>';
//     return;
//   }

//   let vehicle = findLongestRangeVehicle(vehicles, manufacturer);

//   if (vehicle === null) {
//     resultBox.className = "result-box show";
//     resultBox.innerHTML =
//       '<div class="error-box"><div class="error-icon">🔍</div>No vehicles found for this manufacturer.</div>';
//     return;
//   }

//   let html =
//     '<div class="result-header"><div class="result-icon">🔋</div><div><div class="result-title">Longest Range Vehicle</div><div class="result-subtitle">For ' +
//     manufacturer +
//     '</div></div></div>';

//   html += '<div class="vehicle-highlight">';
//   html += '<div class="vehicle-model">' + vehicle.Model + '</div>';
//   html += '<div class="vehicle-specs">';
//   html +=
//     '<div class="spec-item"><div class="spec-value">' +
//     vehicle.Range_km +
//     ' km</div><div class="spec-label">Range</div></div>';
//   html += '</div>';
//   html += '</div>';

//   resultBox.className = "result-box show";
//   resultBox.innerHTML = html;
// }

// // ============================================================
// // HELPER: Safety rating stars (used by Operation 5 and 6)
// // ============================================================

// // generateStars: Convert numeric safety rating to star symbols
// // Parameters: rating (number 1-5)
// // Returns: string of filled and empty stars (e.g., "★★★☆☆")
// // Used by Operation 5 and 6
// function generateStars(rating) {
//   let stars = "";
//   for (let i = 0; i < 5; i++) {
//     if (i < rating) {
//       stars += "★";
//     } else {
//       stars += "☆";
//     }
//   }
//   return stars;
// }

// // ============================================================
// // OPERATION 4: Calculate average charging time by type
// // ============================================================

// // uniqueChargingTypes: Array to store unique charging type names
// let uniqueChargingTypes = [];

// // extractUniqueChargingTypes: Extract unique charging types from vehicles array
// // Uses nested for loop to find unique values, then bubble sort to sort alphabetically
// function extractUniqueChargingTypes() {
//   uniqueChargingTypes = [];
//   for (let i = 0; i < vehicles.length; i++) {
//     let found = false;
//     for (let j = 0; j < uniqueChargingTypes.length; j++) {
//       if (uniqueChargingTypes[j] === vehicles[i].Charging_Type) {
//         found = true;
//       }
//     }
//     if (found === false) {
//       uniqueChargingTypes[uniqueChargingTypes.length] =
//         vehicles[i].Charging_Type;
//     }
//   }
//   for (let i = 0; i < uniqueChargingTypes.length - 1; i++) {
//     for (let j = 0; j < uniqueChargingTypes.length - 1 - i; j++) {
//       if (uniqueChargingTypes[j] > uniqueChargingTypes[j + 1]) {
//         let temp = uniqueChargingTypes[j];
//         uniqueChargingTypes[j] = uniqueChargingTypes[j + 1];
//         uniqueChargingTypes[j + 1] = temp;
//       }
//     }
//   }
// }

// // populateChargingTypeDropdown: Fill dropdown menu with charging type options
// // Populates dropdown for Operation 4
// function populateChargingTypeDropdown() {
//   let chargingSelect = document.getElementById("op4ChargingType");
//   for (let i = 0; i < uniqueChargingTypes.length; i++) {
//     let option = document.createElement("option");
//     option.value = uniqueChargingTypes[i];
//     option.textContent = uniqueChargingTypes[i];
//     chargingSelect.appendChild(option);
//   }
// }

// // calculateAverageChargeTime: Calculate average charging time for a specific charging type
// // Parameters: data (array), chargingType (string)
// // Returns: object with average, count, min, max values
// function calculateAverageChargeTime(data, chargingType) {
//   let totalChargeTime = 0;
//   let count = 0;
//   let minTime = 999999;
//   let maxTime = 0;
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].Charging_Type === chargingType) {
//       totalChargeTime = totalChargeTime + data[i].Charge_Time_hr;
//       count = count + 1;
//       if (data[i].Charge_Time_hr < minTime) {
//         minTime = data[i].Charge_Time_hr;
//       }
//       if (data[i].Charge_Time_hr > maxTime) {
//         maxTime = data[i].Charge_Time_hr;
//       }
//     }
//   }
//   if (count === 0) {
//     return { average: 0, count: 0, min: 0, max: 0 };
//   }
//   return {
//     average: totalChargeTime / count,
//     count: count,
//     min: minTime,
//     max: maxTime,
//   };
// }

// // getAllChargingTypeStats: Get charging time statistics for all charging types
// // Returns array of objects sorted by average time (fastest first) using bubble sort
// function getAllChargingTypeStats(data) {
//   let results = [];
//   for (let c = 0; c < uniqueChargingTypes.length; c++) {
//     let stats = calculateAverageChargeTime(data, uniqueChargingTypes[c]);
//     if (stats.count > 0) {
//       results[results.length] = {
//         type: uniqueChargingTypes[c],
//         average: stats.average,
//         count: stats.count,
//         min: stats.min,
//         max: stats.max,
//       };
//     }
//   }
//   // Sort by average time ascending (fastest first) using bubble sort
//   for (let i = 0; i < results.length - 1; i++) {
//     for (let j = 0; j < results.length - 1 - i; j++) {
//       if (results[j].average > results[j + 1].average) {
//         let temp = results[j];
//         results[j] = results[j + 1];
//         results[j + 1] = temp;
//       }
//     }
//   }
//   return results;
// }

// // runOperation4: Execute Operation 4 - Calculate average charging time
// // Gets selected charging type and displays charging time statistics
// function runOperation4() {
//   let chargingType = document.getElementById("op4ChargingType").value;
//   let resultBox = document.getElementById("op4Result");

//   if (chargingType === "") {
//     resultBox.className = "result-box show";
//     resultBox.innerHTML =
//       '<div class="error-box"><div class="error-icon">⚠️</div>Please select a charging type.</div>';
//     return;
//   }

//   if (chargingType === "ALL") {
//     let allStats = getAllChargingTypeStats(vehicles);
//     let html =
//       '<div class="result-header"><div class="result-icon">⚡</div><div><div class="result-title">All Charging Types - Average Time</div><div class="result-subtitle">Sorted by fastest charging time</div></div></div>';
//     html +=
//       '<table class="data-table"><tr><th>Charging Type</th><th>Avg Time</th><th>Min</th><th>Max</th><th>Vehicles</th></tr>';
//     for (let i = 0; i < allStats.length; i++) {
//       html +=
//         "<tr><td>" +
//         allStats[i].type +
//         "</td><td><strong>" +
//         allStats[i].average.toFixed(2) +
//         " hrs</strong></td><td>" +
//         allStats[i].min.toFixed(1) +
//         " hrs</td><td>" +
//         allStats[i].max.toFixed(1) +
//         " hrs</td><td>" +
//         allStats[i].count +
//         "</td></tr>";
//     }
//     html += "</table>";
//     resultBox.className = "result-box show";
//     resultBox.innerHTML = html;
//   } else {
//     let result = calculateAverageChargeTime(vehicles, chargingType);
//     if (result.count === 0) {
//       resultBox.className = "result-box show";
//       resultBox.innerHTML =
//         '<div class="error-box"><div class="error-icon">🔍</div>No vehicles found with this charging type.</div>';
//       return;
//     }
//     let html =
//       '<div class="result-header"><div class="result-icon">⚡</div><div><div class="result-title">' +
//       chargingType +
//       '</div><div class="result-subtitle">Charging time statistics</div></div></div>';
//     html +=
//       '<div class="data-grid"><div class="data-card"><div class="data-card-value">' +
//       result.average.toFixed(2) +
//       ' hrs</div><div class="data-card-label">Average Charge Time</div></div><div class="data-card"><div class="data-card-value">' +
//       result.min.toFixed(1) +
//       ' hrs</div><div class="data-card-label">Fastest</div></div><div class="data-card"><div class="data-card-value">' +
//       result.max.toFixed(1) +
//       ' hrs</div><div class="data-card-label">Slowest</div></div><div class="data-card"><div class="data-card-value">' +
//       result.count +
//       '</div><div class="data-card-label">Total Vehicles</div></div></div>';
//     resultBox.className = "result-box show";
//     resultBox.innerHTML = html;
//   }
// }

// // ============================================================
// // OPERATION 5: Rank top 5 safest vehicles from 2025
// // ============================================================

// // findTopSafest2025Vehicles: Find and rank top 5 safest vehicles from year 2025
// // Parameters: data (array)
// // Returns: object with top5 array and total2025 count
// // Uses bubble sort to sort by Safety_Rating descending
// function findTopSafest2025Vehicles(data) {
//   // Step 1: Filter only 2025 vehicles
//   let vehicles2025 = [];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].Year === 2025) {
//       vehicles2025[vehicles2025.length] = data[i];
//     }
//   }
//   // Step 2: Sort by Safety_Rating descending using bubble sort
//   for (let i = 0; i < vehicles2025.length - 1; i++) {
//     for (let j = 0; j < vehicles2025.length - 1 - i; j++) {
//       if (vehicles2025[j].Safety_Rating < vehicles2025[j + 1].Safety_Rating) {
//         let temp = vehicles2025[j];
//         vehicles2025[j] = vehicles2025[j + 1];
//         vehicles2025[j + 1] = temp;
//       }
//     }
//   }
//   // Step 3: Get top 5 (or less if fewer vehicles)
//   let top5 = [];
//   let displayCount = 5;
//   if (vehicles2025.length < 5) {
//     displayCount = vehicles2025.length;
//   }
//   for (let k = 0; k < displayCount; k++) {
//     top5[top5.length] = vehicles2025[k];
//   }
//   return { top5: top5, total2025: vehicles2025.length };
// }

// // runOperation5: Execute Operation 5 - Rank top 5 safest 2025 vehicles
// // Displays table of top 5 safest vehicles from year 2025 with all attributes
// function runOperation5() {
//   let resultBox = document.getElementById("op5Result");
//   let result = findTopSafest2025Vehicles(vehicles);

//   let html =
//     '<div class="result-header"><div class="result-icon">🛡️</div><div><div class="result-title">Top 5 Safest 2025 Vehicles</div><div class="result-subtitle">Ranked by safety rating</div></div></div>';

//   if (result.top5.length === 0) {
//     html +=
//       '<div class="error-box"><div class="error-icon">🔍</div>No 2025 vehicles found in the dataset.</div>';
//   } else {
//     html +=
//       '<table class="data-table"><tr><th>Rank</th><th>Manufacturer</th><th>Model</th><th>Year</th><th>Battery Type</th><th>Battery (kWh)</th><th>Range (km)</th><th>Charging Type</th><th>Charge Time (hrs)</th><th>Price (USD)</th><th>Color</th><th>Country</th><th>Auto Level</th><th>CO2 (g/km)</th><th>Safety</th><th>Units Sold 2024</th><th>Warranty (yrs)</th></tr>';
//     for (let i = 0; i < result.top5.length; i++) {
//       let v = result.top5[i];
//       let co2Value = v.CO2_Emissions_g_per_km;
//       if (co2Value === null || co2Value === undefined) {
//         co2Value = "N/A";
//       }
//       let autoLevel = v.Autonomous_Level;
//       if (autoLevel === null || autoLevel === undefined) {
//         autoLevel = "N/A";
//       }
//       html +=
//         '<tr><td><span class="rank-badge rank-' +
//         (i + 1) +
//         '">' +
//         (i + 1) +
//         "</span></td><td><strong>" +
//         v.Manufacturer +
//         "</strong></td><td>" +
//         v.Model +
//         "</td><td>" +
//         v.Year +
//         "</td><td>" +
//         v.Battery_Type +
//         "</td><td>" +
//         v.Battery_Capacity_kWh +
//         "</td><td>" +
//         v.Range_km +
//         "</td><td>" +
//         v.Charging_Type +
//         "</td><td>" +
//         v.Charge_Time_hr +
//         "</td><td>$" +
//         Math.round(v.Price_USD).toLocaleString() +
//         "</td><td>" +
//         v.Color +
//         "</td><td>" +
//         v.Country_of_Manufacture +
//         "</td><td>" +
//         autoLevel +
//         "</td><td>" +
//         co2Value +
//         '</td><td><span class="safety-stars">' +
//         generateStars(v.Safety_Rating) +
//         "</span></td><td>" +
//         v.Units_Sold_2024.toLocaleString() +
//         "</td><td>" +
//         v.Warranty_Years +
//         "</td></tr>";
//     }
//     html += "</table>";
//   }
//   resultBox.className = "result-box show";
//   resultBox.innerHTML = html;
// }

// // ============================================================
// // OPERATION 6: Find best-selling EV in 2024
// // ============================================================

// // findBestSellingEV2024: Find the vehicle with highest Units_Sold_2024
// // Parameters: data (array)
// // Returns: object with best-selling vehicle and total sales across all vehicles
// function findBestSellingEV2024(data) {
//   let bestVehicle = null;
//   let highestSales = 0;
//   let totalSales = 0;
//   for (let i = 0; i < data.length; i++) {
//     totalSales = totalSales + data[i].Units_Sold_2024;
//     if (data[i].Units_Sold_2024 > highestSales) {
//       highestSales = data[i].Units_Sold_2024;
//       bestVehicle = data[i];
//     }
//   }
//   return { vehicle: bestVehicle, totalSales: totalSales };
// }

// // getTopSellers: Get top N best-selling vehicles
// // Parameters: data (array), count (number of top sellers to return)
// // Returns: array of top selling vehicles sorted by Units_Sold_2024 descending
// // Uses bubble sort to sort by sales
// function getTopSellers(data, count) {
//   // Copy array to avoid modifying original
//   let sorted = [];
//   for (let i = 0; i < data.length; i++) {
//     sorted[sorted.length] = data[i];
//   }
//   // Sort by Units_Sold_2024 descending using bubble sort
//   for (let i = 0; i < sorted.length - 1; i++) {
//     for (let j = 0; j < sorted.length - 1 - i; j++) {
//       if (sorted[j].Units_Sold_2024 < sorted[j + 1].Units_Sold_2024) {
//         let temp = sorted[j];
//         sorted[j] = sorted[j + 1];
//         sorted[j + 1] = temp;
//       }
//     }
//   }
//   // Get top N vehicles
//   let top = [];
//   let limit = count;
//   if (sorted.length < count) {
//     limit = sorted.length;
//   }
//   for (let k = 0; k < limit; k++) {
//     top[top.length] = sorted[k];
//   }
//   return top;
// }

// // runOperation6: Execute Operation 6 - Find best-selling EV in 2024
// // Displays best-selling vehicle with details and top 5 sellers table
// function runOperation6() {
//   let resultBox = document.getElementById("op6Result");
//   let result = findBestSellingEV2024(vehicles);

//   if (result.vehicle === null) {
//     resultBox.className = "result-box show";
//     resultBox.innerHTML =
//       '<div class="error-box"><div class="error-icon">🔍</div>No vehicles found in the dataset.</div>';
//     return;
//   }

//   let v = result.vehicle;
//   let top5 = getTopSellers(vehicles, 5);

//   let html =
//     '<div class="result-header"><div class="result-icon">🏆</div><div><div class="result-title">Best-Selling EV in 2024</div><div class="result-subtitle">Champion of electric vehicle sales</div></div></div>';

//   // Card with Top 5 Design
//   html += '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">';
//   // Winner card
//   html += '<div style="background: linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,184,0,0.1)); border-radius: 15px; padding: 25px; border: 1px solid rgba(255,215,0,0.3); text-align: center;">';
//   html += '<div style="font-size: 2.5rem; margin-bottom: 10px;">🏆</div>';
//   html += '<div style="font-size: 1.2rem; color: #ffd700; font-weight: bold;">#1 Best Seller</div>';
//   html += '<div style="font-size: 1.1rem; color: #fff; margin: 10px 0;">' + v.Manufacturer + ' ' + v.Model + '</div>';
//   html += '<div style="font-size: 2rem; color: #00ff88; font-weight: bold;">' + v.Units_Sold_2024.toLocaleString() + '</div>';
//   html += '<div style="color: #888; font-size: 0.9rem;">units sold</div>';
//   html += '</div>';
//   // Top 5 list
//   html += '<div style="background: rgba(0,0,0,0.3); border-radius: 15px; padding: 20px;">';
//   html += '<div style="color: #00d9ff; font-weight: bold; margin-bottom: 15px;">Top 5 Sellers</div>';
//   for (let i = 0; i < top5.length; i++) {
//     let badgeColor = '';
//     if (i === 0) { badgeColor = '#ffd700'; }
//     else if (i === 1) { badgeColor = '#c0c0c0'; }
//     else if (i === 2) { badgeColor = '#cd7f32'; }
//     else { badgeColor = '#00d9ff'; }
//     html += '<div style="display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">';
//     html += '<div style="width: 24px; height: 24px; border-radius: 50%; background: ' + badgeColor + '; color: #000; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.8rem;">' + (i + 1) + '</div>';
//     html += '<div style="flex: 1; color: #fff; font-size: 0.9rem;">' + top5[i].Manufacturer + ' ' + top5[i].Model + '</div>';
//     html += '<div style="color: #00ff88; font-size: 0.85rem;">' + top5[i].Units_Sold_2024.toLocaleString() + '</div>';
//     html += '</div>';
//   }
//   html += '</div>';
//   html += '</div>';

//   resultBox.className = "result-box show";
//   resultBox.innerHTML = html;
// }

// // ============================================================
// // PAGE LOAD: Load data and initialize UI
// // ============================================================

// // showPanel: Switch between operation panels (tab navigation)
// // Parameters: panelNumber (1-4)
// // Hides all panels and shows the selected one, updates tab styling
// function showPanel(panelNumber) {
//   let panelIds = ["panel1", "panel2", "panel3", "panel4"];
//   for (let i = 0; i < panelIds.length; i++) {
//     let panel = document.getElementById(panelIds[i]);
//     if (panel !== null) {
//       panel.className = "operation-panel";
//     }
//   }
//   let tabs = document.getElementsByClassName("nav-tab");
//   for (let i = 0; i < tabs.length; i++) {
//     tabs[i].className = "nav-tab";
//   }
//   let index = panelNumber - 1;
//   if (panelIds[index]) {
//     let activePanel = document.getElementById(panelIds[index]);
//     if (activePanel !== null) {
//       activePanel.className = "operation-panel active";
//     }
//   }
//   if (tabs[index]) {
//     tabs[index].className = "nav-tab active";
//   }
// }

// // loadData: Fetch JSON data and initialize the application
// // Loads vehicle data from JSON file, extracts unique values, and sets up UI
// function loadData() {
//   fetch("electric_vehicles_dataset.json")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       // Store vehicle data
//       vehicles = data;
//       // Extract unique values for dropdowns (Operation 1 and 4)
//       extractUniqueManufacturers();
//       extractUniqueChargingTypes();
//       // Hide loading message and show main content
//       document.getElementById("loadingMessage").style.display = "none";
//       document.getElementById("mainContent").style.display = "block";
//       // Count unique models
//       let uniqueModels = [];
//       for (let i = 0; i < vehicles.length; i++) {
//         let found = false;
//         for (let j = 0; j < uniqueModels.length; j++) {
//           if (uniqueModels[j] === vehicles[i].Model) {
//             found = true;
//           }
//         }
//         if (found === false) {
//           uniqueModels[uniqueModels.length] = vehicles[i].Model;
//         }
//       }

//       // Update statistics in header
//       document.getElementById("totalVehicles").textContent =
//         vehicles.length.toLocaleString();
//       document.getElementById("totalManufacturers").textContent =
//         uniqueManufacturers.length;
//       document.getElementById("totalModels").textContent =
//         uniqueModels.length;
//       // Populate dropdown menus
//       populateManufacturerDropdowns();
//       populateChargingTypeDropdown();
//     })
//     .catch(function (error) {
//       // Show error message if data loading fails
//       document.getElementById("loadingMessage").innerHTML =
//         '<div class="error-box"><div class="error-icon">⚠️</div>Error loading data. Please ensure the JSON file is in the same directory.</div>';
//     });
// }

// // window.onload: Start the application when page loads
// window.onload = function () {
//   loadData();
// };



// =============================================================
// SECTION 1: GLOBAL VARIABLES
// =============================================================

// Array to store all vehicle data from JSON file
let vehicles = [];

// Array to store unique manufacturer names (used by Op 1, 2, 3)
let uniqueManufacturers = [];

// Array to store unique charging type names (used by Op 4)
let uniqueChargingTypes = [];


// =============================================================
// SECTION 2: DATA EXTRACTION & DROPDOWN SETUP
// =============================================================

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

// extractUniqueChargingTypes: Extract unique charging types from vehicles array
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

// populateManufacturerDropdowns: Fill dropdown menu with manufacturer options
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

// populateChargingTypeDropdown: Fill dropdown menu with charging type options
function populateChargingTypeDropdown() {
  let chargingSelect = document.getElementById("op4ChargingType");
  for (let i = 0; i < uniqueChargingTypes.length; i++) {
    let option = document.createElement("option");
    option.value = uniqueChargingTypes[i];
    option.textContent = uniqueChargingTypes[i];
    chargingSelect.appendChild(option);
  }
}


// =============================================================
// SECTION 3: UTILITY HELPERS
// =============================================================

// generateStars: Convert numeric safety rating to star symbols
// Parameters: rating (number 1-5)
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


// =============================================================
// SECTION 4: OPERATION 1 - MANUFACTURER STATISTICS
// =============================================================

// countVehiclesByManufacturer: Count how many vehicles belong to a specific manufacturer
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

// runOperation1: Execute Operation 1 - Display manufacturer info
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
    if (allCounts.length === 0) {
      resultBox.className = "result-box show";
      resultBox.innerHTML =
        '<div class="error-box"><div class="error-icon">🔍</div>No vehicles found in the dataset.</div>';
      return;
    }
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
        '</span></div></div></div>';
    }
    html += '</div>';
    resultBox.className = "result-box show";
    resultBox.innerHTML = html;
    return;
  }

  // Operation 1: Count vehicles
  let count = countVehiclesByManufacturer(vehicles, manufacturer);

  if (count === 0) {
    resultBox.className = "result-box show";
    resultBox.innerHTML =
      '<div class="error-box"><div class="error-icon">🔍</div>No vehicles found for this manufacturer.</div>';
    return;
  }

  // Operation 2 Logic (Used inside Op 1 View): Get unique models with count
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
  // Sort alphabetically using bubble sort
  for (let i = 0; i < modelCounts.length - 1; i++) {
    for (let j = 0; j < modelCounts.length - 1 - i; j++) {
      if (modelCounts[j].name > modelCounts[j + 1].name) {
        let temp = modelCounts[j];
        modelCounts[j] = modelCounts[j + 1];
        modelCounts[j + 1] = temp;
      }
    }
  }

  // Operation 3 Logic (Used inside Op 1 View): Find longest range vehicle
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

  // Longest Range
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


// =============================================================
// SECTION 5: OPERATION 2 - LIST MODELS
// =============================================================

// getUniqueModels: Get all unique model names for a specific manufacturer
function getUniqueModels(data, manufacturer) {
  let models = [];
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

// runOperation2: Execute Operation 2 - List models by manufacturer
function runOperation2() {
  let manufacturer = document.getElementById("op2Manufacturer").value;
  let resultBox = document.getElementById("op2Result");

  if (manufacturer === "") {
    resultBox.className = "result-box show";
    resultBox.innerHTML =
      '<div class="error-box"><div class="error-icon">⚠️</div>Please select a manufacturer.</div>';
    return;
  }

  let models = getUniqueModels(vehicles, manufacturer);

  if (models.length === 0) {
    resultBox.className = "result-box show";
    resultBox.innerHTML =
      '<div class="error-box"><div class="error-icon">🔍</div>No models found for this manufacturer.</div>';
    return;
  }

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


// =============================================================
// SECTION 6: OPERATION 3 - LONGEST RANGE
// =============================================================

// findLongestRangeVehicle: Find vehicle with longest range for a manufacturer
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


// =============================================================
// SECTION 7: OPERATION 4 - CHARGING STATISTICS
// =============================================================

// calculateAverageChargeTime: Calculate average charging time for a specific charging type
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


// =============================================================
// SECTION 8: OPERATION 5 - SAFETY RANKINGS
// =============================================================

// findTopSafest2025Vehicles: Find and rank top 5 safest vehicles from year 2025
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
function runOperation5() {
  let resultBox = document.getElementById("op5Result");
  let result = findTopSafest2025Vehicles(vehicles);

  let html =
    '<div class="result-header"><div class="result-icon">🛡️</div><div><div class="result-title">Top 5 Safest 2025 Vehicles</div><div class="result-subtitle">Ranked by safety rating</div></div></div>';

  if (result.top5.length === 0) {
    html +=
      '<div class="error-box"><div class="error-icon">🔍</div>No 2025 vehicles found in the dataset.</div>';
  } else {
    html +=
      '<table class="data-table"><tr><th>Rank</th><th>Manufacturer</th><th>Model</th><th>Year</th><th>Battery Type</th><th>Battery (kWh)</th><th>Range (km)</th><th>Charging Type</th><th>Charge Time (hrs)</th><th>Price (USD)</th><th>Color</th><th>Country</th><th>Auto Level</th><th>CO2 (g/km)</th><th>Safety</th><th>Units Sold 2024</th><th>Warranty (yrs)</th></tr>';
    for (let i = 0; i < result.top5.length; i++) {
      let v = result.top5[i];
      let co2Value = v.CO2_Emissions_g_per_km;
      if (co2Value === null || co2Value === undefined) {
        co2Value = "N/A";
      }
      let autoLevel = v.Autonomous_Level;
      if (autoLevel === null || autoLevel === undefined) {
        autoLevel = "N/A";
      }
      html +=
        '<tr><td><span class="rank-badge rank-' +
        (i + 1) +
        '">' +
        (i + 1) +
        "</span></td><td><strong>" +
        v.Manufacturer +
        "</strong></td><td>" +
        v.Model +
        "</td><td>" +
        v.Year +
        "</td><td>" +
        v.Battery_Type +
        "</td><td>" +
        v.Battery_Capacity_kWh +
        "</td><td>" +
        v.Range_km +
        "</td><td>" +
        v.Charging_Type +
        "</td><td>" +
        v.Charge_Time_hr +
        "</td><td>$" +
        Math.round(v.Price_USD).toLocaleString() +
        "</td><td>" +
        v.Color +
        "</td><td>" +
        v.Country_of_Manufacture +
        "</td><td>" +
        autoLevel +
        "</td><td>" +
        co2Value +
        '</td><td><span class="safety-stars">' +
        generateStars(v.Safety_Rating) +
        "</span></td><td>" +
        v.Units_Sold_2024.toLocaleString() +
        "</td><td>" +
        v.Warranty_Years +
        "</td></tr>";
    }
    html += "</table>";
  }
  resultBox.className = "result-box show";
  resultBox.innerHTML = html;
}


// =============================================================
// SECTION 9: OPERATION 6 - SALES ANALYSIS
// =============================================================

// findBestSellingEV2024: Find the vehicle with highest Units_Sold_2024
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
  let top5 = getTopSellers(vehicles, 5);

  let html =
    '<div class="result-header"><div class="result-icon">🏆</div><div><div class="result-title">Best-Selling EV in 2024</div><div class="result-subtitle">Champion of electric vehicle sales</div></div></div>';

  // Card with Top 5 Design
  html += '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">';
  // Winner card
  html += '<div style="background: linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,184,0,0.1)); border-radius: 15px; padding: 25px; border: 1px solid rgba(255,215,0,0.3); text-align: center;">';
  html += '<div style="font-size: 2.5rem; margin-bottom: 10px;">🏆</div>';
  html += '<div style="font-size: 1.2rem; color: #ffd700; font-weight: bold;">#1 Best Seller</div>';
  html += '<div style="font-size: 1.1rem; color: #fff; margin: 10px 0;">' + v.Manufacturer + ' ' + v.Model + '</div>';
  html += '<div style="font-size: 2rem; color: #00ff88; font-weight: bold;">' + v.Units_Sold_2024.toLocaleString() + '</div>';
  html += '<div style="color: #888; font-size: 0.9rem;">units sold</div>';
  html += '</div>';
  // Top 5 list
  html += '<div style="background: rgba(0,0,0,0.3); border-radius: 15px; padding: 20px;">';
  html += '<div style="color: #00d9ff; font-weight: bold; margin-bottom: 15px;">Top 5 Sellers</div>';
  for (let i = 0; i < top5.length; i++) {
    let badgeColor = '';
    if (i === 0) { badgeColor = '#ffd700'; }
    else if (i === 1) { badgeColor = '#c0c0c0'; }
    else if (i === 2) { badgeColor = '#cd7f32'; }
    else { badgeColor = '#00d9ff'; }
    html += '<div style="display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">';
    html += '<div style="width: 24px; height: 24px; border-radius: 50%; background: ' + badgeColor + '; color: #000; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.8rem;">' + (i + 1) + '</div>';
    html += '<div style="flex: 1; color: #fff; font-size: 0.9rem;">' + top5[i].Manufacturer + ' ' + top5[i].Model + '</div>';
    html += '<div style="color: #00ff88; font-size: 0.85rem;">' + top5[i].Units_Sold_2024.toLocaleString() + '</div>';
    html += '</div>';
  }
  html += '</div>';
  html += '</div>';

  resultBox.className = "result-box show";
  resultBox.innerHTML = html;
}


// =============================================================
// SECTION 10: APP INITIALIZATION & NAVIGATION
// =============================================================

// showPanel: Switch between operation panels (tab navigation)
function showPanel(panelNumber) {
  let panelIds = ["panel1", "panel2", "panel3", "panel4"];
  for (let i = 0; i < panelIds.length; i++) {
    let panel = document.getElementById(panelIds[i]);
    if (panel !== null) {
      panel.className = "operation-panel";
    }
  }
  let tabs = document.getElementsByClassName("nav-tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].className = "nav-tab";
  }
  let index = panelNumber - 1;
  if (panelIds[index]) {
    let activePanel = document.getElementById(panelIds[index]);
    if (activePanel !== null) {
      activePanel.className = "operation-panel active";
    }
  }
  if (tabs[index]) {
    tabs[index].className = "nav-tab active";
  }
}

// loadData: Fetch JSON data and initialize the application
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
      // Count unique models
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

// window.onload: Start the application when page loads
window.onload = function () {
  loadData();
};