window.TSC_PORTAL_DATA = {
  sites: [
    {
      id: "retail-comps",
      name: "Competitive Analysis Dashboard",
      shortName: "Retail Comps",
      url: "https://retail-comps.vercel.app/",
      sourceLabel: "Competitive analysis",
      description: "Review competitor pricing, assortment gaps, and market opportunities.",
      ctaLabel: "Open Competitive Dashboard"
    },
    {
      id: "cnc-sandbox",
      name: "Sandbox Prototyping Tool",
      shortName: "CNC Prototype",
      url: "https://cn-c-prototyping-tool.vercel.app/",
      sourceLabel: "Sandbox prototyping",
      description: "Explore product experiments, prototypes, and validation ideas.",
      ctaLabel: "Open Sandbox Tool"
    },
    {
      id: "customer-journey",
      name: "Weekly KPI Journey Site",
      shortName: "PM Journey",
      url: "https://pm-customer-journey.vercel.app/",
      sourceLabel: "Weekly KPI data",
      description: "Check saved weekly KPI data and product journey signals.",
      ctaLabel: "Open KPI Journey Site"
    }
  ],

  topOpportunities: [
    {
      rank: 1,
      title: "Improve checkout friction visibility",
      source: "Weekly KPI Journey Site",
      sourceId: "customer-journey",
      impact: "High",
      summary: "Use the weekly KPI journey data to identify where conversion or drop-off signals need the fastest product attention."
    },
    {
      rank: 2,
      title: "Prioritize competitive pricing gaps",
      source: "Competitive Analysis Dashboard",
      sourceId: "retail-comps",
      impact: "High",
      summary: "Review competitor pricing and positioning to find the clearest near-term merchandising or value-message opportunity."
    },
    {
      rank: 3,
      title: "Prototype the next product test",
      source: "Sandbox Prototyping Tool",
      sourceId: "cnc-sandbox",
      impact: "Medium",
      summary: "Move the best opportunity into a sandbox experiment so the idea can be shaped before roadmap prioritization."
    }
  ],

  dadJokes: [
    "I told my backlog a joke. Now it's full of stories.",
    "Why did the product manager bring a ladder to the meeting? The team wanted to take things to the next level.",
    "My roadmap asked for directions, so I gave it a milestone.",
    "The sprint retrospective was so productive, even the action items took notes."
  ]
};
