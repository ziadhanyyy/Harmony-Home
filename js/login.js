$(document).ready(function () {
  const input = $("#login-pass");
  const iconEye = $("#login-eye");

  iconEye.on("click", function () {
    if (input.attr("type") === "password") {
      input.attr("type", "text");
      iconEye.addClass("ri-eye-line").removeClass("ri-eye-off-line");
    } else {
      input.attr("type", "password");
      iconEye.removeClass("ri-eye-line").addClass("ri-eye-off-line");
    }
  });

  $("#login-btn").on("click", function () {
    const email = $("#login-email").val().split("@")[0];
    localStorage.setItem("auth", 1);
    localStorage.setItem("email", email);
    window.location.replace("/kitchen.html");
  });

  $(".login-form").on("submit", function (e) {
    e.preventDefault();
    

  });
});
