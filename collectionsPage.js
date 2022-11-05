let allProds = [
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/95535146-e50a-49fe-803e-18add07a0759_400x.png?v=1625045778",
        prodName: "Misfit T200",
        review: "4.8 | 39 reviews",
        price: "₹1649",
        save: "You Save: ₹2350 (59%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_400x.png?v=1630060654",
        prodName: "Misfit T50 Trimmer",
        review: "4.9 | 16 reviews",
        price: "₹989",
        save: "You Save: ₹1510 (60%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_d1a8963d-822e-481e-a61e-ce27d5734c68_300x.png?v=1630646787",
        prodName: "Misfit T50 Lite",
        review: "4.5 | 4 reviews",
        price: "₹879",
        save: "You Save: ₹1120 (56%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/white_300x.png?v=1657869596",
        prodName: "Misfit T30 Trimmer",
        review: "4.8 | 5 reviews",
        price: "₹769",
        save: "You Save: ₹730 (49%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/553af994-244a-4b81-9d9e-9967a1b966b3_300x.png?v=1656750183",
        prodName: "boAt BassHeads 100",
        review: "4.8 | 407 reviews",
        price: "₹379",
        save: "You Save: ₹620 (62%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_15634ca0-9f81-4d11-b891-9a1496f709b1_300x.png?v=1641801688",
        prodName: "boAt Rockerz 330",
        review: "4.8 | 258 reviews",
        price: "₹1499",
        save: "You Save: ₹1491 (50%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/6b237ddc-f894-4dfd-a474-2435f93e6611_300x.png?v=1625046507",
        prodName: "boAt Rockerz 255",
        review: "4.8 | 224 reviews",
        price: "₹999",
        save: "You Save: ₹1991 (67%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/f87f98c3-9b52-4f7f-9ebe-dd10ee9517d9_300x.png?v=1633152280",
        prodName: "boAt BassHeads 102",
        review: "4.8 | 154 reviews",
        price: "₹399",
        save: "You Save: ₹891 (69%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/553af994-244a-4b81-9d9e-9967a1b966b3_300x.png?v=1656750183",
        prodName: "boAt BassHeads 100",
        review: "4.8 | 407 reviews",
        price: "₹379",
        save: "You Save: ₹620 (62%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_15634ca0-9f81-4d11-b891-9a1496f709b1_300x.png?v=1641801688",
        prodName: "boAt Rockerz 330",
        review: "4.8 | 258 reviews",
        price: "₹1499",
        save: "You Save: ₹1491 (50%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/6b237ddc-f894-4dfd-a474-2435f93e6611_300x.png?v=1625046507",
        prodName: "boAt Rockerz 255",
        review: "4.8 | 224 reviews",
        price: "₹999",
        save: "You Save: ₹1991 (67%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/f87f98c3-9b52-4f7f-9ebe-dd10ee9517d9_300x.png?v=1633152280",
        prodName: "boAt BassHeads 102",
        review: "4.8 | 154 reviews",
        price: "₹399",
        save: "You Save: ₹891 (69%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/MG_600x.png?v=1657775492",
        prodName: "boAt Airdopes 131 PRO",
        review: "5.0 | 2 reviews",
        price: "₹1299",
        save: "You Save: ₹1691 (57%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_600x.png?v=1642405569",
        prodName: "boAt Airdopes 131 - Wireless Earbuds",
        review: "4.8 | 1116 reviews",
        price: "₹1299",
        save: "You Save: ₹1691 (57%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_759e7ad4-18af-4407-9e8a-91c0058b1a74_300x.png?v=1648108782",
        prodName: "boAt Watch Wave Lite",
        review: "4.8 | 31 reviews",
        price: "₹1799",
        save: "You Save: ₹5191 (74%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/white_300x.png?v=1657869596",
        prodName: "boAt Airdopes 141",
        review: "4.8 | 411 reviews",
        price: "₹1799",
        save: "You Save: ₹2991 (67%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/MG_600x.png?v=1657775492",
        prodName: "boAt Airdopes 131 PRO",
        review: "5.0 | 2 reviews",
        price: "₹1299",
        save: "You Save: ₹1691 (57%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_600x.png?v=1642405569",
        prodName: "boAt Airdopes 131 - Wireless Earbuds",
        review: "4.8 | 1116 reviews",
        price: "₹1299",
        save: "You Save: ₹1691 (57%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_759e7ad4-18af-4407-9e8a-91c0058b1a74_300x.png?v=1648108782",
        prodName: "boAt Watch Wave Lite",
        review: "4.8 | 31 reviews",
        price: "₹1799",
        save: "You Save: ₹5191 (74%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/white_300x.png?v=1657869596",
        prodName: "boAt Airdopes 141",
        review: "4.8 | 411 reviews",
        price: "₹1799",
        save: "You Save: ₹2991 (67%)",
    },
];

