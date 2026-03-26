const wowButton = document.getElementById('wowButton');
const detailsButton = document.getElementById('detailsButton');
const status = document.getElementById('status');

wowButton?.addEventListener('click', () => {
  const lvl = Math.floor(Math.random() * 51) + 50;
  document.body.animate(
    [
      { transform: 'translateY(0px)', filter: 'saturate(1)' },
      { transform: 'translateY(-2px)', filter: 'saturate(1.25)' },
      { transform: 'translateY(0px)', filter: 'saturate(1)' }
    ],
    { duration: 700, iterations: 1, easing: 'ease-out' }
  );
  status.textContent = `🚀 WOW-режим активирован: визуальная энергия ${lvl}%`;
});

detailsButton?.addEventListener('click', () => {
  const faq = document.getElementById('faq');
  faq?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  status.textContent = 'Открываю подробности: прокрутка к секции FAQ.';
});
