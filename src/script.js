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
