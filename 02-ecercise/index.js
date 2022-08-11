const number = Number(prompt("Digite um número: "));

document.write(imparOuPar(number));

function imparOuPar(num) {
    if (num % 2 == 0) {
        return false
    } else {
        return true
    }
}