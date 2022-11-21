const navItems = document.querySelectorAll(".nav-item")
const foodAmount = document.querySelectorAll(".food-amount")
const minFood = document.querySelectorAll(".min-amount")
const plusfood = document.querySelectorAll(".plus-amount")
const foodList = document.querySelector(".food-list")
const foodcontainer = document.querySelector(".food-container")

const dishBanner = document.querySelector("#dishes-img")
const dishesBanners = ["koudetapas", "vlees", "vegetarische", "vis", "desserts", "could-drinks", "warm-drinks", "bier", "wijn", "Cocktails"]


displayDishes(1)
//navbar
for (let x = 0; x < navItems.length; x++) {
    navItems[0].classList.add("selected")

   

     navItems[x].addEventListener("click", function () {
        foodcontainer.scrollTo(0, 0)

        for (let x = 0; x < navItems.length; x++) {
            navItems[x].classList.remove("selected")
        }
        this.classList.add("selected")
        let dishesImgsPath = "../fotos/dishesBanner/" + dishesBanners[x] + ".jpg";
        dishBanner.style.backgroundImage = 'url(' + dishesImgsPath + ')';
        displayDishes(x + 1)
    })
}


//dish from database
function displayDishes(type) {
    $.ajax({
        type: "GET",
        url: `https://localhost:7269/api/Dish/dishtype/${type}`,
        encode: false,
    }).done(function (data) {
        loadDishHTML(data)
        foodImg(data)
    });
}

function foodImg(data) {
    const dishImg = document.querySelectorAll(".food-img")

    for (let x = 0; x < data.length; x++) {
        let dish = data[x]
        dishImg[x].style.backgroundImage = 'url(' + dish.imgPath + ')';
    }

}

function loadDishHTML(data) {
    foodList.innerHTML = "";
    for (let x = 0; x < data.length; x++) {
        let dish = data[x]

    let foodItem = document.createElement( 'li' );
    foodItem.className = "food";
    foodItem.innerHTML = `
    <li class="food">
    <span class="food-img"></span>
    <div class="food-desc">
    <p class="food-name">${dish.name}</p>
    <p class="food-ingredients">${dish.description}</p>
    <div class="food-amount"><span class="min-amount">-</span><p class="amount">0</p><span class="plus-amount">+</span></div>
    </div>`

    const minBtn = foodItem.querySelector(".min-amount")
    const plusBtn = foodItem.querySelector(".plus-amount")
    const ammount = foodItem.querySelector(".amount")

    plusBtn.addEventListener("click", () => {
        
        ammount.textContent = ammount.textContent = parseInt(ammount.textContent) + 1;
    })
    minBtn.addEventListener("click", () => {
        if (ammount.textContent == "0") {
            return
        }
        ammount.textContent = ammount.textContent -= 1;
    })
///belangrijik
        foodList.appendChild(foodItem)

    }
}