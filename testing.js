// ============================================================
// Testing File - Verify JSON Data Reading
// ============================================================
// Purpose: Test if the electric_vehicles_dataset.json can be read correctly
// ============================================================

const fs = require('fs');

// Read the JSON file
console.log('Attempting to read JSON file...');
const rawData = fs.readFileSync('electric_vehicles_dataset.json', 'utf8');

// Parse the JSON
const vehicles = JSON.parse(rawData);

// Print basic info
console.log('='.repeat(50));
console.log('JSON file read successfully!');
console.log('Total records:', vehicles.length);
console.log('='.repeat(50));

// Print all vehicles in the dataset using for loop
console.log('\nAll vehicles in dataset:\n');
for (let i = 0; i < vehicles.length; i++) {
    console.log('--- Vehicle', i + 1, '---');
    console.log(vehicles[i]);
    console.log('');
}
