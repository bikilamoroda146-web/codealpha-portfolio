
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}
function toggleTheme() {
  document.body.classList.toggle("light");
  const icon = document.getElementById("themeIcon");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
}
const words = [
  { text: "Frontend Developer", color: "#da1a44" },
  { text: "React Developer", color: "#ffffff" },
  { text: "Fullstack Learner", color: "#f7cb0b" }
];
let i = 0;
let j = 0;
let isDeleting = false;
function type() {
  const typed = document.getElementById("typed-text");
  const current = words[i].text;
  typed.style.color = words[i].color;
  typed.textContent = current.substring(0, j);

  if (!isDeleting) {
    j++;
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }
  setTimeout(type, isDeleting ? 60 : 120);
}
type();

(function () {
  emailjs.init("QWbMyj7RDkKsp9vPB");
})();
const form = document.getElementById("contact-form");
const btn = document.getElementById("sendBtn");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  btn.innerText = "Sending...";
  btn.disabled = true;
  emailjs.sendForm(
    "service_dp82use",
    "template_6xl67bo",
    this
  )
  .then(() => {
    document.getElementById("popup").style.display = "flex";
    form.reset();
  })
  .catch((err) => {
    alert("Failed to send message");
    console.log(err);
  })
  .finally(() => {
    btn.innerText = "Send Message";
    btn.disabled = false;
  });
});
 
function closePopup() {
  document.getElementById("popup").style.display = "none";
}