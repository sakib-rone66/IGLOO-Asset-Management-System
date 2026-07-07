const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

// 1. Password Toggle (Show / Hide)
togglePassword.addEventListener('click', function () {
    const isPassword = passwordInput.getAttribute('type') === 'password';   //check input password type=password then isPassword true or vice-versa
    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');   //if type is password then change it text or vice-versa
    this.textContent = isPassword ? '🙈' : '👁️';                 //change the icon 
});

// 2. Client-Side Validation Checks
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();                 // Stop the form from submitting automatically
    
    let isFormValid = true;

    // Email Pattern Check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;          //email pattern
    // Validate Email Field
    if (!emailPattern.test(emailInput.value)) {                //test input value is match to emailPattern considered valid.
        emailInput.parentElement.classList.add('invalid');     //if invalid add a css class "invalid"
        document.getElementById('emailError').style.display = 'block';    //if invalid then show error msg from "emailError" id
        isFormValid = false;                                  //stops the form from being accepted
    } else {
        emailInput.parentElement.classList.remove('invalid');           //if match with "emailPattern" then remove invalid class
        document.getElementById('emailError').style.display = 'none';   //hide error msg
    }

    // Validate Password Field Length
    if (passwordInput.value.length < 6) {                    //if input password length <6
        passwordInput.parentElement.classList.add('invalid');                 //add a invalid class
        document.getElementById('passwordError').style.display = 'block';     //show error msg
        isFormValid = false;                                                 //stops the form from being accepted
    } else {
        passwordInput.parentElement.classList.remove('invalid');        //if >=6 then remove invalid class
        document.getElementById('passwordError').style.display = 'none';  //hide error msg
    }

    // 3. If validation succeeds, redirect to the homepage
    if (isFormValid) {
        window.location.href = 'Home.html';
    }
});
