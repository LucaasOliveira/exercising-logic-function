const num = Number(prompt("Digite um número para verificar se ele é perfeito: "))

document.write(`${num} é perfeito ? ${perfectNum(num)}`)
function perfectNum(num) {
    let i = 1;
    let j = 0;


    while (i < num) {
        if (num % i == 0) {
            j += i
        }
        i++

        console.log(`i: ${i} j: ${j} num: ${num}`)
    }

    if (j == num) {
        return true
    } else {
        return false
    }

}
