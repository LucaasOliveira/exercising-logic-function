const time = Number(prompt("Informe o tempo de produção da fábrica: "));

hour(time);

function hour(seconds) {

    const hour = seconds / 3600;
    const restHour = seconds % 3600;
    const minutes = restHour / 60;
    const second = restHour % 60;

    document.write(`${Math.trunc(hour)}:${Math.trunc(minutes)}:${Math.trunc(second)}`);

}