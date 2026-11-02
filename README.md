# SET Restaurant — React + Tailwind

A componentized rebuild of the SET restaurant landing page, fully responsive,
with a real, live location feature (OpenStreetMap + browser Geolocation API).

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

Build for production:

```bash
npm run build
```

## Project structure

```
src/
  components/       One file per section/UI piece — see below
  data/             Plain-JS content (edit these, not the components)
  hooks/            useGeolocation — wraps the browser Geolocation API
  utils/            geo.js — distance calc + Google Maps directions link
  App.jsx           Composes all sections; reorder/swap sections here
  index.css         Tailwind layers + shared classes (.btn-primary, etc.)
```

### Components

| Component            | What it renders                                             |
|-----------------------|--------------------------------------------------------------|
| `Navbar`              | Sticky header, mobile menu                                   |
| `Hero`                | Full-bleed hero, headline, CTAs                               |
| `OurStory`            | "Where tradition meets creativity" + 3 feature items          |
| `SignatureDishes`     | Scrollable dish carousel (uses `DishCard`)                    |
| `Experience`          | Atmosphere banner                                              |
| `ChefAndMenuSection`  | Wraps `ChefPhilosophy` + `MenuHighlights` side by side          |
| `Gallery`             | Image grid ("A glimpse inside")                               |
| `BookingSection`      | Wraps `ReservationForm` + `LocationMap` + `VisitInfo`          |
| `Footer`              | Footer nav columns                                              |

Every section is self-contained — delete or reorder any `<Section />` line
in `App.jsx` without breaking the rest.

### Editing content

Don't hunt through JSX for copy — it all lives in `src/data/`:

- `siteConfig.js` — brand name, nav links, **address & coordinates**, phone, socials
- `dishes.js` — signature dish carousel
- `menu.js` — tabbed menu highlights (Starters/Mains/Desserts/Drinks)
- `gallery.js` — gallery grid images

### Location feature

`src/components/LocationMap.jsx` renders a real Leaflet map centered on the
coordinates in `siteConfig.js` (update these to your actual address — no API
key needed, it uses free OpenStreetMap tiles).

The "Use My Location" button calls the browser's native Geolocation API
(`src/hooks/useGeolocation.js`), plots the visitor as a second pin, calculates
the straight-line distance (`src/utils/geo.js`), and a "Get Directions" link
opens Google Maps with turn-by-turn directions from the visitor's real
location to the restaurant. It degrades gracefully if location access is
denied or unsupported.

> Geolocation requires HTTPS (or localhost) in the browser — this works out
> of the box with `npm run dev` and any standard production HTTPS deploy.

### Images

Hero/section imagery currently points to royalty-free Unsplash URLs as
placeholders — swap the `src` values in `src/data/*.js` and the relevant
components for your own photography before launch.
