const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.01;
    if (this.size < 0.2) this.size = Math.random() * 2 + 0.5;
    if (this.x < 0 || this.x > canvas.width) this.x = Math.random() * canvas.width;
    if (this.y < 0 || this.y > canvas.height) this.y = Math.random() * canvas.height;
  }

  draw() {
    ctx.fillStyle = "rgba(255,160,40,0.8)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const particlesArray = [];
for (let i = 0; i < 120; i++) {
  particlesArray.push(new Particle());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}
animate();
