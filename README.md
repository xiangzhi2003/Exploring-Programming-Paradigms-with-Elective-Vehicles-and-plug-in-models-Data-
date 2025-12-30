# APLC Assignment Phase 1 - Imperative Programming

## Project Overview
Electric Vehicle Data Processing using **Imperative Programming** paradigm in Node.js.

## Programming Constraints
- **ALLOWED**: `for`/`while` loops, `if/else` statements, mutable variables (`let`/`var`)
- **PROHIBITED**: `.map()`, `.filter()`, `.reduce()`, `.find()`, `.forEach()`, `.sort()`

## Dataset
- File: `electric_vehicles_dataset.json`
- Contains electric vehicle data with fields: Manufacturer, Model, Year, Range_km, Charge_Time_hr, Safety_Rating, Units_Sold_2024, etc.

## Operations

### Completed

| Operation | File | Description | Status |
|-----------|------|-------------|--------|
| 1 | `Operation 1.js` | Count vehicles by manufacturer | Done |
| 2 | `Operation 2.js` | List models by manufacturer (interactive input) | Done |

### Pending

| Operation | Description | Status |
|-----------|-------------|--------|
| 3 | Find longest range model per manufacturer | Pending |
| 4 | Calculate average charge time by type | Pending |
| 5 | Rank top 5 safest 2025 vehicles | Pending |
| 6 | Find best-selling EV in 2024 | Pending |

## File Structure
```
Assignment Phase 1/
├── index.js                         # Data loading + displays manufacturers
├── Operation 1.js                   # Count vehicles by manufacturer
├── Operation 2.js                   # List models (interactive)
├── electric_vehicles_dataset.json   # Dataset
└── README.md                        # This file
```

## How to Run
```bash
# Run Operation 1
node "Operation 1.js"

# Run Operation 2 (interactive)
node "Operation 2.js"
```

## GitHub Repository
https://github.com/xiangzhi2003/Exploring-Programming-Paradigms-with-Elective-Vehicles-and-plug-in-models-Data-.git
