const carDetailsYear =
  document.getElementById("carDetailsYear");

const carDetailsName =
  document.getElementById("carDetailsName");

const carDetailsImageBrand =
  document.getElementById("carDetailsImageBrand");

const carDetailsError =
  document.getElementById("carDetailsError");

const carSpecifications =
  document.getElementById("carSpecifications");

  const carSectionNavigation =
  document.getElementById("carSectionNavigation");


const specificationCategories = [
  {
    title: "Overview",
    specifications: [
      {
        key: "brand",
        label: "Brand"
      },
      {
        key: "model",
        label: "Model"
      },
      {
        key: "generation",
        label: "Generation"
      },
      {
        key: "variant",
        label: "Variant"
      },
      {
        key: "year",
        label: "Model Year"
      }
    ]
  },

  {
    title: "Engine",
    specifications: [
      {
        key: "engine",
        label: "Engine"
      },
      {
        key: "powerKw",
        label: "Power",
        suffix: " kW"
      },
      {
        key: "torqueNm",
        label: "Torque",
        suffix: " Nm"
      },
      {
        key: "fuelType",
        label: "Fuel Type"
      },
      {
        key: "maximumEngineSpeedRpm",
        label: "Maximum Engine Speed",
        suffix: " rpm"
      },
      {
        key: "stationaryRevLimitRpm",
        label: "Stationary Rev Limit",
        suffix: " rpm"
      },
      {
        key: "softRevLimiter",
        label: "Soft Rev Limiter"
      }
    ]
  },

  {
    title: "Performance",
    specifications: [
      {
        key: "zeroToHundred",
        label: "0–100 km/h",
        suffix: " s"
      },
      {
        key: "topSpeedKmh",
        label: "Top Speed",
        suffix: " km/h"
      },
      {
        key: "quarterMile",
        label: "Quarter Mile",
        suffix: " s"
      },
      {
        key: "halfMile",
        label: "Half Mile",
        suffix: " s"
      },
      {
        key: "oneMile",
        label: "One Mile",
        suffix: " s"
      },
      {
        key: "powerToWeightKwPerTon",
        label: "Power-to-Weight",
        suffix: " kW/ton"
      },
      {
        key: "torqueToWeightNmPerTon",
        label: "Torque-to-Weight",
        suffix: " Nm/ton"
      }
    ]
  },

  {
    title: "Transmission and Drivetrain",
    specifications: [
      {
        key: "transmission",
        label: "Transmission"
      },
      {
        key: "drivetrain",
        label: "Drivetrain"
      },
      {
        key: "limitedSlipDifferential",
        label: "Limited-Slip Differential"
      }
    ]
  },

  {
    title: "Rolling Acceleration",
    specifications: [
      {
        key: "sixtyToHundred",
        label: "60–100 km/h",
        suffix: " s"
      },
      {
        key: "eightyToOneTwenty",
        label: "80–120 km/h",
        suffix: " s"
      },
      {
        key: "hundredToOneFifty",
        label: "100–150 km/h",
        suffix: " s"
      },
      {
        key: "hundredToTwoHundred",
        label: "100–200 km/h",
        suffix: " s"
      },
      {
        key: "oneTwentyToOneEighty",
        label: "120–180 km/h",
        suffix: " s"
      },
      {
        key: "oneSixtyToTwoHundred",
        label: "160–200 km/h",
        suffix: " s"
      },
      {
        key: "rollingStartSpeed",
        label: "Rolling Start Speed",
        suffix: " km/h"
      },
      {
        key: "rollingRaceDistance",
        label: "Rolling Race Distance"
      }
    ]
  },

  {
    title: "Tyres and Wheels",
    specifications: [
      {
        key: "frontTyre",
        label: "Front Tyre"
      },
      {
        key: "rearTyre",
        label: "Rear Tyre"
      },
      {
        key: "frontWheelSize",
        label: "Front Wheel Size"
      },
      {
        key: "rearWheelSize",
        label: "Rear Wheel Size"
      },
      {
        key: "tyreBrand",
        label: "Tyre Brand"
      },
      {
        key: "tyreModel",
        label: "Tyre Model"
      }
    ]
  },

  {
    title: "Brakes",
    specifications: [
      {
        key: "braking100ToZero",
        label: "100–0 km/h Braking Distance",
        suffix: " m"
      },
      {
        key: "frontBrakeType",
        label: "Front Brake Type"
      },
      {
        key: "rearBrakeType",
        label: "Rear Brake Type"
      },
      {
        key: "frontDiscDiameter",
        label: "Front Disc Diameter",
        suffix: " mm"
      },
      {
        key: "rearDiscDiameter",
        label: "Rear Disc Diameter",
        suffix: " mm"
      },
      {
        key: "carbonCeramicBrakes",
        label: "Carbon-Ceramic Brakes"
      }
    ]
  },

  {
    title: "Dimensions",
    specifications: [
      {
        key: "lengthMm",
        label: "Length",
        suffix: " mm"
      },
      {
        key: "widthMm",
        label: "Width",
        suffix: " mm"
      },
      {
        key: "heightMm",
        label: "Height",
        suffix: " mm"
      },
      {
        key: "wheelbaseMm",
        label: "Wheelbase",
        suffix: " mm"
      },
      {
        key: "frontTrackWidthMm",
        label: "Front Track Width",
        suffix: " mm"
      },
      {
        key: "rearTrackWidthMm",
        label: "Rear Track Width",
        suffix: " mm"
      },
      {
        key: "turningCircleMetres",
        label: "Turning Circle",
        suffix: " m"
      }
    ]
  },

  {
    title: "Weight",
    specifications: [
      {
        key: "kerbWeightKg",
        label: "Kerb Weight",
        suffix: " kg"
      },
      {
        key: "weightDistribution",
        label: "Weight Distribution"
      }
    ]
  },

  {
    title: "Aerodynamics",
    specifications: [
      {
        key: "dragCoefficient",
        label: "Drag Coefficient"
      },
      {
        key: "frontalAreaM2",
        label: "Frontal Area",
        suffix: " m²"
      },
      {
        key: "dragAreaM2",
        label: "Drag Area",
        suffix: " m²"
      },
      {
        key: "activeAerodynamics",
        label: "Active Aerodynamics"
      },
      {
        key: "rearSpoiler",
        label: "Rear Spoiler"
      },
      {
        key: "flatUnderbody",
        label: "Flat Underbody"
      }
    ]
  },

  {
    title: "Fuel and Emissions",
    specifications: [
      {
        key: "fuelTankLitres",
        label: "Fuel Tank Capacity",
        suffix: " L"
      },
      {
        key: "combinedFuelConsumption",
        label: "Combined Consumption",
        suffix: " L/100 km"
      },
      {
        key: "urbanFuelConsumption",
        label: "Urban Consumption",
        suffix: " L/100 km"
      },
      {
        key: "highwayFuelConsumption",
        label: "Highway Consumption",
        suffix: " L/100 km"
      },
      {
        key: "estimatedRangeKm",
        label: "Estimated Range",
        suffix: " km"
      },
      {
        key: "co2Emissions",
        label: "CO₂ Emissions",
        suffix: " g/km"
      }
    ]
  },

  {
    title: "Exhaust",
    specifications: [
      {
        key: "exhaustConfiguration",
        label: "Exhaust Configuration"
      },
      {
        key: "exhaustOutletCount",
        label: "Exhaust Outlet Count"
      },
      {
        key: "activeExhaustValves",
        label: "Active Exhaust Valves"
      },
      {
        key: "exhaustModes",
        label: "Exhaust Modes"
      },
      {
        key: "artificialCabinSound",
        label: "Artificial Cabin Sound"
      }
    ]
  },

  {
    title: "Interior",
    specifications: [
      {
        key: "seatCount",
        label: "Seat Count"
      },
      {
        key: "frontSeatType",
        label: "Front Seat Type"
      },
      {
        key: "seatUpholstery",
        label: "Seat Upholstery"
      },
      {
        key: "heatedFrontSeats",
        label: "Heated Front Seats"
      },
      {
        key: "ventilatedFrontSeats",
        label: "Ventilated Front Seats"
      },
      {
        key: "electricSeatAdjustment",
        label: "Electric Seat Adjustment"
      },
      {
        key: "frontHeadroomMm",
        label: "Front Headroom",
        suffix: " mm"
      },
      {
        key: "rearHeadroomMm",
        label: "Rear Headroom",
        suffix: " mm"
      },
      {
        key: "frontLegroomMm",
        label: "Front Legroom",
        suffix: " mm"
      },
      {
        key: "rearLegroomMm",
        label: "Rear Legroom",
        suffix: " mm"
      },
      {
        key: "bootCapacityLitres",
        label: "Boot Capacity",
        suffix: " L"
      },
      {
        key: "rearSeatsFold",
        label: "Rear Seat Folding"
      }
    ]
  },

  {
    title: "Technology",
    specifications: [
      {
        key: "digitalInstrumentDisplay",
        label: "Digital Instrument Display"
      },
      {
        key: "instrumentDisplaySizeInches",
        label: "Instrument Display Size",
        suffix: " inches"
      },
      {
        key: "infotainmentSystem",
        label: "Infotainment System"
      },
      {
        key: "infotainmentScreenSizeInches",
        label: "Infotainment Screen Size",
        suffix: " inches"
      },
      {
        key: "appleCarPlay",
        label: "Apple CarPlay"
      },
      {
        key: "androidAuto",
        label: "Android Auto"
      },
      {
        key: "wirelessPhoneCharging",
        label: "Wireless Phone Charging"
      },
      {
        key: "headUpDisplay",
        label: "Head-Up Display"
      },
      {
        key: "voiceAssistant",
        label: "Voice Assistant"
      },
      {
        key: "premiumSoundSystem",
        label: "Premium Sound System"
      },
      {
        key: "speakerCount",
        label: "Speaker Count"
      },
      {
        key: "usbPortCount",
        label: "USB Port Count"
      },
      {
        key: "overTheAirUpdates",
        label: "Over-the-Air Updates"
      },
      {
        key: "mobileAppSupport",
        label: "Mobile App Support"
      }
    ]
  },

  {
    title: "Safety",
    specifications: [
      {
        key: "safetyRating",
        label: "Safety Rating",
        suffix: "/5"
      },
      {
        key: "airbagCount",
        label: "Airbag Count"
      },
      {
        key: "abs",
        label: "ABS"
      },
      {
        key: "esc",
        label: "Electronic Stability Control"
      },
      {
        key: "tractionControl",
        label: "Traction Control"
      },
      {
        key: "laneKeepingAssist",
        label: "Lane-Keeping Assist"
      },
      {
        key: "blindSpotMonitoring",
        label: "Blind-Spot Monitoring"
      },
      {
        key: "adaptiveCruiseControl",
        label: "Adaptive Cruise Control"
      },
      {
        key: "autonomousEmergencyBraking",
        label: "Autonomous Emergency Braking"
      },
      {
        key: "trafficSignRecognition",
        label: "Traffic-Sign Recognition"
      },
      {
        key: "driverAttentionMonitor",
        label: "Driver Attention Monitor"
      },
      {
        key: "camera360",
        label: "360-Degree Camera"
      },
      {
        key: "parkingSensors",
        label: "Parking Sensors"
      }
    ]
  },

  {
    title: "Handling",
    specifications: [
      {
        key: "steeringSystem",
        label: "Steering System"
      },
      {
        key: "steeringRatio",
        label: "Steering Ratio"
      },
      {
        key: "frontSuspension",
        label: "Front Suspension"
      },
      {
        key: "rearSuspension",
        label: "Rear Suspension"
      },
      {
        key: "adaptiveSuspension",
        label: "Adaptive Suspension"
      },
      {
        key: "rearWheelSteering",
        label: "Rear-Wheel Steering"
      },
      {
        key: "lateralAccelerationG",
        label: "Lateral Acceleration",
        suffix: " g"
      },
      {
        key: "slalomSpeedKmh",
        label: "Slalom Speed",
        suffix: " km/h"
      },
      {
        key: "mooseTestSpeedKmh",
        label: "Moose-Test Speed",
        suffix: " km/h"
      }
    ]
  },

  {
    title: "Independent Test Results",
    specifications: [
      {
        key: "testSource",
        label: "Test Source"
      },
      {
        key: "testConditions",
        label: "Test Conditions"
      },
      {
        key: "testedZeroToHundred",
        label: "Tested 0–100 km/h",
        suffix: " s"
      },
      {
        key: "testedZeroToTwoHundred",
        label: "Tested 0–200 km/h",
        suffix: " s"
      },
      {
        key: "testedQuarterMile",
        label: "Tested Quarter Mile",
        suffix: " s"
      },
      {
        key: "quarterMileTrapSpeedKmh",
        label: "Quarter-Mile Trap Speed",
        suffix: " km/h"
      },
      {
        key: "brakingHundredToZeroMetres",
        label: "Tested 100–0 km/h",
        suffix: " m"
      },
      {
        key: "brakingTwoHundredToZeroMetres",
        label: "Tested 200–0 km/h",
        suffix: " m"
      },
      {
        key: "testedSlalomSpeedKmh",
        label: "Tested Slalom Speed",
        suffix: " km/h"
      },
      {
        key: "testedMooseSpeedKmh",
        label: "Tested Moose-Test Speed",
        suffix: " km/h"
      },
      {
        key: "testedSkidpadG",
        label: "Tested Skidpad",
        suffix: " g"
      },
      {
        key: "trackLapTimeSeconds",
        label: "Track Lap Time",
        suffix: " s"
      },
      {
        key: "trackName",
        label: "Track"
      }
    ]
  }
];


