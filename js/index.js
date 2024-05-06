$(document).ready(function() {
    $(".logout-button").hide();
    $(".profile-name").hide();
    if(localStorage.getItem("auth") == 1) { 
        $(".login-button").hide();
        $(".logout-button").show();
        $(".profile-name").show();
        $(".profile-name").text(localStorage.getItem("email"));
    }
    $(".login-button").click(function() {
        window.location.href = "login.html";
    });
    $(".logout-button").click(function() {
        localStorage.setItem("auth", 0);
        window.location.href = "index.html";
    });
    $(".cart-link").find("i").attr("value", localStorage.getItem("cart").length || 0);
});