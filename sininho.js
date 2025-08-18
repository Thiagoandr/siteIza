document.addEventListener('DOMContentLoaded', () => {
    const sininho = document.getElementById('sininho');
    const contador = document.getElementById('contador');
    const modal = document.getElementById('modal');
    const fechar = document.getElementById('fechar');
  
    let notificacoes = 0;
  
    // Simula chegada de notificação a cada 10 segundos (para teste)
    setInterval(() => {
      notificacoes++;
      contador.textContent = notificacoes;
    }, 10000); // 10000ms = 10 segundos
  
    // Clicar no sininho abre a modal e zera contador
    sininho.addEventListener('click', () => {
      if(notificacoes > 0){
        modal.style.display = 'flex';
        notificacoes = 0;
        contador.textContent = notificacoes;
      }
    });
  
    // Fechar modal
    fechar.onclick = () => modal.style.display = 'none';
  
    // Fechar clicando fora da modal
    window.onclick = (event) => {
      if(event.target === modal) {
        modal.style.display = 'none';
      }
    }
  });
  