window.addEventListener("load", function () {
    display_allProds(allProds);
});

function display_allProds(data) {
    document.querySelector("#container").innerHTML = null;
    data.map(function (elem, index) {

        let div = document.createElement("div");
        let Image = document.createElement("img");
        Image.setAttribute("src", elem.img);
        let div1 = document.createElement("div");
        let Name = document.createElement("h4");
        Name.innerText = elem.prodName;
        Name.style.color = "black";
        let Review = document.createElement("p");
        Review.style.color = "teal";
        Review.innerText = elem.review;
        let Hr = document.createElement("hr");
        Hr.style.color = "teal";
        let Price = document.createElement("h4");
        Price.innerText = elem.price;
        Price.style.color = "red";
        let Save = document.createElement("p");
        Save.innerText = elem.save;
        Save.style.color = "teal";
        Save.style.fontSize = "12px";
        let Btn = document.createElement("button");
        Btn.addEventListener("click", function () {
            addToCart(elem, index)
        });
        Btn.innerText = "Add to cart";
        Btn.style.backgroundColor = "red";
        Btn.style.color = "white";

        div1.append(Name, Review, Hr, Price, Save, Btn);

        div.append(Image, div1);

        document.querySelector("#container").append(div);
    });
}

// ---------------------------------------------login-form------------------------------------------------------
document.querySelector("#logo>img:first-of-type").addEventListener("click", openForm);
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
document.querySelector("#myForm button").addEventListener("click", openLogin);
function openLogin() {
    window.location.href = "./login.html";
}
/*----------------------------side-panel-------------------------------*/
document.querySelector("#logo>img:nth-child(4)").addEventListener("click", openCart);
function openCart() {
    document.getElementById("sidePanel").style.width = "400px";
}
document.querySelector("#closebtn>span+span").addEventListener("click", closeCart);
function closeCart() {
    document.getElementById("sidePanel").style.width = "0";
}
// --------------------------more-tab-panel-------------------------------------
document.querySelector("#boat+div>ul>li:last-child").addEventListener("mouseover", display_moreTab);
function display_moreTab() {
    document.querySelector("#moreTab").style.display = "block";
}
document.querySelector("#moreTab").addEventListener("mouseleave", noDisplay_moreTab);
function noDisplay_moreTab() {
    document.querySelector("#moreTab").style.display = "none";
}
// ----------------------------------------------------------------------------

let inCartItems = JSON.parse(localStorage.getItem("cartList")) || [];

window.addEventListener("load", function () {
    displayData(inCartItems);
});

function displayData(inCartItems) {
    //console.log("inside func")
    document.querySelector("#cart").innerHTML = "";
    let total = 0;
    inCartItems.map(function (elem, index) {
        let strPrice = elem.prodPrice;
        let numPrice = strPrice.replace("₹", "").replace(",", "");
        total += Number(numPrice);
        let div = document.createElement("div");
        let div_img = document.createElement("div");
        let cartImg = document.createElement("img");
        cartImg.setAttribute("src", elem.prodImg);
        div_img.append(cartImg);
        let details_div = document.createElement("div");
        let H4 = document.createElement("h4");
        H4.innerText = elem.prodName
        let Price = document.createElement("p");
        Price.innerText = elem.prodPrice;
        Price.style.color = "red";
        let deletItem = document.createElement("p");
        deletItem.innerText = "Delete";
        deletItem.addEventListener("click", function () {
            deleteCart(index);
        });
        details_div.append(H4, Price, deletItem);
        div.append(div_img, details_div);

        document.querySelector("#cart").append(div);
    });

    let itemToal = document.querySelector("#closebtn>span");
    itemToal.innerText = inCartItems.length;
    let span = document.querySelector("#cart+div>p>span")
    span.innerText = "Rs." + total + ".00";
    //console.log(total)
}

