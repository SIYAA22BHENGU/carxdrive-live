document.addEventListener("DOMContentLoaded", function () {
  const cookieConsent = document.getElementById("cookieConsent");
  const acceptButton = document.getElementById("acceptCookies");
  const rejectButton = document.getElementById("rejectCookies");

  if (!cookieConsent || !acceptButton || !rejectButton) {
    return;
  }

  const savedChoice = localStorage.getItem("carxdrive-cookie-consent");

  if (!savedChoice) {
    cookieConsent.classList.add("active");
  }

  acceptButton.addEventListener("click", function () {
    localStorage.setItem("carxdrive-cookie-consent", "accepted");
    cookieConsent.classList.remove("active");
  });

  rejectButton.addEventListener("click", function () {
    localStorage.setItem("carxdrive-cookie-consent", "rejected");
    cookieConsent.classList.remove("active");
  });
});