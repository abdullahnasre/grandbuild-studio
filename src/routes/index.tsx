import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Factory, Home, Route as RouteIcon, HardHat, Compass, ShieldCheck, Award, Users, TrendingUp, Quote, Star } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import residentialImg from "@/assets/project-residential.jpg";
import modernHouseImg from "@/assets/project-house-modern.jpg";
import fachwerkImg from "@/assets/project-fachwerk.jpg";
import industrialImg from "@/assets/project-industrial.jpg";
import infrastructureImg from "@/assets/project-infrastructure.jpg";
import healthcareImg from "@/assets/project-healthcare.jpg";
import { CtaBanner } from "@/components/page-hero";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Meridian Construction Group — Building the Future with Precision" },
      { property: "og:image", content: "/og-home.jpg" },
    ],
  }),
});

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "400+", label: "Completed Projects" },
  { value: "180+", label: "Engineers on Staff" },
  { value: "97%", label: "Client Satisfaction" },
];

const services = [
  { icon: Building2, title: "Commercial Construction", desc: "Office towers, retail complexes and mixed-use developments delivered to spec." },
  { icon: Home, title: "Residential Construction", desc: "Luxury towers, gated communities and premium villa compounds." },
  { icon: Factory, title: "Industrial Facilities", desc: "Warehouses, manufacturing plants and processing facilities." },
  { icon: RouteIcon, title: "Infrastructure", desc: "Roads, bridges, tunnels and utility networks at national scale." },
  { icon: HardHat, title: "Interior Fit-out", desc: "Turnkey interiors for corporate, hospitality and retail spaces." },
  { icon: Compass, title: "Engineering Consultancy", desc: "MEP, structural and project-management advisory services." },
];

