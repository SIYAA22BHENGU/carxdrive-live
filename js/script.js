const selectedCars = [null, null, null];
let currentCarsToCompare = [];

let compareButton = null;
let comparisonResults = null;
let comparisonTabs = [];

const overviewSpecifications = [
  {
    label: "Engine",
    key: "engine",
    winner: false
  },
  {
    label: "Power",
    key: "powerKw",
    winner: "highest",
    suffix: " kW"
  },
  {
    label: "Torque",
    key: "torqueNm",
    winner: "highest",
    suffix: " Nm"
  },
  {
    label: "Drivetrain",
    key: "drivetrain",
    winner: false
  },
  {
    label: "Transmission",
    key: "transmission",
    winner: false
  },
  {
    label: "0–100 km/h",
    key: "zeroToHundred",
    winner: "lowest",
    suffix: " s"
  },
  {
    label: "¼ Mile",
    key: "quarterMile",
    winner: "lowest",
    suffix: " s"
  },
  {
    label: "½ Mile",
    key: "halfMile",
    winner: "lowest",
    suffix: " s"
  },
  {
    label: "1 Mile",
    key: "oneMile",
    winner: "lowest",
    suffix: " s"
  },
  {
    label: "Top Speed",
    key: "topSpeedKmh",
    winner: "highest",
    suffix: " km/h"
  }
];

const transmissionSpecifications = [
  {
    label: "Transmission",
    key: "transmission",
    winner: false
  },
  {
    label: "Drivetrain",
    key: "drivetrain",
    winner: false
  }
];

const tyreSpecifications = [
  {
    label: "Front tyre",
    key: "frontTyre",
    winner: false
  },
  {
    label: "Rear tyre",
    key: "rearTyre",
    winner: false
  },
  {
    label: "Front wheel size",
    key: "frontWheelSize",
    winner: false
  },
  {
    label: "Rear wheel size",
    key: "rearWheelSize",
    winner: false
  },
  {
    label: "Tyre brand",
    key: "tyreBrand",
    winner: false
  },
  {
    label: "Tyre model",
    key: "tyreModel",
    winner: false
  }
];

const handlingSpecifications = [
  {
    label: "Steering system",
    key: "steeringSystem",
    winner: false
  },
  {
    label: "Steering ratio",
    key: "steeringRatio",
    winner: "lowest",
    suffix: ":1"
  },
  {
    label: "Turning circle",
    key: "turningCircleMetres",
    winner: "lowest",
    suffix: " m"
  },
  {
    label: "Front suspension",
    key: "frontSuspension",
    winner: false
  },
  {
    label: "Rear suspension",
    key: "rearSuspension",
    winner: false
  },
  {
    label: "Adaptive suspension",
    key: "adaptiveSuspension",
    winner: false
  },
  {
    label: "Rear-wheel steering",
    key: "rearWheelSteering",
    winner: false
  },
  {
    label: "Limited-slip differential",
    key: "limitedSlipDifferential",
    winner: false
  },
  {
    label: "Lateral acceleration",
    key: "lateralAccelerationG",
    winner: "highest",
    suffix: " g"
  },
  {
    label: "Slalom speed",
    key: "slalomSpeedKmh",
    winner: "highest",
    suffix: " km/h"
  },
  {
    label: "Moose test speed",
    key: "mooseTestSpeedKmh",
    winner: "highest",
    suffix: " km/h"
  },
  {
    label: "Track width front",
    key: "frontTrackWidthMm",
    winner: "highest",
    suffix: " mm"
  },
  {
    label: "Track width rear",
    key: "rearTrackWidthMm",
    winner: "highest",
    suffix: " mm"
  }
];

const rollingRaceSpecifications = [
  {
    label: "60–100 km/h",
    key: "sixtyToHundred",
    winner: "lowest",
    suffix: " seconds"
  },
  {
    label: "80–120 km/h",
    key: "eightyToOneTwenty",
    winner: "lowest",
    suffix: " seconds"
  },
  {
    label: "100–150 km/h",
    key: "hundredToOneFifty",
    winner: "lowest",
    suffix: " seconds"
  },
  {
    label: "100–200 km/h",
    key: "hundredToTwoHundred",
    winner: "lowest",
    suffix: " seconds"
  },
  {
    label: "120–180 km/h",
    key: "oneTwentyToOneEighty",
    winner: "lowest",
    suffix: " seconds"
  },
  {
    label: "160–200 km/h",
    key: "oneSixtyToTwoHundred",
    winner: "lowest",
    suffix: " seconds"
  },
  {
    label: "Rolling start speed",
    key: "rollingStartSpeed",
    winner: false,
    suffix: " km/h"
  },
  {
    label: "Rolling race distance",
    key: "rollingRaceDistance",
    winner: false
  }
];

