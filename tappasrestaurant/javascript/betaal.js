$(document).ready(function(){
    $('#select-bank').click(function(){
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

    });
}