const projects = [
  { img: commercialImg, tag: "Commercial", title: "Isar Business Tower", loc: "Munich, Germany", year: "2024" },
  { img: residentialImg, tag: "Residential", title: "Altstadt Heritage Residences", loc: "Stuttgart, Germany", year: "2024" },
  { img: infrastructureImg, tag: "Infrastructure", title: "Rhein-Main Motorway Bridge", loc: "Frankfurt, Germany", year: "2023" },
  { img: modernHouseImg, tag: "Residential", title: "Feldkirchen Family Estates", loc: "Munich, Germany", year: "2023" },
  { img: healthcareImg, tag: "Healthcare", title: "Berlin Charité Medical Wing", loc: "Berlin, Germany", year: "2022" },
  { img: fachwerkImg, tag: "Heritage", title: "Altstadt Fachwerk Restoration", loc: "Nuremberg, Germany", year: "2022" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100dvh] flex items-end text-white overflow-hidden">
        <img src={heroImg} alt="" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/50 to-charcoal" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-transparent" />

        <div className="container-x relative pb-24 md:pb-32 pt-40">
          <div className="max-w-4xl">
            <span className="eyebrow !text-gold">Meridian Construction Group</span>
            <h1 className="mt-6 font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight">
              Building the Future
              <br />
              with <span className="text-gold-gradient">Precision</span> & Excellence
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed">
              Delivering innovative construction solutions for commercial, industrial, residential and infrastructure projects across Germany and Central Europe.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">Get a Free Quote <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/projects" className="btn-outline-gold">View Projects</Link>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-charcoal/70 backdrop-blur">
          <div className="container-x grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`py-6 md:py-8 ${i > 0 ? "md:border-l border-white/10" : ""} ${i % 2 !== 0 ? "border-l border-white/10 md:border-l" : ""}`}>
                <div className="font-display font-black text-3xl md:text-5xl text-gold">{s.value}</div>
                <div className="mt-1 text-xs md:text-sm uppercase tracking-widest text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y bg-background">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <span className="eyebrow">What we do</span>
              <h2 className="mt-5 font-display font-black text-4xl md:text-6xl max-w-2xl leading-[1.05]">
                Full-spectrum construction, <span className="text-gold-gradient">from ground-break to handover.</span>
              </h2>
            </div>
            <Link to="/services" className="btn-outline-gold !text-charcoal !border-charcoal hover:!bg-charcoal hover:!text-gold">
              All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 rounded-sm overflow-hidden border border-border">
            {services.map((s) => (
              <div key={s.title} className="group bg-background p-8 md:p-10 transition-colors hover:bg-charcoal hover:text-white">
                <s.icon className="h-10 w-10 text-gold-deep group-hover:text-gold transition" strokeWidth={1.4} />
                <h3 className="mt-6 font-display font-bold text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-white/70 transition">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-gold-deep group-hover:text-gold transition">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section-y bg-secondary">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Selected work</span>
            <h2 className="mt-5 font-display font-black text-4xl md:text-6xl leading-[1.05]">
              Landmarks we are <span className="text-gold-gradient">proud to sign.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Link to="/projects" key={p.title} className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-charcoal">
                <img src={p.img} alt={p.title} loading="lazy" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 text-white">
                  <span className="inline-block text-[10px] tracking-[0.28em] uppercase px-2 py-1 border border-gold/60 text-gold">{p.tag}</span>
                  <h3 className="mt-4 font-display font-bold text-2xl leading-tight">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{p.loc} · {p.year}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link to="/projects" className="btn-outline-gold !text-charcoal !border-charcoal hover:!bg-charcoal hover:!text-gold">
              Explore Full Portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-y bg-charcoal text-cream relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "var(--gradient-gold)" }} />
        <div className="container-x relative">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow !text-gold">Why Meridian</span>
              <h2 className="mt-5 font-display font-black text-4xl md:text-6xl text-white leading-[1.05]">
                A quarter century of <span className="text-gold-gradient">delivering the impossible.</span>
              </h2>
              <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
                From vision to ribbon-cutting, our integrated teams control every phase — engineering, procurement, safety, execution — so nothing slips between disciplines.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/about" className="btn-gold">About Meridian <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/careers" className="btn-outline-gold">Join Our Team</Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { Icon: ShieldCheck, title: "Zero-harm safety culture", desc: "0.18 LTIFR across 2024 — top-quartile globally." },
                { Icon: Award, title: "ISO 9001 · 14001 · 45001", desc: "Fully certified quality, environment and safety systems." },
                { Icon: Users, title: "180+ senior engineers", desc: "In-house expertise across every trade and discipline." },
                { Icon: TrendingUp, title: "97% on-time delivery", desc: "Contractual milestones met on the projects we lead." },
              ].map((f) => (
                <div key={f.title} className="p-6 rounded-sm border border-white/10 bg-white/[0.03] hover:border-gold/50 transition">
                  <f.Icon className="h-8 w-8 text-gold" strokeWidth={1.4} />
                  <h3 className="mt-4 font-display font-bold text-lg text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-y bg-background">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Client trust</span>
            <h2 className="mt-5 font-display font-black text-4xl md:text-6xl leading-[1.05]">What clients say.</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { name: "Klaus Weber", role: "Chairman, Weber Immobilien AG", quote: "Meridian delivered our flagship tower six weeks ahead of schedule. Their integrated engineering approach saved us millions." },
              { name: "Anja Schneider", role: "CEO, Schneider Development GmbH", quote: "In fifteen years of developing across Germany, I have not worked with a more disciplined contractor. They own every detail." },
              { name: "Markus Hoffmann", role: "Director, BASF Ventures", quote: "Their safety record and QA/QC on our chemical facility set a new bar for our supply chain." },
            ].map((t) => (
              <figure key={t.name} className="relative p-8 md:p-10 border border-border rounded-sm bg-secondary/30">
                <Quote className="h-8 w-8 text-gold-deep" strokeWidth={1.4} />
                <div className="mt-4 flex text-gold">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <blockquote className="mt-5 text-base leading-relaxed text-foreground/85">"{t.quote}"</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-display font-bold">{t.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-16 bg-secondary border-y border-border">
        <div className="container-x">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">Trusted by leading developers, governments and investors</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {["SIEMENS", "BASF", "DEUTSCHE BAHN", "ALLIANZ", "BMW GROUP", "VONOVIA"].map((p) => (
              <div key={p} className="text-center font-display font-bold text-sm tracking-widest text-muted-foreground/70 hover:text-charcoal transition">{p}</div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
