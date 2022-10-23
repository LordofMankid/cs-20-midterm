const toiletSet = { name: "Toilet Set",
                    id: 'toiletSet',
                    price: 5000,
                    url: "./assets/products-images/product1.png",
                    material: "Ceramic",
                    quantity: 0,
                    dimensions: "11",
                    year: "2022",
                    description: ["Made from ceramic.", 
                                  "Comes with a toilet lid.", 
                                  "Comes with two flusher systems."] };

const toiletPaper = { name: "Toilet Paper",
                    id: 'toiletPaper',
                    price: 15,
                    url: "./assets/products-images/product2.png",
                    material: "Paper",
                    dimensions: "10",
                    quantity: 0,
                    year: "2022",
                    description: ["Made from the softest quality paper.", 
                                  "Great for babies.", 
                                  "And adults alike we suppose."] };

const showerHead = { name: "Steel Shower Head",
                    id: 'showerHead',
                    price: 200,
                    material: "Steel",
                    dimensions: "10 x 10 x 10",
                    url: "./assets/products-images/product3.png",
                    quantity: 0,
                    year: "2022",
                    description: ["Extremely luxurious.", 
                                  "Won't stain over time.", 
                                  "Adjustable pressure."] };

const toiletPaperHolder = { name: "Wooden Toilet Paper Holder",
                    id: 'toiletPaperHolder',
                    price: 100,
                    material: "Steel",
                    dimensions: "10cm",
                    url: "./assets/products-images/product4.png",
                    quantity: 0,
                    year: "2020",
                    description: ["Sturdy.", 
                                  "Fits standard paper rolls.", 
                                  "Looks great in any setting."] };

const toothbrushes = { name: "Wooden Toothbrushes",
                    id: 'toothbrush',
                    price: 5,
                    material: "Wood",
                    dimensions: "10cm",
                    url: "./assets/products-images/product5.png",
                    quantity: 0,
                    year: "2019",
                    description: ["Soft bristles.", 
                                  "Sturdy wooden handle.", 
                                  "Channel your inner Scandinavian."] };

function showModal(id) {
    var item = JSON.parse(sessionStorage.getItem(id));
    console.log(id);

    var modal = document.getElementsByClassName('productModal')[0];

    modal.id = item.id;
    document.getElementById("productImg").src = item.url;
    document.getElementById('name').innerHTML = item.name;
    document.getElementById('price').innerHTML = '$' + item.price;
    document.getElementById('material').innerHTML = 'Material: ' + item.material;
    document.getElementById('dimensions').innerHTML = 'Dimensions: ' + item.dimensions;
    document.getElementById('year').innerHTML = 'Year: ' + item.year;

    modal.style.display = "block";

    var description = item.description;
    var htmlDescription = "";

    for(i = 0; i < description.length; i++) {
        htmlDescription += '<li> ' + description[i] + '</li>';
    }
    document.getElementById('about_info').innerHTML = htmlDescription;
    
}

function hideModal() {
    var modal = document.getElementsByClassName("productModal")[0];
    modal.style.display = "none";
}

function filter(product) {

    if (product == "all") {
        var filteredOut = document.getElementsByClassName("filter");
        for (i = 0; i < filteredOut.length; i++) {
            filteredOut[i].style.fontFamily = "Zodiak-Regular, sans-serif";
        }
        document.getElementById("allFilter").style.fontFamily = "Zodiak-Bold, sans-serif";

        var filteredOut = document.getElementsByClassName("product");
        for (i = 0; i < filteredOut.length; i++) {
            filteredOut[i].style.display = "block";
        }
    }

    if (product == "toiletSet") {
        var filteredOut = document.getElementsByClassName("filter");
        for (i = 0; i < filteredOut.length; i++) {
            filteredOut[i].style.fontFamily = "Zodiak-Regular, sans-serif";
        }
        document.getElementById("toiletSetFilter").style.fontFamily = "Zodiak-Bold, sans-serif";

        var filteredOut = document.getElementsByClassName("product");
        for (i = 0; i < filteredOut.length; i++) {
            filteredOut[i].style.display = "none";
        }
        document.getElementById("toiletSet").style.display = "block";
    }

    if (product == "toiletParts") {
        var filteredOut = document.getElementsByClassName("filter");
        for (i = 0; i < filteredOut.length; i++) {
            filteredOut[i].style.fontFamily = "Zodiak-Regular, sans-serif";
        }
        document.getElementById("toiletPartsFilter").style.fontFamily = "Zodiak-Bold, sans-serif";

        var filteredOut = document.getElementsByClassName("product");
        for (i = 0; i < filteredOut.length; i++) {
            filteredOut[i].style.display = "none";
        }
        document.getElementById("showerHead").style.display = "block";
    }

    if (product == "accessories") {
        var filteredOut = document.getElementsByClassName("filter");
        for (i = 0; i < filteredOut.length; i++) {
            filteredOut[i].style.fontFamily = "Zodiak-Regular, sans-serif";
        }
        document.getElementById("accessoriesFilter").style.fontFamily = "Zodiak-Bold, sans-serif";

        var filteredOut = document.getElementsByClassName("product");
        for (i = 0; i < filteredOut.length; i++) {
            filteredOut[i].style.display = "none";
        }
        document.getElementById("toiletPaperHolder").style.display = "block";
    }

    if (product == "toiletries") {
        var filteredOut = document.getElementsByClassName("filter");
        for (i = 0; i < filteredOut.length; i++) {
            filteredOut[i].style.fontFamily = "Zodiak-Regular, sans-serif";
        }
        document.getElementById("toiletriesFilter").style.fontFamily = "Zodiak-Bold, sans-serif";

        var filteredOut = document.getElementsByClassName("product");
        for (i = 0; i < filteredOut.length; i++) {
            filteredOut[i].style.display = "none";
        }
        document.getElementById("toiletPaper").style.display = "block";
        document.getElementById("toothbrushes").style.display = "block";
    }
}

function loadMore() {
    document.getElementById("toiletPaperHolder").style.display = "block";
    document.getElementById("toothbrushes").style.display = "block";
    document.getElementById("productsButton").style.display = "none";
}

function addToCart() {
    // get item ID
    
    var id = $('.productModal').attr('id');
    
    // update quantity for the item in sessionStorage
    for (i = 0; i < sessionStorage.length; i++) {
        var sessionStorageItem = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
        if (id == sessionStorageItem.id) {
            sessionStorageItem.quantity += 1;
            sessionStorage.setItem(id, JSON.stringify(sessionStorageItem));
        }
    }
}