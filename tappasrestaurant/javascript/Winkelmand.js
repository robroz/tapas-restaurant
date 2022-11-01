let add = document.getElementsByClassName('add');
let remove = document.getElementsByClassName('remove');
const amountCont = document.querySelectorAll('.product-amt');
let totalamount = document.getElementById("totalGerechten");
let price = document.getElementById('totalPrice');


for (let q = 0; q < amountCont.length; q++) {
    add[q].addEventListener("click", function () {

        let ammount = this.parentElement.querySelector('.number')
        ammount.textContent = parseInt(ammount.textContent) + 1;
        totalamount.textContent = parseInt(totalamount.textContent) + 1;
        price.textContent = parseInt(price.textContent) + 1;
        console.log(price);


    })
    remove[q].addEventListener("click", function () {
        let ammount = this.parentElement.querySelector('.number')

        if (ammount.textContent == "0") {
            return
        }
        ammount.textContent = ammount.textContent -= 1;
        totalamount.textContent = totalamount.textContent -= 1;
    })
}