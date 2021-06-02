const nameValid = document.querySelector("#name")
const cardNumber = document.querySelector("#cardNr")
const expireDate = document.querySelector("#expireDate")
const cvc = document.querySelector("#cvc")

const nameError = document.querySelector ("#nameError")
const cardNrError = document.querySelector("#cardNrError")
const expireDateError = document.querySelector("#expireDateError")
const cvcError = document.querySelector("#cvcError")


function validation (event){
    event.preventDefault();

    if(nameValid.value.trim().length > 1){
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    
    if(cvc.value.trim().length === 3){
        cvcError.style.display = "none";
    } else {
        cvcError.style.display = "block";
    }

    if(cardNumber.value.length === 16){
        cardNrError.style.display = "none";
    } else {
        cardNrError.style.display = "block";
    }
    
    if(expireDate.value.length === 4){
        expireDateError.style.display = "none";
    } else {
        expireDate.style.display = "block";
    }

}

addEventListener ("submit", validation);


