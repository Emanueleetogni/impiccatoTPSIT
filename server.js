// Importa la libreria per WebSocket
const WebSocket = require('ws');

// Crea un nuovo server WebSocket
const wss = new WebSocket.Server({ port: 5000 });

// Definisci le parole che possono essere indovinate
const parole = ['cane', 'gatto', 'cavallo', 'uccello'];

// Funzione per scegliere una parola a caso
function scegliParola() {
    const indice = Math.floor(Math.random() * parole.length);
    return parole[indice];
}

// Gestore di connessioni WebSocket
wss.on('connection', function connection(ws) {
    console.log('Connessione stabilita');

    // Scegli una parola a caso
    const parolaDaIndovinare = scegliParola();

    // Inizializza la parola indovinata con i trattini
    let parolaIndovinata = '';
    for (let i = 0; i < parolaDaIndovinare.length; i++) {
        parolaIndovinata += '-';
    }

    // Inizializza il numero di tentativi rimanenti
    let tentativiRimanenti = 6;

    // Invia la parola indovinata e il numero di tentativi rimanenti al client
    ws.send(JSON.stringify({ parolaIndovinata, tentativiRimanenti }));

    // Gestore di messaggi WebSocket
    ws.on('message', (messaggio) => {
        console.log('Ricevuto messaggio:', messaggio);
        // Estrai la lettera dal messaggio ricevuto
        const lettera = messaggio.toString().trim();

        // Controlla se la lettera è presente nella parola da indovinare
        if (parolaDaIndovinare.includes(lettera)) {
            // Sostituisci i trattini con la lettera indovinata
            for (let i = 0; i < parolaDaIndovinare.length; i++) {
                if (parolaDaIndovinare[i] === lettera) {
                    parolaIndovinata = parolaIndovinata.substring(0, i) + lettera + parolaIndovinata.substring(i + 1);
                }
            }

            // Invia la nuova parola indovinata al client
            ws.send(JSON.stringify({ parolaIndovinata }));
        } else {
            // Decrementa il numero di tentativi rimanenti
            tentativiRimanenti--;

            // Invia il nuovo numero di tentativi rimanenti al client
            ws.send(JSON.stringify({ tentativiRimanenti }));

            // Se il numero di tentativi è arrivato a zero, invia la parola da indovinare al client e chiudi la connessione
            if (tentativiRimanenti === 0) {
                ws.send(JSON.stringify({ parolaDaIndovinare }));
                ws.close();
            }
        }
    });
});