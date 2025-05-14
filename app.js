//let titulo = document.querySelector('h1')
//titulo.innerHTML = 'Jogo do Numero Secreto'

//let paragrafo = document.querySelector('p')
//paragrafo.innerHTML = 'Escolha um número entre 1 a 10'


let listaNumerosSorteados = [];
let numeroLimite = 1000;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})

}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'COMMIT TESTE');
    exibirTextoNaTela('p', 'Escolha a quantidade de grama que vai querer');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value
    if (chute == numeroSecreto){
    exibirTextoNaTela ('h1', 'Acertou');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela ('p', mensagemTentativas);

    document.getElementById('reiniciar').removeAttribute('disabled')

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'o numero secréto é menor');
        } else {
            exibirTextoNaTela ('p', 'o numero secreto é maior');
        }

        //tentativas = tentativas +1;
        tentativas++
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio ();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute('disabled',true);

}
