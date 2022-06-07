var email = document.querySelector('.form input');
var emailContainer = document.querySelector('.form .input-container');
var submit = document.querySelector('.form button');
email.addEventListener("input", function (event) {
    if (email.validity.valid) {
        emailContainer.removeAttribute('error-msg');
    }
}, false);
submit.addEventListener("click", function (event) {
    if (!email.validity.valid) {
        emailContainer.setAttribute('error-msg', 'Please provide a valid email address');
    }
});