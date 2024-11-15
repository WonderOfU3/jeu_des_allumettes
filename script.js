let max = 50;
let checkPlayer = false;
let player = 1;

let givePlayer = (number) =>
{
    return (number < 1 ? false : true);
}

let giveNumber = (number) =>
{
    return (number < 1 || number > 6 ? false : true);
}

let checkWin = (number) =>
{
    if (number < max)
        max -= number;
    else {
        document.querySelector('h1').innerHTML = `Player${player} avez gagné`;
        document.querySelector('h2').innerHTML = "";
    }
}

let nextPlayer = (numberPlayer) =>
{
    player < numberPlayer ? player++ : player = 1;
}

let game = (number, numberPlayer) =>
{
    if (giveNumber(number) === true) {
        document.querySelector('h2').innerHTML = "Donnez un chiffre entre 1 et 6";
        checkWin(number);
        nextPlayer(numberPlayer);
    } else
        document.querySelector('h1').innerHTML = `Votre nombre est incorrecte`;
}

let playerTransition = (number) =>
{
    if (givePlayer(number) === true) {
        checkPlayer = true;
        document.querySelector('h2').innerHTML = "Donnez un chiffre entre 1 et 6";
        return (number);
    }
}

let main = () =>
{
    let sendButton = document.querySelector(".submit"), remMatch = 0, numberPlayer = 0;

    sendButton.addEventListener('click', () => {
        remMatch = document.getElementById("number").value;
        if (checkPlayer === true)
            game(remMatch, numberPlayer);
        else
            numberPlayer = playerTransition(remMatch, numberPlayer);
    });
}

main();
