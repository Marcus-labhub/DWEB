const TOTAL = 45;

let somaIdades = 0;
let maisVelha = 0;
let maisNova = Infinity;
let qtdPessimo = 0;
let qtdOtimoBom = 0;
let feminino = 0;
let masculino = 0;
let outros = 0;

for (let i = 1; i <= TOTAL; i++) {
  
  let idade;
  do {
    idade = parseInt(prompt(`Pessoa ${i} - Digite a idade:`));
  } while (isNaN(idade) || idade <= 0);

 
  let sexo;
  do {
    sexo = prompt(`Pessoa ${i} - Sexo (F = feminino, M = masculino, O = outros):`).toUpperCase();
  } while (sexo !== "F" && sexo !== "M" && sexo !== "O");


  let opiniao;
  do {
    opiniao = parseInt(prompt(
      `Pessoa ${i} - Opinião:\n4 = Ótimo\n3 = Bom\n2 = Regular\n1 = Péssimo`
    ));
  } while (![1, 2, 3, 4].includes(opiniao));


  somaIdades += idade;
  if (idade > maisVelha) maisVelha = idade;
  if (idade < maisNova) maisNova = idade;

  if (opiniao === 1) 
    qtdPessimo++;
  if (opiniao === 3 || opiniao === 4) 
    qtdOtimoBom++;

  if (sexo === "F") 
    feminino++;
  else if (sexo === "M") 
    masculino++;
  else 
    outros++;
}

const mediaIdade = somaIdades / TOTAL;
const percOtimoBom = (qtdOtimoBom / TOTAL) * 100;

document.getElementById("resultado").innerHTML = `
  <p>Média de idade: ${mediaIdade.toFixed(1)} anos</p>
  <p>Pessoa mais velha: ${maisVelha} anos</p>
  <p>Pessoa mais nova: ${maisNova} anos</p>
  <p>Quantidade que respondeu péssimo: ${qtdPessimo}</p>
  <p>Porcentagem que respondeu ótimo ou bom: ${percOtimoBom.toFixed(1)}%</p>
  <p>Mulheres: ${feminino} | Homens: ${masculino} | Outros: ${outros}</p>
`;