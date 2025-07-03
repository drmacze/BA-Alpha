document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Transisi cinematic login
  const wrapper = document.querySelector('.login-wrapper');
  wrapper.style.transition = 'opacity 0.6s ease';
  wrapper.style.opacity = 0;

  setTimeout(() => {
    document.body.innerHTML = `
      <div style="text-align:center;color:#fff;font-size:1.5rem;margin-top:20%;">
        <p>🔐 Authenticating...</p>
        <p>🔮 Summoning world of <strong>Ashaterra</strong>...</p>
      </div>
    `;
  }, 700);
});
