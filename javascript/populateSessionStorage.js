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
                    description: ["Our toliet paper is entirely made by us, within our homegrown bamboo farms and environmentally-friendly factories.", "Provides comfort and softness that leaves you feeling fresh Made with any toxic perfumes or chemicals, so there is no need to worry about allergies or skin irritation", "Decomposes without leaving chemical waste"] };

const showerHead = { name: "Shower Head",
                    id: 'showerHead',
                    price: 200,
                    material: "Steel",
                    dimensions: "10",
                    url: "./assets/products-images/product3.png",
                    quantity: 0,
                    year: "2022",
                    description: ["Stainless steel makes sure that the product is in perfect condition, even decades after your initial purchase", "20% discount for users that request for installation service", "2 weeks after buying this product 10-year warranty with showerhead and related accessories"] };

const toiletPaperHolder = { name: "Toilet Paper Holder",
                    id: 'toiletPaperHolder',
                    price: 100,
                    material: "Steel",
                    dimensions: "10cm",
                    url: "./assets/products-images/product4.png",
                    quantity: 0,
                    year: "2020",
                    description: ["Simple and aesthetic design enhances the bathroom experience", "Installation is simple, very easy to take out and refill toilet paper", "If this item is bought with the toliet set, there is a limited-time 20% discount on all items included within the bundle"] };

const toothbrushes = { name: "Wood Toothbrushes",
                    id: 'toothbrush',
                    price: 5,
                    material: "Wood",
                    dimensions: "10cm",
                    url: "./assets/products-images/product5.png",
                    quantity: 0,
                    year: "2019",
                    description: ["Wood used for these toothbrushes are called Pink Ivory, African wood found in Mozambique, South Africa.", "They are known for their high duration and highly resistant to decay Nylon is placed into advanced, high-accuracy machines that produce bristles that maximize the brushing experience", "If you order all three toothbrush colors, your order comes with a free toothbrush cup"] };
                    
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
