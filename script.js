document.addEventListener('DOMContentLoaded', () => {
  // Функции для логики
  const usernameDisplay = document.getElementById('username-display');
  const buyProBtn = document.getElementById('buy-pro-btn');
  const goToReports = document.getElementById('go-to-reports');
  const logoutBtn = document.getElementById('logout-btn');
  
  // Проверка, если пользователь авторизован
  const currentUser = localStorage.getItem('currentUser');
  if (currentUser) {
    const userData = JSON.parse(localStorage.getItem(currentUser));
    usernameDisplay.textContent = currentUser;

    if (userData.proUser) {
      buyProBtn.style.display = 'none';
      goToReports.style.display = 'block';
    } else {
      buyProBtn.style.display = 'block';
      goToReports.style.display = 'none';
    }
  } else {
    window.location.href = 'login.html'; // Переход на страницу авторизации, если не авторизован
  }

  // Обработчик выхода из системы
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    alert('Вы вышли из системы.');
    window.location.href = 'login.html';
  });

  // Кнопка покупки PRO версии
  buyProBtn.addEventListener('click', () => {
    const userData = JSON.parse(localStorage.getItem(currentUser));
    userData.proUser = true;
    localStorage.setItem(currentUser, JSON.stringify(userData));
    alert('Вы приобрели PRO-версию!');
    window.location.reload();
  });
});
