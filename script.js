document.querySelector('.trybewarts-login').addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementsByClassName('email')[0].value;
  const password = document.getElementsByClassName('password')[0].value;

  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
});
