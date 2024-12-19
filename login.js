document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const storedUser = localStorage.getItem(username);

  if (storedUser && JSON.parse(storedUser).password === password) {
    alert('Вход выполнен успешно!');
    window.location.href = 'index.html';
  } else {
    alert('Неверное имя пользователя или пароль!');
  }
});
