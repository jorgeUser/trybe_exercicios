let nota = 101;
let letra = "";

if (nota <= 100 && nota >= 90) {
    console.log("A")

} else if (nota <= 89 && nota >= 80) {
    console.log("B")

} else if (nota <= 79 && nota >= 70) {
    console.log("C");

} else if (nota <= 69 && nota >=60) {
    console.log("D")

} else if (nota <= 59 && nota >=50) {
    console.log("E")

} else if (nota < 50 && nota >= 0) {
    console.log("F")

} else if (nota > 100 || nota < 0) {
    console.log("Você digitou uma porcentagem que não está entre 0 e 100 %!!!")
}