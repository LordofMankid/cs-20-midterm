const toiletSet = { name: "Toilet Set",
                    id: 'toiletSet',
                    price: 5000,
                    url: "./assets/products-images/product1.png",
                    material: "Ceramic",
                    quantity: 0,
                    dimensions: "11",
                    year: "2022",
                    description: ["Made of ceramic from Italy. Stain-free and easy to clean. No more worrying about stains on seat and lids.", 
                                  "Comes with toilet lid, flusher, bidet, and seat warmer. Accessories are easy to take out as you wish.", 
                                  "Comes with two flusher system for saving water and environment."] };

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
                    dimensions: "10",
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
function initLoad() {
    if (!sessionStorage.alreadyLoaded) {
        sessionStorage.setItem("toiletSet", JSON.stringify(toiletSet));
        sessionStorage.setItem("toiletPaper", JSON.stringify(toiletPaper));
        sessionStorage.setItem("toiletPaperHolder", JSON.stringify(toiletPaperHolder));
        sessionStorage.setItem("showerHead", JSON.stringify(showerHead));
        sessionStorage.setItem("toothbrushes", JSON.stringify(toothbrushes));
        sessionStorage.alreadyLoaded = 1;
    }
}


$(document).ready(function () {
    initLoad();
});
