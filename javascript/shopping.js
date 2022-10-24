$(document).ready(function () {
    
    printCartItems();

    calculateSubtotal();

    updateSummary();

});


function addItem(item) {
        var itemQuantity = $(item).siblings("p").text(); // or var clickedBtnID = this.id
        var element = $(item);
        itemQuantity++;
        $(item).siblings("p").text(itemQuantity);

        var item_price = element.parent().siblings(".item-price").text();
        var total_price = element.parent().siblings(".total-item-price");

        total_price.text("$" + calculateItemPrice(item_price, itemQuantity));
        
        var item_id = element.parent().parent().attr('id');
        var cartItem = JSON.parse(sessionStorage.getItem(item_id));  
        cartItem.quantity = itemQuantity;
        console.log(cartItem.quantity);
        sessionStorage.setItem(item_id, JSON.stringify(cartItem));      
}

function createItem(prodInfo) {
    // var arrayOfCartItems = sessionStorage.getItem("cart");
    console.log(prodInfo.url);
    var item = '<div class="item" id="'+ prodInfo.id + '"> <div class="img-description"> <img src="' + prodInfo.url + '" /> <div class="item-description"> <h2 name="item-name">' + prodInfo.name + '</h2> </div> </div> <div class="item-price">$' + prodInfo.price + '</div> <div class="add-item"> <button class="subtract"> <img src="./assets/icons/minus-sign.png" /> </button> <p class="itemQuantity" id="#item-quantity-0">' + prodInfo.quantity + '</p> <button class="add"> <img src="./assets/icons/plus-sign.png" /> </button> </div> <div class="total-item-price">$' + prodInfo.price * prodInfo.quantity + '</div> <hr> </div> ';
    
    
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

        total_price.text("$" + calculateItemPrice(item_price, itemQuantity));

        var item_id = element.parent().parent().attr('id');
        var cartItem = JSON.parse(sessionStorage.getItem(item_id));  
        cartItem.quantity = itemQuantity;
        console.log(cartItem.quantity);
        sessionStorage.setItem(item_id, JSON.stringify(cartItem));      

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
        verifyData();
    }

});

function calculateSubtotal() {
    var subtotal = 0;
     
    // get all prices and quantities from sessionstorage
    
    for(i = 0; i < sessionStorage.length - 1; i++) {
        if (sessionStorage.key(i) != "alreadyLoaded") {
            var price = JSON.parse(sessionStorage.getItem(sessionStorage.key(i))).price;
            //console.log(price);
            var quantity = JSON.parse(sessionStorage.getItem(sessionStorage.key(i))).quantity;
            //console.log(quantity);
            subtotal += price * quantity;
        }
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

function verifyData() {
    var cardholder = $("#cardholder").val();
    var cardNumber = $("#cardNumber").val();
    var expirDate = $("#date").val();
    var cvv = $("#CVV").val();
    var terms = $("#yas");

    if (verifyCardholder(cardholder) == true  &&
        verifyCardNumber(cardNumber) == true &&
        verifyExpiration(expirDate) == true  &&
        verifyCVV(cvv) == true) {
            $(location).prop('href', "./thankyou.html");
        } 
        
}

function verifyCardholder(input) {
    let validInput = false;
    input = input.trim();

    if(input == "") {
        alert("Please enter your name!");
    } else {
        validInput = true;
    }
    
    return validInput
}

function verifyCardNumber(input) {
    let validInput = false;
    input = input.trim();

    if(input == "") {
        alert("Please enter your card number!");
    } else if(/[a-zA-Z]/.test(input) == true || input.length < 16) {
        alert("Please enter a valid 16-digit card number.");
    } else {
        validInput = true;
    }

    return validInput;
}

function verifyExpiration(input) {

    let validInput = false;
    var date = Date.parse(input);
    var currTime = new Date();

    if(isNaN(date)) {
        alert("Please enter a date!");
    } else if (date < Date.parse(currTime)) {
        alert("Your card is expired. Please use another one.")
    } else {
        validInput = true;
    }

    return validInput;
}

function verifyCVV(input) {
    
    let validInput = false;
    input = input.trim();
    
    if(input == "") {
        alert("Please enter a CVV!");
    } else if(/[a-zA-Z]/.test(input) == true) {
        alert("Please enter a valid CVV.");
    } else if(input.length != 3) {
        alert("Please enter a 3-number CVV.")
    } else {
        validInput = true;
    }

    return validInput;
}

function printCartItems() {
    for(i = 1; i < sessionStorage.length; i++) {
        var cartItem = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
        if (cartItem == 1) {
            continue;
        }
        if(cartItem.quantity != 0) {
            createItem(cartItem);
        }
    }
}