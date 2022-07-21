const peca = "bispo";
let jogada = "";
const pecaConvertida = (peca.toLowerCase());

switch (pecaConvertida) {
    case "rei":
        jogada = "horizontal, vertical e diagonal(uma casa por vez)";
        break;

    case "rainha":
        jogada = "horizontal, vertical e diagonais (não pode pular outras peças)";
        break;

    case "cavalo":
        jogada = "duas casas em sentido horizontal e mais uma na vertical ou vice-versa(pode pula peças)!";
        break;

    case "torre":
        jogada = "horizontal e vertical(não pode pular peças)";
        break;

    case "bispo":
        jogada = "diagonal (não pode pular outras peças)";
        break;

    case "peão":
        jogada = "apenas uma casa para frente (somente captura outras peças na diagonal)";
        break;

    default:
        jogada = "peça inexistente!";
}
console.log("A jogada é: " + jogada);