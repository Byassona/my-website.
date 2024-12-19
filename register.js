document.getElementById('register-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;

  if (localStorage.getItem(username)) {
    alert('Пользователь с таким именем уже существует!');
  } else {
    localStorage.setItem(username, JSON.stringify({ password }));
    alert('Регистрация прошла успешно!');
    window.location.href = 'login.html';
  }
});
