const rankingsSearch = document.getElementById(
  "rankingsSearch"
);

const rankingCategory = document.getElementById(
  "rankingCategory"
);

const rankingTitle = document.getElementById(
  "rankingTitle"
);

const rankingResultCount = document.getElementById(
  "rankingResultCount"
);

const rankingsList = document.getElementById(
  "rankingsList"
);

const rankingsEmptyMessage = document.getElementById(
  "rankingsEmptyMessage"
);

const rankingDefinitions = {
  power: {
    title: "Most Powerful Cars",
    keys: ["powerKw"],
    suffix: "kW",
    order: "descending"
  },

  acceleration: {
    title: "Fastest 0–100 km/h",
    keys: [
      "testedZeroToHundred",
      "zeroToHundred",
      "accelerationZeroToHundred"
    ],
    suffix: "s",
    order: "ascending"
  },

  topSpeed: {
  title: "Highest Top Speed",
  keys: [
    "testedTopSpeed",
    "topSpeedKmh",
    "topSpeed"
  ],
  suffix: "km/h",
  order: "descending"
},

  fuelEconomy: {
    title: "Best Fuel Economy",
    keys: [
      "combinedFuelConsumption",
      "fuelConsumptionCombined",
      "fuelConsumption"
    ],
    suffix: "L/100 km",
    order: "ascending"
  },

  lightest: {
    title: "Lightest Cars",
    keys: [
      "kerbWeightKg",
      "curbWeightKg",
      "kerbWeight",
      "curbWeight",
      "weightKg"
    ],
    suffix: "kg",
    order: "ascending"
  },

  torque: {
    title: "Most Torque",
    keys: ["torqueNm"],
    suffix: "Nm",
    order: "descending"
  }
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

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

function convertToNumber(value) {
  if (
    value === undefined ||
    value === null ||
    value === ""
  ) {
    return null;
  }

  if (typeof value === "number") {
    return Number.isFinite(value) ? value : null;
  }

  const cleanedValue = String(value)
    .replace(",", ".")
    .match(/-?\d+(\.\d+)?/);

  if (!cleanedValue) {
    return null;
  }

  const numberValue = Number(cleanedValue[0]);

  return Number.isFinite(numberValue)
    ? numberValue
    : null;
}

function getRankingValue(car, definition) {
  const rawValue = getFirstAvailableValue(
    car,
    definition.keys
  );

  if (rawValue === null) {
    return null;
  }

  const numericValue = convertToNumber(rawValue);

  if (numericValue === null) {
    return null;
  }

  return {
    rawValue,
    numericValue
  };
}

function formatRankingValue(rawValue, suffix) {
  const textValue = String(rawValue).trim();

  if (
    suffix &&
    textValue
      .toLowerCase()
      .includes(suffix.toLowerCase())
  ) {
    return escapeHtml(textValue);
  }

  return escapeHtml(
    suffix
      ? `${textValue} ${suffix}`
      : textValue
  );
}

function buildRankingRow(
  car,
  position,
  rankingValue,
  definition
) {
  const completeName = [
    car.brand,
    car.model,
    car.variant
  ]
    .filter(Boolean)
    .join(" ");

  const carInformation = [
    car.year,
    car.generation
  ]
    .filter(Boolean)
    .join(" · ");

  return `
    <article class="ranking-row">

     <div class="ranking-position">
  ${position}
</div>

<div
  class="ranking-car-image ${
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
          class="ranking-car-photo"
          loading="lazy"
        >
      `
      : `
        <span>
          ${escapeHtml(car.brand || "carXdrive")}
        </span>
      `
  }
</div>

<div class="ranking-car-details">
        <p class="ranking-car-brand">
          ${escapeHtml(car.brand || "Unknown brand")}
        </p>

        <h3 class="ranking-car-name">
          ${escapeHtml(
            completeName || "Unnamed vehicle"
          )}
        </h3>

        ${
          carInformation
            ? `
              <p class="ranking-car-information">
                ${escapeHtml(carInformation)}
              </p>
            `
            : ""
        }
      </div>

      <div class="ranking-value-wrapper">
        <span class="ranking-value">
          ${formatRankingValue(
            rankingValue.rawValue,
            definition.suffix
          )}
        </span>

        <a
          href="car.html?id=${encodeURIComponent(car.id)}"
          class="ranking-link"
        >
          View Car →
        </a>
      </div>

    </article>
  `;
}

function updateRankingResultCount(amount) {
  if (!rankingResultCount) {
    return;
  }

  rankingResultCount.textContent =
    amount === 1
      ? "1 car ranked"
      : `${amount} cars ranked`;
}

function renderRankings() {
  if (!rankingsList) {
    return;
  }

  if (
    typeof cars === "undefined" ||
    !Array.isArray(cars)
  ) {
    rankingsList.innerHTML = `
      <div class="rankings-loading-error">
        <h2>Rankings could not be loaded</h2>

        <p>
          Make sure data/cars.js is loaded before
          js/rankings-page.js.
        </p>
      </div>
    `;

    updateRankingResultCount(0);
    return;
  }

  const selectedCategory =
    rankingCategory?.value || "power";

  const definition =
    rankingDefinitions[selectedCategory];

  const searchValue =
    rankingsSearch?.value
      .trim()
      .toLowerCase() || "";

  if (rankingTitle) {
    rankingTitle.textContent = definition.title;
  }

  const rankedCars = cars
    .map(function (car) {
      const rankingValue = getRankingValue(
        car,
        definition
      );

      if (!rankingValue) {
        return null;
      }

      return {
        car,
        rankingValue
      };
    })
    .filter(function (item) {
      return item !== null;
    })
    .filter(function (item) {
      if (!searchValue) {
        return true;
      }

      const searchableText = [
        item.car.brand,
        item.car.model,
        item.car.variant,
        item.car.generation,
        item.car.year
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(searchValue);
    })
    .sort(function (firstItem, secondItem) {
      const firstValue =
        firstItem.rankingValue.numericValue;

      const secondValue =
        secondItem.rankingValue.numericValue;

      if (definition.order === "ascending") {
        return firstValue - secondValue;
      }

      return secondValue - firstValue;
    });

  rankingsList.innerHTML = rankedCars
    .map(function (item, index) {
      return buildRankingRow(
        item.car,
        index + 1,
        item.rankingValue,
        definition
      );
    })
    .join("");

  updateRankingResultCount(rankedCars.length);

  if (rankingsEmptyMessage) {
    rankingsEmptyMessage.classList.toggle(
      "active",
      rankedCars.length === 0
    );
  }
}

if (rankingsSearch) {
  rankingsSearch.addEventListener(
    "input",
    renderRankings
  );
}

if (rankingCategory) {
  rankingCategory.addEventListener(
    "change",
    renderRankings
  );
}

renderRankings();