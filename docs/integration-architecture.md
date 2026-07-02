# Hoop's Product Opportunity Hub Architecture

The current product direction is a lightweight portal, not a full combined dashboard.

The portal should stay focused on:

- Three clear launch CTAs.
- The top three opportunities from the connected sites.
- A daily workplace-safe joke.

## Current Data Contract

`outputs/command-center-data.js` exposes `window.TSC_PORTAL_DATA` with:

- `sites`: the three destination websites and display copy.
- `topOpportunities`: one highlighted opportunity from each site.
- `dadJokes`: curated jokes for the portal.

## Connected Sites

- Competitive Analysis Dashboard: `https://retail-comps.vercel.app/`
- Sandbox Prototyping Tool: `https://cn-c-prototyping-tool.vercel.app/`
- Weekly KPI Journey Site: `https://pm-customer-journey.vercel.app/`

## Portal vs Larger Site

Keeping this as a portal is easier right now because each sub-site already exists and can evolve independently.

A larger combined site becomes worth considering if:

- The same user authentication should work across all tools.
- Opportunities need to be stored in one shared database.
- The top opportunities should update automatically from live source data.
- Users need cross-tool search, notes, workflow status, or reporting.

Recommended path: keep this portal simple now, then add a small API layer later that pulls top opportunities from the three existing apps. Only merge the apps into one larger site after the data model and workflows are stable.
