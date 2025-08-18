let linkAmazon = "";
let linkOnline = "";

function abrirModal(amazon, online) {
  linkAmazon = amazon;
  linkOnline = online;
  document.getElementById('modal').style.display = 'flex';
}

function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}

document.getElementById('btnAmazon').addEventListener('click', () => {
  window.open(linkAmazon, '_blank');
});

document.getElementById('btnOnline').addEventListener('click', () => {
  window.open(linkOnline, '_blank');
});

// Fechar modal ao clicar fora da caixa
window.addEventListener('click', (e) => {
  if (e.target === document.getElementById('modal')) {
    fecharModal();
  }
});

//Descrição 
function abrirDescricao(texto) {
    const modal = document.getElementById("modalDescricao");
    const descricao = document.getElementById("descricaoTexto");
    descricao.textContent = texto;
    modal.style.display = "block";
  }
  
  function fecharDescricao() {
    document.getElementById("modalDescricao").style.display = "none";
  }
