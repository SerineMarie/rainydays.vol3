const emailValid = document.querySelector("#email")
const emailError = document.querySelector("#emailError")
const passwordVaild = document.querySelector("#password")
const  passwordError = document.querySelector("#passwordError")
const submit = document.querySelector("#loggedin")

function validation (event){
    event.preventDefault();
    if(passwordVaild.value.trim().length > 5){
        passwordError.style.display = "none";  
    } else {
        passwordError.style.display = "block";
    }

    if(emailValidation(email.value) === true){
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    
}

addEventListener ("submit", validation)

function emailValidation(emailVaild){
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test (emailVaild);
    return patternMatches;

}

emailValidation();