$(document).ready(function(){
    $(".add_to_cart").click(function(){
        let name = $(this).parent().find(".productname").text()
        let price = $(this).parent().find(".se3r").text()
        let image = $(this).parent().parent().find(".productimage").attr("src")
        let product = {
            name: name,
            price: price,
            image: image,
            quantity: 1,
        }
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let productIndex = cart.findIndex((p) => p.name === product.name);

        if (productIndex === -1) {
            cart.push(product);

        } else {
            cart[productIndex].quantity = parseInt(cart[productIndex].quantity) + parseInt(product.quantity);
        }
        
        localStorage.setItem("cart", JSON.stringify(cart));
    })
})