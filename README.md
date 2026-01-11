# APLC Assignment Phase 1 - Imperative Programming

## Project Overview
Electric Vehicle Data Processing using **Imperative Programming** paradigm. This project includes both a **Node.js CLI version** and a **Web-based GUI version** for interactive data analysis.

## Student Information
- **Name**: Chiang Xiang Zhi
- **Student ID**: TP077553
- **Date**: 30th December 2025

## Programming Constraints
- **ALLOWED**: `for`/`while` loops, `if/else` statements, mutable variables (`let`/`var`)
- **PROHIBITED**: `.map()`, `.filter()`, `.reduce()`, `.find()`, `.forEach()`, `.sort()`

## Dataset
- **File**: `electric_vehicles_dataset.json`
- **Fields**: Manufacturer, Model, Year, Battery_Type, Battery_Capacity_kWh, Range_km, Charging_Type, Charge_Time_hr, Price_USD, Color, Country_of_Manufacture, Autonomous_Level, CO2_Emissions_g_per_km, Safety_Rating, Units_Sold_2024, Warranty_Years

## Operations

| Operation | Description |
|-----------|-------------|
| 1 | Count vehicles by manufacturer |
| 2 | List models by manufacturer |
| 3 | Find longest range model per manufacturer |
| 4 | Calculate average charge time by charging type |
| 5 | Rank top 5 safest 2025 vehicles |
| 6 | Find best-selling EV in 2024 |

## File Structure
```
Assignment Phase 1/
├── CLI/                                 # Node.js Command Line Version
│   ├── index.js                         # Entry point - displays all manufacturers and models
│   ├── Operation 1.js                   # Count vehicles by manufacturer
│   ├── Operation 2.js                   # List models by manufacturer (interactive)
│   ├── Operation 3.js                   # Find longest range model (interactive)
│   ├── Operation 4.js                   # Average charge time by type (interactive)
│   ├── Operation 5.js                   # Top 5 safest 2025 vehicles
│   └── Operation 6.js                   # Best-selling EV in 2024
│
├── GUI/                                 # Web-based GUI Version
│   ├── electric_vehicles_website.html   # Main HTML page (4 tabs)
│   ├── electric_vehicles_website.css    # Stylesheet
│   └── js/
│       ├── main.js                      # Global variables and entry point
│       ├── utils.js                     # Utility functions (star rating display)
│       ├── data-loader.js               # JSON data loading and dropdown population
│       ├── operation1-manufacturer.js   # Operations 1, 2, 3 combined (Manufacturer Info)
│       ├── operation4-charging.js       # Operation 4 (Charging Time)
│       ├── operation5-safety.js         # Operation 5 (Safety Ranking)
│       ├── operation6-sales.js          # Operation 6 (Sales Analysis)
│       └── ui-navigation.js             # Tab navigation handling
│
├── electric_vehicles_dataset.json       # Dataset (shared by CLI and GUI)
├── LICENSE                              # MIT License
└── README.md                            # This file
```

## GUI Tab Structure
The web interface has 4 tabs:
1. **Manufacturer Info** - Operations 1, 2, 3 combined (count, models list, longest range)
2. **Charge Time** - Operation 4 (average charging time by type)
3. **Top 5 Safest** - Operation 5 (safest 2025 vehicles)
4. **Best Seller** - Operation 6 (best-selling EV in 2024)

## How to Run

### Node.js CLI Version
```bash
# Navigate to CLI folder
cd CLI

# Run main index file
node index.js

# Run individual operations
node "Operation 1.js"
node "Operation 2.js"
node "Operation 3.js"
node "Operation 4.js"
node "Operation 5.js"
node "Operation 6.js"
```

### Web-based GUI Version
A local server is required for JSON loading:

```bash
# Using Python (run from project root)
python -m http.server 8000

# Using Node.js
npx http-server

# Then open in browser
http://localhost:8000/GUI/electric_vehicles_website.html
```

## GitHub Repository
https://github.com/xiangzhi2003/Exploring-Programming-Paradigms-with-Elective-Vehicles-and-plug-in-models-Data-.git

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
