let vitorias = 150;
let derrotas = 87;
let saldoRankeada = vitorias - derrotas;

function seuElo(vitorias, derrotas) {
  let resultado = vitorias - derrotas;
  if (resultado == 10) {
    return "Ferro";
  }

  if (resultado >= 11 && resultado <= 20) {
    return "Bronze";
  }

  if (resultado >= 21 && resultado <= 50) {
    return "Prata";
  }

  if (resultado >= 51 && resultado <= 80) {
    return "Ouro";
  }

  if (resultado >= 81 && resultado <= 90) {
    return "Diamante";
  }

  if (resultado >= 91 && resultado <= 100) {
    return "Lendário";
  }

  if (resultado >= 101) {
    return "Imortal";
  }
}

let elo = seuElo(vitorias, derrotas);

console.log(`O Herói tem de saldo de ${saldoRankeada} está no nível de ${elo}`);