const brakeSpecifications = [
  {
    label: "100–0 km/h braking distance",
    key: "braking100ToZero",
    winner: "lowest",
    suffix: " m"
  },
  {
    label: "Front brake type",
    key: "frontBrakeType",
    winner: false
  },
  {
    label: "Rear brake type",
    key: "rearBrakeType",
    winner: false
  },
  {
    label: "Front disc diameter",
    key: "frontDiscDiameter",
    winner: "highest",
    suffix: " mm"
  },
  {
    label: "Rear disc diameter",
    key: "rearDiscDiameter",
    winner: "highest",
    suffix: " mm"
  },
  {
    label: "Carbon-ceramic brakes available",
    key: "carbonCeramicBrakes",
    winner: false
  }
];

const dimensionSpecifications = [
  {
    label: "Length",
    key: "lengthMm",
    winner: false,
    suffix: " mm"
  },
  {
    label: "Width",
    key: "widthMm",
    winner: false,
    suffix: " mm"
  },
  {
    label: "Height",
    key: "heightMm",
    winner: false,
    suffix: " mm"
  },
  {
    label: "Wheelbase",
    key: "wheelbaseMm",
    winner: "highest",
    suffix: " mm"
  },
  {
    label: "Kerb weight",
    key: "kerbWeightKg",
    winner: "lowest",
    suffix: " kg"
  }
];

const weightSpecifications = [
  {
    label: "Kerb weight",
    key: "kerbWeightKg",
    winner: "lowest",
    suffix: " kg"
  },
  {
    label: "Power-to-weight ratio",
    key: "powerToWeightKwPerTon",
    winner: "highest",
    suffix: " kW/ton"
  },
  {
    label: "Torque-to-weight ratio",
    key: "torqueToWeightNmPerTon",
    winner: "highest",
    suffix: " Nm/ton"
  },
  {
    label: "Weight distribution",
    key: "weightDistribution",
    winner: false
  }
];

const aerodynamicSpecifications = [
  {
    label: "Drag coefficient",
    key: "dragCoefficient",
    winner: "lowest"
  },
  {
    label: "Frontal area",
    key: "frontalAreaM2",
    winner: "lowest",
    suffix: " m²"
  },
  {
    label: "Estimated drag area",
    key: "dragAreaM2",
    winner: "lowest",
    suffix: " m²"
  },
  {
    label: "Active aerodynamic system",
    key: "activeAerodynamics",
    winner: false
  },
  {
    label: "Rear spoiler",
    key: "rearSpoiler",
    winner: false
  },
  {
    label: "Flat underbody",
    key: "flatUnderbody",
    winner: false
  }
];

const fuelSpecifications = [
  {
    label: "Fuel type",
    key: "fuelType",
    winner: false
  },
  {
    label: "Fuel tank capacity",
    key: "fuelTankLitres",
    winner: "highest",
    suffix: " L"
  },
  {
    label: "Combined fuel consumption",
    key: "combinedFuelConsumption",
    winner: "lowest",
    suffix: " L/100 km"
  },
  {
    label: "Urban fuel consumption",
    key: "urbanFuelConsumption",
    winner: "lowest",
    suffix: " L/100 km"
  },
  {
    label: "Highway fuel consumption",
    key: "highwayFuelConsumption",
    winner: "lowest",
    suffix: " L/100 km"
  },
  {
    label: "Estimated driving range",
    key: "estimatedRangeKm",
    winner: "highest",
    suffix: " km"
  },
  {
    label: "CO₂ emissions",
    key: "co2Emissions",
    winner: "lowest",
    suffix: " g/km"
  }
];

const exhaustSpecifications = [
  {
    label: "Exhaust configuration",
    key: "exhaustConfiguration",
    winner: false
  },
  {
    label: "Number of exhaust outlets",
    key: "exhaustOutletCount",
    winner: "highest"
  },
  {
    label: "Active exhaust valves",
    key: "activeExhaustValves",
    winner: false
  },
  {
    label: "Selectable exhaust modes",
    key: "exhaustModes",
    winner: false
  },
  {
    label: "Artificial cabin sound",
    key: "artificialCabinSound",
    winner: false
  },
  {
    label: "Soft rev limiter",
    key: "softRevLimiter",
    winner: false
  },
  {
    label: "Stationary rev limit",
    key: "stationaryRevLimitRpm",
    winner: "highest",
    suffix: " rpm"
  },
  {
    label: "Maximum engine speed",
    key: "maximumEngineSpeedRpm",
    winner: "highest",
    suffix: " rpm"
  }
];

