/* Studio 54x — site behaviour: mobile nav, scroll state, reveals, contact form */
(function () {
  "use strict";

  /* ---- Mobile navigation ---- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");

  function closeMenu() {
    if (!menu || !toggle) return;
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 880) closeMenu();
    });
  }

  /* ---- Sticky header shadow ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Scroll reveal ---- */
  var revealables = document.querySelectorAll(".reveal");
  if (revealables.length) {
    if (!("IntersectionObserver" in window)) {
      revealables.forEach(function (el) { el.classList.add("is-visible"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
      revealables.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---- Current year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- Contact form: inline validation + mail handoff ---- */
  var form = document.getElementById("contact-form");
  if (!form) return;

  var status = document.getElementById("form-status");
  var address = form.getAttribute("data-email") || "hello@studio54x.site";

  function setInvalid(field, invalid) {
    var wrapper = field.closest(".field");
    if (wrapper) wrapper.classList.toggle("is-invalid", invalid);
  }

  form.querySelectorAll("input, textarea").forEach(function (field) {
    field.addEventListener("input", function () {
      if (field.closest(".field").classList.contains("is-invalid")) {
        setInvalid(field, !field.checkValidity());
      }
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var valid = true;

    form.querySelectorAll("input[required], textarea[required]").forEach(function (field) {
      var ok = field.checkValidity();
      setInvalid(field, !ok);
      if (!ok && valid) { field.focus(); valid = false; }
    });

    if (!valid) return;

    var data = new FormData(form);
    var subject = "Consultation request — " + (data.get("name") || "");
    var body =
      "Name: " + (data.get("name") || "") + "\n" +
      "Email: " + (data.get("email") || "") + "\n" +
      "Phone: " + (data.get("phone") || "—") + "\n" +
      "Session type: " + (data.get("session") || "—") + "\n\n" +
      (data.get("message") || "");

    if (status) {
      status.textContent = "Thanks — opening your email app with the details ready to send.";
      status.classList.add("is-visible");
    }

    window.location.href =
      "mailto:" + address +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  });
})();
