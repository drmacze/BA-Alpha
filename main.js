document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = this.elements[0].value;
  const password = this.elements[1].value;

  if (email && password) {
    alert(`Welcome to Ashaterra, ${email}!`);
    document.querySelector(".login-container").innerHTML = "<h2>Loading Character Builder...</h2>";
  } else {
    alert("Please enter valid credentials.");
  }
});
