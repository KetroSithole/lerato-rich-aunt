// ===== Mobile menu toggle =====
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
    toggle.textContent = open ? "✕" : "☰";
  });
}

// ===== Footer year =====
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// ===== Contact form → opens the visitor's email app =====
// Change CONTACT_EMAIL to Lerato's real address.
const CONTACT_EMAIL = "hello@example.com";
const form = document.querySelector("#contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = `Enquiry: ${data.get("topic")} — ${data.get("name")}`;
    const body =
      `Name: ${data.get("name")}\n` +
      `Email: ${data.get("email")}\n` +
      `Interested in: ${data.get("topic")}\n\n` +
      `${data.get("message")}`;

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const status = document.querySelector(".form-status");
    if (status) status.textContent = "Thank you! Your email app should open now — just hit send.";
  });
}
