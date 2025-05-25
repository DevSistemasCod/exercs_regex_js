function configurar() {
  let validarRgBtn = document.getElementById('validarRgBtn');
  let validarCpfBtn = document.getElementById('validarCpfBtn');
  let rgInput = document.getElementById('rg');
  let cpfInput = document.getElementById('cpf');

  //prettier-ignore
  if ((validarRgBtn instanceof HTMLButtonElement) && (validarCpfBtn instanceof HTMLButtonElement) &&
    (rgInput instanceof HTMLInputElement) && (cpfInput instanceof HTMLInputElement)
  ) {
    // Validação do RG
    validarRgBtn.addEventListener('click', () => {
      validarRg(rgInput.value);
      rgInput.value = '';
    });

    // Validação do CPF
    validarCpfBtn.addEventListener('click', () => {
      validarCpf(cpfInput.value);
      cpfInput.value = '';
    });
  }
}

// Função para validar o RG (99.999.999-9)
function validarRg(rgStr) {
  try {
    let regexRg = /^\d{2}\.\d{3}\.\d{3}-\d{1}$/;
    //let regexRg = /^\d{2}\d{3}\d{3}\d{1}$/;
    if (!regexRg.test(rgStr)) {
      throw new Error('O RG deve seguir o formato 99.999.999-9.');
    }

    exibirMensagem('RG válido!', 'green', true);
  } catch (erro) {
    exibirMensagem(erro.message, 'red', true);
  }
}

// Função para validar o CPF (99.999.999-99)
function validarCpf(cpfStr) {
  try {
    let regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    //let regexCpf = /^\d{3}\d{3}\d{3}\d{2}$/;
    if (!regexCpf.test(cpfStr)) {
      throw new Error('O CPF deve seguir o formato 99.999.999-99.');
    }
    exibirMensagem('CPF válido!', 'green', false);
  } catch (erro) {
    exibirMensagem(erro.message, 'red', false);
  }
}

function exibirMensagem(mensagem, cor, flag) {
  let identificarDocumento = flag ? true : false;

  if (identificarDocumento) {
    let mensagemRg = document.getElementById('mensagemRg');
    if (mensagemRg instanceof HTMLParagraphElement) {
      mensagemRg.textContent = mensagem;
      mensagemRg.style.color = cor;
    }
  } else {
    let mensagemCpf = document.getElementById('mensagemCpf');
    if (mensagemCpf instanceof HTMLParagraphElement) {
      mensagemCpf.textContent = mensagem;
      mensagemCpf.style.color = cor;
    }
  }
}

document.addEventListener('DOMContentLoaded', configurar);
