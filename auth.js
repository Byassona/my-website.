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

  // Проверяем статус пользователя
const username = localStorage.getItem('username');
const storedUser = JSON.parse(localStorage.getItem(username));

// Если пользователь админ, он получает полный доступ
const isAdmin = storedUser?.isAdmin || false;
localStorage.setItem('isAdmin', isAdmin);

if (!localStorage.getItem('isLoggedIn')) {
  alert('Сначала войдите или зарегистрируйтесь!');
  window.location.href = 'login.html';
}
});
