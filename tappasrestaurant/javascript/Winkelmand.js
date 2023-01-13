let add = document.getElementsByClassName('add');
let remove = document.getElementsByClassName('remove');
const amountCont = document.querySelectorAll('.product-amt');
let totalamount = document.getElementById("totalGerechten");
const productContainer = document.querySelector('.product-container')
const bgcolor = document.querySelectorAll(".product-info")
const billId = localStorage.getItem("billId");
const orderBtn = document.querySelector(".order-button")

console.log(billId)
RequestOrders()

productContainer.innerHTML = "";

function RequestOrders() {
    $.ajax({
        type: "GET",
        url: `https://localhost:7269/api/Order/dishes/${billId}`,
        encode: false,
    }).done(function (data) {



        displayOrders(data.dishes)
        checkAmount()
    });
}

function displayOrders(dishes) {
    for (let x = 0; x < dishes.length; x++) {
        dishes.sort((a, b) => a.type - b.type);
        let Order = dishes[x]
        let product = document.createElement('li');
        product.className = "product";
        product.innerHTML = `
<span class="product-color"></span>
<div class="Image-flex">
    <span class="img"></span>
    <div class="product-info">
        <p class="food-desc">${Order.dish.name}</p>
    </div>
</div>
<div class="product-amt">
    <button class ="add">+</button>
    <div class ="number">${Order.ammount}</div>
    <button class = "remove">-</button>
</div>`

        productContainer.appendChild(product);



        const img = document.querySelectorAll(".img")
        img[x].style.backgroundImage = "url(" + Order.dish.imgPath + ")"

        add[x].addEventListener("click", function () {
            let ammount = this.parentElement.querySelector('.number')
            ammount.textContent = parseInt(ammount.textContent) + 1;
            totalamount.textContent = parseInt(totalamount.textContent) + 1;
        })

        remove[x].addEventListener("click", function () {
            let ammount = this.parentElement.querySelector('.number')

            if (ammount.textContent == "0") {
                return
            }
            ammount.textContent = ammount.textContent -= 1;
            totalamount.textContent = totalamount.textContent -= 1;



        })

        const bgcolor = document.querySelectorAll(".product-color")

        switch (Order.dish.type) {
            case 0:
                bgcolor[x].style.backgroundColor = "#6cffe9"
                break;
            case 1:
                bgcolor[x].style.backgroundColor = "#fc9c9c"
                break;
            case 2:
                bgcolor[x].style.backgroundColor = "#c475f4"
                break;
            case 3:
                bgcolor[x].style.backgroundColor = "#62ff85"
                break;
            case 4:
                bgcolor[x].style.backgroundColor = "#ff90f4"
                break;
            case 5:
                bgcolor[x].style.backgroundColor = "#eaff73"
                break;
            case 6:
                bgcolor[x].style.backgroundColor = "#7398ff"
                break;
            case 7:
                bgcolor[x].style.backgroundColor = "#ff4d4d"
                break;
            case 8:
                bgcolor[x].style.backgroundColor = "#328732"
                break;
            case 9:
                bgcolor[x].style.backgroundColor = "#6f6f6f"

        }

    }
}



function checkAmount() {
    let amount = document.querySelectorAll('.number')
    let ok = 0
    for (let p = 0; p < amount.length; p++) {

        let cringe = parseInt(amount[p].textContent)
        ok += cringe
        totalamount.textContent = ok
    }
}

function fillPopup() {

}


orderBtn.addEventListener("click", function () {
    const orderCont = document.querySelector(".orders-container")
    $.ajax({
        type: "GET",
        url: `https://localhost:7269/api/Order/dishes/${billId}`,
        encode: false,
    }).done(function (data) {

        for (let x = 0; x < data.dishes.length; x++) {
            let order = data.dishes
            console.log(order[x].dish)
            let orderhtml = document.createElement('div');
            orderhtml.className = "order";
            orderhtml.innerHTML = `
    <p class="order-name">${order[x].dish.name}</p>
    <p class="order-amount">${order[x].ammount}x</p>`
            orderCont.appendChild(orderhtml);
        }

    })
    UpdateRoundStatus()
    const popup = document.querySelector(".popup-container")
    popup.classList.toggle("visible")
    setInterval(function () {
        checkStatus()
    }, 5000);
})

function UpdateRoundStatus() {
    $.ajax({
        type: "PUT",
        url: `https://localhost:7269/api/RoundOrder/UpdateStatus`,
        encode: false,
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({
            "billId": billId,
            "status": 1
        }),
    })
}

function makeReadyBtn() {
    const readyBtn = document.querySelector(".status")
    readyBtn.classList.add("Ready")
    readyBtn.textContent = "Klik hier om volgende ronde te starten"
    readyBtn.addEventListener("click", function () {
            startNewRound()
            window.location.href = "http://localhost/Github/tappasrestaurant/pages/menu.html"
    })
}




function checkStatus() {
    $.ajax({
        type: "GET",
        url: `https://localhost:7269/api/RoundOrder/${billId}`,
        encode: false,
    }).done(function (data) {
        console.log(data)
        if (data == true) {
            makeReadyBtn()
        }
        else{
            return
        }
    });
}



function startNewRound() {
    $.ajax({
        type: "POST",
        url: `https://localhost:7269/api/RoundOrder/startNewRound/${billId}`,
        encode: false,
    }).done(function (data) {
        console.log(data)
    });
}