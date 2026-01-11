// =============================================================================
// UTILS.JS - Utility / Helper Functions
// =============================================================================
// This file contains utility functions used across multiple operations.
// =============================================================================

/**
 * generateStars - Convert numeric safety rating to star symbols
 * @param {number} rating - Safety rating from 1 to 5
 * @returns {string} - String of filled and empty stars (e.g., "★★★☆☆")
 * Used by: Operation 5 and 6
 */
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
