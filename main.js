
window.addEventListener("DOMContentLoaded", () => {
  gsap.from(".logo", { duration: 1, y: -40, opacity: 0 });
  gsap.from(".login-container", { duration: 1.2, opacity: 0, scale: 0.9, delay: 0.5 });

  document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.elements[0].value;
    const password = this.elements[1].value;
    if (email && password) {
      gsap.to(".login-container", {
        opacity: 0,
        scale: 1.2,
        duration: 1,
        onComplete: () => {
          document.body.innerHTML = '<h1 style="text-align:center;margin-top:20%">Logging into Ashaterra...</h1>';
        },
      });
    } else {
      alert("Please enter valid credentials.");
    }
  });
});
