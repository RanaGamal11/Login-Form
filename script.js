document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Clear previous error messages
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";
  
    // Get input values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    let isValid = true;
  
    // Validate username
    if (username === "") {
      document.getElementById("usernameError").textContent = "Username is required.";
      isValid = false;
    }
  
    // Validate password
    if (password === "") {
      document.getElementById("passwordError").textContent = "Password is required.";
      isValid = false;
    }
  
    // If the form is valid, simulate submission
    if (isValid) {
      const submitButton = document.getElementById("submitButton");
      const loadingIndicator = document.getElementById("loadingIndicator");
  
      submitButton.disabled = true;
      loadingIndicator.hidden = false;
  
      // Simulate form submission delay
      setTimeout(() => {
        alert("Form submitted successfully!");
        submitButton.disabled = false;
        loadingIndicator.hidden = true;
        document.getElementById("loginForm").reset();
      }, 2000);
    }
  });
  