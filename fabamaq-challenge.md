No primeiro exercício, pedimos que cries casos de teste baseados nos critérios de aceitação de uma user story. Este passo é fundamental para garantir que todos os requisitos foram compreendidos e estão prontos para serem validados.  

Exercício 1: Como usuário, eu quero poder registar-me na loja online para efetuar compras online. 

Critérios de Aceitação:
AC1: Deve existir um formulário de registo com campos para nome, email e senha.
AC2: O sistema deve validar se o email inserido é único na base de dados.
AC3: Após o registo bem-sucedido, o usuário deve receber um email de confirmação.
AC4: O usuário recém-registo deve ter a possibilidade de efetuar o login com as credenciais fornecidas durante o registo.

No segundo exercício, gostaríamos que automatizasses os casos de teste que criaste no exercício anterior, traduzindo-os para uma linguagem de programação. 

Exercício 2: Automatizar os casos de testes criados no exercício anterior.

Pré-Condições
Entradas
Ações
Resultados esperados
Pós-condições

Caso 1: Formulário preenchido resultando em sucesso.
Caso 2: Formulário preenchido sem o nome. 
Caso 3: Formulário preenchido sem o email. 
Caso 4: Formulário preenchido sem o senha. 
Caso 5: Formulário preenchido com email já cadastrado.
Caso 6: Usuário tenta fazer login sem cadastro.
Caso 7: Usuário efetua login após registro com dados corretos.
Caso 8: Usuário tenta efetuar o login com senha divergente.

************************************************************************** NATALI LUCAS *************************************************************************
Meu plano de teste foi baseado nas definições do ISTQB referente a caso de testes.


Caso de teste 1: Formulário preenchido resultando em sucesso (AC1, AC2, AC3)

Descrição: Verificar o formulário de registro com sucesso preenchendo todos os campos com inputs válidos.
Pré-Condições: 
    1. Usuário deve aceder a tela de registro.
    2. Campos devem estar habilitados para receber os dados.
    3. O usuário não deve possuir cadastro; 
    4. Email não pode ser duplicado;
Entradas: 
    1. Nome válido, ex: Natali Lucas;
    2. Email válido, ex: natali_l@hotmail.com;
    3. Senha válida, ex: 123456;
Ações: 
    1. Acessar a tela de registro.
    2. Preecher devidamente o campo nome com input válido.
    3. Preecher devidamente o campo email com input válido.
    4. Preecher devidamente o campo senha com input válido.
    5. Clicar no botão submeter registro. 
Resultados esperados:
    O usuário deve receber no email cadastrado, um email de confirmação.



Caso de teste 2: Formulário preenchido sem o nome (AC1, AC3). 

Descrição: Verificar que o nome deve ser preenchido obrigatoriamente. 
Pré-Condições: 
     1. Usuário deve aceder a tela de registro.
     2. Campos devem estar habilitados para receber os dados.
     3. O usuário não deve possuir cadastro; 
     4. Email não pode ser duplicado; 
Entradas:    
    1. Input de nome vazio;
    2. Email válido, ex: natali_l@hotmail.com;
    3. Senha válida, ex: 123456;
Ações: 
    1. Acessar a tela de registro.
    2. Não preecher o campo nome.
    3. Preecher devidamente o campo email com input válido.
    4. Preecher devidamente o campo senha com input válido.
    5. Clicar no botão submeter registro. 
Resultados esperados:
    O cadastro não deve ser concluido apresentando a mensagem de erro à definir.


Caso de teste 3: Formulário preenchido sem o email (AC1, AC3). 

Descrição: Verificar que o email deve ser preenchido obrigatoriamente. 
Pré-Condições: 
     1. Usuário deve aceder a tela de registro.
     2. Campos devem estar habilitados para receber os dados.
     3. O usuário não deve possuir cadastro;  
Entradas:    
    1. Nome válido, ex: Natali;
    2. Input de email vazio;
    3. Senha válida, ex: 123456;
Ações: 
    1. Acessar a tela de registro.
    2. Preecher devidamente o campo nome com input válido.
    3. Não preecher o campo de email.
    4. Preecher devidamente o campo senha com input válido.
    5. Clicar no botão submeter registro. 
Resultados esperados:
    O cadastro não deve ser concluido apresentando a mensagem de erro à definir.


