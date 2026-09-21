import type { Metadata } from "next";
import Image from "next/image";
import { FOUNDERS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.legalName} — founders, LLP details, and how to reach us.`,
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-7 sm:py-20">
      <p className="eyebrow">Contact</p>
      <h1 className="display mt-3 max-w-3xl text-4xl text-ink sm:text-5xl">
        Leadership &amp; company details
      </h1>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2">
        {FOUNDERS.map((founder) => (
          <li
            key={founder.name}
            className="rounded-2xl border border-line bg-surface p-6 shadow-[0_10px_30px_rgba(20,32,28,0.04)]"
          >
            <div className="relative h-28 w-28 overflow-hidden rounded-xl border border-line bg-accent-soft">
              <Image
                src={founder.photo}
                alt={founder.name}
                fill
                sizes="112px"
                className="object-cover object-top"
                unoptimized
              />
            </div>
            <p className="eyebrow mt-5">{founder.role}</p>
            <div className="mt-1.5 flex items-center gap-2">
              <h2 className="text-xl font-semibold tracking-tight text-ink">
                {founder.name}
              </h2>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft transition-colors hover:text-accent"
                aria-label={`${founder.name} on LinkedIn`}
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-2 text-sm font-medium text-warm">
              {founder.pedigree}
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
              {founder.bio}
            </p>
          </li>
        ))}
      </ul>

      <section className="mt-12 rounded-2xl border border-line bg-paper p-6 sm:p-8">
        <h2 className="display text-2xl text-ink sm:text-3xl">
          {SITE.legalName}
        </h2>
        <dl className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <dt className="eyebrow">LLP Identification Number</dt>
            <dd className="mt-2 text-base font-medium text-ink">{SITE.llpId}</dd>
          </div>
          <div>
            <dt className="eyebrow">Address</dt>
            <dd className="mt-2 text-base font-medium text-ink">
              {SITE.address}
            </dd>
          </div>
          <div>
            <dt className="eyebrow">Phone</dt>
            <dd className="mt-2 text-base font-medium text-ink">
              <a href={SITE.phoneHref} className="hover:text-accent">
                {SITE.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow">Email</dt>
            <dd className="mt-2 text-base font-medium text-ink">
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-accent"
              >
                {SITE.email}
              </a>
            </dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
