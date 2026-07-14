import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, CtaBanner } from "@/components/page-hero";
import { Building2, Home, Factory, Route as RouteIcon, HardHat, Wrench, Compass, ClipboardList, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Meridian Construction Group" },
      { name: "description", content: "Commercial, industrial, residential and infrastructure construction, plus interior fit-out, renovation, project management and engineering consultancy." },
      { property: "og:title", content: "Services — Meridian Construction Group" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  { Icon: Building2, title: "Commercial Construction", desc: "Office towers, retail complexes, mixed-use developments. Design-build and general contracting delivered on time, on budget.", features: ["High-rise & podium construction", "MEP coordination", "LEED-ready delivery"] },
  { Icon: Home, title: "Residential Construction", desc: "Luxury towers, gated communities and premium villa compounds with hospitality-grade finishes.", features: ["Master-planned communities", "Bespoke villa programs", "Interior handover ready"] },
  { Icon: Factory, title: "Industrial Construction", desc: "Warehouses, manufacturing plants, cold-storage and processing facilities built to operational spec.", features: ["Heavy structural steel", "Utility & process integration", "Fast-track scheduling"] },
  { Icon: RouteIcon, title: "Infrastructure", desc: "Highways, bridges, tunnels, water and utility networks at national scale.", features: ["Design-build EPC", "PPP delivery models", "Traffic-management integration"] },
  { Icon: HardHat, title: "Interior Fit-out", desc: "Turnkey interiors for corporate HQs, five-star hospitality and flagship retail.", features: ["Cat A & Cat B fit-out", "Bespoke joinery", "Post-handover snagging"] },
  { Icon: Wrench, title: "Renovation & Retrofit", desc: "Restoration of heritage assets, seismic upgrades and building performance retrofits.", features: ["Occupied-building works", "Facade retrofits", "MEP modernization"] },
  { Icon: ClipboardList, title: "Project Management", desc: "Independent PM services — cost, schedule, quality and risk under a single accountable partner.", features: ["Owner's representation", "PMO setup", "Risk & claims advisory"] },
  { Icon: Compass, title: "Engineering Consultancy", desc: "Structural, MEP and civil engineering advisory from concept through commissioning.", features: ["Value engineering", "Sustainability consulting", "Peer review"] },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title={<>Everything we build, <span className="text-gold-gradient">under one roof.</span></>}
        description="Eight integrated service lines. One accountable team. From feasibility studies to ribbon-cuttings, Meridian delivers the full construction lifecycle."
        crumbs={[{ label: "Services" }]}
      />

      <section className="section-y bg-background">
        <div className="container-x grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="group p-8 md:p-10 border border-border rounded-sm bg-background hover:border-gold hover:shadow-lg transition-all">
              <div className="flex items-start gap-5">
                <div className="grid place-items-center h-14 w-14 rounded-sm bg-charcoal group-hover:bg-gold transition">
                  <s.Icon className="h-7 w-7 text-gold group-hover:text-charcoal transition" strokeWidth={1.4} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-black text-2xl">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-gold-deep shrink-0" strokeWidth={2.5} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-secondary">
        <div className="container-x">
          <span className="eyebrow">Our process</span>
          <h2 className="mt-5 font-display font-black text-4xl md:text-6xl max-w-3xl leading-[1.05]">Six phases. <span className="text-gold-gradient">One accountable partner.</span></h2>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { n: "01", t: "Discovery & Feasibility", d: "Site studies, stakeholder mapping, business-case validation." },
              { n: "02", t: "Design & Engineering", d: "Concept-to-IFC drawings, value engineering, permitting." },
              { n: "03", t: "Procurement", d: "Long-lead planning, vendor qualification, supply-chain lock." },
              { n: "04", t: "Construction", d: "Integrated site delivery under HSE and QA/QC governance." },
              { n: "05", t: "Commissioning", d: "Testing, snagging, regulatory sign-off, operations training." },
              { n: "06", t: "Aftercare", d: "Defect liability, warranty coordination, planned maintenance." },
            ].map((p) => (
              <div key={p.n} className="p-8 border border-border rounded-sm bg-background">
                <div className="font-display font-black text-6xl text-gold-gradient leading-none">{p.n}</div>
                <h3 className="mt-6 font-display font-bold text-xl">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <Link to="/contact" className="btn-gold">Discuss Your Project <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
