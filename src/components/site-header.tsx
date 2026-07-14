import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Mail, MapPin, Linkedin, Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/industries", label: "Industries" },
  { to: "/news", label: "News" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-background/95 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]" : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div
        className={`hidden lg:block transition-all duration-500 ${
          solid ? "bg-charcoal text-cream" : "bg-black/30 text-cream backdrop-blur-sm"
        }`}
      >
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-white/80">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              Dubai • Riyadh • Doha • Cairo
            </span>
            <a href="mailto:contact@meridian-build.com" className="flex items-center gap-2 text-white/80 hover:text-gold transition">
              <Mail className="h-3.5 w-3.5 text-gold" />
              contact@meridian-build.com
            </a>
          </div>
          <Link to="/contact" className="group flex items-center gap-2 font-semibold tracking-wider uppercase text-gold hover:text-gold-soft transition">
            Request a Consultation
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <div className={`container-x grid grid-cols-[auto_1fr_auto] items-center gap-6 transition-all duration-500 ${solid ? "h-18 py-3" : "h-22 py-5"}`}>
        <Link to="/" className="flex items-center gap-3 group">
          <span
            className={`grid place-items-center rounded-sm transition-all ${solid ? "h-10 w-10" : "h-12 w-12"} bg-charcoal`}
          >
            <span className="font-display font-black text-gold text-lg leading-none">M</span>
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className={`font-display font-bold tracking-tight ${solid ? "text-foreground" : "text-white"} ${solid ? "text-lg" : "text-xl"}`}>
              MERIDIAN
            </span>
            <span className={`text-[10px] tracking-[0.28em] uppercase ${solid ? "text-muted-foreground" : "text-gold"}`}>
              Construction Group
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center justify-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors relative ${
                solid ? "text-foreground/80 hover:text-foreground" : "text-white/85 hover:text-white"
              }`}
              activeProps={{
                className: `px-4 py-2 text-sm font-semibold tracking-wide relative ${solid ? "text-foreground" : "text-white"}`,
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-gold" />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <div className={`hidden xl:flex items-center gap-1 pr-2 mr-2 border-r ${solid ? "border-border" : "border-white/20"}`}>
            {[
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className={`grid place-items-center h-8 w-8 rounded-sm transition-colors ${
                  solid ? "text-muted-foreground hover:text-gold-deep hover:bg-muted" : "text-white/80 hover:text-gold"
                }`}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <Link to="/contact" className="hidden md:inline-flex btn-gold !py-2.5 !px-5 text-xs">
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            className={`lg:hidden grid place-items-center h-11 w-11 rounded-sm ${solid ? "text-foreground" : "text-white"}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-charcoal text-cream">
          <nav className="container-x py-6 flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-3 border-b border-white/10 text-base font-medium tracking-wide"
                activeProps={{ className: "py-3 border-b border-white/10 text-base font-semibold text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-gold mt-6 self-start">
              Request a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
