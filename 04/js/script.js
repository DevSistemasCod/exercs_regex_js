function configurar() {
  let validarBtn = document.getElementById('validarBtn');
  let inputCodigo = document.getElementById('codigoProduto');

  //prettier-ignore
  if ((validarBtn instanceof HTMLButtonElement ) && (inputCodigo instanceof HTMLInputElement)) {
    validarBtn.addEventListener('click', () => {
      const codigo = inputCodigo.value;
      validarCodigoProduto(codigo);
    });
  }
}
function validarCodigoProduto(codigo) {
  try {
    // [A-Z]{3}: Exige exatamente 3 letras maiúsculas.
    // -\d{4}: Exige um hífen seguido de 4 dígitos.
    // (-\d{2})?: Permite um hífen seguido de 2 dígitos,
    // porém torna essa parte opcional devido ao ?.

    // Regex para validar o formato XXX-9999
    //let regexCodigo = /^[A-Z]{3}-\d{4}$/;
    let regexCodigo = /^[A-Z]{3}-\d{4}(-\d{2})?$/;

    if (!regexCodigo.test(codigo)) {
      throw new Error(
        'O código do produto deve estar no formato XXX-9999 ou XXX-9999-99.'
      );
    }

    exibirMensagem('Código de produto válido!', 'green');
  } catch (error) {
    exibirMensagem(error.message, 'red');
  }
}

function exibirMensagem(texto, cor) {
  let mensagem = document.getElementById('mensagem');
  if (mensagem instanceof HTMLParagraphElement) {
    mensagem.textContent = texto;
    mensagem.style.color = cor;
  }
}

document.addEventListener('DOMContentLoaded', configurar);
