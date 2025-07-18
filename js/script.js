// Get time-based greeting
function getGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 15) {
    return "Good Afternoon";
  } else if (hour >= 15 && hour < 18) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

// Show popup
window.addEventListener("load", () => {
  const popup = document.getElementById("namePopup");
  const content = document.getElementById("namePopupContent");
  popup.style.display = "flex";
  setTimeout(() => {
    popup.classList.remove("opacity-0");
    content.classList.remove("scale-75");
    content.classList.add("scale-100");
  }, 10);
});

function submitPopupName() {
  const nama = document.getElementById("popupNameInput").value;
  if (nama.trim()) {
    // Hide popup
    const popup = document.getElementById("namePopup");
    const content = document.getElementById("namePopupContent");
    popup.classList.add("opacity-0");
    content.classList.remove("scale-100");
    content.classList.add("scale-75");
    setTimeout(() => {
      popup.style.display = "none";
    }, 300);

    // Greeting and name
    document.getElementById("greeting").textContent = getGreeting();
    document.getElementById("guestName").textContent = nama;
  } else {
    alert("Please enter your name!");
  }
}

// Form Message Submission
function sendMessage(event) {
  event.preventDefault();
  const nameField = document.getElementById("nameField");
  const emailField = document.getElementById("emailField");
  const messageField = document.getElementById("messageField");

  const missingFields = [];

  if (!nameField.value.trim()) {
    missingFields.push("Name");
  }

  if (!emailField.value.trim()) {
    missingFields.push("Email");
  }

  if (!messageField.value.trim()) {
    missingFields.push("Message");
  }

  if (missingFields.length > 0) {
    showValidationPopup(missingFields);
    return;
  }

  showSuccessPopup();
  document.getElementById("messageForm").reset();
}

// Validation Popup
function showValidationPopup(missingFields) {
  const validationMessage = document.getElementById("validationMessage");
  const popup = document.getElementById("validationPopup");
  const content = document.getElementById("validationPopupContent");

  if (missingFields.length === 1) {
    validationMessage.innerHTML = `Please fill in the <strong>${missingFields[0]}</strong> field.`;
  } else if (missingFields.length === 2) {
    validationMessage.innerHTML = `Please fill in the <strong>${missingFields[0]}</strong> and <strong>${missingFields[1]}</strong> fields.`;
  } else {
    validationMessage.innerHTML = `Please fill in the <strong>${missingFields
      .slice(0, -1)
      .join(", ")}</strong> and <strong>${
      missingFields[missingFields.length - 1]
    }</strong> fields.`;
  }

  popup.classList.remove("hidden");
  setTimeout(() => {
    popup.classList.remove("opacity-0");
    content.classList.remove("scale-75");
    content.classList.add("scale-100");
  }, 10);
}

function closeValidationPopup() {
  const popup = document.getElementById("validationPopup");
  const content = document.getElementById("validationPopupContent");
  popup.classList.add("opacity-0");
  content.classList.remove("scale-100");
  content.classList.add("scale-75");
  setTimeout(() => {
    popup.classList.add("hidden");
  }, 300);
}

function showSuccessPopup() {
  const popup = document.getElementById("successPopup");
  const content = document.getElementById("successPopupContent");
  popup.classList.remove("hidden");
  setTimeout(() => {
    popup.classList.remove("opacity-0");
    content.classList.remove("scale-75");
    content.classList.add("scale-100");
  }, 10);
}

function closeSuccessPopup() {
  const popup = document.getElementById("successPopup");
  const content = document.getElementById("successPopupContent");
  popup.classList.add("opacity-0");
  content.classList.remove("scale-100");
  content.classList.add("scale-75");
  setTimeout(() => {
    popup.classList.add("hidden");
  }, 300);
}

// Toggle menu di mobile
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

let isMenuOpen = false;

menuToggle.addEventListener("click", () => {
  if (!isMenuOpen) {
    // Open menu
    mobileMenu.classList.remove("max-h-0", "opacity-0", "-translate-y-2");
    mobileMenu.classList.add("max-h-48", "opacity-100", "translate-y-0");
    isMenuOpen = true;
  } else {
    // Close menu
    mobileMenu.classList.remove("max-h-48", "opacity-100", "translate-y-0");
    mobileMenu.classList.add("max-h-0", "opacity-0", "-translate-y-2");
    isMenuOpen = false;
  }
});
