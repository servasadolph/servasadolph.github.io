(function () {
  var themeSelect;
  var fontSelect;
  var colorQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function storedTheme() {
    var value = localStorage.getItem("theme") || "system";
    return ["light", "dark", "system"].indexOf(value) >= 0 ? value : "system";
  }

  function storedFont() {
    var value = localStorage.getItem("fontStyle") || "default";
    return ["default", "system", "dyslexic"].indexOf(value) >= 0 ? value : "default";
  }

  function resolvedTheme(value) {
    if (value === "system") {
      return colorQuery && colorQuery.matches ? "dark" : "light";
    }
    return value;
  }

  function resolvedFont(value) {
    return value;
  }

  function applyTheme(value) {
    localStorage.setItem("theme", value);
    if (resolvedTheme(value) === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  function applyFont(value) {
    localStorage.setItem("fontStyle", value);
    var font = resolvedFont(value);
    if (font === "default") {
      document.documentElement.removeAttribute("data-font");
    } else {
      document.documentElement.setAttribute("data-font", font);
    }
  }

  function syncControls() {
    if (themeSelect) {
      themeSelect.value = storedTheme();
    }
    if (fontSelect) {
      fontSelect.value = storedFont();
    }
  }

  function applyStoredPreferences() {
    applyTheme(storedTheme());
    applyFont(storedFont());
    syncControls();
  }

  document.addEventListener("DOMContentLoaded", function () {
    themeSelect = document.getElementById("color-mode-select");
    fontSelect = document.getElementById("font-style-select");

    if (themeSelect) {
      themeSelect.addEventListener("change", function (event) {
        applyTheme(event.target.value);
      });
    }

    if (fontSelect) {
      fontSelect.addEventListener("change", function (event) {
        applyFont(event.target.value);
      });
    }

    applyStoredPreferences();
  });

  if (colorQuery && colorQuery.addEventListener) {
    colorQuery.addEventListener("change", function () {
      if (storedTheme() === "system") {
        applyTheme("system");
      }
    });
  }

  applyStoredPreferences();
})();
