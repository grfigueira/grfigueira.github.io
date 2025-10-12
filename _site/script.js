// Hover-to-play videos, with normalized overlay fade
document.querySelectorAll(".card").forEach((card) => {
  const v = card.querySelector("video");
  if (!v) return;

  const start = () => v.play().catch(() => {});
  const stop = () => { v.pause(); v.currentTime = 0; };

  card.addEventListener("pointerenter", start);
  card.addEventListener("pointerleave", stop);
  card.addEventListener("click", () => (v.paused ? start() : stop()));

  v.addEventListener("play", () => (v.style.opacity = 1));
  v.addEventListener("pause", () => (v.style.opacity = 0));
});

// Theme toggle using .dark on <html> with fast transition
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const saved = localStorage.getItem("theme");
setTheme(saved ?? (prefersDark ? "dark" : "light"));

document.getElementById("themeToggle")?.addEventListener("click", () => {
  const isDark = document.documentElement.classList.contains("dark");
  document.documentElement.classList.add("transitioning");
  setTimeout(() => document.documentElement.classList.remove("transitioning"), 160);
  setTheme(isDark ? "light" : "dark");
});

function setTheme(mode) {
  const dark = mode === "dark";
  document.documentElement.classList.toggle("dark", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");

  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.setAttribute("aria-pressed", String(dark));
    btn.setAttribute("aria-label", dark ? "Activate light mode" : "Activate dark mode");
  }
}
