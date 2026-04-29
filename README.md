# Patto Civico per Alpignano

Sito statico single page della lista civica a sostegno di Andrea Oliva.

## Struttura

- `index.html`: homepage
- `style.css`: stile globale
- `script.js`: interazioni leggere
- `assets/`: immagini e logo
- `documenti/`: programma e casellari
- `data/`: dati dei profili candidati
- `profilo.html`: template pagina profilo

## Anteprima locale

Da questa cartella:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Poi apri `http://127.0.0.1:4173`.

## Deploy su Netlify

Il progetto non richiede build.

- Build command: lascia vuoto
- Publish directory: `.`

In alternativa Netlify puo leggere `netlify.toml` e usare direttamente la root del repository.

## Aggiornamenti rapidi

Flusso consigliato:

```bash
git add .
git commit -m "Aggiorna contenuti"
git push
```

Ogni push al branch principale pubblichera automaticamente il sito su Netlify.
