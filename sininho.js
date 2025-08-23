document.addEventListener('DOMContentLoaded', () => {
    const sininho = document.getElementById('sininho');
    const contador = document.getElementById('contador');
    const modal = document.getElementById('modal');
    const fechar = document.getElementById('fechar');
  
    let notificacoes = 0;
  
    // Simula chegada de notificação
    setInterval(() => {
      notificacoes++;
      contador.textContent = notificacoes;
    }, 10000);
  
    // Abrir modal apenas clicando no sininho
    sininho.addEventListener('click', (e) => {
      e.stopPropagation(); // importante para não propagar clique
      if(notificacoes > 0){
        modal.style.display = 'flex';
        notificacoes = 0;
        contador.textContent = notificacoes;
      }
    });
  
    // Fechar modal clicando no X
    fechar.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Fechar modal clicando fora do conteúdo
    modal.addEventListener('click', (e) => {
      if(e.target === modal){
        modal.style.display = 'none';
      }
    });
  });