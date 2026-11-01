# SED502 - Frontend Development: ESA01-Meine erste Webseite

## SmartCook - Rezeptvorschläge auf Basis aktueller Supermarktangebote
SmartCook hilft Nutzerinnen und Nutzern dabei, Geld beim Einkauf zu sparen und Lebensmittelverschwendung zu reduzieren. Auf Basis ausgewählter Supermärkte (z. B. Spar, Billa, Hofer) werden geeignete Rezeptvorschläge dynamisch gefiltert und dargestellt.

## Technische Umsetzung
- **Semantisches HTML5:** Ausschließliche Nutzung wichtiger Elemente (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<aside>`, `<figure>`) ohne generische `div`-Elemente. Barrierefreiheit wird durch ARIA-Attribute (`aria-label`) und ein Lighthouse-Audit unterstützt.
- **TypeScript & Interaktivität:** Typsichere Datenverarbeitung über ein `Rezept`-Interface. Dynamische Filterung der Rezeptliste mittels Array-Methoden (`.filter()`, `.map()`) und typsicherem DOM-Event-Handling (`change`-Event).
- **Build-Workflow:** Kompilierung von TypeScript aus `ESA01/src/app.ts` nach `ESA01/dist/app.js` über den Befehl `npm run build`.
