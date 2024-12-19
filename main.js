// Проверяем, куплен ли PRO
const isPro = localStorage.getItem('proUser') === 'true';

// Элементы
const buyProButton = document.getElementById('buy-pro');
const proMessage = document.getElementById('pro-message');

// Если уже куплено, показываем сообщение
if (isPro) {
  proMessage.style.display = 'block';
  buyProButton.style.display = 'none';
}

// Покупка PRO
buyProButton.addEventListener('click', () => {
  localStorage.setItem('proUser', 'true');
  alert('Спасибо за покупку PRO!');
  proMessage.style.display = 'block';
  buyProButton.style.display = 'none';
});