function deleteCart(index) {
    let deletedCart = inCartItems.filter(function (elem, i) {
        return i != index;
    });

    localStorage.setItem("cartList", JSON.stringify(deletedCart));
    displayData(deletedCart);
}
// -------------------------------payment---------------------------------------------
document.querySelector("#cart+div>button").addEventListener("click", openPaymentPage);
function openPaymentPage() {

    if (inCartItems.length != 0) {
        window.location.href = "./payment.html";
    } else {
        alert("Cart is empty");
    }
}
/*----------------------------Add to Cart function-------------------------------*/

let cart = JSON.parse(localStorage.getItem("cartList")) || [];

function addToCart(elem, index) {
    let cartAdd = {
        prodImg: elem.img,
        prodName: elem.prodName,
        prodPrice: elem.price,
    };
    cart.push(cartAdd);

    localStorage.setItem("cartList", JSON.stringify(cart));
}
// ---------------------------------------------collections------------------------------------------------------
let collections = [
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_480x.png?v=1612338251",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_540x.png?v=1612338387",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/pro_gear_720x.jpg?v=1648546494",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_540x.png?v=1612338356",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_540x.png?v=1612338436",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_540x.png?v=1622452897",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/bence-boros-253214-unsplash_720x.jpg?v=1648545875",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/New-Category-Banners_with-Trebal_09_720x.png?v=1615033153",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-limited-edition_540x.png?v=1612338560",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/MISFIT-shop_720x.png?v=1624859990",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Immortal_category_Image_720x.png?v=1626094103",
];

document.querySelector("#boat+div>ul>li:first-child").addEventListener("mouseover", display_Collection);

function display_Collection() {
    document.getElementById("collections").innerHTML = null;
    collections.forEach(function (elem) {
        let div = document.createElement("div");
        let Img = document.createElement("img");
        Img.setAttribute("src", elem);
        Img.addEventListener("click", collectionPage);
        div.append(Img);
        document.getElementById("collections").append(div);
    });
}

document.getElementById("collections").addEventListener("mouseleave", noDisplay);

function noDisplay() {
    document.getElementById("collections").innerHTML = null;
}
function collectionPage() {
    window.location.href = "./collectionsPage.html";
}
// ---------------------------------------------filter------------------------------------------------------

document.querySelector("#sort").addEventListener("change", sortProds);

function sortProds() {
    let selected = document.querySelector("#sort").value;
    if (selected != "Featured") {
        if (selected == "A-Z") {

            allProds.sort(function (a, b) {
                if (a.prodName.toUpperCase() > b.prodName.toUpperCase()) return 1;
                if (a.prodName.toUpperCase() < b.prodName.toUpperCase()) return -1;
                return 0;
            });

            display_allProds(allProds);

        }

        if (selected == "Z-A") {
            allProds.sort(function (a, b) {
                if (a.prodName.toUpperCase() > b.prodName.toUpperCase()) return -1;
                if (a.prodName.toUpperCase() < b.prodName.toUpperCase()) return 1;
                return 0;
            });

            display_allProds(allProds);
        }

        if (selected == "htl") {

            allProds.sort(function (a, b) {
                a = a.price.replace("₹", "").replace(",", "");
                b = b.price.replace("₹", "").replace(",", "");
                return b - a;
            });
            display_allProds(allProds);
        }

        if (selected == "lth") {
            allProds.sort(function (a, b) {
                a = a.price.replace("₹", "").replace(",", "");
                b = b.price.replace("₹", "").replace(",", "");
                return a - b;
            });
            display_allProds(allProds);
        }

    } else {
        display_allProds(allProds);
    }
}