const interiorSpecifications = [
  {
    label: "Number of seats",
    key: "seatCount",
    winner: "highest"
  },
  {
    label: "Front seat type",
    key: "frontSeatType",
    winner: false
  },
  {
    label: "Seat upholstery",
    key: "seatUpholstery",
    winner: false
  },
  {
    label: "Heated front seats",
    key: "heatedFrontSeats",
    winner: false
  },
  {
    label: "Ventilated front seats",
    key: "ventilatedFrontSeats",
    winner: false
  },
  {
    label: "Electric seat adjustment",
    key: "electricSeatAdjustment",
    winner: false
  },
  {
    label: "Front headroom",
    key: "frontHeadroomMm",
    winner: "highest",
    suffix: " mm"
  },
  {
    label: "Rear headroom",
    key: "rearHeadroomMm",
    winner: "highest",
    suffix: " mm"
  },
  {
    label: "Front legroom",
    key: "frontLegroomMm",
    winner: "highest",
    suffix: " mm"
  },
  {
    label: "Rear legroom",
    key: "rearLegroomMm",
    winner: "highest",
    suffix: " mm"
  },
  {
    label: "Boot capacity",
    key: "bootCapacityLitres",
    winner: "highest",
    suffix: " L"
  },
  {
    label: "Rear seats fold",
    key: "rearSeatsFold",
    winner: false
  }
];

const testResultSpecifications = [
  {
    label: "Test source",
    key: "testSource",
    winner: false
  },
  {
    label: "Test conditions",
    key: "testConditions",
    winner: false
  },
  {
    label: "0–100 km/h tested",
    key: "testedZeroToHundred",
    winner: "lowest",
    suffix: " seconds"
  },
  {
    label: "0–200 km/h tested",
    key: "testedZeroToTwoHundred",
    winner: "lowest",
    suffix: " seconds"
  },
  {
    label: "Quarter mile tested",
    key: "testedQuarterMile",
    winner: "lowest",
    suffix: " seconds"
  },
  {
    label: "Quarter-mile trap speed",
    key: "quarterMileTrapSpeedKmh",
    winner: "highest",
    suffix: " km/h"
  },
  {
    label: "100–0 km/h braking",
    key: "brakingHundredToZeroMetres",
    winner: "lowest",
    suffix: " m"
  },
  {
    label: "200–0 km/h braking",
    key: "brakingTwoHundredToZeroMetres",
    winner: "lowest",
    suffix: " m"
  },
  {
    label: "Slalom test",
    key: "testedSlalomSpeedKmh",
    winner: "highest",
    suffix: " km/h"
  },
  {
    label: "Moose test",
    key: "testedMooseSpeedKmh",
    winner: "highest",
    suffix: " km/h"
  },
  {
    label: "Skidpad result",
    key: "testedSkidpadG",
    winner: "highest",
    suffix: " g"
  },
  {
    label: "Track lap time",
    key: "trackLapTimeSeconds",
    winner: "lowest",
    suffix: " seconds"
  },
  {
    label: "Track name",
    key: "trackName",
    winner: false
  }
];

const technologySpecifications = [
  {
    label: "Digital instrument display",
    key: "digitalInstrumentDisplay",
    winner: false
  },
  {
    label: "Instrument display size",
    key: "instrumentDisplaySizeInches",
    winner: "highest",
    suffix: " inches"
  },
  {
    label: "Infotainment system",
    key: "infotainmentSystem",
    winner: false
  },
  {
    label: "Infotainment screen size",
    key: "infotainmentScreenSizeInches",
    winner: "highest",
    suffix: " inches"
  },
  {
    label: "Apple CarPlay",
    key: "appleCarPlay",
    winner: false
  },
  {
    label: "Android Auto",
    key: "androidAuto",
    winner: false
  },
  {
    label: "Wireless phone charging",
    key: "wirelessPhoneCharging",
    winner: false
  },
  {
    label: "Head-up display",
    key: "headUpDisplay",
    winner: false
  },
  {
    label: "Voice assistant",
    key: "voiceAssistant",
    winner: false
  },
  {
    label: "Premium sound system",
    key: "premiumSoundSystem",
    winner: false
  },
  {
    label: "Number of speakers",
    key: "speakerCount",
    winner: "highest"
  },
  {
    label: "USB ports",
    key: "usbPortCount",
    winner: "highest"
  },
  {
    label: "Over-the-air updates",
    key: "overTheAirUpdates",
    winner: false
  },
  {
    label: "Mobile app support",
    key: "mobileAppSupport",
    winner: false
  }
];

