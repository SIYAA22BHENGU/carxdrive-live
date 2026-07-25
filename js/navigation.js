const mobileMenuButton =
  document.getElementById("mobileMenuButton");

const mainNavigation =
  document.getElementById("mainNavigation");

function closeMobileNavigation() {
  if (!mobileMenuButton || !mainNavigation) {
    return;
  }

  mainNavigation.classList.remove("open");

  mobileMenuButton.classList.remove("active");

  mobileMenuButton.setAttribute(
    "aria-expanded",
    "false"
  );

  mobileMenuButton.setAttribute(
    "aria-label",
    "Open navigation"
  );

  document.body.classList.remove(
    "mobile-navigation-open"
  );
}

function openMobileNavigation() {
  if (!mobileMenuButton || !mainNavigation) {
    return;
  }

  mainNavigation.classList.add("open");

  mobileMenuButton.classList.add("active");

  mobileMenuButton.setAttribute(
    "aria-expanded",
    "true"
  );

  mobileMenuButton.setAttribute(
    "aria-label",
    "Close navigation"
  );

  document.body.classList.add(
    "mobile-navigation-open"
  );
}

function toggleMobileNavigation() {
  if (!mainNavigation) {
    return;
  }

  const navigationIsOpen =
    mainNavigation.classList.contains("open");

  if (navigationIsOpen) {
    closeMobileNavigation();
  } else {
    openMobileNavigation();
  }
}

if (mobileMenuButton && mainNavigation) {
  mobileMenuButton.addEventListener(
    "click",
    toggleMobileNavigation
  );

  mainNavigation
    .querySelectorAll("a")
    .forEach(function (navigationLink) {
      navigationLink.addEventListener(
        "click",
        closeMobileNavigation
      );
    });

  document.addEventListener(
    "keydown",
    function (event) {
      if (event.key === "Escape") {
        closeMobileNavigation();
      }
    }
  );

  document.addEventListener(
    "click",
    function (event) {
      const clickedInsideNavigation =
        mainNavigation.contains(event.target);

      const clickedMenuButton =
        mobileMenuButton.contains(event.target);

      if (
        !clickedInsideNavigation &&
        !clickedMenuButton
      ) {
        closeMobileNavigation();
      }
    }
  );

  window.addEventListener(
    "resize",
    function () {
      if (window.innerWidth > 760) {
        closeMobileNavigation();
      }
    }
  );
}
/*
  Displays a clean placeholder when a car image
  is missing, renamed or cannot be loaded.
*/
document.addEventListener(
  "error",
  function (event) {
    const image = event.target;

    if (!(image instanceof HTMLImageElement)) {
      return;
    }

    const supportedImageClasses = [
      "car-card-image",
      "car-profile-image",
      "comparison-car-photo",
      "test-card-photo",
      "ranking-car-photo"
    ];

    const isCarImage = supportedImageClasses.some(
      function (className) {
        return image.classList.contains(className);
      }
    );

    if (!isCarImage) {
      return;
    }

    const imageContainer = image.parentElement;

    if (!imageContainer) {
      return;
    }

    imageContainer.classList.remove("has-image");
    imageContainer.replaceChildren();

    const fallbackText = document.createElement("span");
    fallbackText.textContent = "Image unavailable";

    if (image.classList.contains("car-profile-image")) {
      fallbackText.className = "car-profile-brand";
    }

    imageContainer.appendChild(fallbackText);

    if (
      image.classList.contains("car-card-image") ||
      image.classList.contains("car-profile-image") ||
      image.classList.contains("test-card-photo")
    ) {
      const fallbackMessage =
        document.createElement("small");

      fallbackMessage.textContent =
        "Check the image file";

      imageContainer.appendChild(fallbackMessage);
    }
  },
  true
);