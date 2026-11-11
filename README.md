# Dotnot website

The dotnot.solutions site: Home, Growth Audit, Implementation and Sustain.
Design source: the Dotnot Figma file (Home — v3.1 and the "v3 — Other pages" section).

Built with Next.js (App Router), TypeScript and Tailwind CSS. Every page is static.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

## Where things live

| What | Where |
| --- | --- |
| Colours, font, shared utilities | `src/app/globals.css` (tokens match the "Dotnot v3 / Color" variables in Figma) |
| WhatsApp link, phone numbers, email, address, nav | `src/lib/site.ts` |
| Home page sections | `src/components/home/` |
| Growth Audit, Implementation, Sustain | `src/app/<page>/page.tsx` |
| Shared parts (nav, footer, buttons, phone mock) | `src/components/ui/` |
| Font (Manrope, self-hosted) | `src/fonts/` |

## Common edits

- **Requirement link:** every "Share your requirement" button uses `requirementLink()` in `src/lib/site.ts`. It points to the India WhatsApp number for now. Swap in the requirement-agent link there.
- **Client logos:** put the files in `public/clients/` and add `logo: "/clients/<file>"` to the client in `src/components/home/Clientele.tsx`.
- **Team photos:** put the files in `public/team/` and add `photo: "/team/<file>"` in `src/components/home/Team.tsx`.
- **Numbers and copy:** each section keeps its text in a small array at the top of its file.
