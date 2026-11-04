# Studio 54x

A multi-page website for a fictional photography studio in New York's Finger Lakes region. I designed and built it as a course project for the Cornell eCornell Web Design and Development certificate. It's a concept site, not a real business.

**Live:** [studio54x.site](https://studio54x.site) · **Portfolio:** [dylandwight.com](https://dylandwight.com)

## What I built

- Nine pages (Home, About, Services, Weddings, Events, Portraits, Featured, FAQ, Contact) that share one stylesheet and one script
- A mobile-first responsive layout using CSS Grid and Flexbox
- An accessible mobile menu: it updates `aria-expanded`, closes with Escape, and closes when the window widens to desktop
- Scroll-in reveals built on `IntersectionObserver`, with a fallback for older browsers and a `prefers-reduced-motion` setting
- A contact form with inline validation that opens the visitor's email app with the message filled in (there's no backend)
- Long-term caching for images and fonts, plus basic security headers (`vercel.json`), and a `sitemap.xml` and `robots.txt`

## Tech

HTML, CSS, vanilla JavaScript. No framework and no build step. Hosted on Vercel.

## Run it locally

```bash
git clone https://github.com/DylanDwight/Studio54x
cd Studio54x
npx serve .   # or just open index.html in a browser
```

## Structure

```
*.html            one file per page
styles/site.css   all styles
scripts/site.js   nav, sticky header, reveals, mobile action bar, contact form
images/, fonts/   assets
vercel.json       caching and security headers
```
