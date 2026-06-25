# Integration Architecture

This prototype uses a small client-side mock integration layer in `outputs/command-center-data.js`.

The intent is to make the static prototype behave like the future Product Command Center backend without introducing the full Next.js, API route, and database stack in this chunk.

## Current Data Contract

`window.TSC_COMMAND_CENTER_DATA` exposes:

- `scoringWeights`: configurable Opportunity Score weights.
- `toolRegistry`: connected Product Management applications.
- `opportunities`: normalized opportunity records from connected tools.
- `recentActivity`: timeline events surfaced on the dashboard.
- `dadJokes`: curated empty-state and refresh jokes.

## Tool Registry Shape

Each tool should provide:

- `id`
- `name`
- `url`
- `description`
- `ctaLabel`
- `priority`
- `surfaces`

The dashboard renders connected tool cards directly from this registry. Future tools can be added by appending a registry entry and mapping their opportunity output to the shared opportunity shape.

## Opportunity Shape

Each opportunity should provide:

- `id`
- `title`
- `source`
- `sourceToolId`
- `evidence`
- `evidenceToolIds`
- `impact`
- `confidenceLabel`
- `context`
- `recommendation`
- `related`
- `actions`
- `inputs`
- `tags`

`inputs` are scored using `scoringWeights`, keeping the Opportunity Score configurable without changing the render logic.

## Future Backend Path

When this moves into the full app:

- Replace `command-center-data.js` with API responses.
- Store tools, opportunities, notes, insights, and activity in the database.
- Keep the scoring function isolated so weights can be admin-configurable.
- Convert each Product Management tool into an adapter that outputs the normalized opportunity shape.

