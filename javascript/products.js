$(document).ready(function () {

    addProduct();
});


function addProduct() {

    var prodInfo = {
        url: "hi",
        price: "100",
        name: "johny",
        descript: "johnyn"
    };

    sessionStorage.setItem("1", prodInfo.url);
    
    console.log(sessionStorage.getItem("1"));
}