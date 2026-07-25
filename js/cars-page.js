const carsSearch = document.getElementById("carsSearch");
const carsResultCount =
  document.getElementById("carsResultCount");
const carsEmptyMessage =
  document.getElementById("carsEmptyMessage");
const brandFilterButtons =
  document.querySelectorAll(".brand-filter");

let selectedBrand = "all";

function formatCarValue(value, suffix = "") {
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

function getCarDisplayName(car) {
  return [
    car.brand,
    car.model,
    car.variant
  ]
    .filter(Boolean)
    .join(" ");
}

function renderCarsDatabase(carsToRender = cars) {
  const carsGrid = document.getElementById("carsGrid");

  if (!carsGrid || !Array.isArray(carsToRender)) {
    return;
  }

  carsGrid.innerHTML = carsToRender
    .map(function (car) {
      const carName =
        getCarDisplayName(car) || "Unknown car";

      return `
        <article class="car-database-card">
<div
  class="car-card-image-placeholder ${
    car.image ? "has-image" : ""
  }"
>
  ${
    car.image
      ? `
        <img
          src="${car.image}"
          alt="${carName}"
          class="car-card-image"
          loading="lazy"
        >
      `
      : `
        <span>${car.brand || "carXdrive"}</span>
        <small>Image coming soon</small>
      `
  }
</div>

          <div class="car-card-content">
            <div class="car-card-year">
              ${car.year || "Year unavailable"}
            </div>

            <h2>${carName}</h2>

            <div class="car-card-specifications">
              <div class="car-card-specification">
                <span>Power</span>

                <strong>
                  ${formatCarValue(car.powerKw, " kW")}
                </strong>
              </div>

              <div class="car-card-specification">
                <span>0–100 km/h</span>

                <strong>
                  ${formatCarValue(
                    car.zeroToHundred,
                    " s"
                  )}
                </strong>
              </div>

              <div class="car-card-specification">
                <span>Top speed</span>

                <strong>
                  ${formatCarValue(
                    car.topSpeedKmh,
                    " km/h"
                  )}
                </strong>
              </div>

              <div class="car-card-specification">
                <span>Drivetrain</span>

                <strong>
                  ${car.drivetrain || "Not available"}
                </strong>
              </div>

              <div class="car-card-specification">
                <span>Engine</span>

                <strong>
                  ${car.engineType || "Not available"}
                </strong>
              </div>
            </div>

           <a
  href="car.html?id=${car.id}"
  class="view-car-specs-button"
>
  View Full Specs
  <span aria-hidden="true">→</span>
</a>
          </div>
        </article>
      `;
    })
    .join("");

  updateCarsPageState(carsToRender.length);
}

function updateCarsPageState(resultCount) {
  if (carsResultCount) {
    const carWord =
      resultCount === 1 ? "car" : "cars";

    carsResultCount.textContent =
      `${resultCount} ${carWord} found`;
  }

  if (carsEmptyMessage) {
    carsEmptyMessage.classList.toggle(
      "active",
      resultCount === 0
    );
  }
}

function filterCars() {
  const normalizedSearch =
    carsSearch?.value.trim().toLowerCase() || "";

  const filteredCars = cars.filter(function (car) {
    const searchableText = [
      car.brand,
      car.model,
      car.variant,
      car.year
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      normalizedSearch === "" ||
      searchableText.includes(normalizedSearch);

    const matchesBrand =
      selectedBrand === "all" ||
      car.brand === selectedBrand;

    return matchesSearch && matchesBrand;
  });

  renderCarsDatabase(filteredCars);
}

if (carsSearch) {
  carsSearch.addEventListener("input", function () {
    filterCars();
  });
}

brandFilterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    selectedBrand = button.dataset.brand;

    brandFilterButtons.forEach(function (filterButton) {
      filterButton.classList.remove("active");
    });

    button.classList.add("active");

    filterCars();
  });
});

renderCarsDatabase(cars);