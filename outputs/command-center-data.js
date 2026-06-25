window.TSC_COMMAND_CENTER_DATA = {
  scoringWeights: {
    businessImpact: 0.4,
    confidence: 0.2,
    recency: 0.15,
    crossToolMatches: 0.15,
    manualPriority: 0.1
  },

  toolRegistry: [
    {
      id: "customer-journey",
      name: "Customer Journey Analyzer",
      url: "https://customerjourney.cardboardmania.com",
      description: "Recent analyses, pain points, abandonment insights, and friction summaries.",
      ctaLabel: "Launch Tool",
      priority: 95,
      surfaces: ["recentAnalyses", "painPoints", "journeyOpportunities", "abandonmentInsights"]
    },
    {
      id: "retail-intelligence",
      name: "Retail Competitive Intelligence",
      url: "https://retailcomps.cardboardmania.com",
      description: "Competitor observations, feature gaps, pricing signals, and strategic recommendations.",
      ctaLabel: "Launch Tool",
      priority: 90,
      surfaces: ["competitorAnalyses", "pricingObservations", "featureGaps", "recommendations"]
    },
    {
      id: "cnc-sandbox",
      name: "CNC Sandbox",
      url: "https://cncsandbox.cardboardmania.com",
      description: "Saved analyses, validation results, experiment findings, and merchandising tests.",
      ctaLabel: "Launch Tool",
      priority: 82,
      surfaces: ["recentExperiments", "savedAnalyses", "validationResults", "sandboxInsights"]
    }
  ],

  opportunities: [
    {
      id: "checkout-navigation",
      title: "Improve Checkout Navigation",
      source: "Customer Journey Analyzer",
      sourceToolId: "customer-journey",
      evidence: "Retail Competitive Intelligence",
      evidenceToolIds: ["retail-intelligence", "cnc-sandbox"],
      impact: "High",
      confidenceLabel: "High",
      context: "Checkout friction is appearing in customer path analysis and is reinforced by competitor experiences that reduce decision steps at the end of the buying journey.",
      recommendation: "Review customer journey findings and compare with competitor checkout experiences.",
      related: "Checkout abandonment, one-click checkout, prototype checkout improvement",
      actions: ["Review journey findings", "Compare competitor checkout", "Create checkout improvement brief"],
      inputs: { businessImpact: 98, confidence: 93, recency: 92, crossToolMatches: 96, manualPriority: 88 },
      tags: ["checkout", "journey", "conversion"]
    },
    {
      id: "trailer-accessories",
      title: "Expand Trailer Accessories",
      source: "Retail Competitive Intelligence",
      sourceToolId: "retail-intelligence",
      evidence: "CNC Sandbox",
      evidenceToolIds: ["cnc-sandbox"],
      impact: "High",
      confidenceLabel: "High",
      context: "Competitor merchandising and sandbox pricing signals suggest accessory attach opportunities around trailer research and purchase intent.",
      recommendation: "Review sandbox pricing experiments before prioritization.",
      related: "Trailer accessory merchandising, pricing experiment, assortment expansion",
      actions: ["Open pricing experiment", "Validate attach-rate hypothesis", "Draft merchandising test"],
      inputs: { businessImpact: 94, confidence: 88, recency: 90, crossToolMatches: 90, manualPriority: 91 },
      tags: ["trailer", "accessories", "pricing"]
    },
    {
      id: "value-messaging",
      title: "Strengthen Value Messaging",
      source: "Retail Competitive Intelligence",
      sourceToolId: "retail-intelligence",
      evidence: "Customer Journey Analyzer",
      evidenceToolIds: ["customer-journey"],
      impact: "Medium",
      confidenceLabel: "Medium",
      context: "Competitor pricing observations and journey summaries both point to moments where customers may need clearer reasons to choose TSC.",
      recommendation: "Pair competitor price observations with customer friction summaries to clarify value messages.",
      related: "Pricing observations, customer hesitation, value proposition clarity",
      actions: ["Open competitor analysis", "Review hesitation points", "Test value copy in sandbox"],
      inputs: { businessImpact: 86, confidence: 78, recency: 82, crossToolMatches: 84, manualPriority: 80 },
      tags: ["pricing", "messaging", "competitors"]
    }
  ],

  recentActivity: [
    { time: "8:40 AM", description: "Customer Journey Analyzer identified checkout navigation friction." },
    { time: "8:22 AM", description: "Retail Competitive Intelligence added competitor one-click checkout evidence." },
    { time: "Yesterday", description: "CNC Sandbox saved trailer accessory pricing experiment results." },
    { time: "Monday", description: "Value messaging theme appeared in two connected tools." }
  ],

  dadJokes: [
    "I told my backlog a joke. Now it's full of stories.",
    "Why did the product manager bring a ladder to the meeting? The team wanted to take things to the next level.",
    "My roadmap asked for directions, so I gave it a milestone."
  ]
};
