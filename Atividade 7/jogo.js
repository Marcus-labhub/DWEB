let escolhaUsuario = prompt("Escolha entre Pedra, Papel e Tesoura: "); 
const opcoes = ['Pedra', 'Papel', 'Tesoura'];
const numeroAleatorio = Math.floor(Math.random() * 3);
const escolhaComputador = opcoes[numeroAleatorio];

alert(`Usuário escolheu: ${escolhaUsuario}`);
alert(`Computador escolheu: ${escolhaComputador}`);


if (escolhaUsuario === escolhaComputador) {
    alert("Resultado: Empate.");
} 
else if (
    (escolhaUsuario === 'Pedra' && escolhaComputador === 'Tesoura') || (escolhaUsuario === 'Tesoura' && escolhaComputador === 'Papel') || (escolhaUsuario === 'Papel' && escolhaComputador === 'Pedra')
) {

    if (escolhaUsuario === 'Pedra') 
        alert("Resultado: Você ganhou! Pedra quebra tesoura.");
    if (escolhaUsuario === 'Tesoura') 
        alert("Resultado: Você ganhou! Tesoura corta papel.");
    if (escolhaUsuario === 'Papel') 
        alert("Resultado: Você ganhou! Papel cobre a pedra.");
} 
else {
    if (escolhaComputador === 'Pedra') 
        alert("Resultado: O computador ganhou! Pedra quebra tesoura.");
    if (escolhaComputador === 'Tesoura') 
        alert("Resultado: O computador ganhou! Tesoura corta papel.");
    if (escolhaComputador === 'Papel') 
        alert("Resultado: O computador ganhou! Papel cobre a pedra.");
}

