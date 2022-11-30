const languageBtn = document.querySelector(".language-btn")
const startBtn = document.querySelector(".start-btn")

languageBtn.addEventListener("click", function () {
    const languageCont = document.querySelector(".language-container");
    const arrow = document.querySelector(".arrow-down")
    languageCont.classList.toggle("visible")
    arrow.classList.toggle("visible")

})

startBtn.addEventListener("click", function () {
    createId()
})


function createId() {
    const persons = parseInt(document.querySelector(".number-input").value)
    $.ajax({
        method: "POST",
        url: `https://localhost:7269/api/Bill/Post`,
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(
               {
                    "persons": persons,
                    "tableId": 11,
                    "roundNumber": 1
                } 
            ),

    }).done(function (data) {
        console.log(data)
        localStorage.setItem("billId", data.id)
         window.location.href = "http://localhost/Github/tappasrestaurant/pages/menu.html"
    });
}