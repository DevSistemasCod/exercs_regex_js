# Exercícios

1. Crie uma expressão regular para validar um nome completo, permitindo apenas letras (maiúsculas ou minúsculas) e espaços entre os nomes. O nome deve ter pelo menos 2 palavras (nome e sobrenome) e não pode conter caracteres especiais ou números.</br>
Exemplo de entrada válida: João Bueno</br>
Exemplo de entrada inválida: João@ Bueno</br>

2. Crie uma expressão regular que define o padrão os documentos de RG 99.999.999-9 e CPF 99.999.999-99.

3. Escreva uma expressão regular para validar uma senha forte. A senha deve ter entre 8 e 16 caracteres e conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial.

4. Valide códigos de produto que sigam o formato XXX-9999, onde:</br>
XXX são exatamente 3 letras maiúsculas.</br>
9999 é uma sequência de 4 dígitos.</br>
Torne opcional a sequência final com 2 digitos.</br>
 Entrada Válida: ABC-1234, XYZ-5678-89</br>
 Entrada Inválida: abc-1234, ABCD-1234, XYZ-123</br>

5. Escreva uma expressão regular para validar endereços de e-mail  formato "nome@dominio.com". Os  domínios aceitos serão: gmail, hotmail outlook e yahoo Também defina quais TLDs (Top-Level Domains), ou seja, o domínio de nível superior serão aceitos, neste caso serão aceitos: com, com.br e org </br>
obs.: combine em sua validação métodos da String isso deve faciliar as validações.</br>

6. Escreva uma expressão regular para validar números de telefone brasileiros.</br>
- O número deve começar com um código de área entre parênteses (ex.: (16)), seguido por um espaço.</br>
- Em seguida, pode ter 8 ou 9 dígitos, com ou sem hífen  (ex.: 1234-5678 ou 91234-5678).</br>
- Aceitar formatos com ou sem o prefixo internacional +55.</br>

Entrada Válida: (16) 91234-5678, +55 (16) 1234-5678</br>
Entrada Inválida: 16 91234-5678, (16)12345678, +55-16-1234-5678</br>

