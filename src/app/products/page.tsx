import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description: `A summary of ${SITE.productName}, the enterprise AI gateway and control plane from ${SITE.name}.`,
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-7 sm:py-20">
      <p className="eyebrow">Products</p>
      <h1 className="display mt-3 max-w-3xl text-4xl text-ink sm:text-5xl">
        {SITE.productName}
      </h1>
      <p className="mt-3 text-sm font-medium text-warm">
        Enterprise AI Gateway &amp; Control Plane
      </p>

      <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
        <p>
          {SITE.productName} is Pramanya Intelligence&apos;s flagship product —
          a unified control plane that sits between enterprise AI usage and the
          models behind it. Organizations use it to govern how people, agents,
          and apps reach LLMs without hardcoding providers into every
          integration.
        </p>
        <p>
          In short, {SITE.productName} helps enterprises run AI with vendor
          neutrality, predictable cost, policy at the perimeter, and an audit
          trail they can trust. It is built for teams that want to accelerate AI
          adoption without accepting shadow traffic, surprise spend, or
          unprotected data leaving the boundary.
        </p>
        <p>
          Explore the product experience, pricing, and savings tools on the{" "}
          {SITE.productName} site.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={SITE.productUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
        >
          Visit {SITE.productName}
        </a>
      </div>
    </div>
  );
}
