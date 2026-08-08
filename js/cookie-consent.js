document.addEventListener("DOMContentLoaded", function () {
  const cookieConsent = document.getElementById("cookieConsent");
  const acceptButton = document.getElementById("acceptCookies");
  const rejectButton = document.getElementById("rejectCookies");

  if (!cookieConsent || !acceptButton || !rejectButton) {
    return;
  }

  const STORAGE_KEY = "carxdrive-cookie-consent";
  const savedChoice = localStorage.getItem(STORAGE_KEY);

  function updateGoogleConsent(granted) {
    window.dataLayer = window.dataLayer || [];

    window.gtag =
      window.gtag ||
      function () {
        window.dataLayer.push(arguments);
      };

    window.gtag("consent", "update", {
      ad_storage: granted ? "granted" : "denied",
      analytics_storage: granted ? "granted" : "denied",
      ad_user_data: granted ? "granted" : "denied",
      ad_personalization: granted ? "granted" : "denied"
    });
  }

  if (!savedChoice) {
    cookieConsent.classList.add("active");
  } else if (savedChoice === "accepted") {
    updateGoogleConsent(true);
  } else if (savedChoice === "rejected") {
    updateGoogleConsent(false);
  }

  acceptButton.addEventListener("click", function () {
    localStorage.setItem(STORAGE_KEY, "accepted");
    updateGoogleConsent(true);
    cookieConsent.classList.remove("active");
  });

  rejectButton.addEventListener("click", function () {
    localStorage.setItem(STORAGE_KEY, "rejected");
    updateGoogleConsent(false);
    cookieConsent.classList.remove("active");
  });
});
