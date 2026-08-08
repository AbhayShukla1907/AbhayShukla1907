const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
if (menuBtn) {
  menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
  document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();