const safetySpecifications = [
  {
    label: "ANCAP / Euro NCAP Rating",
    key: "safetyRating",
    winner: "highest"
  },
  {
    label: "Airbags",
    key: "airbagCount",
    winner: "highest"
  },
  {
    label: "ABS",
    key: "abs",
    winner: false
  },
  {
    label: "Electronic Stability Control",
    key: "esc",
    winner: false
  },
  {
    label: "Traction Control",
    key: "tractionControl",
    winner: false
  },
  {
    label: "Lane Keeping Assist",
    key: "laneKeepingAssist",
    winner: false
  },
  {
    label: "Blind Spot Monitoring",
    key: "blindSpotMonitoring",
    winner: false
  },
  {
    label: "Adaptive Cruise Control",
    key: "adaptiveCruiseControl",
    winner: false
  },
  {
    label: "Autonomous Emergency Braking",
    key: "autonomousEmergencyBraking",
    winner: false
  },
  {
    label: "Traffic Sign Recognition",
    key: "trafficSignRecognition",
    winner: false
  },
  {
    label: "Driver Attention Monitor",
    key: "driverAttentionMonitor",
    winner: false
  },
  {
    label: "360° Camera",
    key: "camera360",
    winner: false
  },
  {
    label: "Parking Sensors",
    key: "parkingSensors",
    winner: false
  }
];

const performanceSpecifications = [
  {
    label: "0–100 km/h",
    key: "zeroToHundred",
    winner: "lowest",
    suffix: " s"
  },
  {
    label: "¼ Mile",
    key: "quarterMile",
    winner: "lowest",
    suffix: " s"
  },
  {
    label: "½ Mile",
    key: "halfMile",
    winner: "lowest",
    suffix: " s"
  },
  {
    label: "1 Mile",
    key: "oneMile",
    winner: "lowest",
    suffix: " s"
  },
  {
    label: "Top Speed",
    key: "topSpeedKmh",
    winner: "highest",
    suffix: " km/h"
  }
];

const engineSpecifications = [
  {
    label: "Engine",
    key: "engine",
    winner: false
  },
  {
    label: "Power",
    key: "powerKw",
    winner: "highest",
    suffix: " kW"
  },
  {
    label: "Torque",
    key: "torqueNm",
    winner: "highest",
    suffix: " Nm"
  }
];

const dragRaceSpecifications = [
  {
    label: "¼ Mile",
    key: "quarterMile",
    winner: "lowest",
    suffix: " s"
  },
  {
    label: "½ Mile",
    key: "halfMile",
    winner: "lowest",
    suffix: " s"
  },
  {
    label: "1 Mile",
    key: "oneMile",
    winner: "lowest",
    suffix: " s"
  }
];

function formatSpecificationValue(car, specification) {
  const value = car?.[specification.key];

  if (
    value === undefined ||
    value === null ||
    value === ""
  ) {
    return "Not available";
  }

  const suffix = specification.suffix || "";

  if (typeof value === "number") {
    return `${value.toLocaleString()}${suffix}`;
  }

  return `${value}${suffix}`;
}

function buildSpecificationRows(
  specifications,
  carsToCompare
) {
  return specifications
    .map(function (specification) {
      const numericValues = carsToCompare
        .map(function (car) {
          return car?.[specification.key];
        })
        .filter(function (value) {
          return (
            typeof value === "number" &&
            Number.isFinite(value)
          );
        });

      let winningValue = null;

      if (
        specification.winner === "highest" &&
        numericValues.length > 0
      ) {
        winningValue = Math.max(...numericValues);
      }

      if (
        specification.winner === "lowest" &&
        numericValues.length > 0
      ) {
        winningValue = Math.min(...numericValues);
      }

      const carCells = carsToCompare
        .map(function (car) {
          const value =
            car?.[specification.key];

          const isWinner =
            winningValue !== null &&
            typeof value === "number" &&
            Number.isFinite(value) &&
            value === winningValue;

          const displayValue =
            formatSpecificationValue(
              car,
              specification
            );

          return `
            <td class="${
              isWinner ? "table-winner" : ""
            }">
              ${displayValue}

              ${
                isWinner
                  ? `
                    <span class="table-winner-label">
                      Winner
                    </span>
                  `
                  : ""
              }
            </td>
          `;
        })
        .join("");

      return `
        <tr>
          <td>${specification.label}</td>
          ${carCells}
        </tr>
      `;
    })
    .join("");
}