function getCarIdFromUrl() {
  const urlParameters =
    new URLSearchParams(window.location.search);

  return urlParameters.get("id");
}


function getSelectedCar() {
  const selectedCarId = getCarIdFromUrl();

  return cars.find(function (car) {
    return car.id === selectedCarId;
  });
}


function getCarDisplayName(car) {
  return [
    car.brand,
    car.model,
    car.variant
  ]
    .filter(Boolean)
    .join(" ");
}


function formatSpecificationValue(value, suffix = "") {
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

function createSectionId(title) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function buildSpecificationRows(car, specifications) {
  return specifications
    .map(function (specification) {
      const value = car[specification.key];

      if (
        value === undefined ||
        value === null ||
        value === ""
      ) {
        return "";
      }

      return `
        <div class="car-specification-row">
          <span class="car-specification-label">
            ${specification.label}
          </span>

          <strong class="car-specification-value">
            ${formatSpecificationValue(
              value,
              specification.suffix || ""
            )}
          </strong>
        </div>
      `;
    })
    .join("");
}

function buildSpecificationSection(car, category) {
  const rows = buildSpecificationRows(
    car,
    category.specifications
  );

  if (!rows.trim()) {
    return "";
  }

  const sectionId = createSectionId(category.title);

  return `
    <section
      id="${sectionId}"
      class="car-specification-section"
    >
      <h2>${category.title}</h2>

      <div class="car-specification-table">
        ${rows}
      </div>
    </section>
  `;
}

function renderSectionNavigation(car) {
  if (!carSectionNavigation) {
    return;
  }

  const navigationLinks = specificationCategories
    .map(function (category) {
      const hasData = category.specifications.some(
        function (specification) {
          const value = car[specification.key];

          return (
            value !== undefined &&
            value !== null &&
            value !== ""
          );
        }
      );

      if (!hasData) {
        return "";
      }

      const sectionId = createSectionId(category.title);

      return `
        <a href="#${sectionId}">
          ${category.title}
        </a>
      `;
    })
    .join("");

  carSectionNavigation.innerHTML = navigationLinks;
}

function buildQuickSpecification(
  label,
  value,
  suffix = ""
) {
  return `
    <div class="car-profile-summary-item">
      <span>${label}</span>

      <strong>
        ${formatSpecificationValue(value, suffix)}
      </strong>
    </div>
  `;
}

function buildCarProfileHero(car) {
  const carName =
    getCarDisplayName(car) || "Unknown car";

  const carInformation = [
    car.generation,
    car.year
  ]
    .filter(Boolean)
    .join(" · ");

  return `
    <section class="car-profile-hero">

      <div class="car-profile-copy">

        <div class="car-profile-topline">
          <span class="car-profile-year">
            ${car.year || "Year unavailable"}
          </span>

          <span class="car-profile-badge">
            Full specifications
          </span>
        </div>

        <h1>${carName}</h1>

        <p class="car-profile-subtitle">
          ${
            carInformation ||
            "Detailed vehicle specifications and performance data."
          }
        </p>

        <div class="car-profile-summary">

          ${buildQuickSpecification(
            "Power",
            car.powerKw,
            " kW"
          )}

          ${buildQuickSpecification(
            "Torque",
            car.torqueNm,
            " Nm"
          )}

          ${buildQuickSpecification(
            "0–100 km/h",
            car.zeroToHundred,
            " s"
          )}

          ${buildQuickSpecification(
            "Top speed",
            car.topSpeedKmh,
            " km/h"
          )}

          ${buildQuickSpecification(
            "Drivetrain",
            car.drivetrain
          )}

          ${buildQuickSpecification(
            "Transmission",
            car.transmission
          )}

        </div>

      </div>

     <div
  class="car-profile-visual ${
    car.image ? "has-image" : ""
  }"
>
  ${
    car.image
      ? `
        <img
          src="${car.image}"
          alt="${carName}"
          class="car-profile-image"
        >
      `
      : `
        <span class="car-profile-brand">
          ${car.brand || "carXdrive"}
        </span>

        <small>Image coming soon</small>
      `
  }
</div>

    </section>
  `;
}


function getAvailableValue(value, fallback = "not listed") {
  return (
    value !== undefined &&
    value !== null &&
    value !== ""
  ) ? value : fallback;
}

function buildStrengthsAndConsiderations(car) {
  const strengths = [];
  const considerations = [];

  if (typeof car.zeroToHundred === "number" && car.zeroToHundred <= 4.5) {
    strengths.push(`Strong acceleration with a listed 0–100 km/h time of ${car.zeroToHundred} seconds.`);
  }

  if (typeof car.powerKw === "number" && typeof car.kerbWeightKg === "number") {
    strengths.push(`A power-to-weight picture built around ${car.powerKw} kW and a ${car.kerbWeightKg.toLocaleString()} kg kerb weight.`);
  }

  if (car.drivetrain === "AWD") {
    strengths.push("All-wheel drive is part of the specification, giving the car four driven wheels.");
  }

  if (typeof car.safetyRating === "number" && car.safetyRating >= 5) {
    strengths.push(`A listed safety rating of ${car.safetyRating}/5.`);
  }

  if (typeof car.seatCount === "number" && car.seatCount >= 5) {
    strengths.push(`${car.seatCount}-seat accommodation adds everyday passenger practicality.`);
  }

  if (typeof car.bootCapacityLitres === "number" && car.bootCapacityLitres >= 400) {
    strengths.push(`A ${car.bootCapacityLitres}-litre boot provides useful cargo capacity on paper.`);
  }

  if (
    typeof car.combinedFuelConsumption === "number" &&
    car.combinedFuelConsumption <= 7.5
  ) {
    strengths.push(`Listed combined fuel consumption of ${car.combinedFuelConsumption} L/100 km is one of the more efficiency-focused figures in its specification.`);
  }

  if (
    String(car.appleCarPlay || "").toLowerCase().includes("wireless") ||
    String(car.androidAuto || "").toLowerCase().includes("wireless")
  ) {
    strengths.push("Wireless smartphone integration is included in the listed technology equipment.");
  }

  if (typeof car.combinedFuelConsumption === "number" && car.combinedFuelConsumption >= 10) {
    considerations.push(`Combined fuel consumption is listed at ${car.combinedFuelConsumption} L/100 km, so fuel use is an important ownership consideration.`);
  }

  if (typeof car.kerbWeightKg === "number" && car.kerbWeightKg >= 2000) {
    considerations.push(`A kerb weight of ${car.kerbWeightKg.toLocaleString()} kg makes this a relatively heavy vehicle.`);
  }

  if (typeof car.seatCount === "number" && car.seatCount <= 2) {
    considerations.push(`The ${car.seatCount}-seat layout limits passenger flexibility compared with four- or five-seat alternatives.`);
  }

  if (typeof car.bootCapacityLitres === "number" && car.bootCapacityLitres < 300) {
    considerations.push(`Boot capacity is listed at ${car.bootCapacityLitres} litres, which may matter to buyers who regularly carry luggage.`);
  }

  if (
    car.safetyRating === undefined ||
    car.safetyRating === null ||
    car.safetyRating === ""
  ) {
    considerations.push("A safety rating is not currently listed in the carXdrive database for this exact variant.");
  }

  if (!strengths.length) {
    strengths.push("Its main strengths are best understood by comparing the detailed engine, performance, chassis and equipment data below.");
  }

  if (!considerations.length) {
    considerations.push("As with any vehicle, specification, market, tyres and optional equipment can change the real-world experience.");
  }

  const strengthItems = strengths
    .slice(0, 4)
    .map(item => `<li>${item}</li>`)
    .join("");

  const considerationItems = considerations
    .slice(0, 4)
    .map(item => `<li>${item}</li>`)
    .join("");

  return `
    <section class="car-specification-section car-editorial-section">
      <h2>Strengths and things to consider</h2>

      <div class="car-editorial-columns">
        <div class="car-editorial-column">
          <h3>Strengths</h3>
          <ul>${strengthItems}</ul>
        </div>

        <div class="car-editorial-column">
          <h3>Things to consider</h3>
          <ul>${considerationItems}</ul>
        </div>
      </div>
    </section>
  `;
}

function buildEditorialInsights(car) {
  const carName = getCarDisplayName(car) || "This vehicle";
  const engine = getAvailableValue(car.engine);
  const power = typeof car.powerKw === "number" ? `${car.powerKw} kW` : "power not listed";
  const torque = typeof car.torqueNm === "number" ? `${car.torqueNm} Nm` : "torque not listed";
  const drivetrain = getAvailableValue(car.drivetrain);
  const transmission = getAvailableValue(car.transmission);

  const accelerationText =
    typeof car.zeroToHundred === "number"
      ? `The listed 0–100 km/h time is ${car.zeroToHundred} seconds`
      : "A 0–100 km/h figure is not currently listed";

  const topSpeedText =
    typeof car.topSpeedKmh === "number"
      ? `and top speed is ${car.topSpeedKmh} km/h`
      : "and a top-speed figure is not currently listed";

  const weightText =
    typeof car.kerbWeightKg === "number"
      ? `${car.kerbWeightKg.toLocaleString()} kg`
      : "not currently listed";

  const fuelText =
    typeof car.combinedFuelConsumption === "number"
      ? `${car.combinedFuelConsumption} L/100 km`
      : "not currently listed";

  const seatText =
    typeof car.seatCount === "number"
      ? `${car.seatCount} seats`
      : "seat count not listed";

  const bootText =
    typeof car.bootCapacityLitres === "number"
      ? `${car.bootCapacityLitres} litres`
      : "not currently listed";

  const safetyText =
    typeof car.safetyRating === "number"
      ? `${car.safetyRating}/5`
      : "not currently listed";

  const performanceVerdict =
    typeof car.zeroToHundred === "number" && car.zeroToHundred <= 4
      ? "Its specification clearly places straight-line performance near the centre of the package."
      : typeof car.zeroToHundred === "number" && car.zeroToHundred <= 6
        ? "Its acceleration figures point to a strong performance focus without relying on one headline number alone."
        : "Its overall character is better judged from the complete mix of performance, practicality and efficiency data.";

  return `
    <div class="car-editorial-content">

      <section class="car-specification-section car-editorial-section">
        <h2>carXdrive overview</h2>
        <p>
          The ${car.year || ""} ${carName} combines a ${engine} with ${power} and
          ${torque}. Power is sent through ${drivetrain} using a ${transmission}.
          This page brings its performance, chassis, fuel, safety, technology
          and practicality data together so the car can be judged as a complete
          package rather than by one specification alone.
        </p>
      </section>

      <section class="car-specification-section car-editorial-section">
        <h2>Performance analysis</h2>
        <p>
          ${accelerationText} ${topSpeedText}. Kerb weight is ${weightText}.
          ${performanceVerdict}
          Where independent or reference test figures are available below,
          they should be read alongside the stated test conditions because
          tyres, surface, temperature and measurement method can affect results.
        </p>
      </section>

      <section class="car-specification-section car-editorial-section">
        <h2>Everyday usability</h2>
        <p>
          The database lists ${seatText}, a boot capacity of ${bootText}, and
          combined fuel consumption of ${fuelText}. The listed safety rating is
          ${safetyText}. Buyers should also check the exact regional specification,
          because equipment and ratings can differ by model year, trim and market.
        </p>
      </section>

      ${buildStrengthsAndConsiderations(car)}

      <section class="car-specification-section car-editorial-section">
        <h2>carXdrive verdict</h2>
        <p>
          The ${carName} should be assessed by balancing its ${power} output,
          ${torque} of torque, ${drivetrain} layout, ${weightText} kerb weight
          and the practicality and technology details shown on this page.
          The strongest comparison comes from placing it beside direct rivals
          in carXdrive rather than choosing a winner from power or acceleration alone.
        </p>
        <p>
          <a href="index.html#compare">Compare this car with another vehicle →</a>
        </p>
      </section>

    </div>
  `;
}

function updateCarMetaDescription(car) {
  const description =
    `${car.year || ""} ${getCarDisplayName(car)}: ${getAvailableValue(car.engine)}, ` +
    `${typeof car.powerKw === "number" ? car.powerKw + " kW" : "detailed power data"}, ` +
    `${typeof car.zeroToHundred === "number" ? "0–100 km/h in " + car.zeroToHundred + " s" : "performance data"}, ` +
    `plus specifications, safety, fuel economy and carXdrive analysis.`;

  let metaDescription = document.querySelector('meta[name="description"]');

  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }

  metaDescription.setAttribute("content", description);
}


