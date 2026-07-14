import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBanner } from "@/components/page-hero";
import { useState } from "react";
import { MapPin, Calendar, DollarSign, ArrowRight } from "lucide-react";
import commercialImg from "@/assets/project-commercial.jpg";
import residentialImg from "@/assets/project-residential.jpg";
import industrialImg from "@/assets/project-industrial.jpg";
import infrastructureImg from "@/assets/project-infrastructure.jpg";
import healthcareImg from "@/assets/project-healthcare.jpg";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Meridian Construction Group" },
      { name: "description", content: "A selected portfolio of commercial, residential, industrial, infrastructure, healthcare, education and government projects delivered across Germany." },
      { property: "og:title", content: "Projects — Meridian Construction Group" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

const filters = ["All", "Commercial", "Residential", "Industrial", "Infrastructure", "Healthcare"] as const;

type Filter = (typeof filters)[number];

const projects: {
  img: string; title: string; category: Exclude<Filter, "All">; loc: string; year: string; budget: string; status: "Completed" | "Ongoing" | "Upcoming";
}[] = [
  { img: commercialImg, title: "Marina Business Tower", category: "Commercial", loc: "Dubai, UAE", year: "2024", budget: "$420M", status: "Completed" },
  { img: residentialImg, title: "Vertika Skyline Residences", category: "Residential", loc: "Riyadh, KSA", year: "2024", budget: "$310M", status: "Completed" },
  { img: infrastructureImg, title: "Al-Khobar Coastal Bridge", category: "Infrastructure", loc: "Eastern Province, KSA", year: "2023", budget: "$680M", status: "Completed" },
  { img: industrialImg, title: "Delta Petrochemical Plant", category: "Industrial", loc: "Doha, Qatar", year: "2023", budget: "$1.2B", status: "Completed" },
  { img: healthcareImg, title: "New Cairo Medical City", category: "Healthcare", loc: "Cairo, Egypt", year: "2022", budget: "$540M", status: "Completed" },
  { img: commercialImg, title: "Downtown Financial Center", category: "Commercial", loc: "Dubai, UAE", year: "2025", budget: "$780M", status: "Ongoing" },
  { img: residentialImg, title: "Palm Ridge Villas", category: "Residential", loc: "Doha, Qatar", year: "2025", budget: "$220M", status: "Ongoing" },
  { img: infrastructureImg, title: "Nile Delta Water Network", category: "Infrastructure", loc: "Alexandria, Egypt", year: "2026", budget: "$450M", status: "Upcoming" },
  { img: industrialImg, title: "Jubail Logistics Hub", category: "Industrial", loc: "Jubail, KSA", year: "2026", budget: "$390M", status: "Upcoming" },
];

const statusColors: Record<string, string> = {
  Completed: "border-gold text-gold",
  Ongoing: "border-cream text-cream",
  Upcoming: "border-white/40 text-white/70",
};

function ProjectsPage() {
  const [active, setActive] = useState<Filter>("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={<>Landmarks that <span className="text-gold-gradient">define skylines.</span></>}
        description="A selection of projects delivered by Meridian across Germany and Central Europe — filtered by sector."
        crumbs={[{ label: "Projects" }]}
      />

      <section className="section-y bg-background">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 border-b border-border pb-4">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2.5 text-sm font-semibold tracking-wide rounded-sm border transition ${
                  active === f
                    ? "bg-charcoal text-gold border-charcoal"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-charcoal"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <article key={p.title} className="group rounded-sm overflow-hidden border border-border bg-background hover:shadow-xl transition-all">
                <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
                  <img src={p.img} alt={p.title} loading="lazy" width={1600} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className={`absolute top-4 left-4 text-[10px] tracking-[0.28em] uppercase px-3 py-1.5 border ${statusColors[p.status]} bg-charcoal/70 backdrop-blur`}>
                    {p.status}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-[10px] tracking-[0.28em] uppercase text-gold-deep font-semibold">{p.category}</span>
                  <h3 className="mt-2 font-display font-bold text-xl">{p.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-gold-deep" />{p.loc}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-gold-deep" />{p.year}</span>
                    <span className="flex items-center gap-1.5"><DollarSign className="h-3.5 w-3.5 text-gold-deep" />{p.budget}</span>
                  </div>
                  <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                    <button className="text-xs uppercase tracking-widest text-charcoal font-semibold flex items-center gap-2 hover:text-gold-deep transition">
                      Case Study <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
