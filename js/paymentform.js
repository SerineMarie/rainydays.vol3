const nameValid = document.querySelector("#name")
const cardNumber = document.querySelector("#cardNr")
const expireDate = document.querySelector("#expireDate")
const cvc = document.querySelector("#cvc")

const nameError = document.querySelector ("#nameError")
const cardNrError = document.querySelector("#cardNrError")
const expireDateError = document.querySelector("#expireDateError")
const cvcError = document.querySelector("#cvcError")

function paymentValid (event){
    event.preventDefault();
    if(checkLen(nameValid.value, 1) === true){
        nameError.style.display = "none";
    } else {
        nameError.style.display ="block";
    }

    if(checkLen(cardNumber.value, 15) === true){
        cardNrError.style.display = "none";
    } else {
        cardNrError.style.display = "block";
    }

    if(checkLen(expireDate.value, 3) === true){
        expireDateError.style.display ="none";
    } else {
        expireDateError.style.display = "block";
    }

    if(checkLen(cvc.value, 2) === true){
        cvcError.style.display = "none";
    } else {
        cvcError.style.display = "block";
    }
}

function checkLen(value, len){
    if(value.length > len){
        return true;
    } else {
        return false;
    }
}