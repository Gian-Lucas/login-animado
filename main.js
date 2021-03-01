const [labelUsername, labelPassword] = document.querySelectorAll('.label');

const username = document.querySelector('#username');
const password = document.querySelector('#password');

const button = document.querySelector('#button');

button.addEventListener('click', e => {

    if (verifyFields(username, password)) {
        alert('Login');
    } else {
        e.preventDefault();
        alert('Preencha os campos, por favor');
    }
})

username.addEventListener('focus', () => {
    if (!verifyFields(username)) {
        labelUsername.classList.add('on');
    }
});

username.addEventListener('blur', () => {
    if (!verifyFields(username)) {
        labelUsername.classList.remove('on');
    }
});


password.addEventListener('focus', () => {
    if (!verifyFields(password)) {
        labelPassword.classList.add('on');
    }
});

password.addEventListener('blur', () => {
    if (!verifyFields(password)) {
        labelPassword.classList.remove('on');
    }
});

function verifyFields(...fields) {
    let isValid = true;

    fields.forEach(field => {
        if (field.value.trim() === '') {
            field.value = '';
            isValid = false;
        } else {
            field.value = field.value.trim();
        }
    });

    return isValid;
}
