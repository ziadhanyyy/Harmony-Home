$(document).ready(function () {
    $(".priceslist").empty();
    let amount = 0;
    $(".product").each(function () {
        if ($(this).is(":visible")) {
            let name = $(this).find(".productname").text();
            let price = $(this).find(".price").text();
            let qty = $(this).find(".number").val();
            $(".priceslist").append(`<li>${qty}x ${name}<br>${price}</li>`);
            amount++;
        }
    });

    let height = amount * 50;
    $(".totalprice")
        .removeAttr("style")
        .css("height", `${100 + height}`);

    $(".delete").click(function () {
        $(".priceslist").empty();
        let amount = 0;
        $(".product").each(function () {
            if ($(this).is(":visible")) {
                let name = $(this).find(".productname").text();
                let price = $(this).find(".price").text();
                let qty = $(this).find(".number").val();
                $(".priceslist").append(`<li>${qty}x ${name}<br>${price}</li>`);
                amount++;
            }
        });

        let height = amount * 50;
        $(".totalprice")
            .removeAttr("style")
            .css("height", `${100 + height}`);
        let json_data = localStorage.getItem("cart");
        let cart = JSON.parse(json_data);
        let productIndex = cart.findIndex((p) => p.name === product.name);
        if (productIndex !== -1) {
            cart.splice(productIndex, 1);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    });

    $(".number").on("change", function () {
        $(".priceslist").empty();
        let amount = 0;
        $(".product").each(function () {
            if ($(this).is(":visible")) {
                let name = $(this).find(".productname").text();
                let price = $(this).find(".price").text();
                let qty = $(this).find(".number").val();
                $(".priceslist").append(`<li>${qty}x ${name}<br>${price}</li>`);
                amount++;
            }
        });

        let height = amount * 50;
        $(".totalprice")
            .removeAttr("style")
            .css("height", `${100 + height}`);
    });
});

/*================================================================*/

$(document).ready(function () {
    let json_data = localStorage.getItem("cart");
    let cart = JSON.parse(json_data);
    for (let i = 0; i < cart.length; i++) {
        let element = `<div class="product" id="product${i}">
    
        <div>
            <img src="${cart[i].image}" class="productimage">
        </div>

        <div class="cartdetails">

            <div class="text">
                
                <p class="productname">
                    ${cart[i].name}
                </p>

                <p class="slash">|</p>

                <p class="productdesc">
                    Bed frame, high, w 4 storage boxes, white/Lindbåden, 140x200 cm
                </p>

            </div>

            <div>
                <p class="stocked">In Stock</p>
            </div>

            <div>
                <p class="price" id="price1">${cart[i].price}</p>
            </div>

            <div>
                <p class="qty">Qty:</p>
                <select class="number">
                    <option ${(cart[i].quantity == 1) ? "selected": ""}>1</option>
                    <option ${(cart[i].quantity == 2) ? "selected": ""}>2</option>
                    <option ${(cart[i].quantity == 3) ? "selected": ""}>3</option>
                    <option ${(cart[i].quantity == 4) ? "selected": ""}>4</option>
                    <option ${(cart[i].quantity == 5) ? "selected": ""}>5</option>
                </select>
            </div>

            <div>
                <button class="delete" onclick="document.getElementById('product${i}').style='display: none;'">Delete</button>
            </div>

        </div>

        </div>`;

        $(".scroll").append(element);

        $(".delete").click(function () {
            $(".priceslist").empty();
            let amount = 0;
            $(".product").each(function () {
                if ($(this).is(":visible")) {
                    let name = $(this).find(".productname").text();
                    let price = $(this).find(".price").text();
                    let qty = $(this).find(".number").val();
                    $(".priceslist").append(`<li>${qty}x ${name}<br>${price}</li>`);
                    amount++;
                }
            });

            let height = amount * 50;
            $(".totalprice")
                .removeAttr("style")
                .css("height", `${100 + height}`);
            let json_data = localStorage.getItem("cart");
            let cart = JSON.parse(json_data);
            let productIndex = cart.findIndex(
                (p) =>
                    p.name ===
                    $(this).parent().parent().find(".productname").text().trim()
            );

            if (productIndex !== -1) {
                cart.splice(productIndex, 1);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
        });

        $(".number").on("change", function () {
            $(".priceslist").empty();
            let amount = 0;
            $(".product").each(function () {
                if ($(this).is(":visible")) {
                    let name = $(this).find(".productname").text();
                    let price = $(this).find(".price").text();
                    let qty = $(this).find(".number").val();
                    $(".priceslist").append(`<li>${qty}x ${name}<br>${price}</li>`);
                    amount++;
                }
            });

            let height = amount * 50;
            $(".totalprice")
                .removeAttr("style")
                .css("height", `${100 + height}`);

            let json_data = localStorage.getItem("cart");
            let cart = JSON.parse(json_data);
            let productIndex = cart.findIndex(
                (p) =>
                    p.name ===
                    $(this).parent().parent().find(".productname").text().trim()
            );

            cart[productIndex].quantity = parseInt($(this).val());

            localStorage.setItem("cart", JSON.stringify(cart));
        });

        $(".priceslist").empty();
        let amount = 0;
        $(".product").each(function () {
            if ($(this).is(":visible")) {
                let name = $(this).find(".productname").text();
                let price = $(this).find(".price").text();
                let qty = $(this).find(".number").val();
                $(".priceslist").append(`<li>${qty}x ${name}<br>${price}</li>`);
                amount++;
            }
        });

        let height = amount * 50;
        $(".totalprice")
            .removeAttr("style")
            .css("height", `${100 + height}`);
    }
});


