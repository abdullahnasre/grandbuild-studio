import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="container-x pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="grid place-items-center h-11 w-11 rounded-sm bg-gold">
                <span className="font-display font-black text-charcoal text-lg leading-none">M</span>
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display font-bold text-white text-lg">MERIDIAN</span>
                <span className="text-[10px] tracking-[0.28em] uppercase text-gold">Construction Group</span>
              </span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              Building landmarks across Germany and Central Europe since 2001. Precision engineering, uncompromising safety, delivered on time.
            </p>
            <div className="mt-6 flex gap-2">
              {[Linkedin, Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link" className="grid place-items-center h-10 w-10 rounded-sm border border-white/15 text-white/70 hover:border-gold hover:text-gold transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-sm tracking-widest uppercase mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/projects", label: "Projects" },
                { to: "/careers", label: "Careers" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/60 hover:text-gold transition">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-sm tracking-widest uppercase mb-5">Contact</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-gold mt-0.5" /> Sheikh Zayed Rd, Business Bay Tower 24, Dubai UAE</li>
              <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-gold mt-0.5" /> +971 4 555 0180</li>
              <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-gold mt-0.5" /> contact@meridian-bau.de</li>
              <li className="flex gap-3"><Clock className="h-4 w-4 shrink-0 text-gold mt-0.5" /> Mon–Fri · 08:00 – 18:00 CET</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-sm tracking-widest uppercase mb-5">Newsletter</h4>
            <p className="text-sm text-white/60 mb-4">Quarterly projects, insights and career openings — no spam.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="min-w-0 flex-1 bg-white/5 border border-white/15 rounded-sm px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold"
              />
              <button className="grid place-items-center h-11 w-11 bg-gold text-charcoal hover:bg-gold-soft transition rounded-sm" aria-label="Subscribe">
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Meridian Construction Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition">Terms of Service</a>
            <a href="#" className="hover:text-gold transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
