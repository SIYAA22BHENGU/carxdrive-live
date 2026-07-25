const testsSearch = document.getElementById("testsSearch");
const testsGrid = document.getElementById("testsGrid");
const testsResultCount = document.getElementById("testsResultCount");
const testsEmptyMessage = document.getElementById(
  "testsEmptyMessage"
);

/*
  Each test can support more than one possible database key.

  This makes the page safer if a test field uses a slightly
  different name inside cars.js.
*/
const testDefinitions = [
  {
    label: "0–100 km/h",
    keys: [
      "testedZeroToHundred",
      "tested0To100",
      "zeroToHundredTested"
    ],
    suffix: "s"
  },
  {
    label: "0–200 km/h",
    keys: [
      "testedZeroToTwoHundred",
      "tested0To200"
    ],
    suffix: "s"
  },
  {
    label: "100–200 km/h",
    keys: [
      "testedHundredToTwoHundred",
      "tested100To200"
    ],
    suffix: "s"
  },
  {
    label: "80–120 km/h",
    keys: [
      "testedEightyToOneTwenty",
      "tested80To120",
      "eightyToOneTwenty"
    ],
    suffix: "s"
  },
  {
    label: "¼ Mile",
    keys: [
      "testedQuarterMile",
      "quarterMileTested"
    ],
    suffix: "s"
  },
  {
    label: "¼ Mile Trap Speed",
    keys: [
      "quarterMileTrapSpeedKmh",
      "testedQuarterMileTrapSpeed"
    ],
    suffix: "km/h"
  },
  {
    label: "100–0 km/h",
    keys: [
      "brakingHundredToZeroMetres",
      "braking100ToZero",
      "testedHundredToZero",
      "tested100To0",
      "testedBrakingDistance"
    ],
    suffix: "m"
  },
  {
    label: "200–0 km/h",
    keys: [
      "brakingTwoHundredToZeroMetres",
      "testedTwoHundredToZero"
    ],
    suffix: "m"
  },
  {
    label: "Top Speed",
    keys: [
      "testedTopSpeed",
      "topSpeedTested",
      "topSpeedKmh"
    ],
    suffix: "km/h"
  },
  {
    label: "Slalom Speed",
    keys: [
      "testedSlalomSpeedKmh",
      "slalomSpeedKmh"
    ],
    suffix: "km/h"
  },
  {
    label: "Moose Test",
    keys: [
      "testedMooseSpeedKmh",
      "mooseTestSpeedKmh"
    ],
    suffix: "km/h"
  },
  {
    label: "Skidpad",
    keys: [
      "testedSkidpadG",
      "lateralAccelerationG"
    ],
    suffix: "g"
  },
  {
    label: "Lap Time",
    keys: [
      "trackLapTimeSeconds",
      "testedLapTime",
      "lapTime"
    ],
    suffix: "s"
  }
];

/*
  Safely returns the first matching value found
  from a list of possible database keys.
*/
function getFirstAvailableValue(car, keys) {
  for (const key of keys) {
    const value = car[key];

    if (
      value !== undefined &&
      value !== null &&
      value !== ""
    ) {
      return value;
    }
  }

  return null;
}

/*
  Prevents text from accidentally being interpreted as HTML.
*/
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatTestValue(value, suffix) {
  if (value === null || value === undefined || value === "") {
    return "Not available";
  }

  const textValue = String(value).trim();

  /*
    Avoid adding the unit twice when it is already
    stored inside cars.js.
  */
  if (
    suffix &&
    textValue.toLowerCase().includes(suffix.toLowerCase())
  ) {
    return escapeHtml(textValue);
  }

  return escapeHtml(
    suffix ? `${textValue} ${suffix}` : textValue
  );
}

function getCarTestResults(car) {
  return testDefinitions
    .map(function (test) {
      const value = getFirstAvailableValue(
        car,
        test.keys
      );

      if (value === null) {
        return null;
      }

      return {
        label: test.label,
        value: value,
        suffix: test.suffix
      };
    })
    .filter(function (test) {
      return test !== null;
    });
}

