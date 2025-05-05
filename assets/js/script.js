document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // ALSO make all project cards visible when #projects section appears
        if (entry.target.id === "projects") {
          document.querySelectorAll(".project-card").forEach(card => {
            card.classList.add("visible");
          });
        }

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".section, .project-card").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });
});