Caso de teste 4: Formulário preenchido sem o senha (AC1, AC3). 

Descrição: Verificar que a senha deve ser preenchida obrigatoriamente. 
Pré-Condições: 
     1. Usuário deve aceder a tela de registro.
     2. Campos devem estar habilitados para receber os dados.
     3. O usuário não deve possuir cadastro;
     4. Email não pode ser duplicado; 
Entradas:    
    1. Preecher devidamente o campo email com input válido;
    2. Nome válido, ex: Natali;
    3. Input de senha vazio;
Ações: 
    1. Acessar a tela de registro.
    2. Preecher devidamente o campo nome com input válido.
    3. Preecher devidamente o campo email com input válido.
    4. Não preencher o campo de senha.
    5. Clicar no botão submeter registro. 
Resultados esperados:
    1.O cadastro não deve ser concluido apresentando a mensagem de erro à definir.


Caso de teste 5: Formulário preenchido com email já cadastrado (AC2). 

Descrição: Validar que o email não existe ainda na base de dados.
Pré-Condições: 
     1. Usuário deve aceder a tela de registro.
     2. Campos devem estar habilitados para receber os dados.
     3. O usuário não deve possuir cadastro;
     4. Email não pode ser duplicado; 
Entradas:    
    1. Nome válido.
    2. Email válido.
    3. Senha válida.
Ações: 
    1. Acessar a tela de registro.
    2. Preecher devidamente o campo nome com input válido.
    3. Preencher o campo com um email existente na base de dados.
    4. Preencher o campo senha com input válido.
    5. Clicar no botão submeter registro. 
Resultados esperados:
    1. O cadastro não deve ser concluido e deverá apresentar uma mensagem de erro DO TIPO "Email já cadastrado!".


    
Caso de teste 6: Usuário tenta fazer login sem cadastro (AC3). 

Descrição: Validar que não é possível efetuar o login sem fazer o cadastro.
Pré-Condições: 
     1. Usuário deve aceder a tela de login.
     2. Campos devem estar habilitados para receber os dados.
     3. O usuário não deve possuir cadastro;
Entradas:    
    1. Nome válido.
    2. Email válido.
    3. Senha válida.
Ações: 
    1. Acessar a tela de login.
    2. Preecher  o campo nome com input válido porém não cadastrado.
    3. Preencher o campo com um email com input válido porém não cadastrado.
    4. Preencher o campo senha com input válido porém não cadastrado.
    5. Clicar no botão submeter. 
Resultados esperados:
    1. O login não deve ser concluido e deverá apresentar uma mensagem de erro como "Usuário não cadastrado".


Caso 7: Usuário efetua login após registro com dados corretos (AC3, AC4). 

Descrição: Validar o sucesso ao tentar efetuar o login após cadastro.
Pré-Condições: 
     1. Usuário deve aceder a tela de login.
     2. Campos devem estar habilitados para receber os dados.
     3. O usuário deve possuir cadastro;
     4. O usuário deve ter recebido o email de confirmação; 
Entradas:    
    1. Nome cadastrado.
    2. Email cadastrado.
    3. Senha cadastrada.
Ações: 
    1. Acessar a tela de login.
    2. Preecher devidamente o campo nome com o nome cadastrado.
    3. Preencher o campo com um email existente na base de dados.
    4. Preencher o campo senha com input válido.
    5. Clicar no botão submeter. 
Resultados esperados:
    1. O login deve ser efetuado com sucesso e o usuário acender a página inicial logado.



Caso 8: Usuário tenta efetuar o login com senha divergente (AC3, AC4). 

Descrição: Validar que não é possível logar com a senha incorreta.
Pré-Condições: 
     1. Usuário deve aceder a tela de login.
     2. Campos devem estar habilitados para receber os dados.
     3. O usuário deve possuir cadastro;
     4. O usuário deve ter recebido o email de confirmação; 
Entradas:    
    1. Nome cadastrado.
    2. Email cadastrado.
    3. Senha inválida.
Ações: 
    1. Acessar a tela de login.
    2. Preecher devidamente o campo nome com o nome cadastrado.
    3. Preencher o campo com um email existente na base de dados.
    4. Preencher o campo senha com uma senha diferente da cadastrada.
    5. Clicar no botão submeter. 
Resultados esperados:
    1. O login deve ser efetuado com sucesso e o usuário acender a página inicial logado.