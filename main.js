window.addEventListener("DOMContentLoaded", () => {
  gsap.from(".logo", { duration: 1, y: -50, opacity: 0, ease: "power3.out" });
  gsap.from(".login-container", { duration: 1, scale: 0.8, opacity: 0, delay: 0.5 });

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
          document.body.innerHTML = '<h1 style="text-align:center;margin-top:20%">Loading Character Builder...</h1>';
        },
      });
    } else {
      alert("Please enter valid credentials.");
    }
  });
});