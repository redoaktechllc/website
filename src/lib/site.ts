export const site = {
  name: "Red Oak",
  legalName: "Red Oak LLC",
  domain: "redoakllc.tech",
  url: "https://redoakllc.tech",
  email: "redoakllc@proton.me",
  phoneDisplay: "(234) 237-8715",
  phoneHref: "tel:+12342378715",
  region: "Northeast Ohio",
  web3formsKey: "3c1c8805-9c09-4215-b9ce-2c5383b1d6e6",
} as const;

export const nav = [
  { label: "How it works", href: "/#how" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
  { label: "Insights", href: "/insights" },
] as const;

export const steps = [
  {
    n: "01",
    title: "Free preview",
    body: "Tell us about your business and we build a real, working preview of your site — usually within a day. No cost, no commitment.",
  },
  {
    n: "02",
    title: "Make it yours",
    body: "Like it? A 50% deposit and a quick sign-off start the work. We add your photos, wording and final touches over a round or two of revisions.",
  },
  {
    n: "03",
    title: "Go live",
    body: "You approve it, pay the balance, and we publish it on your own domain. You get a full copy of the site — proof it's yours.",
  },
  {
    n: "04",
    title: "We keep it running",
    body: "Your care plan covers hosting, security and small monthly updates. Text us a change; we reply within one business day.",
  },
] as const;

export const included = [
  { title: "Mobile-first design", body: "Most visitors are on a phone. Yours will look sharp there first." },
  { title: "Fast, secure hosting", body: "SSL included. Pages that load in a blink on any connection." },
  { title: "A contact form that works", body: "Messages land straight in your inbox, no setup on your end." },
  { title: "Google Business Profile link-up", body: "Plus the local SEO basics so neighbors can find you." },
  { title: "Clear calls to action", body: "Tap-to-call, directions and a quote request, front and center." },
  { title: "Built to last", body: "No bloated page builders. A site that still works in five years." },
] as const;

export const tiers = [
  {
    name: "Launch",
    featured: true,
    badge: "Most popular",
    note: "Where most local businesses start.",
    from: "from",
    amount: "$997",
    term: "one-time build + <strong>$79/mo</strong> care plan",
    features: [
      "One-page site with every section customers need",
      "2 rounds of revisions",
      "Contact form + Google Business Profile link-up",
      "Live about 5–7 days after your content",
    ],
    cta: "Start with a free preview",
  },
  {
    name: "Growth",
    featured: false,
    note: "Room to grow — more pages and service areas.",
    from: "from",
    amount: "$1,997",
    term: "one-time build + <strong>$99/mo</strong> care plan",
    features: [
      "Up to 5 pages (a page per main service, about, contact)",
      "3 rounds of revisions",
      "Service-area pages for local SEO",
      "Business email setup included",
    ],
    cta: "Start with a free preview",
  },
  {
    name: "Subscription",
    featured: false,
    note: "Low to start. 12-month minimum.",
    from: "from",
    amount: "$199",
    term: "to start + <strong>$129/mo</strong>",
    features: [
      "One-page site, 2 rounds of revisions",
      "Lowest upfront cost",
      "Red Oak hosts and owns the site while you subscribe",
      "Buy it outright later (about $500 after month 12)",
    ],
    cta: "Start with a free preview",
  },
] as const;

export const careIncluded = [
  "Fast, secure hosting with SSL",
  "Domain and DNS managed for you",
  "Up to 30 minutes of small edits each month",
  "Monthly uptime and broken-link checks",
  "Support by text or email, reply within one business day",
  "Quarterly health check with a few ideas",
] as const;

export const careSeparate = [
  "New pages or redesigns",
  "Logo design",
  "Copywriting from scratch",
  "Photography",
  "Advertising",
] as const;

export const posts = [
  {
    href: "/insights/why-your-business-needs-a-website",
    tag: "Getting started",
    title: "Why your business needs more than a Facebook page",
    blurb: "A social page helps, but a site you control does more. Here's the difference.",
  },
  {
    href: "/insights/what-the-free-preview-is",
    tag: "How we work",
    title: "What the free preview actually is",
    blurb: "A real, working version of your site before you spend a dollar. Here's how it works.",
  },
  {
    href: "/insights/what-a-care-plan-covers",
    tag: "Care plans",
    title: "What a $79/month care plan covers",
    blurb: "Hosting, security and small edits, explained in plain English.",
  },
] as const;
