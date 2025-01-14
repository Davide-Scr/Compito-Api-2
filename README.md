# GTT - Arrivi in Fermata

Questo progetto è un sito web che consente agli utenti di inserire il numero di una fermata e visualizzare tutti i passaggi dei pullman relativi a quella fermata. Gli orari vengono aggiornati automaticamente e vengono mostrati solo i passaggi futuri rispetto all'orario corrente.

Il design del sito è stato realizzato in modo professionale, utilizzando uno stile ispirato ai temi dei trasporti pubblici GTT, con una palette di colori blu, bianco e giallo.

---

## **Funzionalità principali**

1. **Inserimento numero fermata:**

   - L'utente può inserire un numero di fermata per visualizzare i passaggi dei pullman relativi a quella fermata.

2. **Visualizzazione passaggi per linea:**

   - Ogni linea viene mostrata con un cerchio giallo contenente il numero del pullman, seguito dagli orari di arrivo alla fermata.

3. **Filtraggio orari futuri:**

   - Vengono mostrati solo gli orari che devono ancora avvenire rispetto all'orario attuale.

4. **Aggiornamento in tempo reale:**

   - Un tasto "Aggiorna" consente di ricaricare gli orari della fermata per ottenere la versione più recente.

5. **Stile professionale:**

   - Design ispirato ai colori e al tema del trasporto pubblico, con un layout pulito e moderno.

---

## **Struttura del progetto**

Il progetto è composto dai seguenti file principali:

- `index.html`: Contiene la struttura della pagina web.
- `styles.css`: File CSS per lo stile e il layout del sito.
- `script.js`: File JavaScript che gestisce la logica di ricerca, filtraggio e aggiornamento degli orari.

---

## **Guida all'utilizzo**

1. Aprire il file `index.html` in un browser web.
2. Inserire il numero della fermata nel campo di testo.
3. Cliccare sul tasto "Mostra" per visualizzare i passaggi dei pullman relativi a quella fermata.
4. Se necessario, cliccare sul tasto "Aggiorna" per aggiornare gli orari e visualizzare solo i passaggi futuri.

---

## **Esempio di visualizzazione**

Ogni passaggio viene mostrato con il seguente formato:

- Un cerchio giallo contenente il numero del pullman.
- Una lista di orari di arrivo del pullman alla fermata.

Esempio:

```
 [ 2 ]  11:59*, 12:14, 12:35*
 [11 ]  12:02*, 12:11*
```

