# Relazione sul gioco dell'Impiccato

Il Gioco dell'Impiccato è stato sviluppato utilizzando diverse tecnologie per la creazione di un'applicazione web interattiva. In particolare, sono state utilizzate HTML, CSS, JavaScript e WebSocket per implementare il gioco.

HTML è stato utilizzato per definire la struttura della pagina web. Il codice HTML fornisce la base su cui costruire il gioco, definendo gli elementi come l'intestazione, il corpo e il modulo di input per l'interazione con l'utente. È stato inoltre utilizzato per includere i file CSS e JavaScript necessari.

CSS è stato utilizzato per definire lo stile e l'aspetto visivo del gioco. Attraverso le regole CSS, è stato possibile definire la formattazione del testo, il layout dei componenti e l'aspetto generale della pagina. Ciò ha consentito di creare un'interfaccia utente accattivante e ben organizzata.

JavaScript è stato utilizzato per implementare la logica di gioco e la comunicazione con il server (GLITCH) tramite WebSocket. Il codice JavaScript è stato utilizzato per gestire gli eventi dell'utente, come l'invio di una lettera e la ricezione dei messaggi dal server. Inoltre, JavaScript ha consentito di manipolare il contenuto della pagina in tempo reale, aggiornando dinamicamente la parola indovinata, il numero di tentativi rimanenti e i messaggi di feedback.

WebSocket è una tecnologia che ha consentito l'implementazione della comunicazione bidirezionale tra il client e il server in tempo reale. È stata utilizzata per stabilire una connessione persistente tra il client e il server, consentendo lo scambio di messaggi tra di loro. Nel gioco dell'impiccato, il server invia al client informazioni come la parola indovinata, il numero di tentativi rimanenti e la parola da indovinare in caso di perdita. Il client, a sua volta, invia al server le lettere inserite dall'utente per verificare se sono presenti nella parola da indovinare.

La creazione del gioco ha seguito diversi passaggi. Inizialmente, è stato creato il file HTML che definisce la struttura della pagina e collega il file CSS per lo stile. Il file JavaScript è stato implementato per gestire la logica di gioco e la comunicazione WebSocket con il server.

Il server è stato creato utilizzando Node.js e la libreria WS (WebSocket). Il server WebSocket è stato configurato per ascoltare le connessioni sulla porta 5000. Quando un client si connette, viene generata una parola casuale da indovinare e inizializzata la parola indovinata con trattini e il numero di tentativi rimanenti a 6. Il server invia quindi queste informazioni al client tramite la connessione WebSocket.

Nel client, il codice JavaScript si occupa di gestire gli eventi dell'utente, come l'invio di una lettera tramite il modulo di input. Quando viene inviata una lettera, il client invia il messaggio al server tramite WebSocket. Il server elabora il messaggio, controlla se la lettera è presente nella parola da indovinare e aggiorna la parola indovinata o il numero di tentativi rimanenti di conseguenza. Il server invia quindi le nuove informazioni al client tramite WebSocket, consentendo l'aggiornamento in tempo reale della pagina.

Se il numero di tentativi rimanenti raggiunge zero, il server invia al client la parola da indovinare e chiude la connessione WebSocket. Il client disabilita quindi il modulo di input per evitare ulteriori tentativi.

In conclusione, il Gioco dell'Impiccato è stato creato utilizzando HTML, CSS, JavaScript e WebSocket. Queste tecnologie hanno permesso di creare un'applicazione web interattiva in cui l'utente può indovinare una parola selezionata casualmente dal server. La comunicazione in tempo reale tra il client e il server tramite WebSocket ha reso possibile l'aggiornamento dinamico della pagina durante il gioco. Il gioco offre un'esperienza coinvolgente e interattiva per l'utente, offrendo la possibilità di divertirsi nel tentativo di indovinare la parola segreta.
