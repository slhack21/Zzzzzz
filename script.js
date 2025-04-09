
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const sideMenu = document.getElementById("side-menu");
  const loginLink = document.getElementById("login-link");
  const settingsLink = document.getElementById("settings-link");

  menuToggle.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
  });

  // Dark mode toggle
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // Auth state
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (loginLink) loginLink.textContent = "Déconnexion";
      if (loginLink) loginLink.onclick = () => firebase.auth().signOut();
    } else {
      if (loginLink) {
        loginLink.textContent = "Connexion";
        loginLink.setAttribute("href", "login.html");
      }
    }
  });
});
