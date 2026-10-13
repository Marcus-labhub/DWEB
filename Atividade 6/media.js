const nome = prompt("Digite o nome do aluno: \n")
let n1 = prompt("Digite a primeira nota: \n");
let n2 = prompt("Digite a segunda nota: \n");
let n3 = prompt("Digite a terceira nota: \n");
let n4 = prompt("Digite a quarta nota: \n");

let media

media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4;

alert(nome + "Sua media eh igual a " + media.toFixed(2));
