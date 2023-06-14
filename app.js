class App {
  constructor() {
    this.authHandler();
  }

  authHandler() {
    const authForm = document.querySelector(".auth");

    if (authForm) {
      authForm.addEventListener("submit", e => {
        e.preventDefault();
        const email = authForm.value;
        if (this.validateEmail(email)) {
          this.navigateToSuccessPage();
        } else {
          alert("Invalid email address!");
        }
      });
    }
  }

  validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  navigateToSuccessPage() {
    // Update the path to success.html if it's in a different directory
    window.location.href = "success.html";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const submitBtn = document.getElementById("submit-btn");

  if (submitBtn) {
    submitBtn.addEventListener("click", function(e) {
      e.preventDefault();
      const authForm = document.querySelector(".auth");
      const email = authForm.value;
      const app = new App();
      if (app.validateEmail(email)) {
        app.navigateToSuccessPage();
      } else {
        alert("Invalid email address!");
      }
    });
  }
});
