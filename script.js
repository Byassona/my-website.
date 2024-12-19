document.addEventListener('DOMContentLoaded', () => {
  const currentUser = localStorage.getItem('currentUser');
  const isLoginPage = window.location.pathname.includes('login.html');
  const isRegisterPage = window.location.pathname.includes('register.html');

  // Проверка авторизации
  if (!currentUser && !isLoginPage && !isRegisterPage) {
    window.location.href = 'login.html';
  }

  // Авторизация
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      const userData = JSON.parse(localStorage.getItem(username));
      if (userData && userData.password === password) {
        localStorage.setItem('currentUser', username);
        window.location.href = 'index.html';
      } else if (username === 'Byassona' && password === 'Bilal57895') {
        localStorage.setItem('currentUser', username);
        localStorage.setItem(username, JSON.stringify({ password, admin: true, proUser: true }));
        window.location.href = 'index.html';
      } else {
        alert('Неверное имя пользователя или пароль.');
      }
    });
  }

  // Регистрация
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (localStorage.getItem(username)) {
        alert('Пользователь уже существует.');
      } else {
        localStorage.setItem(username, JSON.stringify({ password, proUser: false }));
        alert('Регистрация прошла успешно.');
        window.location.href = 'login.html';
      }
    });
  }

  // Главная страница
  if (currentUser && window.location.pathname.includes('index.html')) {
    const userData = JSON.parse(localStorage.getItem(currentUser));
    const welcomeMessage = document.getElementById('welcome-message');
    const buyProBtn = document.getElementById('buy-pro-btn');
    const goToReports = document.getElementById('go-to-reports');

    welcomeMessage.textContent = `Привет, ${currentUser}!`;

    if (userData.proUser) {
      goToReports.style.display = 'block';
    } else {
      buyProBtn.style.display = 'block';
      buyProBtn.addEventListener('click', () => {
        userData.proUser = true;
        localStorage.setItem(currentUser, JSON.stringify(userData));
        alert('Вы приобрели PRO!');
        location.reload();
      });
    }

    document.getElementById('logout-btn').addEventListener('click', () => {
      localStorage.removeItem('currentUser');
      window.location.href = 'login.html';
    });
  }
});
