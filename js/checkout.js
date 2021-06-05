const form = document.querySelector (".checkoutForm")

const fullName1 = document.querySelector("#fullName1")
const fullName2 = document.querySelector("#fullName2")


const address1 = document.querySelector("#address1")
const address2 = document.querySelector("#address2")

const fullNameError = document.querySelector("#fullNameError")
const addressError = document.querySelector("#addressError")


function checkout (event) {
    event.preventDefault();

    if(checkLength(fullName1.value.trim(), 5) === true){
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
        }

    if(checkLength(fullName2.value.trim().length, 1) === true){
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
        }
    
    if(checkLength(address1.value.trim().length, 5) === true){
        addressError.style.display = "none";
    } else{
        addressError.style.display = "block";
    }

    if(checkLength(address2.value.trim().length, 2) === true){
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }


}

addEventListener ("submit", checkout);

function checkLength(value, len){
    if(value.length > len){
        return true;
    } else {
        return false;
    }
}