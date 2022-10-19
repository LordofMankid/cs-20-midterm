$(document).ready(function () {

    calculateSubtotal();

    adjustQuantities();

    console.log(sessionStorage.getItem("1"));
});


function addItem() {

    $(":button").filter('.add').on("click", function () {
        var itemQuantity = $(this).siblings("p").text(); // or var clickedBtnID = this.id
        var element = $(this);

        itemQuantity++;
        $(this).siblings("p").text(itemQuantity);

        var item_price = element.parent().siblings(".item-price").text();
        var total_price = element.parent().siblings(".total-item-price");
        total_price.text("$" + calculateItemPrice(item_price, itemQuantity).toFixed(2));

    });


}

function deleteItem() {

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
function subtractItem() {
    $(":button").filter('.subtract').on("click", function () {
        var itemQuantity = $(this).siblings("p").text(); // or var clickedBtnID = this.id
        var element = $(this);

        itemQuantity--;
        $(this).siblings("p").text(itemQuantity);


        var item_price = element.parent().siblings(".item-price").text();
        var total_price = element.parent().siblings(".total-item-price");
        


        if(itemQuantity < 0) {
            console.log("hi");
            $(this).parent().parent().hide();   
        }
        total_price.text("$" + calculateItemPrice(item_price, itemQuantity));

    });
}

function adjustQuantities() {
    addItem();
    subtractItem();
    updateSummary();
    $(":button").on("click", function () {
        updateSummary();
    });
}

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