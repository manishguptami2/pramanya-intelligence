import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-5 sm:px-7">
        <Link href="/" className="min-w-0">
          <span className="display block truncate text-[1.15rem] text-ink sm:text-xl">
            {SITE.name}
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-accent-soft/70 hover:text-ink sm:px-3"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <p>
          © {year} {SITE.legalName}. {SITE.domain}
        </p>
        <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-accent">
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            {SITE.productName}
          </a>
        </nav>
      </div>
    </footer>
  );
}
