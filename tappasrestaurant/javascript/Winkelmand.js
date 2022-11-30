let add = document.getElementsByClassName('add');
let remove = document.getElementsByClassName('remove');
const amountCont = document.querySelectorAll('.product-amt');
let totalamount = document.getElementById("totalGerechten");
const productContainer = document.querySelector('.product-container')
const bgcolor = document.querySelectorAll(".product-info")

//

const dishOne = {
    // constructor(name, price , imgpath ,type)
    name: "ham met meloen",
    price: "8,-",
    imgpath: "../fotos/dishImgs/ham-met-meloen.webp",
    type: 0
}

const dishTwo = {
    // constructor(name, price , imgpath ,type)
    name: "Cheese Cake",
    price: "34,23",
    imgpath: "../fotos/dishImgs/cheesecake.webp",
    type: 1
}

const dishThree = {
    // constructor(name, price , imgpath ,type)
    name: "friet",
    price: "23,-",
    imgpath: "../fotos/dishImgs/zoete-aardappelfriet.webp",
    type: 0
}

const dishFour = {
    // constructor(name, price , imgpath ,type)
    name: "Gehaktballentjes",
    price: "2.32",
    imgpath: "../fotos/dishImgs/gehaktballetjes.webp",
    type: 3
}

const dishFive = {
    // constructor(name, price , imgpath ,type)
    name: "Gambas",
    price: "233.32",
    imgpath: "../fotos/dishImgs/gambas.webp",
    type: 4
}

const dishSix = {
    // constructor(name, price , imgpath ,type)
    name: "Fles sauvignon blanc",
    price: "23.20",
    imgpath: "../fotos/dishImgs/fles-sauvignon-blanc.webp",
    type: 3
}

const dishSeven = {
    // constructor(name, price , imgpath ,type)
    name: "Lipton IceTea Green",
    price: "23.32",
    imgpath: "../fotos/dishImgs/lipton-ice-tea-green.webp",
    type: 2
}

const dishEight = {
    // constructor(name, price , imgpath ,type)
    name: "Kip Bacon Rolletjes",
    price: "23.32",
    imgpath: "../fotos/dishImgs/kip-baconrolletjes.webp",
    type: 6
}

const dishNine = {
    // constructor(name, price , imgpath ,type)
    name: "Kip met Honing mosterdsaus",
    price: "23.32",
    imgpath: "../fotos/dishImgs/kip-met-honing-mosterdsaus.webp",
    type: 2
}

const dishTen = {
    // constructor(name, price , imgpath ,type)
    name: "Kipkluifjes",
    price: "20.32",
    imgpath: "../fotos/dishImgs/kipkluifjes.webp",
    type: 6
}
const dishes = [dishOne, dishTwo, dishThree, dishFour, dishFive, dishSix, dishSeven, dishEight, dishNine, dishTen]


productContainer.innerHTML = "";

for (let x = 0; x < dishes.length; x++) {
    dishes.sort((a, b ) => a.type - b.type);
    let dish = dishes[x]
    let product = document.createElement('li');
    product.className = "product";
    product.innerHTML = `
<span class="product-color"></span>
<div class="Image-flex">
    <span class="img"></span>
    <div class="product-info">
        <p class="food-desc">${dish.name}</p>
        <p class="product-prc">${dish.price}</p>
    </div>
</div>
<div class="product-amt">
    <button class ="add">+</button>
    <div class ="number">1</div>
    <button class = "remove">-</button>
</div>`

    productContainer.appendChild(product);



    const img = document.querySelectorAll(".img")
    img[x].style.backgroundImage = "url(" + dish.imgpath + ")"

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

        switch (dish.type) {
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
checkAmount()

function checkAmount(){
  
    let amount = document.querySelectorAll('.number')
    let ok = 0
for(let p = 0; p < amount.length; p++){

 let cringe = parseInt(amount[p].textContent)
 ok += cringe
 totalamount.textContent = ok
}

}


console.log(dishes)


