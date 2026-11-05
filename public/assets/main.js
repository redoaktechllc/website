// Red Oak — minimal progressive enhancement. No dependencies.
(function () {
  "use strict";

  /* Mobile menu toggle */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      }
    });
  }

  /* Contact form → Web3Forms via fetch, with inline status.
     Falls back to a normal POST if JS fails to load. */
  var form = document.querySelector(".contact-form");
  if (form) {
    var status = form.querySelector(".form-status");
    var button = form.querySelector('button[type="submit"]');
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (status) { status.className = "form-status"; status.textContent = "Sending…"; }
      if (button) { button.disabled = true; }

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, data: d }; }); })
        .then(function (res) {
          if (res.ok && res.data && res.data.success) {
            if (status) { status.className = "form-status ok"; status.textContent = "Thanks — we got it. We'll reply within one business day."; }
            form.reset();
          } else {
            showError(status, (res.data && res.data.message) || "Something went wrong.");
          }
        })
        .catch(function () {
          showError(status, "Couldn't send just now. Please call (234) 237-8715 or email redoakllc@proton.me.");
        })
        .finally(function () { if (button) { button.disabled = false; } });
    });
  }

  function showError(status, msg) {
    if (!status) return;
    status.className = "form-status err";
    status.textContent = msg;
  }
})();
