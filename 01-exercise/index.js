
const nota1 = Number(prompt("Digite sua primeira nota: "));
const nota2 = Number(prompt("Digite sua segunda nota: "));
const nota3 = Number(prompt("Digite sua terceira nota: "));
const letra = String(prompt("Digite A para média aritmética ou P para média ponderada."));

recebenotas(nota1, nota2, nota3, letra);

function recebenotas(n1, n2, n3, letra) {
    if (letra == "A") {
        let media = (n1 + n2 + n3) / 3;
        document.write(`Sua média ficou: ${media}.`)
    } else if (letra == "P") {
        let media = (n1 * 5) + (n2 * 3) + (n3 * 2) / 10;
        document.write(`Sua média média ficou: ${media}.`);
    } else {
        document.write(`Desculpe, verifique os dados informados novamente.`);
    }
}

