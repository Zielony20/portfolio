# Karta profilu z referencji

Komponent: `src/components/ui/profile-card-testimonial-carousel.jsx`.
Projekt korzysta z React 19, Vite i Tailwind 4. Współdzielony komponent
znajduje się w `src/components/ui`; style w `src/index.css`.

Załączona referencja została dostosowana do obecnego stosu:
- `next/image` → natywny `img` z rozmiarem i tekstem alternatywnym;
- `next/link` → natywne linki;
- Framer Motion → niewielkie przejście CSS, z obsługą reduced motion;
- składnia TypeScript → istniejący JSX;
- fikcyjne opinie → trzy tematy rzeczywistego profilu Piotra.

Nie są potrzebne dodatkowe zależności ani migracja projektu do Next.js
lub shadcn. Referencja określa wygląd i interakcję; komponent korzysta
z istniejącego React, CSS i ikon.

## Podmiana zdjęcia

Dodaj swoje zdjęcie do `public`, np. `public/profile-photo.jpg`.
W `src/data/portfolioData.js` zmień `personalData.photo` na
`profile-photo.jpg` (bez początkowego ukośnika) i `photoAlt` na opis własnego zdjęcia.
Komponent dodaje bazową ścieżkę Vite, dzięki czemu zdjęcie działa również w podkatalogu GitHub Pages.
Obecnie wyświetlany jest wyraźnie oznaczony szablon SVG.

## Weryfikacja

- `npm run build`
- `npm run lint`
- `npm run check` — kontrakt renderowania komponentu i zakresu projektów
- `npx --yes impeccable detect --json src` — skan statyczny (ostatni wynik: `[]`)
- Przegląd w przeglądarce: przełączanie trzech tematów, linki do sekcji,
  układ na telefonie, menu mobilne i otwieranie podglądu CV.
