$(document).ready(function () {
  function showHiddenPass(registerPass, registerEye) {
    const input = $("#" + registerPass);
    const iconEye = $("#" + registerEye);

    iconEye.on("click", function () {
      if (input.attr("type") === "password") {
        input.attr("type", "text");
        iconEye.addClass("ri-eye-line").removeClass("ri-eye-off-line");
      } else {
        input.attr("type", "password");
        iconEye.removeClass("ri-eye-line").addClass("ri-eye-off-line");
      }
    });
  }
  

  showHiddenPass("register-pass", "register-eye");
  showHiddenPass("register-conf-pass", "register-conf-eye");

  $("#register-btn").on("click", function () {
    const email = $("#register-email").val().split("@")[0];
    localStorage.setItem("auth", 1);
    localStorage.setItem("email", email);
    window.location.replace("/kitchen.html");
  });
});
