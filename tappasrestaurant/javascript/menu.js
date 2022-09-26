const navItems = document.querySelectorAll(".nav-item")
const foodChange = document.querySelectorAll(".food-amount")
const foodAmount = document.querySelectorAll(".amount")
const minFood = document.querySelectorAll(".min-amount")
const plusfood = document.querySelectorAll(".plus-amount")

for (let x = 0; x < navItems.length; x++) {
    navItems[0].classList.add("selected")
    navItems[x].addEventListener("click", function () {
        for (let x = 0; x < navItems.length; x++) {
            navItems[x].classList.remove("selected")
            this.classList.add("selected")
        }
    })
}




for(let y= 0; y < foodAmount.length; y++){
    minFood[y].addEventListener("click", function(){
            const ammount = this.parentElement.querySelector(".amount"); 
            if(ammount.textContent == "0"){
      return
    }
    ammount.textContent = ammount.textContent -= 1;
    })
    plusfood[y].addEventListener("click", function(){
        const ammount = this.parentElement.querySelector(".amount");
        ammount.textContent = ammount.textContent = parseInt(ammount.textContent) + 1;
      })
} 