// Card "Como nós encontrar"
(function () {
  const botao = document.querySelector('.local__botao');
  const card = document.getElementById('local-card');
  if (!botao || !card) return;

  function abrir(abrir) {
    card.hidden = !abrir;
    botao.setAttribute('aria-expanded', String(abrir));
  }

  botao.addEventListener('click', function (e) {
    e.stopPropagation();
    abrir(card.hidden);
  });

  document.addEventListener('click', function (e) {
    if (!card.hidden && !card.contains(e.target)) abrir(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !card.hidden) {
      abrir(false);
      botao.focus();
    }
  });
})();
