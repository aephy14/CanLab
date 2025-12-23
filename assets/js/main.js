(function () {
  const btn = document.querySelector('[data-menu-btn]');
  const panel = document.querySelector('[data-mobile-panel]');
  if (btn && panel) {
    btn.addEventListener('click', () => {
      panel.classList.toggle('open');
      btn.setAttribute('aria-expanded', panel.classList.contains('open') ? 'true' : 'false');
    });
  }

  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const payload = Object.fromEntries(data.entries());

      const subject = encodeURIComponent(`CanLab project enquiry — ${payload.name || "New lead"}`);
      const body = encodeURIComponent(
`Name: ${payload.name || ""}
Email: ${payload.email || ""}
Brand name: ${payload.brand || ""}
Beverage type: ${payload.type || ""}
Estimated volume: ${payload.volume || ""}
Notes:
${payload.notes || ""}`
      );

      const to = "alejbeck@gmail.com"; // change this
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

      const toast = document.querySelector('[data-toast]');
      if (toast) {
        toast.style.display = 'block';
        toast.textContent = "Opening your email app… If it didn’t open, email alejbeck@gmail.com";
      }
    });
  }
})();
