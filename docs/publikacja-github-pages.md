# Publikacja portfolio na GitHub Pages

Instrukcja dla tego projektu, sprawdzona 14/10/2026. Strona to statyczna aplikacja React/Vite: nie wymaga serwera aplikacyjnego ani bazy danych do wyświetlania portfolio. W repozytorium przygotowano `.github/workflows/pages.yml` do budowania i publikacji.

## 1. Wybierz adres i utwórz repozytorium

Dla Twojego portfolio proponuję repozytorium **Zielony20.github.io**. Przewidywany adres strony: **https://zielony20.github.io/**.

Alternatywnie możesz nazwać repozytorium `portfolio`; wtedy przewidywany adres to **https://zielony20.github.io/portfolio/**. Przygotowany workflow odczytuje bazową ścieżkę z konfiguracji Pages i obsługuje oba warianty. Linki między sekcjami używają kotwic, więc nie wymagają konfiguracji routingu serwera.

Na GitHubie wybierz **New repository**, wpisz wybraną nazwę i ustaw **Public**. Przy tworzeniu zostaw wyłączone dodawanie README, licencji i `.gitignore`, ponieważ lokalny projekt już ma pliki. Jeśli repozytorium o tej nazwie istnieje, użyj innej nazwy albo najpierw sprawdź jego zawartość.

GitHub Pages jest dostępne dla publicznych repozytoriów w planie GitHub Free. [Dostępność Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## 2. Przygotuj i wyślij kod

W terminalu, używając Node.js 22 w aktualnej wersji:

```bash
cd /home/piotr/projects/portfolio
npm ci
npm run lint
npm run check
npm run build
git init -b main
git add .
git status --short
git diff --cached --stat
```

Sprawdź listę plików do commita. `.gitignore` pomija `node_modules`, `dist` i lokalne notatki z wywiadu `docs/rekrutacja/`. Te notatki zostają na Twoim komputerze. Źródła strony, w tym informacje przeznaczone do portfolio, będą publiczne.

Następnie:

```bash
git commit -m "Add personal portfolio"
git remote add origin https://github.com/Zielony20/Zielony20.github.io.git
git push -u origin main
```

Jeśli wybrałeś nazwę `portfolio`, w poleceniu `git remote add` użyj `https://github.com/Zielony20/portfolio.git`. Uwierzytelnij Git swoim skonfigurowanym sposobem logowania. Jeśli Git pyta o autora commita, ustaw lokalnie `git config user.name "Piotr Sikora-Malach"` oraz `git config user.email "piotrsikora98@gmail.com"`, po czym ponów commit.

`git init` wykonujesz tylko raz dla tego katalogu. Jeśli później repozytorium jest już zainicjalizowane, sprawdź `git status` i `git remote -v`, zamiast powtarzać konfigurację.

## 3. Włącz hosting

W repozytorium otwórz **Settings → Pages → Build and deployment → Source** i wybierz **GitHub Actions**. Nie dodawaj drugiego workflow z szablonu: `pages.yml` jest już gotowy. [Konfiguracja źródła publikacji](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Otwórz **Actions → Publish portfolio → Run workflow**, wybierz `main` i uruchom. Pierwszy automatyczny run po pushu mógł nie udać się, jeśli Pages nie było jeszcze włączone. Po jego włączeniu uruchom workflow ponownie.

Workflow instaluje zależności, uruchamia lint i kontrolę komponentu, buduje `dist`, a następnie publikuje artefakt. Dopiero zadanie deploy ma uprawnienia `pages: write` i `id-token: write`. Używa środowiska `github-pages`. [Własne workflow Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

Po zielonym zakończeniu otwórz link wyświetlony przy środowisku `github-pages` lub w **Settings → Pages**. Sprawdź zdjęcie, Skills, Education, podgląd CV i układ na telefonie. Samo przesłanie kodu bez udanego deployu nie potwierdza publikacji strony.

## 4. Aktualizuj portfolio

Po każdej lokalnej zmianie:

```bash
cd /home/piotr/projects/portfolio
npm run lint
npm run check
npm run build
git add src public index.html
git diff --cached
git commit -m "Update portfolio content"
git push
```

Dodawaj także inne pliki, które świadomie zmieniłeś, np. konfigurację. Każdy push do `main` uruchamia publikację. Szczegóły przebiegu i ewentualne błędy znajdziesz w Actions.

## Zdjęcie i lokalny podgląd

Wstaw zdjęcie do `public/profile-photo.jpg`. W `src/data/portfolioData.js` ustaw `photo: 'profile-photo.jpg'` i zmień `photoAlt` na angielski opis. Nazwa pliku nie powinna zaczynać się od `/`; komponent dodaje ścieżkę bazową strony.

Do sprawdzenia zwykłego buildu użyj `npm run build`, potem `npm run preview`. Vite preview służy do lokalnej weryfikacji, a wynik do hostingu to katalog `dist`. [Publikacja Vite](https://vite.dev/guide/static-deploy.html).

Jeśli chcesz lokalnie zasymulować adres z `/portfolio/`, użyj tej samej bazy przy budowaniu i podglądzie:

```bash
npm run build -- --base /portfolio/
npm run preview -- --base /portfolio/
```

## Typowe problemy

- **404 po publikacji:** sprawdź wynik deployu, adres z Settings → Pages i wybraną gałąź. Repozytorium `portfolio` używa adresu z `/portfolio/`.
- **Pierwszy run nie znalazł konfiguracji Pages:** włącz Source: GitHub Actions i uruchom workflow ponownie.
- **Pusta strona lub brak zdjęcia:** sprawdź bazową ścieżkę buildu w Actions oraz nazwę zdjęcia, wielkość liter i plik w `public`. Workflow przekazuje ścieżkę Pages do Vite.
- **Błąd instalacji zależności:** upewnij się, że commit zawiera aktualny `package-lock.json`, zgodny z `package.json`.
- **Widzisz poprzednią wersję:** sprawdź, czy najnowszy commit ma udany deploy, i odśwież stronę z pominięciem cache przeglądarki.

Później możesz podpiąć własną domenę w Settings → Pages. Wówczas konfiguracja DNS zależy od dostawcy domeny. [Własna domena w Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
