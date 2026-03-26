const button = document.getElementById('wowButton');
const status = document.getElementById('status');

button.addEventListener('click', () => {
  const pulse = Math.floor(Math.random() * 900 + 100);
  document.body.animate(
    [{ filter: 'saturate(1)' }, { filter: 'saturate(1.3)' }, { filter: 'saturate(1)' }],
    { duration: 600, iterations: 1 }
  );
  status.textContent = '✨ WOW! Сцена ожила. Энергия проекта: ' + pulse + '%';
});
