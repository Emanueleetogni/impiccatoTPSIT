const socket = new WebSocket('wss://mighty-confirmed-secure.glitch.me');

socket.addEventListener('open', function (event) {
    console.log('Connessione stabilita');
});

socket.addEventListener('message', function (event) {
    const data = JSON.parse(event.data);

    if (data.parolaIndovinata) {
        document.getElementById('parola-indovinata').textContent = data.parolaIndovinata;
    }

    if (data.tentativiRimanenti) {
        document.getElementById('messaggio').textContent = `Hai ancora ${data.tentativiRimanenti} tentativi`;
    }

    if (data.parolaDaIndovinare) {
        document.getElementById('messaggio').textContent = `Hai perso! La parola da indovinare era "${data.parolaDaIndovinare}"`;
        document.getElementById('lettera').setAttribute('disabled', true);
    }
});

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const lettera = document.getElementById('lettera').value;

    if (lettera.length !== 1) {
        alert('Inserisci una singola lettera');
        return;
    }

    socket.send(lettera);
});