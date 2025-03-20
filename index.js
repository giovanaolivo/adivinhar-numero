let computerNumber        // número aleatório que o computador vai gerar
let userNumbers = []      // array para armazenar os números que o usuário tentou
let attempts = 0          // contador de tentativas começa em 0
let maxGuesses = 10       // número máximo de tentativas permitido

function newGame() {
    window.location.reload()   // reinicia o jogo recarregando a página
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)   // gera um número aleatório entre 1 e 100
    //console.log(computerNumber)  // opcional para testar o número gerado
}

function compareNumbers() {
    const userNumber = Number(document.getElementById("inputBox").value)   // pega o número digitado pelo usuário e converte para número

    if (userNumber < 1 || userNumber > 100 || isNaN(userNumber)) {   // verifica se o número é válido (entre 1 e 100)
        document.getElementById("textOutput").innerHTML = "Por favor, digite um número entre 1 e 100!"   // mensagem de erro
        document.getElementById("inputBox").value = ""    // limpa o campo de entrada
        return   // encerra a função
    }

    if (userNumbers.includes(" " + userNumber)) {    // verifica se o número já foi tentado antes
        document.getElementById("textOutput").innerHTML = "Você já tentou esse número! Digite um número diferente."  // mensagem de número repetido
        document.getElementById("inputBox").value = ""    // limpa o campo
        return   // encerra a função
    }

    userNumbers.push(" " + userNumber)    // adiciona o número tentado ao array (com espaço antes)
    document.getElementById("guesses").innerHTML = userNumbers   // mostra os números já tentados na tela//

    if (attempts < maxGuesses) {   // verifica se ainda tem tentativas restantes

        if (userNumber > computerNumber) {    // se o número é maior que o número do computador
            document.getElementById("textOutput").innerHTML = "Seu número é muito alto"   // mensagem
            document.getElementById("inputBox").value = ""   // limpa o campo
            attempts++   // incrementa as tentativas
            document.getElementById("attempts").innerHTML = attempts   // atualiza o contador na tela
        }
        else if (userNumber < computerNumber) {   // se o número é menor que o número do computador
            document.getElementById("textOutput").innerHTML = "Seu número é muito baixo"   // mensagem
            document.getElementById("inputBox").value = ""    // limpa o campo
            attempts++    // incrementa tentativas
            document.getElementById("attempts").innerHTML = attempts   // atualiza na tela
        }
        else {    // se acertou o número
            document.getElementById("textOutput").innerHTML = "Parabéns!"    // mensagem de vitória
            attempts++    // incrementa tentativas
            document.getElementById("attempts").innerHTML = attempts   // atualiza na tela
            document.getElementById("inputBox").setAttribute("Readonly", "Readonly")   // desativa o campo de entrada
        }
    }
    else {    // se não tem mais tentativas
        document.getElementById("textOutput").innerHTML = "Você perdeu! O número era " + computerNumber   // mensagem de derrota
        document.getElementById("inputBox").setAttribute("Readonly", "Readonly")   // desativa o campo de entrada
    }
}
