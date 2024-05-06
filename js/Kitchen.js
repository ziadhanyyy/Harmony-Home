$(document).ready(function () {
  $(".product").click(function () {
    let productName = $(this).find("h4").text();
    let productPrice = $(this).find("h5").text();
    let productImage = $(this).find("img").attr("src");
    let shader = $(".shader");
    shader.find("h1").text(productName);
    shader.find("h2").text(productPrice);
    shader.find("img").attr("src", productImage);
    shader.find(".quantity-value").val(1);
    shader.removeClass("hidden");
  });
  $(".close").click(function () {
    let shader = $(".shader");
    shader.addClass("hidden");
  });
  $(".minus").click(function () {
    let quantity = parseInt($(".quantity-value").val());
    if (quantity > 1) {
      $(".quantity-value").val(quantity - 1);
    }
  });
  $(".plus").click(function () {
    let quantity = parseInt($(".quantity-value").val());
    $(".quantity-value").val(quantity + 1);
  });
  $("#sort").on("change", function () {
    let selectedValue = $(this).val(); // Get the selected value
    let products = $(".container");
    let product = products.find(".product");
    let sortedProducts = product.sort(function (a, b) {
      if (selectedValue === "2") {
        return (
          parseInt($(a).find("h5").text()) - parseInt($(b).find("h5").text())
        );
      } else if (selectedValue === "3") {
        return (
          parseInt($(b).find("h5").text()) - parseInt($(a).find("h5").text())
        );
      } else {
        return 0;
      }
    });
    products.html(sortedProducts.clone());
    products = $(".container");
    products.find(".product").click(function () {
      let productName = $(this).find("h4").text();
      let productPrice = $(this).find("h5").text();
      let productImage = $(this).find("img").attr("src");
      let shader = $(".shader");
      shader.find("h1").text(productName);
      shader.find("h2").text(productPrice);
      shader.find("img").attr("src", productImage);
      shader.removeClass("hidden");
    });
  });
  $("#productSearch").on("input", function () {
    const searchTerm = $(this).val().toLowerCase();

    $(".product").each(function () {
      const productName = $(this).find("h4").text().toLowerCase();
      const isVisible = productName.includes(searchTerm);
      $(this).toggle(isVisible);
    });
  });

  $(".add").click(function () {
    $("#toast").css("transform", "translateX(0)");
    setTimeout(() => {
      $("#toast").css("transform", "translateX(400px)");
    }, 4000);
    let product = {
        name: $(".content h1").text(),
        price: $(".content h2").text(),
        quantity: $(".quantity-value").val(),
        image: $(".product-detitls img").attr("src"),
        };
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let productIndex = cart.findIndex((p) => p.name === product.name);
    if (productIndex === -1) {
      cart.push(product);
    } else {
      cart[productIndex].quantity = parseInt(cart[productIndex].quantity) + parseInt(product.quantity);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    $(".shader").addClass("hidden");
  });
  $("#close").click(() => {
    $("#toast").css("transform", "translateX(400px)");
  });
});


