document.querySelector('.trybewarts-login').addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementsByClassName('email')[0].value;
  const password = document.getElementsByClassName('password')[0].value;

  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
});

const checkbox = document.getElementById('agreement');
const button = document.getElementById('submit-btn');

button.disabled = true;

checkbox.addEventListener('change', function onCheckbox() {
  button.disabled = !this.checked;
});
