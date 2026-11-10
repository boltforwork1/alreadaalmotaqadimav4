# Project memory

## Product intent & audience

- Multi-service business/tourism website for "Trend Group" (rebranded from "Al Reyada Al Motaqadima" / "الريادة المتقدمة").
- Offers corporate services (business setup, company formation, PRO services, government approvals, visas) AND premium tourism services (luxury desert safari, city tours, tour bookings).
- Each tourist service page includes a consultation/callback request form for prospective customers.
- Audience: business owners/entrepreneurs and tourists seeking UAE services.
- Multi-language UI: English, Urdu, Arabic, Russian, and possibly others. Translation files are JSON in `src/locales/`.

## Brand personality & voice

- Polished, production-grade presentation; not generic templates.
- Rebranding in progress: old name → "Trend Group" (Urdu: "ٹرینڈ گروپ").
- Descriptions now integrate tourism services alongside corporate services.

## Visual design & UX direction

- Consultation form pattern: labeled fields + "Request Callback" button on each tourist service page; intentionally visual-only (no submit behavior).
- No UI changes during translation/rebranding work — only locale data files modified.

## Decisions, constraints & rationale

- Supabase connection removed; consultation form is design-only and non-functional by explicit choice.
- Removed unused Supabase client file and associated translation strings; project builds cleanly.
- `tourist_callback_requests` table left in database; user has not requested deletion.
- Rebranding applied to Urdu translation file (`ur.json`) only — name replaced in all occurrences (logo alt, footer tagline, descriptions, free-zone notes); four descriptions (hero, formation, about, contact) updated to mention tourism.
- Latin "Al Reyada Al Motaqadima" did not appear in the Urdu file.
- Stack: Vite 8 + React (JSX) + Tailwind CSS v4 (CSS-based `@theme` config) + Lucide React icons; `@/` alias maps to `src/`.

## Open questions & assumptions

- Should `tourist_callback_requests` database table be dropped? (Awaiting confirmation.)
- Should rebranding be applied to other locale files (en, ar, ru, etc.)? Only Urdu was requested so far.
- Old email address `info@alreyada-almotaqdima.ae` left unchanged — no new address provided yet.
- Assumption: form may be re-wired to a backend later; current state is a deliberate design-only milestone.