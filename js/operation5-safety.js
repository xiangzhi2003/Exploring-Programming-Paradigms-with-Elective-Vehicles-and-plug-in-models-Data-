// =============================================================================
// OPERATION5-SAFETY.JS - Operation 5 (Safety Ranking)
// =============================================================================
// Operation 5: Rank top 5 safest vehicles from 2025
// =============================================================================


// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * findTopSafest2025Vehicles - Find and rank top 5 safest vehicles from year 2025
 * @param {Array} data - Array of vehicle objects
 * @returns {Object} - Object with top5 array and total2025 count
 */
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


// =============================================================================
// OPERATION 5: Rank Top 5 Safest Vehicles from 2025
// =============================================================================

/**
 * runOperation5 - Execute Operation 5: Rank top 5 safest 2025 vehicles
 * Displays table of top 5 safest vehicles from year 2025 with all attributes
 */
function runOperation5() {
  let resultBox = document.getElementById("op5Result");
  let result = findTopSafest2025Vehicles(vehicles);

  let html =
    '<div class="result-header"><div class="result-icon">🛡️</div><div><div class="result-title">Top 5 Safest 2025 Vehicles</div><div class="result-subtitle">Ranked by safety rating</div></div></div>';

  if (result.top5.length === 0) {
    html +=
      '<div class="error-box"><div class="error-icon">🔍</div>No 2025 vehicles found in the dataset.</div>';
  } else {
    // Build detailed table with all vehicle attributes
    html +=
      '<table class="data-table"><tr><th>Rank</th><th>Manufacturer</th><th>Model</th><th>Year</th><th>Battery Type</th><th>Battery (kWh)</th><th>Range (km)</th><th>Charging Type</th><th>Charge Time (hrs)</th><th>Price (USD)</th><th>Color</th><th>Country</th><th>Auto Level</th><th>CO2 (g/km)</th><th>Safety</th><th>Units Sold 2024</th><th>Warranty (yrs)</th></tr>';

    for (let i = 0; i < result.top5.length; i++) {
      let v = result.top5[i];

      // Handle null/undefined values
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
