const fullName1 = document.querySelector("#fullName1")
const fullName2 = document.querySelector("#fullName2")



const address1 = document.querySelector("#address1")
const address2 = document.querySelector("#address2")

const fullNameError = document.querySelector("#fullNameError")
const addressError = document.querySelector("#addressError")


function checkout (event) {
    event.preventDefault();

    if(fullName1.value.trim().length > 5){
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
        }

    if(fullName2.value.trim().length > 1){
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
        }
    
    if(address1.value.trim().length > 5){
        addressError.style.display = "none";
    } else{
        addressError.style.display = "block";
    }
    if(address2.value.trim().length > 2){
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if(fullName1 && fullName2 && address1 && address2 === true){
        window.location.href = "payment.html"
    }

    // window.location.href ="payment.html"


}

addEventListener ("submit", checkout);