function configurar() {
  let validarEmailBtn = document.getElementById('validarEmailBtn');
  let emailInput = document.getElementById('email');

  //prettier-ignore
  if ((validarEmailBtn instanceof HTMLButtonElement) &&
    (emailInput instanceof HTMLInputElement)) {
    validarEmailBtn.addEventListener('click', () => {
      let email = emailInput.value;
      validarEmail(email);
      emailInput.value = '';
    });
  }
}

function validarEmail(email) {
  try {
    //[^@]+: Antes do símbolo @, não são permitidos caracteres @.
    // Garante que o nome do e-mail seja composto por qualquer
    // sequência de caracteres válidos (não inclui @).
    //@: O símbolo @ separa o nome do e-mail do domínio.
    // [^@]+\.: Após o @, exige pelo menos um caractere para o domínio,
    // que não pode conter @.
    //O \. assegura que um ponto (.) está presente para separar o domínio do TLD.
    //[a-zA-Z]{2,}: O TLD deve conter ao menos duas letras
    let regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    if (!regexEmail.test(email)) {
      throw new Error('O e-mail deve estar no formato "nome@dominio.com".');
    }

    // Verificar domínios e TLDs permitidos
    let dominiosPermitidos = ['gmail', 'hotmail', 'outlook', 'yahoo'];
    let tldsPermitidos = ['com', 'com.br', 'org'];

    let [_, dominioCompleto] = email.split('@');
    let dominio = dominioCompleto.split('.')[0];
    let tld = dominioCompleto.slice(dominio.length + 1);

    if (!dominiosPermitidos.includes(dominio)) {
      throw new Error(
        `O domínio "${dominio}" não é permitido. Domínios aceitos: ${dominiosPermitidos.join(
          ', '
        )}.`
      );
    }

    if (!tldsPermitidos.includes(tld)) {
      throw new Error(
        `O TLD "${tld}" não é permitido. TLDs aceitos: ${tldsPermitidos.join(
          ', '
        )}.`
      );
    }

    exibirMensagem('E-mail válido!', true);
  } catch (erro) {
    exibirMensagem(erro.message, false);
  }
}

function exibirMensagem(mensagem, sucesso) {
  let mensagemElemento = document.getElementById('mensagem');

  if (mensagemElemento instanceof HTMLParagraphElement) {
    mensagemElemento.textContent = mensagem;
    mensagemElemento.style.color = sucesso ? 'green' : 'red';
  }
}

document.addEventListener('DOMContentLoaded', configurar);
