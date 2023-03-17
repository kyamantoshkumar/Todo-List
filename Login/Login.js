
const usernameInput = document.getElementById('usename');
const passwordInput = document.getElementById('password');

const loginBtn = document.getElementById('loginBtn');
const message = document.getElementById('message');

loginBtn.addEventListener('click', (event) => {
     event.preventDefault();
     const username = usernameInput.value;
     const password = passwordInput.value;
     if(username === 'admin' && password === 'password') {
        message.innerHTML = 'Login successful!';
        message.style.color = 'green';
       }else {
        message.innerHTML = 'Incorrect username or password.';
        message.style.color = 'red';
       }
});