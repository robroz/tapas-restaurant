const menuItems = document.querySelectorAll(".nav-item")


for (let x = 0; x < menuItems.length; x++) {
    menuItems[0].classList.add("selected")
    menuItems[x].addEventListener("click", function () {
        for (let x = 0; x < menuItems.length; x++) {
            menuItems[x].classList.remove("selected")
            this.classList.add("selected")
        }
    })
}