function buildMobileComparisonCards(
  specifications,
  carsToCompare
) {
  return specifications
    .map(function (specification) {
      const numericValues = carsToCompare
        .map(function (car) {
          return car?.[specification.key];
        })
        .filter(function (value) {
          return (
            typeof value === "number" &&
            Number.isFinite(value)
          );
        });

      let winningValue = null;

      if (
        specification.winner === "highest" &&
        numericValues.length > 0
      ) {
        winningValue = Math.max(...numericValues);
      }

      if (
        specification.winner === "lowest" &&
        numericValues.length > 0
      ) {
        winningValue = Math.min(...numericValues);
      }

      const carRows = carsToCompare
        .map(function (car, index) {
          const value = car?.[specification.key];
          const isWinner =
            winningValue !== null &&
            typeof value === "number" &&
            Number.isFinite(value) &&
            value === winningValue;

          return `
            <div class="mobile-comparison-car-row ${
              isWinner ? "mobile-comparison-winner" : ""
            }">
              <div class="mobile-comparison-car-name">
                <span>Car ${index + 1}</span>
                <strong>${car.brand} ${car.model}</strong>
                <small>${[car.generation, car.variant, car.year]
                  .filter(Boolean)
                  .join(" · ")}</small>
              </div>

              <div class="mobile-comparison-value">
                <strong>
                  ${formatSpecificationValue(car, specification)}
                </strong>

                ${
                  isWinner
                    ? `<span class="mobile-winner-badge">Winner</span>`
                    : ""
                }
              </div>
            </div>
          `;
        })
        .join("");

      return `
        <article class="mobile-comparison-card">
          <h3>${specification.label}</h3>
          <div class="mobile-comparison-card-rows">
            ${carRows}
          </div>
        </article>
      `;
    })
    .join("");
}

function setupCarSearch(slotNumber) {
  const input = document.getElementById(
    `carSearch${slotNumber}`
  );

  const resultsBox = document.getElementById(
    `searchResults${slotNumber}`
  );

  let highlightedIndex = -1;

  if (!input || !resultsBox) {
    return;
  }

  function closeResults() {
    resultsBox.classList.remove("active");
    highlightedIndex = -1;
  }

  function selectSearchResult(car) {
    const alreadySelected = selectedCars.some(
      function (selectedCar, index) {
        return (
          selectedCar?.id === car.id &&
          index !== slotNumber - 1
        );
      }
    );

    if (alreadySelected) {
      input.value = "";
      selectedCars[slotNumber - 1] = null;
      updateClearButton(slotNumber);

      resultsBox.innerHTML = `
        <div class="search-result-item search-result-message">
          This car is already selected
        </div>
      `;

      resultsBox.classList.add("active");
      highlightedIndex = -1;
      return;
    }

    selectedCars[slotNumber - 1] = car;
    input.value = [car.brand, car.model, car.variant]
      .filter(Boolean)
      .join(" ");

    updateClearButton(slotNumber);
    resultsBox.innerHTML = "";
    closeResults();

    const enoughCarsSelected =
      selectedCars[0] !== null &&
      selectedCars[1] !== null;

    if (
      enoughCarsSelected &&
      comparisonResults?.classList.contains("active")
    ) {
      currentCarsToCompare = selectedCars.filter(
        function (selectedCar) {
          return selectedCar !== null;
        }
      );

      const activeTab = document.querySelector(
        ".comparison-tab.active"
      );

      const activeCategory =
        activeTab?.dataset.category || "overview";

      renderComparison(activeCategory);
    }
  }

  input.addEventListener("input", function () {
    const searchText = input.value.trim().toLowerCase();

    selectedCars[slotNumber - 1] = null;
    resultsBox.innerHTML = "";
    highlightedIndex = -1;

    updateClearButton(slotNumber);

    if (searchText === "") {
      closeResults();
      return;
    }

    const availableCars =
      typeof cars !== "undefined" && Array.isArray(cars)
        ? cars
        : [];

    if (availableCars.length === 0) {
      resultsBox.innerHTML = `
        <div class="search-result-item search-result-message">
          Car database could not be loaded
        </div>
      `;

      resultsBox.classList.add("active");
      console.error(
        "The cars database is missing. Load data/cars.js before js/script.js."
      );
      return;
    }

    const matchingCars = availableCars.filter(function (car) {
      const fullName = [
        car.brand,
        car.model,
        car.generation,
        car.variant,
        car.year
      ]
        .filter(function (value) {
          return value !== undefined && value !== null;
        })
        .join(" ")
        .toLowerCase();

      return fullName.includes(searchText);
    });

    if (matchingCars.length === 0) {
      resultsBox.innerHTML = `
        <div class="search-result-item search-result-message">
          No cars found
        </div>
      `;

      resultsBox.classList.add("active");
      return;
    }

    matchingCars.forEach(function (car) {
      const resultItem = document.createElement("button");

      resultItem.type = "button";
      resultItem.className = "search-result-item";
      resultItem.textContent = [
        car.brand,
        car.model,
        car.generation,
        car.variant,
        car.year ? `(${car.year})` : ""
      ]
        .filter(Boolean)
        .join(" ");

      /*
        mousedown runs before the document click handler and
        prevents the input from losing focus before selection.
      */
      resultItem.addEventListener("mousedown", function (event) {
        event.preventDefault();
        event.stopPropagation();
        selectSearchResult(car);
      });

      resultItem.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
      });

      resultsBox.appendChild(resultItem);
    });

    resultsBox.classList.add("active");
  });

  input.addEventListener("keydown", function (event) {
    const items = Array.from(
      resultsBox.querySelectorAll(
        ".search-result-item:not(.search-result-message)"
      )
    );

    if (event.key === "Escape") {
      closeResults();
      return;
    }

    if (!items.length) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      highlightedIndex =
        (highlightedIndex + 1) % items.length;
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      highlightedIndex =
        (highlightedIndex - 1 + items.length) %
        items.length;
    } else if (
      event.key === "Enter" &&
      highlightedIndex >= 0
    ) {
      event.preventDefault();
      items[highlightedIndex].dispatchEvent(
        new MouseEvent("mousedown", {
          bubbles: true,
          cancelable: true
        })
      );
      return;
    } else {
      return;
    }

    items.forEach(function (item) {
      item.classList.remove("highlighted");
    });

    const highlightedItem = items[highlightedIndex];
    highlightedItem.classList.add("highlighted");
    highlightedItem.scrollIntoView({ block: "nearest" });
  });

  input.addEventListener("focus", function () {
    if (resultsBox.children.length > 0) {
      resultsBox.classList.add("active");
    }
  });
}

