document.addEventListener("DOMContentLoaded", function () {
  // Select all buttons with the class 'theme-toggle'
  const themeButtons = document.querySelectorAll(".theme-toggle");
  const body = document.body;

  // Add click event to the "Day mode" button
  themeButtons[0].addEventListener("click", () => {
    // Set day mode styles
    body.style.background = "linear-gradient(#aee1f9, #ffffff)"; // Light background
    body.style.color = "#333"; // Dark text
  });

  // Add click event to the "Night mode" button
  themeButtons[1].addEventListener("click", () => {
    // Set night mode styles
    body.style.background =
      "radial-gradient(circle at center, rgba(0, 40, 0, 0.8), rgba(0, 20, 0, 0.9))"; // Dark background
    body.style.color = "#d0f0d0"; // Light text
  });
});

// ======= THEME TOGGLE =======
const body = document.body;
const dayBtn = document.querySelectorAll(".theme-toggle")[0];
const nightBtn = document.querySelectorAll(".theme-toggle")[1];

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
}

// Toggle Day Mode
dayBtn.addEventListener("click", () => {
  body.classList.remove("dark-mode");
  localStorage.setItem("theme", "light");
});

// Toggle Night Mode
nightBtn.addEventListener("click", () => {
  body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark");
});


// ======= FORM VALIDATION & SUBMISSION =======
const feedbackForm = document.querySelector(".experience-feedback form");

feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  if (!validateForm()) {
    alert("Please fill out all required fields.");
    return;
  }

  // Simulate AJAX submission
  alert("Thank you! Your feedback has been submitted.");
  feedbackForm.reset();
  localStorage.clear();
});

// Simple validation check
function validateForm() {
  const fullName = document.getElementById("full-name").value.trim();
  const spot = document.getElementById("spot").value.trim();
  const overall = document.querySelector('input[name="overall"]:checked');
  const cleanliness = document.querySelector('input[name="cleanliness"]:checked');

  if (!fullName || !spot || !overall || !cleanliness) {
    return false;
  }
  return true;
}


// ======= LOCALSTORAGE INPUT PERSISTENCE =======
const persistentFields = [
  "full-name", "spot", "visit-date", "activities", "improve"
];

persistentFields.forEach(id => {
  const input = document.getElementById(id);
  if (input) {
    // Load saved value
    input.value = localStorage.getItem(id) || "";

    // Save on change
    input.addEventListener("input", () => {
      localStorage.setItem(id, input.value);
    });
  }
});


// ======= RATING INTERACTION =======
document.querySelectorAll(".rating-group").forEach(group => {
  const labels = group.querySelectorAll("label");
  labels.forEach(label => {
    label.addEventListener("mouseenter", () => {
      clearHighlights();
      highlightUpTo(label);
    });

    label.addEventListener("mouseleave", () => {
      clearHighlights();
    });

    label.addEventListener("click", () => {
      clearHighlights();
      highlightUpTo(label, true); // Mark as selected
    });
  });

  function clearHighlights() {
    labels.forEach(l => l.classList.remove("highlighted", "selected"));
  }

  function highlightUpTo(el, selected = false) {
    let found = false;
    labels.forEach(l => {
      if (!found) l.classList.add(selected ? "selected" : "highlighted");
      if (l === el) found = true;
    });
  }
});


// ======= SHOW "OTHER" FEEDBACK FIELD IF SELECTED =======
const feedbackType = document.getElementById("feedback-type");

feedbackType.addEventListener("change", () => {
  if (feedbackType.value === "other") {
    if (!document.getElementById("other-feedback")) {
      const otherInput = document.createElement("input");
      otherInput.type = "text";
      otherInput.name = "other-feedback";
      otherInput.id = "other-feedback";
      otherInput.placeholder = "Please specify...";
      feedbackType.parentElement.appendChild(otherInput);
    }
  } else {
    const otherInput = document.getElementById("other-feedback");
    if (otherInput) {
      otherInput.remove();
    }
  }
});

// Validate form before submission and ensure all required fields are filled

document.getElementById('feedback-form').addEventListener('submit', function(e) {
  const fullName = document.getElementById('full-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const spot = document.getElementById('spot').value.trim();
  const rating = document.getElementById('rating').value;

  // Simple validation check
  if (!fullName || !email || !spot || !rating) {
    e.preventDefault();  // Prevent form submission
    alert("Please fill out all fields before submitting.");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("survey");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop form from submitting normally

    // Optional: validate form here

    // Redirect to the thank you page
    window.location.href = "thankyoupage.html";
  });
});
