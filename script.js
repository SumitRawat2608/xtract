const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", e => {
  e.preventDefault();

  status.textContent = "Submitting...";
  status.style.color = "#6366f1";

  setTimeout(() => {
    status.textContent = "✅ Request sent. We'll contact you shortly.";
    status.style.color = "lime";
    form.reset();
  }, 1200);
});
