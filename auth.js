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
  window.location.href = 'login.html';
});
