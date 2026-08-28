(function () {
  var themeSelect;
  var colorQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function storedTheme() {
    var value = localStorage.getItem("theme") || "system";
    return ["light", "dark", "system"].indexOf(value) >= 0 ? value : "system";
  }

  function resolvedTheme(value) {
    if (value === "system") {
      return colorQuery && colorQuery.matches ? "dark" : "light";
    }
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

  function syncControls() {
    if (themeSelect) {
      themeSelect.value = storedTheme();
    }
  }

  function applyStoredPreferences() {
    applyTheme(storedTheme());
    syncControls();
  }

  document.addEventListener("DOMContentLoaded", function () {
    themeSelect = document.getElementById("color-mode-select");

    if (themeSelect) {
      themeSelect.addEventListener("change", function (event) {
        applyTheme(event.target.value);
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
