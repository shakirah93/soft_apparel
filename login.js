document.addEventListener("DOMContentLoaded", () => {
  const loginFormModal = document.getElementById("login-form-modal");

  // Modal functions
  window.showLoginForm = function () {
    if (loginFormModal) loginFormModal.style.display = "block";
  };

  window.closeLoginForm = function () {
    if (loginFormModal) loginFormModal.style.display = "none";
  };

  window.addEventListener("click", (event) => {
    if (loginFormModal && event.target === loginFormModal) {
      loginFormModal.style.display = "none";
    }
  });
});
