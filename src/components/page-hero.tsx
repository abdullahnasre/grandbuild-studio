import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  crumbs?: { label: string; to?: string }[];
}) {
  return (
    <section className="relative bg-charcoal text-cream overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, var(--color-gold) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--color-gold-deep) 0, transparent 45%)",
      }} />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="container-x relative">
        {crumbs && (
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 mb-6">
            <Link to="/" className="hover:text-gold transition">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="h-3 w-3" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-gold transition">{c.label}</Link>
                ) : (
                  <span className="text-gold">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <span className="eyebrow text-gold">{eyebrow}</span>
        <h1 className="mt-5 font-display font-black text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-[1.05] text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="relative bg-charcoal text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-gold)" }} />
      <div className="absolute inset-0 bg-charcoal/80" />
      <div className="container-x relative py-20 grid gap-8 md:grid-cols-[1fr_auto] items-center">
        <div>
          <span className="eyebrow text-gold">Let's build together</span>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl text-white max-w-2xl">
            Have a project in mind? <span className="text-gold-gradient">Let's talk.</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-gold">
            Request a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/projects" className="btn-outline-gold">View Portfolio</Link>
        </div>
      </div>
    </section>
  );
}
