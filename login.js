document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Ищем пользователя в localStorage
  const storedUser = JSON.parse(localStorage.getItem(username));
  if (storedUser && storedUser.password === password) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
    localStorage.setItem('isAdmin', storedUser.isAdmin || false);
    localStorage.setItem('proUser', storedUser.proUser || false);
    alert('Вход выполнен успешно!');
    window.location.href = 'index.html';
  } else {
    alert('Неверные данные!');
  }
});
