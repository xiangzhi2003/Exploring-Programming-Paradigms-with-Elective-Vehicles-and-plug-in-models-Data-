# APLC Assignment Phase 1 - Imperative Programming

## Project Overview
Electric Vehicle Data Processing using **Imperative Programming** paradigm. This project includes both a **Node.js CLI version** and a **Web-based version** for interactive data analysis.

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

| Operation | Description | Status |
|-----------|-------------|--------|
| 1 | Count vehicles by manufacturer | Done |
| 2 | List models by manufacturer (interactive input) | Done |
| 3 | Find longest range model per manufacturer (interactive input) | Done |
| 4 | Calculate average charge time by charging type (interactive input) | Done |
| 5 | Rank top 5 safest 2025 vehicles | Done |
| 6 | Find best-selling EV in 2024 | Done |

## File Structure
```
Assignment Phase 1/
├── CLI/                                 # Node.js CLI Version
│   ├── index.js                         # Data loading + displays all manufacturers and models
│   ├── Operation 1.js                   # Count vehicles by manufacturer
│   ├── Operation 2.js                   # List models by manufacturer (interactive)
│   ├── Operation 3.js                   # Find longest range model (interactive)
│   ├── Operation 4.js                   # Average charge time by type (interactive)
│   ├── Operation 5.js                   # Top 5 safest 2025 vehicles
│   └── Operation 6.js                   # Best-selling EV in 2024
│
├── GUI/                                 # Web-based Version
│   ├── electric_vehicles_website.html   # Main HTML page
│   ├── electric_vehicles_website.css    # Stylesheet
│   └── js/
│       ├── main.js                      # Global variables and entry point
│       ├── utils.js                     # Utility functions
│       ├── data-loader.js               # JSON data loading
│       ├── operation1-manufacturer.js   # Manufacturer count operations
│       ├── operation4-charging.js       # Charging time operations
│       ├── operation5-safety.js         # Safety ranking operations
│       ├── operation6-sales.js          # Sales analysis operations
│       └── ui-navigation.js             # UI navigation handling
│
├── electric_vehicles_dataset.json       # Dataset
├── LICENSE                              # MIT License
└── README.md                            # This file
```

## How to Run

### Node.js CLI Version
```bash
# Navigate to CLI folder
cd CLI

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

### Web-based Version (GUI)
Open `GUI/electric_vehicles_website.html` in a web browser with a local server (required for JSON loading):

```bash
# Using Python (run from project root)
python -m http.server 8000

# Using Node.js (with http-server package)
npx http-server

# Then open http://localhost:8000/GUI/electric_vehicles_website.html
```

## GitHub Repository
https://github.com/xiangzhi2003/Exploring-Programming-Paradigms-with-Elective-Vehicles-and-plug-in-models-Data-.git

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
