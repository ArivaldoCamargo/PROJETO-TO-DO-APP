let nomeCriarConta = document.getElementById("nome");
let apelidoCriarConta = document.getElementById("apelido");
let emailCriarConta = document.getElementById("email");
let senhaCriarConta = document.getElementById("senha");
let senha2CriarConta = document.getElementById("senha2");
 HEAD
// let repetirSenhaCriarConta = getElementById("repetirSenha");
let botaoCadastro = document.getElementById("botaoCadastro")


let cadastro = false;
 f92222dc242a7f0b998a207228ed2c1c096817
botaoCadastro.addEventListener('click', function(event) {
    event.preventDefault();
    let dados = {
 HEAD
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "string"
      };
    
    fetch('https://ctd-todo-api.herokuapp.com/v1/users',    {
        method: 'POST',
        body: dados,
        headers: {
            'content-type':'application/json'
        }
        body: JSON.stringify(dados)
    })
    .then(function(response){
        return response.json()
    })
        .then(response => response.json())

       
 console.log(dados); 

})
