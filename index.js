// ============================================================
// APLC Assignment Phase 1 - Imperative Programming Paradigm
// ============================================================
// Student: [C]
// Student ID: [Your ID]
// Date: [Date]
//
// Description: This program processes Electric Vehicle data
// using ONLY imperative programming constructs:
// - for/while loops
// - if/else statements
// - mutable variables (let/var)
//
// PROHIBITED: .map(), .filter(), .reduce(), .find(), .forEach(), .sort()
// ============================================================

// Import the file system module for reading files
const fs = require('fs');

// Read the JSON file from the file system
// Using synchronous read for simplicity
const rawData = fs.readFileSync('electric_vehicles_dataset.json', 'utf8');
