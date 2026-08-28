(function () {
  var paletteToggle;

  function storedTheme() {
    var value = localStorage.getItem("theme") || "light";
    if (value === "alternate") {
      return "dark";
    }
    if (value === "primary" || value === "system") {
      return "light";
    }
    return value === "dark" ? value : "light";
  }

  function applyTheme(value) {
    var theme = value === "dark" || value === "alternate" ? "dark" : "light";
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    syncControls();
  }

  function syncControls() {
    if (paletteToggle) {
      var isAlternate = storedTheme() === "dark";
      paletteToggle.setAttribute("aria-pressed", isAlternate ? "true" : "false");
      paletteToggle.setAttribute(
        "title",
        isAlternate ? "Switch to off-white background" : "Switch to taupe background"
      );
    }
  }

  function applyStoredPreferences() {
    applyTheme(storedTheme());
    syncControls();
  }

  document.addEventListener("DOMContentLoaded", function () {
    paletteToggle = document.getElementById("palette-toggle");

    if (paletteToggle) {
      paletteToggle.addEventListener("click", function () {
        applyTheme(storedTheme() === "dark" ? "light" : "dark");
      });
    }

    applyStoredPreferences();
  });

  applyStoredPreferences();
})();
