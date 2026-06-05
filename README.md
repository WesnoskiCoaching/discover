# Wesnoski Coaching — Discover Dashboard

Single-page sales console for Aubrey to use during live sales calls. Hosted at `discover.wesnoskicoaching.com`.

## What is here

- `index.html` — the full dashboard (single self-contained file)
- `CNAME` — GitHub Pages custom domain config
- `README.md` — this file

## Two views, one URL

**Prospect view (default):** `https://discover.wesnoskicoaching.com`
What the lead sees. Deck content, Meet Farren, FAQ. No closing tools visible.

**Setter view:** `https://discover.wesnoskicoaching.com/?setter=1`
Same URL with `?setter=1` appended. Adds the closing playbook section (Stripe reminders, DocuSign template link, Farren's phone, welcome text Aubrey copies). Aubrey bookmarks this URL. She shares the bare URL (no parameter) with prospects.

## How to deploy to GitHub Pages

1. Push this folder to your existing GitHub repo (the same one running `onboard.wesnoskicoaching.com` or a new one).
2. In the repo Settings → Pages, set the source branch to `main` (or wherever this folder lives) and the source directory to `/discover`.
3. Set the Custom domain to `discover.wesnoskicoaching.com` (the CNAME file already declares this).
4. In your DNS host (wherever you manage wesnoskicoaching.com DNS), add a CNAME record:
   - Name: `discover`
   - Value: `<your-username>.github.io`
   - TTL: default
5. Wait 5 to 30 minutes for DNS propagation. Test by visiting `https://discover.wesnoskicoaching.com`.

## Updates

- All content lives in `index.html`. Edit directly.
- Setter content is gated behind `body.setter-mode`. CSS class `setter-only` hides setter-only elements from prospects.
- FAQ is grouped by `data-faq` attribute. Add new questions inside the matching group.
- Tier prices are hard-coded in the Tiers section. Update there if pricing changes.
- Lab prices same. Update in the Labs section.

## Future enhancements

- Add a custom Open Graph image at the top of the head meta (1200x630).
- Add a favicon link.
- Track prospect engagement with a simple analytics snippet (Plausible, Fathom, or Google Analytics).
- Add a "Book a call" button that opens Calendly inline.
- 
