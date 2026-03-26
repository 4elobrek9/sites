const btn = document.getElementById('actionBtn');
const message = document.getElementById('message');

btn?.addEventListener('click', () => {
  message.textContent = 'Шаблон работает. Замените этот текст под свою тему.';
});
