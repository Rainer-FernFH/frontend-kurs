"use strict";
// Array mit mehreren Rezept-Angeboten
const rezepte = [
    { titel: 'Rindsgulasch', supermarkt: 'Spar', preis: 4.90 },
    { titel: 'Putengeschnetzeltes', supermarkt: 'Billa', preis: 5.50 },
    { titel: 'Linseneintopf', supermarkt: 'Hofer', preis: 2.50 },
    { titel: 'Wiener Schnitzel', supermarkt: 'Spar', preis: 6.20 },
    { titel: 'Kaspressknödel mit Salat', supermarkt: 'Billa', preis: 4.10 }
];
// Typisierte Funktion mit Array-Filterung
function filtereNachMarkt(liste, markt) {
    if (markt === 'alle') {
        return liste;
    }
    return liste.filter((r) => r.supermarkt === markt);
}
// Typisierte Funktion zur HTML-Erzeugung
function erstelleRezeptKarten(liste) {
    if (liste.length === 0) {
        return '<p>Keine Rezepte gefunden.</p>';
    }
    return liste
        .map((r) => `<article><h3>${r.titel}</h3><p>${r.supermarkt} - ${r.preis.toFixed(2)} €</p></article>`)
        .join('');
}
// DOM-Interaktion auf Knopfdruck / Auswahl
function initialisiereSuche() {
    const select = document.querySelector('#markt-select');
    const ausgabe = document.querySelector('#rezept-liste');
    // Null-Prüfung für TypeScript
    if (!select || !ausgabe)
        return;
    const meilensteinUpdate = () => {
        const gefiltert = filtereNachMarkt(rezepte, select.value);
        ausgabe.innerHTML = erstelleRezeptKarten(gefiltert);
    };
    // Event-Listener für Interaktion
    select.addEventListener('change', meilensteinUpdate);
    // Initiales Laden
    meilensteinUpdate();
}
// Anwendungsstart sobald das DOM geladen ist
document.addEventListener('DOMContentLoaded', initialisiereSuche);
