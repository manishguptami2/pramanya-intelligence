import Link from "next/link";
import { SITE } from "@/lib/site";

const SECTIONS = [
  {
    id: "overview",
    eyebrow: "Overview",
    title: "Why Pramanya Intelligence exists.",
    body: `Pramanya Intelligence LLP was founded by Pradeep Niranjan and Manish Gupta — ex-Google and ex-Microsoft leaders with 20+ years building cloud platforms, security, and enterprise SaaS. They started the company to solve the enterprise AI paradox: organizations rush to adopt generative AI, yet unmonitored prompts, unbounded spend, and fragmented provider keys erase ROI and create security risk. Through llmPolicyHub, Pramanya builds the AI gateway and control plane that makes enterprise AI economically predictable, policy-compliant, and vendor-portable.`,
  },
  {
    id: "india",
    eyebrow: "From India for the world",
    title: "Engineered in Bengaluru. Built for global enterprises.",
    body: `Based in Bengaluru, Pramanya Intelligence designs llmPolicyHub as a product for the world — not a regional experiment. The control plane is meant for enterprises that need one intercept for people, agents, and apps across providers, with governance enforced at the perimeter wherever they operate.`,
  },
  {
    id: "ai",
    eyebrow: "Artificial intelligence",
    title: "Adopt AI without losing the operating model.",
    body: `Enterprise AI traffic is scattered across chats, agents, and apps — often with hardcoded keys and no shared view of spend or violations. llmPolicyHub sits between that usage and the models behind it, so teams can run vendor-neutral LLM access, value-aligned routing, and token budgets from a single control plane instead of rewriting integrations every time the model changes.`,
  },
  {
    id: "governance",
    eyebrow: "Governance for AI",
    title: "Policy before the model — not after the invoice.",
    body: `Governance is the core of llmPolicyHub: multi-tier policy and compliance, auditability, observability and evaluations, and agent guardrails. Prompts and completions can be allowed, blocked, redacted, or overridden at the boundary, with identity and permissions tied to your enterprise IAM — so AI programs stay controlled as they scale.`,
  },
  {
    id: "data",
    eyebrow: "Data protection",
    title: "Keep sensitive data inside the boundary.",
    body: `Unmonitored prompts can send PII, secrets, and regulated content to third-party models. llmPolicyHub applies inline data protection at the control plane — masking and policy checks before tokens leave your perimeter — and streams audit telemetry to your SIEM or lake for SOC 2, HIPAA, and EU AI Act readiness.`,
  },
  {
    id: "innovators",
    eyebrow: "Enabling Innovators",
    title: "Lower the cost. Lower the risk. Raise who can build.",
    body: `We enable students and developers to innovate with AI by lowering AI costs and mitigating the risks usually associated with AI — runaway spend, unsafe prompts, and ungoverned access — so more builders can experiment and ship with confidence.`,
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 85% 15%, var(--hero-glow), transparent 60%)," +
              "linear-gradient(160deg, #e7efe9 0%, var(--paper) 42%, #efe8dc 100%)",
          }}
        />
        <div
          className="hero-orbit pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full border border-accent/25 sm:h-80 sm:w-80"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-10 top-28 h-40 w-40 rounded-full bg-warm/15 blur-2xl sm:right-24"
          aria-hidden
        />

        <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-7 sm:py-24">
          <p className="eyebrow animate-rise">Pramanya Intelligence LLP</p>
          <h1
            className="display animate-rise mt-5 max-w-3xl text-4xl text-ink sm:text-6xl"
            style={{ ["--rise-delay" as string]: "80ms" }}
          >
            {SITE.name}
          </h1>
          <p
            className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl"
            style={{ ["--rise-delay" as string]: "140ms" }}
          >
            {SITE.tagline} We build{" "}
            <a
              href={SITE.productUrl}
              className="font-semibold text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE.productName}
            </a>
            , the enterprise AI gateway and control plane for governed LLM
            access.
          </p>
          <div
            className="animate-rise mt-10 flex flex-wrap gap-3"
            style={{ ["--rise-delay" as string]: "200ms" }}
          >
            <Link
              href="/products"
              className="inline-flex items-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
            >
              View products
            </Link>
          </div>
        </div>
      </section>

      {SECTIONS.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`border-b border-line ${
            index % 2 === 0 ? "bg-surface" : "bg-paper"
          }`}
        >
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-7 sm:py-16">
            <p className="eyebrow">{section.eyebrow}</p>
            <h2 className="display mt-3 max-w-3xl text-3xl text-ink sm:text-4xl">
              {section.title}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              {section.body}
            </p>
          </div>
        </section>
      ))}
    </>
  );
}