function getSpecificationsForCategory(category) {
  const categorySpecifications = {
    overview: overviewSpecifications,
    performance: performanceSpecifications,
    engine: engineSpecifications,
    transmission: transmissionSpecifications,
    "drag-race": dragRaceSpecifications,
    "rolling-race": rollingRaceSpecifications,
    handling: handlingSpecifications,
    tyres: tyreSpecifications,
    brakes: brakeSpecifications,
    dimensions: dimensionSpecifications,
    weight: weightSpecifications,
    aerodynamics: aerodynamicSpecifications,
    fuel: fuelSpecifications,
    exhaust: exhaustSpecifications,
    interior: interiorSpecifications,
    technology: technologySpecifications,
    safety: safetySpecifications,
    "test-results": testResultSpecifications
  };

  return categorySpecifications[category] || null;
}

function getCategoryTitle(category) {
  const categoryTitles = {
    overview: "Overview Comparison",
    performance: "Performance Comparison",
    engine: "Engine Comparison",
    transmission: "Transmission Comparison",
    "drag-race": "Drag Race Comparison",
    "rolling-race": "Rolling Race Comparison",
    handling: "Handling Comparison",
    tyres: "Tyres Comparison",
    brakes: "Brakes Comparison",
    dimensions: "Dimensions Comparison",
    weight: "Weight Comparison",
    aerodynamics: "Aerodynamics Comparison",
    fuel: "Fuel Comparison",
    exhaust: "Exhaust Comparison",
    interior: "Interior Comparison",
    technology: "Technology Comparison",
    safety: "Safety Comparison",
    "test-results": "Test Results Comparison"
  };

  return categoryTitles[category] || "Full Comparison";
}

function formatHeaderValue(value, suffix = "") {
  if (
    value === undefined ||
    value === null ||
    value === ""
  ) {
    return "Not available";
  }

  if (typeof value === "number") {
    return `${value.toLocaleString()}${suffix}`;
  }

  return `${value}${suffix}`;
}

