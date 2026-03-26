const ctaButtons = document.querySelectorAll('button');
ctaButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    alert('Замените шаблонный action на ваш реальный сценарий: форма, чат, оплата и т.д.');
  });
});
