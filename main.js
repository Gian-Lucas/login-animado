let labelLogin = document.querySelector('.l1');
let inputLogin = document.getElementById('user');
let labelPassword = document.querySelector('.l2');
let inputPassword = document.getElementById('pass');

inputLogin.addEventListener('focus', () => {
    labelLogin.classList.add('up1');
});
inputLogin.addEventListener('blur', () => {
    if (inputLogin.value == '') {
        labelLogin.classList.remove('up1');
    }
});

inputPassword.addEventListener('focus', () => {
    labelPassword.classList.add('up2');
});
inputPassword.addEventListener('blur', () => {
    if (inputPassword.value == '') {
        labelPassword.classList.remove('up2');
    }
});