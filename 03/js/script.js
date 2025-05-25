function configurar() {
  let validarSenhaBtn = document.getElementById('validarSenhaBtn');
  let senhaInput = document.getElementById('senha');

  //prettier-ignore
  if ((validarSenhaBtn instanceof HTMLButtonElement) && (senhaInput instanceof HTMLInputElement)
  ) {
    validarSenhaBtn.addEventListener('click', () => {
      let senha = senhaInput.value;
      validarSenha(senha);
      senhaInput.value = '';
    });
  }
}

function validarSenha(senha) {
  try {
    //Array de objetos - pois o vetor contém múltiplos objetos.
    //prettier-ignore
    let validacoes = [
     { regex: /^.{8,16}$/, erro: 'A senha deve ter entre 8 e 16 caracteres.' },
     { regex: /[a-z]/, erro: 'A senha deve conter pelo menos uma letra minúscula.' },
     { regex: /[A-Z]/, erro: 'A senha deve conter pelo menos uma letra maiúscula.' },
     { regex: /\d/, erro: 'A senha deve conter pelo menos um número.' },
     { regex: /[@#$%^&+=!*]/, erro: 'A senha deve conter pelo menos um caractere especial (@#$%^&+=!*).' },
    ];

    for (let validacao of validacoes) {
      let regex = validacao.regex;
      let erro = validacao.erro;
      if (!regex.test(senha)) {
        console.log(`Falha no regex: ${regex}`); // Debugar
        throw new Error(erro);
      }
    }

    exibirMensagem('Senha válida!', 'green');
  } catch (erro) {
    exibirMensagem(erro.message, 'red');
  }
}

function exibirMensagem(mensagemValidacao, cor) {
  let mensagemSenha = document.getElementById('mensagemValidacao');

  if (mensagemSenha instanceof HTMLParagraphElement) {
    mensagemSenha.textContent = mensagemValidacao;
    mensagemSenha.style.color = cor;
  }
}

document.addEventListener('DOMContentLoaded', configurar);
