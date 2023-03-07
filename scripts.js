document.getElementById("registerButton").addEventListener("click", function(event){
    event.preventDefault()
});

const inputName = document.getElementById('name');
const inputPhone = document.getElementById('phone');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');

function formValidation() {

    if (validateName(inputName) == true) {
    } else 
    {
        alert("Enter a valid name"); 
    }

    if (validatePhone(inputPhone) == true) {
    } else 
    {
        alert("Enter a valid phone number"); 
    }

    if (validateEmail(inputEmail) == true) {
    } else 
    {
        alert("Enter a valid email"); 

    }
    
    if (validatePassword(inputPassword) == true) {
    } else 
    {
        alert("Enter a valid password");
    }
}