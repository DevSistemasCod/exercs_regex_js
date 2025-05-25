function configurar() {
  let validarBtn = document.getElementById('validarBtn');
  let inputTelefone = document.getElementById('telefone');

  //prettier-ignore
  if ((validarBtn instanceof HTMLButtonElement) && (inputTelefone instanceof HTMLInputElement)
  ) {
    validarBtn.addEventListener('click', () => {
      const telefone = inputTelefone.value;
      validarTelefone(telefone);
    });
  }
}

function validarTelefone(telefone) {
  try {
    /**
     * Expressão regular:
     * - ^(\+55\s)? -> Permite opcionalmente o prefixo internacional +55 seguido de um espaço.
     * - (\(\d{2}\)\s) -> Exige o código de área entre parênteses, com exatamente 2 dígitos e seguido de um espaço.
     * - (\d{4,5}-\d{4}) -> Exige 8 ou 9 dígitos, com ou sem hífen.
     * - (\d{4}-\d{4})? -> Permite números como 119133-9779, 11133-9779, onde há 9 dígitos no total.
     */
    let regexTelefone =
      /^(?:\+55\s?)?(?:\(?\d{2}\)?\s?)?\d{4,5}-?\d{4}$|^\+55\s?\(?\d{2}\)?\s?\d{9}$/;
    if (!regexTelefone.test(telefone)) {
      throw new Error(
        'O número de telefone deve estar no formato +55 (16) 91234-5678 ou (16) 1234-5678 ou 119133-9779.'
      );
    }

    exibirMensagem('Número de telefone válido!', 'green');
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
