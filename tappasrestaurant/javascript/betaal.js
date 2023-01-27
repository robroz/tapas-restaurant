
const ordersCont = document.querySelector(".orders-cont")
const totalpriceText = document.getElementById("total-price")

$(document).ready(function () {
    $('#select-bank').click(function () {
        $('ul').toggleClass('active')
    })
})

const billId = localStorage.getItem("billId");



requestBill()


function requestBill() {
    $.ajax({
        type: "GET",
        url: `https://localhost:7269/api/Bill/${billId}`,
        encode: false,
    }).done(function (data) {
        console.log(data)
        loadPriceHTML(data)

    });
}


function loadPriceHTML(data) {
let totalprice = 0;
let productPrice = 0;
    for (let x = 0; x < data.length; x++) {
        let dishes = data[x]
        for (let y = 0; y < dishes.dishes.length; y++) {
            let dish = dishes.dishes[y]
            console.log(dish)
            let foodItem = document.createElement('p');
        foodItem.className = "product";
        foodItem.innerHTML = `
        <p class="product-title">${dish.dish.name}</p>
        <p class="product-text" >${dish.ammount}</p>
        <p class="product-text">€${(Math.round(dish.dish.price* 100) / 100).toFixed(2)}</p>
    `
    productPrice = dish.dish.price * dish.ammount
    totalprice +=  productPrice
    console.log(totalprice)
    ordersCont.appendChild(foodItem)
        }
    }
    
    totalpriceText.textContent = "Totaal: €" + (Math.round(totalprice * 100) / 100).toFixed(2);

}