function renderComparison(category = "overview") {
  const comparisonContent =
    document.getElementById("comparisonContent");

  if (!comparisonContent || currentCarsToCompare.length < 2) {
    return;
  }

  const specifications =
    getSpecificationsForCategory(category);
if (!specifications) {
  comparisonContent.innerHTML = `
    <h2 class="comparison-heading">
      ${getCategoryTitle(category)}
    </h2>

    <div class="empty-category-message">
      <h3>This category is coming next</h3>
      <p>
        We have created the category button, but its detailed
        specifications have not been added yet.
      </p>
    </div>
  `;

  return;
}
 comparisonContent.innerHTML = `
  <h2 class="comparison-heading">
    ${getCategoryTitle(category)}
  </h2>

  <div class="comparison-car-headers">
    ${currentCarsToCompare
      .map(function (car, index) {
        return `
          <article class="comparison-car-header">
           <span class="comparison-car-number">
  Car ${index + 1}
</span>

<div
  class="comparison-car-image ${
    car.image ? "has-image" : ""
  }"
>
  ${
    car.image
      ? `
        <img
          src="${car.image}"
          alt="${car.brand} ${car.model} ${car.variant || ""}"
          class="comparison-car-photo"
          loading="lazy"
        >
      `
      : `
        <span>${car.brand || "No image yet"}</span>
      `
  }
</div>

<h3>${car.brand} ${car.model}</h3>
            <p>
              ${car.generation} ${car.variant} · ${car.year}
            </p>

           <div class="header-performance-grid">
  <div>
    <span>Power</span>
    <strong>
      ${formatHeaderValue(car.powerKw, " kW")}
    </strong>
  </div>

  <div>
    <span>0–100</span>
    <strong>
      ${formatHeaderValue(car.zeroToHundred, " s")}
    </strong>
  </div>

  <div>
    <span>Top speed</span>
    <strong>
      ${formatHeaderValue(car.topSpeedKmh, " km/h")}
    </strong>
  </div>
</div>
  
          </article>
        `;
      })
      .join("")}
  </div>

    <div class="mobile-comparison-list" aria-label="Mobile car comparison">
      ${buildMobileComparisonCards(
        specifications,
        currentCarsToCompare
      )}
    </div>

    <div class="comparison-table-wrapper">
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Specification</th>

            ${currentCarsToCompare
              .map(function (car) {
                return `
                  <th>
                    <strong>
                      ${car.brand} ${car.model}
                    </strong>

                    <span>
                      ${car.generation} ${car.variant}
                    </span>

                    <span>${car.year}</span>
                  </th>
                `;
              })
              .join("")}
          </tr>
        </thead>

        <tbody>
          ${buildSpecificationRows(
            specifications,
            currentCarsToCompare
          )}
        </tbody>
      </table>
    </div>
  `;
}

function updateClearButton(slotNumber) {
  const clearButton = document.querySelector(
    `.clear-car-button[data-slot="${slotNumber}"]`
  );

  if (!clearButton) {
    return;
  }

  const selectedCar = selectedCars[slotNumber - 1];

  clearButton.classList.toggle(
    "visible",
    selectedCar !== null
  );
}

function setupClearCarButtons() {
  const clearButtons = document.querySelectorAll(
    ".clear-car-button"
  );

  clearButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const slotNumber = Number(button.dataset.slot);

      const input = document.getElementById(
        `carSearch${slotNumber}`
      );

      const resultsBox = document.getElementById(
        `searchResults${slotNumber}`
      );

      selectedCars[slotNumber - 1] = null;

      if (input) {
        input.value = "";
        input.focus();
      }

      if (resultsBox) {
        resultsBox.innerHTML = "";
        resultsBox.classList.remove("active");
      }

     updateClearButton(slotNumber);

const enoughCarsSelected =
  selectedCars[0] !== null &&
  selectedCars[1] !== null;

if (!enoughCarsSelected) {
  currentCarsToCompare = [];

  if (comparisonResults) {
    comparisonResults.classList.remove("active");
  }

  comparisonTabs.forEach(function (tab) {
    tab.classList.remove("active");
  });
}

if (
  enoughCarsSelected &&
  comparisonResults?.classList.contains("active")
) {
  currentCarsToCompare = selectedCars.filter(function (car) {
    return car !== null;
  });

  const activeTab = document.querySelector(
    ".comparison-tab.active"
  );

  const activeCategory =
    activeTab?.dataset.category || "overview";

  renderComparison(activeCategory);
}
    });
  });

}

