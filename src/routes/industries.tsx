import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBanner } from "@/components/page-hero";
import { Building, Landmark, Hotel, ShoppingBag, GraduationCap, Stethoscope, Zap, Fuel } from "lucide-react";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industries — Meridian Construction Group" },
      { name: "description", content: "Sectors we serve: government, hospitality, retail, education, healthcare, energy, oil & gas, and commercial real estate." },
      { property: "og:title", content: "Industries — Meridian Construction Group" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
});

const industries = [
  { Icon: Landmark, name: "Government & Civic", desc: "Ministries, courthouses, public infrastructure and civic centers delivered under strict compliance frameworks." },
  { Icon: Building, name: "Commercial Real Estate", desc: "Grade-A office towers and mixed-use developments for institutional investors." },
  { Icon: Hotel, name: "Hospitality", desc: "Five-star hotels, resorts and branded residences built to international operator standards." },
  { Icon: ShoppingBag, name: "Retail & F&B", desc: "Malls, flagship stores and F&B build-outs from shell to soft-opening." },
  { Icon: GraduationCap, name: "Education", desc: "Universities, K-12 campuses and specialized research facilities." },
  { Icon: Stethoscope, name: "Healthcare", desc: "Hospitals, medical cities and specialty clinics with strict clean-room and MEP standards." },
  { Icon: Zap, name: "Energy & Utilities", desc: "Power generation, transmission substations and desalination plants." },
  { Icon: Fuel, name: "Oil, Gas & Petrochemical", desc: "Processing plants, storage terminals and pipeline networks for national energy players." },
];

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title={<>Deep expertise across <span className="text-gold-gradient">eight sectors.</span></>}
        description="Every industry has its own regulatory, safety and delivery language. Meridian teams are specialized — never generalists."
        crumbs={[{ label: "Industries" }]}
      />

      <section className="section-y bg-background">
        <div className="container-x grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4 border border-border rounded-sm overflow-hidden">
          {industries.map((i) => (
            <div key={i.name} className="group relative bg-background p-8 hover:bg-charcoal hover:text-white transition-colors">
              <i.Icon className="h-10 w-10 text-gold-deep group-hover:text-gold transition" strokeWidth={1.3} />
              <h3 className="mt-6 font-display font-bold text-xl leading-tight">{i.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-white/70 transition">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
