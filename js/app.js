(() => {
  "use strict";
  (o = document.querySelectorAll("[data-menu]")),
    (a = document.querySelectorAll("[data-lang]"));
  let s = n;
  function l() {
    a.forEach((e) => {
      let t = e.getAttribute("data-lang");
      s.hasOwnProperty(t) && (e.textContent = s[t]);
    });
  }
  document.querySelector("#test-test").textContent > 3 && console.log("ssf"),
    document.addEventListener("click", function () {
      const e = event.target;
      o.forEach((t) => {
        e.getAttribute("data-menu") &&
          (t.classList.remove("active"), e.classList.add("active"));
      }),
        "en" === e.getAttribute("data-menu") && ((s = n), l());
      "de" === e.getAttribute("data-menu") && ((s = r), l());
      "ru" === e.getAttribute("data-menu") && ((s = i), l());
    }),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    e.any() && document.documentElement.classList.add("touch"),
    window.addEventListener("load", function () {
      setTimeout(function () {
        document.documentElement.classList.add("loaded");
      }, 0);
    }),
    (function () {
      const e = document.querySelectorAll(
        "input[placeholder],textarea[placeholder]"
      );
      e.length &&
        e.forEach((e) => {
          e.dataset.placeholder = e.placeholder;
        }),
        document.body.addEventListener("focusin", function (e) {
          const n = e.target;
          ("INPUT" !== n.tagName && "TEXTAREA" !== n.tagName) ||
            (n.dataset.placeholder && (n.placeholder = ""),
            n.classList.add("_focus"),
            n.parentElement.classList.add("_focus"),
            t.removeError(n));
        }),
        document.body.addEventListener("focusout", function (e) {
          const n = e.target;
          ("INPUT" !== n.tagName && "TEXTAREA" !== n.tagName) ||
            (n.dataset.placeholder && (n.placeholder = n.dataset.placeholder),
            n.classList.remove("_focus"),
            n.parentElement.classList.remove("_focus"),
            n.hasAttribute("data-validate") && t.validateInput(n));
        });
    })();
})();
