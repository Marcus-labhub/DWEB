function maior(x,y,z)
{
    return Math.max(x, y, z);
}
let resultado = maior(x,y,z);
alert("O maior número é: " + resultado);

function ordem(x,y,z)
{
    return [x,y,z].sort;
    
}

function Palindromo()
{
      const textoLimpo = texto.toLowerCase().replace(/\s+/g, '');
      const textoInvertido = textoLimpo.split('').reverse().join('');
      return textoLimpo === textoInvertido;

}

function verificarSubconjunto(palavra1, palavra2) {
  if (!palavra1 || !palavra2 || palavra1.trim() === "" || palavra2.trim() === "") {
    return "erro";
  }

  if (palavra1.toLowerCase().includes(palavra2.toLowerCase())) {
    return "é um subconjunto";
  } else {
    return "não é um subconjunto";
  }
}

function DiaDaSemana(dataString) {
  const diasSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
  ];

  const data = new Date(dataString + "T00:00:00");

  return diasSemana[data.getDay()];
}