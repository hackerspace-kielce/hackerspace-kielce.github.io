# Hackerspace Kielce

Statyczna strona społeczności hackerspace z Kielc zbudowana w **Astro** i **Tailwind CSS**. Projekt zawiera ciemny motyw, responsywny layout oraz komplet podstawowych podstron:

- strona główna
- o nas
- wydarzenia
- dołącz
- kontakt

## Wymagania

- Node.js 20+
- npm 10+

## Instalacja

```bash
npm install
```

## Tryb developerski

```bash
npm run dev
```

Domyślnie Astro uruchomi lokalny serwer developerski. Adres zostanie pokazany w terminalu.

## Build produkcyjny

```bash
npm run build
```

Wynik trafi do katalogu `dist/`.

## Podgląd buildu

```bash
npm run preview
```

## Deployment statyczny

Projekt korzysta z `output: "static"`, więc możesz wdrożyć zawartość katalogu `dist/` na dowolny hosting plików statycznych, np.:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- dowolny serwer Nginx / Apache

### Przykładowy flow

1. Zainstaluj zależności: `npm install`
2. Zbuduj stronę: `npm run build`
3. Wyślij zawartość `dist/` na wybrany hosting

## Struktura projektu

```text
src/
  components/
  data/
  layouts/
  pages/
  styles/
```

## Dalsze dostosowanie

- podmień placeholdery linków społecznościowych w `src/components/Footer.astro` i `src/pages/kontakt.astro`
- zaktualizuj przykładowe wydarzenia w `src/data/events.ts`
- jeśli masz docelową domenę, podmień `site` w `astro.config.mjs`
