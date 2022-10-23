$(document).ready(function () {
    
    calculateSubtotal();

    updateSummary();
    console.log(sessionStorage.getItem("1"));
});


function addItem(item) {

   
        var itemQuantity = $(item).siblings("p").text(); // or var clickedBtnID = this.id
        var element = $(item);
        console.log("hi");
        itemQuantity++;
        $(item).siblings("p").text(itemQuantity);
        var prodInfo = {
            url: "./assets/products/sunflowerDEMO.jpg",
            price: "$1000",
            name: "johasdfasdfny",
            descript: "johnyn"
        };
        createItem(prodInfo);
        var item_price = element.parent().siblings(".item-price").text();
        var total_price = element.parent().siblings(".total-item-price");
        total_price.text("$" + calculateItemPrice(item_price, itemQuantity).toFixed(2));


}

function createItem(prodInfo) {
    
    var item = '<div class="item" id="item1"> <div class="img-description"> <img src="' + prodInfo.url + '" /> <div class="item-description"> <h2 name="item-name">' + prodInfo.name + '</h5> <p name="item-type">' + prodInfo.descript + '</p> </div> </div> <div class="item-price">' + prodInfo.price + '</div> <div class="add-item"> <button class="subtract"> <img src="./assets/icons/minus-sign.png" /> </button> <p class="itemQuantity" id="#item-quantity-0">5</p> <button class="add"> <img src="./assets/icons/plus-sign.png" /> </button> </div> <div class="total-item-price">' + prodInfo.price + '</div> <hr> </div> ';
    $(".item-list").append(item);
}

function calculateItemPrice(unit_price, num_items) {
    unit_price = parseNonNumbers(unit_price);
    unit_price *= num_items;

    return unit_price;
}

function parseNonNumbers(string) {
    string = string.replace(/\D/g, '');

    return string;
}

function subtractItem(item) {
        var itemQuantity = $(item).siblings("p").text(); // or var clickedBtnID = this.id
        var element = $(item);

        itemQuantity--;
        $(item).siblings("p").text(itemQuantity);


        var item_price = element.parent().siblings(".item-price").text();
        var total_price = element.parent().siblings(".total-item-price");
        
        
        if(itemQuantity <= 0) {
            console.log("hi");
            $(item).parent().parent().hide(); 
            itemQuantity = 0;

        }

        total_price.text("$" + calculateItemPrice(item_price, itemQuantity).toFixed(2));

}

function adjustQuantities(item) {
    if(item.attr('class') == "add") {
        addItem(item);
    
    } else {
        subtractItem(item);
    }
    updateSummary();

    
}

$(document).on('click', ":button", function () {
    if($(this).attr('class') != "checkout-button") {
        var item = $(this);

        adjustQuantities(item);
        
    } else {
        var form = $(".cardInfo");
        verifyData(form);
    }

});

function calculateSubtotal() {
    var numItem = $('.item');
    var itemPrices = $('.item-price');
    var subtotal = 0;

    for (i = 0; i < numItem.length; i++) {
        numItem[i] = $(".itemQuantity:eq(" + i + ")").text();

        itemPrices[i] = parseNonNumbers($(".item-price:eq(" + i + ")").text());

        subtotal += calculateItemPrice(numItem[i], itemPrices[i]);
    }

    return subtotal;

}

function updateSummary() {
    const tax = 0.0625;
    var subtotal = calculateSubtotal();
    var order_tax = subtotal * tax;
    var shipping = 15;
    if (subtotal > 100) {
        shipping = 0;
    }
    var total = subtotal + order_tax + shipping;
    $("#subtotal").text("$" + subtotal.toFixed(2));
    $("#tax").text("$" + order_tax.toFixed(2));
    $("#shipping").text("$" + shipping.toFixed(2));
    $("#total").text("$" + total.toFixed(2));
}

function verifyData(element) {
    element.find('input, text').each(function() {
        if($(this).val() == "") {
            alert("Please fill out the form!");
        }

    });

}
