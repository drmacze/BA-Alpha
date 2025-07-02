
const loader = document.getElementById("loader");
const loginBtn = document.getElementById("loginBtn");
const sfxClick = document.getElementById("sfxClick");

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  sfxClick.play();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const encrypted = CryptoJS.AES.encrypt(password, username).toString();

  localStorage.setItem(`ashaterra_slot_${activeSlot}`, JSON.stringify({
    username: username,
    password: encrypted,
    progress: "charbuilder.html"
  }));

  loader.style.display = "block";
  setTimeout(() => {
    window.location.href = "charbuilder.html";
  }, 2000);
});

let activeSlot = 0;
function useSlot(slot) {
  activeSlot = slot;
  const data = localStorage.getItem(`ashaterra_slot_${slot}`);
  if (data) {
    const acc = JSON.parse(data);
    document.getElementById("username").value = acc.username;
  }
}

function playAsGuest() {
  sfxClick.play();
  loader.style.display = "block";
  setTimeout(() => {
    window.location.href = "charbuilder.html";
  }, 2000);
}