function carHasTestResults(car) {
  return getCarTestResults(car).length > 0;
}

function buildTestRows(testResults) {
  /*
    Show the first four available results on each card.
    All remaining results stay available on the full
    specifications page.
  */
  return testResults
    .slice(0, 4)
    .map(function (test) {
      return `
        <div class="test-result-row">
          <span class="test-result-label">
            ${escapeHtml(test.label)}
          </span>

          <strong class="test-result-value">
            ${formatTestValue(test.value, test.suffix)}
          </strong>
        </div>
      `;
    })
    .join("");
}

function buildTestCard(car) {
  const testResults = getCarTestResults(car);

  const brand = car.brand || "";
  const model = car.model || "";
  const variant = car.variant || "";
  const year = car.year || "";
  const generation = car.generation || "";

  const completeName = [brand, model, variant]
    .filter(Boolean)
    .join(" ");

  const secondaryInformation = [year, generation]
    .filter(Boolean)
    .join(" · ");

  return `
  <article class="test-card">

    <div
      class="test-card-image ${
        car.image ? "has-image" : ""
      }"
    >
      ${
        car.image
          ? `
            <img
              src="${car.image}"
              alt="${escapeHtml(
                completeName || "Car"
              )}"
              class="test-card-photo"
              loading="lazy"
            >
          `
          : `
            <span>
              ${escapeHtml(brand || "carXdrive")}
            </span>

            <small>Image coming soon</small>
          `
      }
    </div>

    <div class="test-card-header">
        <p class="test-card-brand">
          ${escapeHtml(brand)}
        </p>

        <h2>
          ${escapeHtml(
            completeName || "Unnamed vehicle"
          )}
        </h2>

        ${
          secondaryInformation
            ? `
              <p class="test-card-information">
                ${escapeHtml(secondaryInformation)}
              </p>
            `
            : ""
        }
      </div>

      <div class="test-results-list">
        ${buildTestRows(testResults)}
      </div>

      <a
        href="car.html?id=${encodeURIComponent(car.id)}#independent-test-results"
        class="test-card-link"
      >
        View Full Test Results
        <span aria-hidden="true">→</span>
      </a>

    </article>
  `;
}

function updateResultCount(amount) {
  if (!testsResultCount) {
    return;
  }

  testsResultCount.textContent =
    amount === 1
      ? "1 test found"
      : `${amount} tests found`;
}

function renderTests(searchValue = "") {
  if (!testsGrid) {
    return;
  }

  if (typeof cars === "undefined" || !Array.isArray(cars)) {
    testsGrid.innerHTML = `
      <div class="tests-loading-error">
        <h2>Tests could not be loaded</h2>

        <p>
          Make sure data/cars.js is connected before
          js/tests-page.js.
        </p>
      </div>
    `;

    updateResultCount(0);
    return;
  }

  const cleanedSearchValue = searchValue
    .trim()
    .toLowerCase();

  const carsWithTests = cars.filter(function (car) {
    return carHasTestResults(car);
  });

  const filteredCars = carsWithTests.filter(function (car) {
    if (!cleanedSearchValue) {
      return true;
    }

    const testNames = getCarTestResults(car)
      .map(function (test) {
        return test.label;
      })
      .join(" ");

    const searchableText = [
      car.brand,
      car.model,
      car.variant,
      car.generation,
      car.year,
      testNames
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(cleanedSearchValue);
  });

  testsGrid.innerHTML = filteredCars
    .map(buildTestCard)
    .join("");

  updateResultCount(filteredCars.length);

  if (testsEmptyMessage) {
    testsEmptyMessage.classList.toggle(
      "active",
      filteredCars.length === 0
    );
  }
}

if (testsSearch) {
  testsSearch.addEventListener("input", function () {
    renderTests(testsSearch.value);
  });
}

renderTests();