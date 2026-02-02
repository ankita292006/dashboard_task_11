const menuBtn = document.getElementById("menuBtn");
const themeBtn = document.getElementById("themeBtn");
const layoutBtn = document.getElementById("layoutBtn");
const inspectBtn = document.getElementById("inspectBtn");
const sidebar = document.querySelector(".sidebar");
const cards = document.querySelectorAll(".card");

/* Sidebar toggle */
menuBtn.onclick = () => sidebar.classList.toggle("active");

/* Theme toggle */
themeBtn.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.className);
  themeBtn.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
};

/* Load theme */
if (localStorage.getItem("theme")) {
  document.body.className = localStorage.getItem("theme");
}

/* Layout switch */
layoutBtn.onclick = () => {
  document.body.classList.toggle("alt-layout");
};

/* Grid inspector */
inspectBtn.onclick = () => {
  document.body.classList.toggle("inspect");
};

/* Card expand */
cards.forEach(card => {
  card.onclick = () => card.classList.toggle("active");
});

/* Drag & Drop */
let dragged;
cards.forEach(card => {
  card.addEventListener("dragstart", () => dragged = card);
  card.addEventListener("dragover", e => e.preventDefault());
  card.addEventListener("drop", function () {
    this.before(dragged);
  });
});