function loadSharedComparison() {
  const params = new URLSearchParams(window.location.search);

  const availableCars =
    typeof cars !== "undefined" && Array.isArray(cars)
      ? cars
      : [];

  if (availableCars.length === 0) {
    return;
  }

  const sharedCarIds = [
    params.get("car1"),
    params.get("car2"),
    params.get("car3")
  ];

  let loadedCarCount = 0;

  sharedCarIds.forEach(function (carId, index) {
    if (!carId) {
      return;
    }

    const matchedCar = availableCars.find(function (car) {
      return String(car.id) === String(carId);
    });

    if (!matchedCar) {
      return;
    }

    selectedCars[index] = matchedCar;

    const input = document.getElementById(`carSearch${index + 1}`);

    if (input) {
      input.value = [
        matchedCar.brand,
        matchedCar.model,
        matchedCar.variant
      ]
        .filter(Boolean)
        .join(" ");
    }

    updateClearButton(index + 1);
    loadedCarCount++;
  });

  if (loadedCarCount < 2) {
    return;
  }

  currentCarsToCompare = selectedCars.filter(function (car) {
    return car !== null;
  });

  comparisonTabs.forEach(function (tab) {
    tab.classList.remove("active");
  });

  const overviewTab = document.querySelector(
    '.comparison-tab[data-category="overview"]'
  );

  if (overviewTab) {
    overviewTab.classList.add("active");
  }

  renderComparison("overview");

  if (comparisonResults) {
    comparisonResults.classList.add("active");
  }
}

function initializeComparePage() {
  compareButton = document.getElementById("compareButton");
  comparisonResults = document.getElementById(
    "comparisonResults"
  );
  comparisonTabs = document.querySelectorAll(
    ".comparison-tab"
  );

  setupCarSearch(1);
  setupCarSearch(2);
  setupCarSearch(3);
  setupClearCarButtons();
  loadSharedComparison();

  if (compareButton && comparisonResults) {
    compareButton.addEventListener("click", function () {
      const car1 = selectedCars[0];
      const car2 = selectedCars[1];
      const car3 = selectedCars[2];

      if (!car1 || !car2) {
        alert(
          "Please select Car 1 and Car 2 before comparing."
        );
        return;
      }

      currentCarsToCompare = car3
        ? [car1, car2, car3]
        : [car1, car2];

      comparisonTabs.forEach(function (tab) {
        tab.classList.remove("active");
      });

      const overviewTab = document.querySelector(
        '.comparison-tab[data-category="overview"]'
      );

      if (overviewTab) {
        overviewTab.classList.add("active");
      }

      renderComparison("overview");
      comparisonResults.classList.add("active");

      comparisonResults.scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  comparisonTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      if (
        !comparisonResults?.classList.contains("active")
      ) {
        return;
      }

      comparisonTabs.forEach(function (otherTab) {
        otherTab.classList.remove("active");
      });

      tab.classList.add("active");
      renderComparison(tab.dataset.category);
    });
  });

  document.addEventListener("click", function (event) {
    const clickedInsideSearch =
      event.target.closest?.(".car-search-input-wrapper") ||
      event.target.closest?.(".search-results");

    if (clickedInsideSearch) {
      return;
    }

    document
      .querySelectorAll(".search-results")
      .forEach(function (resultsBox) {
        resultsBox.classList.remove("active");
      });
  });
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeComparePage,
    { once: true }
  );
} else {
  initializeComparePage();
}
const shareComparisonBtn = document.getElementById("shareComparisonBtn");
const shareMessage = document.getElementById("shareMessage");

if (shareComparisonBtn) {
  shareComparisonBtn.addEventListener("click", async function () {
    const selected = selectedCars.filter(Boolean);

    if (selected.length < 2) {
      shareMessage.textContent = "Please compare at least two cars first.";
      return;
    }

    const params = new URLSearchParams();

    selected.forEach((car, index) => {
   params.set(`car${index + 1}`, car.id);
    });

    const shareUrl =
      `${window.location.origin}${window.location.pathname}?${params.toString()}`;

    const carNames = selected.map(car => `${car.brand} ${car.model}`);

    const shareText =
      `I compared ${carNames.join(", ")} on carXdrive.`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "carXdrive Comparison",
          text: shareText,
          url: shareUrl
        });

        shareMessage.textContent = "Comparison shared successfully.";
      } else {
        await navigator.clipboard.writeText(
          `${shareText} ${shareUrl}`
        );

        shareMessage.textContent = "Comparison link copied.";
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        shareMessage.textContent = "Unable to share the comparison.";
        console.error("Share error:", error);
      }
    }
  });
}