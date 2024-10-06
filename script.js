// JavaScript Form Validation
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to validate first
  
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    // Name validation (minimum 5 characters)
    if (fullName.length < 5) {
      alert("Full Name must be at least 5 characters long.");
      return;
    }
  
    // Email validation (should include '@')
    if (!email.includes('@')) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Phone number validation (exactly 10 digits)
    if (!/^\d{10}$/.test(phoneNumber)) {
      alert("Phone Number must be a 10-digit number.");
      return;
    }
  
    // Password validation (minimum 8 characters, not 'password')
    if (password.length < 8 || password.toLowerCase() === "password") {
      alert("Password must be at least 8 characters long and not 'password'.");
      return;
    }
  
    // Confirm password validation
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    // If everything is valid
    alert("Form submitted successfully!");
  });
  