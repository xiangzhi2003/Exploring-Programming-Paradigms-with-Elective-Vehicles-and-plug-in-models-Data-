// =============================================================================
// OPERATION6-SALES.JS - Operation 6 (Sales Analysis)
// =============================================================================
// Operation 6: Find best-selling EV in 2024
// =============================================================================


// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * findBestSellingEV2024 - Find the vehicle with highest Units_Sold_2024
 * @param {Array} data - Array of vehicle objects
 * @returns {Object} - Object with best-selling vehicle and total sales across all vehicles
 */
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

/**
 * getTopSellers - Get top N best-selling vehicles
 * @param {Array} data - Array of vehicle objects
 * @param {number} count - Number of top sellers to return
 * @returns {Array} - Array of top selling vehicles sorted by Units_Sold_2024 descending
 */
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


// =============================================================================
// OPERATION 6: Find Best-Selling EV in 2024
// =============================================================================

/**
 * runOperation6 - Execute Operation 6: Find best-selling EV in 2024
 * Displays best-selling vehicle with details and top 5 sellers table
 */
function runOperation6() {
  let resultBox = document.getElementById("op6Result");
  let result = findBestSellingEV2024(vehicles);

  // Handle no vehicles found
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

  // Build two-column layout with winner card and top 5 list
  html += '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">';

  // Winner Card
  html += '<div style="background: linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,184,0,0.1)); border-radius: 15px; padding: 25px; border: 1px solid rgba(255,215,0,0.3); text-align: center;">';
  html += '<div style="font-size: 2.5rem; margin-bottom: 10px;">🏆</div>';
  html += '<div style="font-size: 1.2rem; color: #ffd700; font-weight: bold;">#1 Best Seller</div>';
  html += '<div style="font-size: 1.1rem; color: #fff; margin: 10px 0;">' + v.Manufacturer + ' ' + v.Model + '</div>';
  html += '<div style="font-size: 2rem; color: #00ff88; font-weight: bold;">' + v.Units_Sold_2024.toLocaleString() + '</div>';
  html += '<div style="color: #888; font-size: 0.9rem;">units sold</div>';
  html += '</div>';

  // Top 5 List
  html += '<div style="background: rgba(0,0,0,0.3); border-radius: 15px; padding: 20px;">';
  html += '<div style="color: #00d9ff; font-weight: bold; margin-bottom: 15px;">Top 5 Sellers</div>';

  for (let i = 0; i < top5.length; i++) {
    // Assign badge colors based on rank
    let badgeColor = '';
    if (i === 0) {
      badgeColor = '#ffd700'; // Gold
    } else if (i === 1) {
      badgeColor = '#c0c0c0'; // Silver
    } else if (i === 2) {
      badgeColor = '#cd7f32'; // Bronze
    } else {
      badgeColor = '#00d9ff'; // Default
    }

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
