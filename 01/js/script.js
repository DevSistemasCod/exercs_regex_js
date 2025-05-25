function configurar() {
  let validarBtn = document.getElementById('validarBtn');
  let nomeInput = document.getElementById('nome');

  //prettier-ignore
  if ((validarBtn instanceof HTMLButtonElement) && (nomeInput instanceof HTMLInputElement)
  ) {
    validarBtn.addEventListener('click', () => {
      let nome = nomeInput.value;
      validarNome(nome);
      nomeInput.value = '';
    });
  }
}

function validarNome(nomeStr) {
  try {
    let regex = /[^a-zA-ZÀ-ÿ \s]/g;

    if (regex.test(nomeStr)) {
      throw new Error(
        'O nome deve conter apenas letras e espaços entre o nome e sobrenome.'
      );
    }
    // Verifica se o nome tem pelo menos duas palavras
    if (nomeStr.trim().split(/\s+/).length < 2) {
      throw new Error(
        'O nome deve ter pelo menos duas palavras (nome e sobrenome).'
      );
    }

    exibirMensagem('Nome válido!', 'green');
  } catch (erro) {
    exibirMensagem(erro.message, 'red');
  }
}

function exibirMensagem(mensagem, cor) {
  let saida = document.getElementById('saida');

  if (saida instanceof HTMLParagraphElement) {
    saida.textContent = mensagem;
    saida.style.color = cor;
  }
}

document.addEventListener('DOMContentLoaded', configurar);
