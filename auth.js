// Проверяем авторизацию на всех страницах
if (!localStorage.getItem('isLoggedIn')) {
  alert('Сначала войдите или зарегистрируйтесь!');
  window.location.href = 'login.html';
}

// Выход из аккаунта
document.getElementById('logout')?.addEventListener('click', () => {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('username');
  alert('Вы вышли из системы!');
  window.location.href = 'login.html'

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Проверяем, если это ваш админский аккаунт
  if (username === 'admin' && password === 'admin123') {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
    localStorage.setItem('isAdmin', 'true'); // Устанавливаем статус администратора
    alert('Вход выполнен как администратор!');
    window.location.href = 'index.html';
    return;
  }

  // Для обычных пользователей проверяем в localStorage
  const storedUser = JSON.parse(localStorage.getItem(username));
  if (storedUser && storedUser.password === password) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
    localStorage.setItem('isAdmin', 'false'); // Обычные пользователи не являются администраторами
    alert('Вход выполнен успешно!');
    window.location.href = 'index.html';
  } else {
    alert('Неверные данные!');
  }
});
