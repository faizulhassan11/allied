document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector("#sidebar");
  const hamBurger = document.querySelector(".toggle-btn");

  function adjustSidebar() {
    if (window.innerWidth <= 768) {
      // Adjust this breakpoint as needed
      sidebar.classList.remove("expand");
    } else {
      sidebar.classList.add("expand");
    }
  }

  // Initial call to set the correct state
  adjustSidebar();

  // Listen for window resize events
  window.addEventListener("resize", adjustSidebar);

  if (hamBurger) {
    hamBurger.addEventListener("click", function () {
      sidebar.classList.toggle("expand");
    });
  }

  // Rest of your existing code...

  // Initialize DataTable
  $(document).ready(function () {
    $("#myTable").DataTable();
  });

  // Password toggle functionality
  const passwordField = document.getElementById("passwordField");
  const togglePasswordBtn = document.getElementById("togglePasswordBtn");
  const togglePasswordIcon = document.getElementById("togglePasswordIcon");

  if (togglePasswordBtn && passwordField && togglePasswordIcon) {
    togglePasswordBtn.addEventListener("click", function () {
      // Toggle password visibility
      const type = passwordField.type === "password" ? "text" : "password";
      passwordField.type = type;

      // Toggle icon between eye and eye-off
      if (type === "text") {
        togglePasswordIcon.classList.remove("bi-eye");
        togglePasswordIcon.classList.add("bi-eye-slash");
        togglePasswordBtn.title = "Hide password";
      } else {
        togglePasswordIcon.classList.remove("bi-eye-slash");
        togglePasswordIcon.classList.add("bi-eye");
        togglePasswordBtn.title = "Show password";
      }
    });
  }

  // AJAX navigation
  $("a.sidebar-link, a.nav-link").on("click", function (e) {
    e.preventDefault();

    var url = $(this).attr("href");

    // Load the content dynamically
    $("#dynamic-content").load(url + " #dynamic-content > *", function () {
      // Reinitialize DataTable
      if ($.fn.DataTable.isDataTable("#myTable")) {
        $("#myTable").DataTable().clear().destroy();
      }
      $("#myTable").DataTable();

      // Reapply password toggle functionality
      const newPasswordField = document.getElementById("passwordField");
      const newTogglePasswordBtn = document.getElementById("togglePasswordBtn");
      const newTogglePasswordIcon =
        document.getElementById("togglePasswordIcon");

      if (newTogglePasswordBtn && newPasswordField && newTogglePasswordIcon) {
        newTogglePasswordBtn.addEventListener("click", function () {
          // Toggle password visibility
          const type =
            newPasswordField.type === "password" ? "text" : "password";
          newPasswordField.type = type;

          // Toggle icon between eye and eye-off
          if (type === "text") {
            newTogglePasswordIcon.classList.remove("bi-eye");
            newTogglePasswordIcon.classList.add("bi-eye-slash");
            newTogglePasswordBtn.title = "Hide password";
          } else {
            newTogglePasswordIcon.classList.remove("bi-eye-slash");
            newTogglePasswordIcon.classList.add("bi-eye");
            newTogglePasswordBtn.title = "Show password";
          }
        });
      }
    });

    // Update the URL without reloading the page
    history.pushState(null, null, url);
  });

  // Handle back/forward navigation
  $(window).on("popstate", function () {
    var url = location.pathname;
    $("#dynamic-content").load(url + " #dynamic-content > *", function () {
      // Reinitialize DataTable
      if ($.fn.DataTable.isDataTable("#myTable")) {
        $("#myTable").DataTable().clear().destroy();
      }
      $("#myTable").DataTable();

      // Reapply password toggle functionality
      const newPasswordField = document.getElementById("passwordField");
      const newTogglePasswordBtn = document.getElementById("togglePasswordBtn");
      const newTogglePasswordIcon =
        document.getElementById("togglePasswordIcon");

      if (newTogglePasswordBtn && newPasswordField && newTogglePasswordIcon) {
        newTogglePasswordBtn.addEventListener("click", function () {
          // Toggle password visibility
          const type =
            newPasswordField.type === "password" ? "text" : "password";
          newPasswordField.type = type;

          // Toggle icon between eye and eye-off
          if (type === "text") {
            newTogglePasswordIcon.classList.remove("bi-eye");
            newTogglePasswordIcon.classList.add("bi-eye-slash");
            newTogglePasswordBtn.title = "Hide password";
          } else {
            newTogglePasswordIcon.classList.remove("bi-eye-slash");
            newTogglePasswordIcon.classList.add("bi-eye");
            newTogglePasswordBtn.title = "Show password";
          }
        });
      }
    });
  });
});
