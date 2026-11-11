
function maior(x,y,z)
{
    return Math.max(x, y, z);
}

function ordem(x,y,z)
{
    return [x,y,z].sort((a, b) => a - b);

}

function Palindromo(texto) {
  const s = texto.toLowerCase().replaceAll(" ", "");
  return s === [...s].reverse().join("");
}

function Subconjunto(p1, p2) {
  if (!p1?.trim() || !p2?.trim()) return "erro";
  return p1.includes(p2) ? "é um subconjunto" : "não é um subconjunto";
}

function diaDaSemana(data) {
  const dias = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
  return dias[new Date(data + "T00:00").getDay()];
}


const valor = id => document.getElementById(id).value;
const numero = id => parseFloat(valor(id));
const mostrar = (id, texto) => document.getElementById(id).textContent = texto;

const funcao1 = () => mostrar("res1", maior(numero("n1a"), numero("n1b"), numero("n1c")));
const funcao2 = () => mostrar("res2", ordem(numero("n2a"), numero("n2b"), numero("n2c")).join(", "));
const funcao3 = () => mostrar("res3", Palindromo(valor("texto3")) ? "É um palíndromo." : "Não é um palíndromo.");
const funcao4 = () => mostrar("res4", Subconjunto(valor("p1"), valor("p2")));
const funcao5 = () => mostrar("res5", diaDaSemana(valor("data5")));