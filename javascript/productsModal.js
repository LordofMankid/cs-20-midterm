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
    var addToCartButton = document.getElementsByClassName("addToCart")[0];
    addToCartButton.innerHTML = "Add to Cart";
    addToCartButton.style.backgroundColor = "#3F70AA";
    addToCartButton.style.cursor = "pointer";
}

function hideModal() {
    var modal = document.getElementsByClassName("productModal")[0];
    var addToCartButton = document.getElementsByClassName("addToCart")[0];
    addToCartButton.innerHTML = "Add to Cart";
    addToCartButton.style.backgroundColor = "#3F70AA";
    addToCartButton.style.cursor = "pointer";
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
        document.getElementById("productsButton").style.display = "none";
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

    var addToCartButton = document.getElementsByClassName("addToCart")[0];
    addToCartButton.innerHTML = "Added to Cart";
    addToCartButton.style.backgroundColor = "#B1868C";
    addToCartButton.style.cursor = "auto";
}