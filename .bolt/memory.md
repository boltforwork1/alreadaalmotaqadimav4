# Project memory

## Product intent & audience

- Tourism/travel website featuring multiple individual tourist service pages.
- Each service page includes a consultation/callback request form aimed at prospective customers.
- Audience: tourists/visitors seeking travel services and callbacks.

## Brand personality & voice

- Inferred from prompt-level design requirements: polished, production-grade presentation rather than generic templates.

## Visual design & UX direction

- Consultation form pattern: labeled fields + a "Request Callback" button rendered on each tourist service page.
- Form is intentionally visual-only (no submit behavior, no network calls).
- Project supports multi-language UI via translation strings (removed Supabase-related strings during cleanup).

## Decisions, constraints & rationale

- Supabase connection removed; consultation form is now design-only and non-functional by explicit user choice.
- Removed the now-unused Supabase client file and associated translation strings.
- `tourist_callback_requests` table left in database to preserve any existing data; user has not requested deletion.
- Project builds cleanly after Supabase removal.
- Stack: Vite 8 + React (JSX) + Tailwind CSS v4 (CSS-based `@theme` config) + Lucide React icons; `@/` alias maps to `src/`.

## Open questions & assumptions

- Should the `tourist_callback_requests` database table be dropped? (Awaiting user confirmation.)
- Assumption: form may be re-wired to a backend later; current state is a deliberate design-only milestone.