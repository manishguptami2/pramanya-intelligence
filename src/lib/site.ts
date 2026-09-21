export const SITE = {
  name: "Pramanya Intelligence",
  legalName: "Pramanya Intelligence LLP",
  domain: "pramanya-intelligence.com",
  tagline: "From India, for the world — governing enterprise AI.",
  productName: "llmPolicyHub",
  productUrl: "https://llmpolicyhub.com",
  llpId: "ADB-6838",
  address: "Purva Seasons, C V Raman Nagar, Bengaluru, 560093",
  phone: "9720392820",
  phoneHref: "tel:+919720392820",
  email: "pramanyaintelligence@gmail.com",
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOUNDERS = [
  {
    name: "Pradeep Niranjan",
    role: "Co-Founder",
    photo: "/pradeep.png",
    pedigree: "Ex-Google — Cloud Platform & Security",
    linkedin: "https://www.linkedin.com/in/pradeepniranjan/",
    bio: "Pradeep brings decades of experience building cloud platforms and enterprise security at Google scale. At Pramanya Intelligence, he focuses on the architecture of llmPolicyHub — the AI gateway and control plane that lets enterprises enforce policy, identity, and audit before prompts reach any model.",
  },
  {
    name: "Manish Gupta",
    role: "Co-Founder",
    photo: "/manish.png",
    pedigree: "Ex-Microsoft — Enterprise Services Platform & Product Management",
    linkedin: "https://www.linkedin.com/in/manish-gupta-95646b10/",
    bio: "Manish has spent his career shipping enterprise SaaS and platform products at Microsoft. At Pramanya Intelligence, he leads product direction for llmPolicyHub so AI economics, vendor neutrality, and governance stay practical for real enterprise programs — not bolted on after the fact.",
  },
] as const;