function renderCarSpecifications(car) {
  if (!carSpecifications) {
    return;
  }

  const sections = specificationCategories
    .map(function (category) {
      return buildSpecificationSection(
        car,
        category
      );
    })
    .join("");

  carSpecifications.innerHTML = `
    ${buildCarProfileHero(car)}

    ${buildEditorialInsights(car)}

    <div class="car-specification-sections">
      ${sections}
    </div>
  `;
}

function showCarNotFound() {
  if (carDetailsError) {
    carDetailsError.classList.add("active");
  }

  if (carSpecifications) {
    carSpecifications.innerHTML = "";
  }
if (carSectionNavigation) {
  carSectionNavigation.innerHTML = "";
}

  if (carDetailsYear) {
    carDetailsYear.textContent = "Car unavailable";
  }

  if (carDetailsName) {
    carDetailsName.textContent = "Car not found";
  }

  if (carDetailsImageBrand) {
    carDetailsImageBrand.textContent = "carXdrive";
  }

  document.title = "Car Not Found | carXdrive";
}


function loadCarDetails() {
  const selectedCar = getSelectedCar();

  if (!selectedCar) {
    showCarNotFound();
    return;
  }

  const carName =
    getCarDisplayName(selectedCar) || "Unknown car";

  if (carDetailsError) {
    carDetailsError.classList.remove("active");
  }

  if (carDetailsYear) {
    carDetailsYear.textContent =
      selectedCar.year || "Year unavailable";
  }

  if (carDetailsName) {
    carDetailsName.textContent = carName;
  }

  if (carDetailsImageBrand) {
    carDetailsImageBrand.textContent =
      selectedCar.brand || "carXdrive";
  }

  document.title =
    `${carName} Specifications & Review | carXdrive`;

  updateCarMetaDescription(selectedCar);
  renderSectionNavigation(selectedCar);
  renderCarSpecifications(selectedCar);
}


loadCarDetails();