const emailValid = document.querySelector("#email")
const emailError = document.querySelector("#emailError")
const passwordVaild = document.querySelector("#password")
const  passwordError = document.querySelector("#passwordError")
const submit = document.querySelector("#loggedin")

const h1 = document.querySelector("h1");
const logInForm = document.querySelector("form");

function validation (event){
    event.preventDefault();
    if(passwordVaild.value.trim().length > 5){
        passwordError.style.display = "none";  
    } else {
        validation = false
        passwordError.style.display = "block";
    }

    if(emailValidation(email.value) === true){
        emailError.style.display = "none";
    } else {
        validation = false
        emailError.style.display = "block";
    }

    if(validation === true) {
        logInForm.innerHTML = `<h2>You are now logged in</h2>`
    }

    
    
}

addEventListener ("submit", validation)

function emailValidation(emailVaild){
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test (emailVaild);
    return patternMatches;

}

emailValidation();