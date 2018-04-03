import './style.css';

const div = document.createElement('div');
document.body.appendChild(div);
const username = document.createElement('input');
div.appendChild(username);
const password = document.createElement('input');
password.type = 'password';
div.appendChild(password); 
const submit = document.createElement('input');
submit.type = 'submit';
div.appendChild(submit);
