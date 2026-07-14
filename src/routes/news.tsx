import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBanner } from "@/components/page-hero";
import { Calendar, ArrowRight } from "lucide-react";
import c1 from "@/assets/project-commercial.jpg";
import c2 from "@/assets/project-infrastructure.jpg";
import c3 from "@/assets/project-industrial.jpg";
import c4 from "@/assets/project-residential.jpg";

export const Route = createFileRoute("/news")({
  component: NewsPage,
  head: () => ({
    meta: [
      { title: "News & Insights — Meridian Construction Group" },
      { name: "description", content: "Announcements, technical insights and industry perspectives from Meridian's engineering and leadership teams." },
      { property: "og:title", content: "News & Insights — Meridian Construction Group" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
});

const posts = [
  { img: c1, cat: "Announcement", date: "March 14, 2026", title: "Meridian awarded €690M Frankfurt Skyline Financial Center", excerpt: "The 62-storey mixed-use tower will anchor Frankfurt's new financial quarter, targeting DGNB Platinum certification." },
  { img: c2, cat: "Engineering", date: "February 22, 2026", title: "Modular bridge construction: lessons from the Rhein-Main Motorway Bridge", excerpt: "How pre-cast segmental construction cut our critical-path schedule by 14 weeks on a 4.8km river crossing." },
  { img: c3, cat: "Safety", date: "January 30, 2026", title: "Zero-harm at Neckar Chemical: 4.2 million hours without a lost-time incident", excerpt: "A field report on the behavioral safety program that took our LTIFR to industry-leading levels." },
  { img: c4, cat: "Sustainability", date: "January 12, 2026", title: "Embodied carbon on Altstadt Heritage Residences: a case study", excerpt: "The material choices, mix designs and procurement decisions that shaved 22% off baseline embodied carbon." },
];

function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Insights"
        title={<>Announcements, insights, <span className="text-gold-gradient">field reports.</span></>}
        description="Regular perspectives from our engineering, safety and executive teams — plus the occasional ribbon-cutting."
        crumbs={[{ label: "News" }]}
      />

      <section className="section-y bg-background">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          {posts.map((p) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-charcoal">
                <img src={p.img} alt={p.title} loading="lazy" width={1600} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-4 left-4 text-[10px] tracking-[0.28em] uppercase px-3 py-1.5 bg-gold text-charcoal font-semibold">{p.cat}</span>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                <Calendar className="h-3.5 w-3.5 text-gold-deep" /> {p.date}
              </div>
              <h3 className="mt-3 font-display font-bold text-2xl md:text-3xl leading-tight group-hover:text-gold-deep transition">{p.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.excerpt}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal font-semibold">
                Read Article <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
