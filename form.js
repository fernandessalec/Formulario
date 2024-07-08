function Enviar(){
   
    let nomeUsuario= document.getElementById('nome').value
    let dataUsuario= document.getElementById('data').value
    let emailUsuario= document.getElementById('email').value
    let senhaUsuario= document.getElementById('senha').value

    let Itensusuario = document.querySelector("input[name='comoMora']:checked").value

alert('Seu nome é: ' + nomeUsuario + '\n' + 
      'Seu email é: ' + emailUsuario + '\n' +
     'Sua data de nascimento é: ' + dataUsuario + '\n' +
      'Sua senha é: ' + senhaUsuario + '\n' +
      'Você mora com: ' + Itensusuario + '\n')


    window.location.href='pesquisaEnviada.html'
}

function Voltar(){
    window.location.href='telainicial.html'
}