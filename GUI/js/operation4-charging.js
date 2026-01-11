// =============================================================================
// OPERATION4-CHARGING.JS - Operation 4 (Charging Analysis)
// =============================================================================
// Operation 4: Calculate average charging time by type
// =============================================================================


// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * calculateAverageChargeTime - Calculate average charging time for a specific charging type
 * @param {Array} data - Array of vehicle objects
 * @param {string} chargingType - Charging type to calculate average for
 * @returns {Object} - Object with average, count, min, max values
 */
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

/**
 * getAllChargingTypeStats - Get charging time statistics for all charging types
 * @param {Array} data - Array of vehicle objects
 * @returns {Array} - Array of objects sorted by average time (fastest first)
 */
function getAllChargingTypeStats(data) {
  let results = [];

  // Calculate stats for each charging type
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


// =============================================================================
// OPERATION 4: Calculate Average Charging Time by Type
// =============================================================================

/**
 * runOperation4 - Execute Operation 4: Calculate average charging time
 * Gets selected charging type and displays charging time statistics
 */
function runOperation4() {
  let chargingType = document.getElementById("op4ChargingType").value;
  let resultBox = document.getElementById("op4Result");

  // Validate selection
  if (chargingType === "") {
    resultBox.className = "result-box show";
    resultBox.innerHTML =
      '<div class="error-box"><div class="error-icon">⚠️</div>Please select a charging type.</div>';
    return;
  }

  // Handle "ALL" charging types selection
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
    // Handle specific charging type selection
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
