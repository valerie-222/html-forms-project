document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const name = document.querySelector('input[name="name"]').value.trim();
    const address = document.querySelector('input[name="email"]').value.trim();
    const familyMembers = document
      .querySelector('input[name="age"]')
      .value.trim();

    if (!name || !address || !familyMembers) {
      alert(
        "Please fill in your full name, address, and number of family members."
      );
      return;
    }

    // You can expand this section to collect more form data if needed

    alert("Thank you for submitting the Disaster Preparedness Survey!");
    form.reset(); // Optional: Reset form after submission
  });
});
document.getElementById("myForm").addEventListener("submit", function (event) {
  // Prevent the default form submission behavior (page reload)
  event.preventDefault();

  // Hide the form
  this.style.display = "none";

  // Show the confirmation message
  document.getElementById("confirmationMessage").style.display = "block";
});
