import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBanner } from "@/components/page-hero";
import { MapPin, Briefcase, ArrowRight, Heart, Rocket, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers — Meridian Construction Group" },
      { name: "description", content: "Join 3,200+ engineers, project managers and specialists building landmarks across Germany. Explore open roles at Meridian." },
      { property: "og:title", content: "Careers — Meridian Construction Group" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
});

const jobs = [
  { title: "Senior Project Manager — High-Rise", dept: "Project Management", loc: "Munich, Germany", type: "Full-time" },
  { title: "Structural Engineer (Lead)", dept: "Engineering", loc: "Stuttgart, Germany", type: "Full-time" },
  { title: "MEP Coordinator", dept: "Engineering", loc: "Frankfurt, Germany", type: "Full-time" },
  { title: "HSE Manager — Chemical", dept: "Safety", loc: "Ludwigshafen, Germany", type: "Full-time" },
  { title: "Quantity Surveyor", dept: "Commercial", loc: "Munich, Germany", type: "Full-time" },
  { title: "BIM Manager", dept: "Digital", loc: "Berlin, Germany", type: "Full-time" },
  { title: "Site Supervisor — Infrastructure", dept: "Operations", loc: "Berlin, Germany", type: "Full-time" },
  { title: "Graduate Engineering Program 2026", dept: "Early Careers", loc: "Multiple locations", type: "Graduate" },
];

const perks = [
  { Icon: Rocket, title: "Accelerated growth", desc: "Structured mobility across projects, disciplines and geographies." },
  { Icon: GraduationCap, title: "World-class training", desc: "$4,500 annual L&D budget plus in-house Meridian Academy." },
  { Icon: Heart, title: "People-first benefits", desc: "Family healthcare, relocation, housing allowance and 30 days leave." },
];

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Build the <span className="text-gold-gradient">skyline of your career.</span></>}
        description="3,200 people. 12 countries. One shared standard of craft. If you want to work on projects that outlast you, we should talk."
        crumbs={[{ label: "Careers" }]}
      />

      <section className="section-y bg-background">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title} className="p-8 border border-border rounded-sm bg-secondary/40">
              <p.Icon className="h-9 w-9 text-gold-deep" strokeWidth={1.4} />
              <h3 className="mt-6 font-display font-bold text-xl">{p.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-secondary">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="eyebrow">Open positions</span>
              <h2 className="mt-5 font-display font-black text-4xl md:text-5xl">Current openings.</h2>
            </div>
            <p className="text-muted-foreground max-w-md">Don't see the right role? Send us your CV — we hire year-round.</p>
          </div>

          <div className="mt-12 border-t border-border">
            {jobs.map((j) => (
              <div key={j.title} className="group grid grid-cols-[1fr_auto] gap-4 items-center py-6 border-b border-border hover:pl-4 transition-all">
                <div>
                  <h3 className="font-display font-bold text-xl md:text-2xl group-hover:text-gold-deep transition">{j.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs uppercase tracking-widest text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5 text-gold-deep" />{j.dept}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-gold-deep" />{j.loc}</span>
                    <span>{j.type}</span>
                  </div>
                </div>
                <button className="btn-outline-gold !text-charcoal !border-charcoal hover:!bg-charcoal hover:!text-gold text-xs">
                  Apply <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
