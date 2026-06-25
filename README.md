# TSC Product Command Center

Static prototype for the TSC Product Command Center, focused on Feature 11: AI Product Briefing ("Today's Opportunities").

## Current Deliverable

- `outputs/tsc-product-command-center.html`
- `outputs/command-center-data.js`
- `docs/integration-architecture.md`

## Included So Far

- AI Product Briefing hero
- Ranked opportunity cards with modular scoring weights
- Opportunity detail drawer
- AI opportunity summary
- Opportunity trends
- Recommended next actions
- Opportunity connections flow
- Connected tool launch cards
- Personal notes prototype
- Recent activity timeline
- Empty state with workplace-safe dad joke
- Mock integration registry for future PM tools
- Modular sample data and configurable scoring weights

## Prototype Architecture

The static page reads dashboard data from `outputs/command-center-data.js`.

That file contains the current mock integration contract for connected tools, opportunities, recent activity, scoring weights, and dad jokes. See `docs/integration-architecture.md` for the planned path from static mock data to future API-backed integrations.
