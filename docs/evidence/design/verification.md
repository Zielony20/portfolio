# Weryfikacja redesignu — 14/10/2026

- `npm run build`: poprawny build Vite.
- `npm run lint`: bez błędów i ostrzeżeń.
- `npm run check`: poprawny kontrakt renderowania karty, linków, opisów obrazu i zakresu projektów.
- `npx --yes impeccable detect --json src`: `[]` — brak zgłoszeń w skanie statycznym.
- Przeglądarka: przejście przez wszystkie trzy tematy i zawinięcie do pierwszego działa.
- Podgląd CV otwiera natywny dialog; Escape zamyka go i przywraca stronę.
- Telefon, viewport 390 × 844: brak poziomego przepełnienia, tekst opisu 16 px,
  obraz załadowany, menu otwiera się i zamyka po wyborze sekcji.
- Komputer, viewport 1280 px: brak poziomego przepełnienia; brak błędów i ostrzeżeń w konsoli.
- Zrzuty: `desktop.jpg`, `mobile.jpg`.

Zdjęcie jest oznaczonym szablonem, zgodnie z prośbą użytkownika. Instrukcja
podmiany znajduje się w `docs/integracja-karty-profilu.md`.

## Aktualizacja treści angielskich i GitHub Pages

- Całe portfolio oraz podgląd CV po angielsku; poprawna pisownia Sikora-Malach.
- W publicznej treści brak em dashy i poprzedniej pisowni nazwiska.
- Education oraz dialog CV wyświetlają dwa tematy prac dyplomowych.
- Opis Nokii uwzględnia projekty cybersecurity, EDR i compliance.
- Cybersecurity zawiera dokładnie siedem wskazanych narzędzi; Observability bez opisu.
- Databases oddzielone od Integrations; PostgreSQL, Cassandra i Qdrant.
- `npm run check`, `npm run lint` i build z `--base /portfolio/` zakończone poprawnie.
- Impeccable po aktualizacji: `[]`.
- Viewport 390 × 844: brak poziomego przepełnienia i poprawnie załadowany obraz.
- Podgląd CV po angielsku; zamknięcie przez Escape działa.
- Build produkcyjny pod `http://127.0.0.1:5192/portfolio/`: wyrenderowany profil, zdjęcie i CSS z poprawną bazą `/portfolio/`, brak błędów i ostrzeżeń konsoli.
- Workflow Pages sprawdzony lokalnie pod kątem składni YAML; wykonanie na GitHubie wymaga utworzenia repozytorium i włączenia Pages przez użytkownika.
- Poradnik: `docs/publikacja-github-pages.md`. Nie wykonano publikacji.
