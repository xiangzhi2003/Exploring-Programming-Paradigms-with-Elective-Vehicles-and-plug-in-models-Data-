# APLC Assignment Phase 1 - Imperative Programming

## Project Overview
Electric Vehicle Data Processing using **Imperative Programming** paradigm in Node.js.

## Student Information
- **Name**: Chiang Xiang Zhi
- **Student ID**: TP077553
- **Date**: 30th December 2025

## Programming Constraints
- **ALLOWED**: `for`/`while` loops, `if/else` statements, mutable variables (`let`/`var`)
- **PROHIBITED**: `.map()`, `.filter()`, `.reduce()`, `.find()`, `.forEach()`, `.sort()`

## Dataset
- File: `electric_vehicles_dataset.json`
- Contains electric vehicle data with fields: Manufacturer, Model, Year, Range_km, Charge_Time_hr, Safety_Rating, Units_Sold_2024, etc.

## Operations

| Operation | File | Description | Status |
|-----------|------|-------------|--------|
| 1 | `Operation 1.js` | Count vehicles by manufacturer | Done |
| 2 | `Operation 2.js` | List models by manufacturer (interactive input) | Done |
| 3 | `Operation 3.js` | Find longest range model per manufacturer (interactive input) | Done |
| 4 | `Operation 4.js` | Calculate average charge time by charging type (interactive input) | Done |
| 5 | `Operation 5.js` | Rank top 5 safest 2025 vehicles | Done |
| 6 | `Operation 6.js` | Find best-selling EV in 2024 | Done |

## File Structure
```
Assignment Phase 1/
├── index.js                         # Data loading + displays all manufacturers and models
├── Operation 1.js                   # Count vehicles by manufacturer
├── Operation 2.js                   # List models by manufacturer (interactive)
├── Operation 3.js                   # Find longest range model (interactive)
├── Operation 4.js                   # Average charge time by type (interactive)
├── Operation 5.js                   # Top 5 safest 2025 vehicles
├── Operation 6.js                   # Best-selling EV in 2024
├── electric_vehicles_dataset.json   # Dataset
└── README.md                        # This file
```

## How to Run
```bash
# Run main index file
node index.js

# Run Operation 1
node "Operation 1.js"

# Run Operation 2 (interactive)
node "Operation 2.js"

# Run Operation 3 (interactive)
node "Operation 3.js"

# Run Operation 4 (interactive)
node "Operation 4.js"

# Run Operation 5
node "Operation 5.js"

# Run Operation 6
node "Operation 6.js"
```

## GitHub Repository
https://github.com/xiangzhi2003/Exploring-Programming-Paradigms-with-Elective-Vehicles-and-plug-in-models-Data-.git

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
