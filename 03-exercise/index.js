let num = Number(prompt("Digite um número: "))

document.write(numPrimo(num))

function numPrimo(num) {

    if (num == 1) {
        return false
    }

    for (i = 2; i < num; i++) {
        if (num % i == 0 && num > 0) {
            return false
        }
    }
    return true
}