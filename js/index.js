import * as utils from "./utils.js";
const passwordCriteria = utils.passwordStrengthMeter;
const form = document.querySelector('form');
const password = document.getElementById('password');

// if form exists then set the progress bar to default value
if (form){
    form.addEventListener('submit', (e)=> e.preventDefault());

    utils.getProgressBar(0);
    
    decrease('contains_upper');
    decrease('contains_lower');
    decrease('contains_number');
    decrease('contains_special_chars');
    decrease('minLength');

}

// check password
if (password) password.addEventListener('keyup', (e) => checkPassword(e.target.value))

function increase(selector){
    const content = document.getElementById(selector);

    if (content) {
        content.innerHTML = '';
        content.innerHTML = utils.increaseBar;
    }

}

function decrease(selector){
    const content = document.getElementById(selector);
    if (content) {
        content.innerHTML = '';
        content.innerHTML = utils.decreaseBar;
    }

}

function checkPassword(password) {
    let strength = 0;

    if (passwordCriteria.containsUpperCase(password)) strength++
    if (passwordCriteria.containsLowerCase(password)) strength++;
    if (passwordCriteria.containsNumber(password)) strength++;
    if (passwordCriteria.containsSpecialChars(password)) strength++;
    if (passwordCriteria.is8Chars(password)) strength++;

    utils.getProgressBar(strength);

    passwordCriteria.containsUpperCase(password) ? increase('contains_upper') : decrease('contains_upper')
    passwordCriteria.containsLowerCase(password) ? increase('contains_lower') : decrease('contains_lower')
    passwordCriteria.containsNumber(password) ? increase('contains_number') : decrease('contains_number')
    passwordCriteria.containsSpecialChars(password) ? increase('containsSpecialChars') : decrease('containsSpecialChars')
    passwordCriteria.is8Chars(password) ? increase('minLength') : decrease('minLength')
    
    
}