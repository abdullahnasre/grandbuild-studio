import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBanner } from "@/components/page-hero";
import { Award, Target, Eye, Heart, Users } from "lucide-react";
import ceoImg from "@/assets/team-ceo.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Meridian Construction Group" },
      { name: "description", content: "Founded in 2001, Meridian Construction Group has built landmarks across Germany and Central Europe with precision engineering and integrity." },
      { property: "og:title", content: "About — Meridian Construction Group" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const values = [
  { Icon: Target, title: "Mission", desc: "Build enduring infrastructure that elevates communities and creates lasting value for clients, partners and generations." },
  { Icon: Eye, title: "Vision", desc: "To be the most trusted construction partner across Germany — the standard against which the industry measures itself." },
  { Icon: Heart, title: "Core Values", desc: "Integrity. Safety. Precision. Accountability. Craft. These five principles govern every decision we make." },
];

const timeline = [
  { year: "2001", event: "Founded in Munich as a residential contractor" },
  { year: "2007", event: "Expanded into commercial and infrastructure" },
  { year: "2012", event: "First mega-project: Al-Bahar Financial District" },
  { year: "2016", event: "Stuttgart and Frankfurt offices open" },
  { year: "2020", event: "ISO 45001 certification; zero-harm program" },
  { year: "2024", event: "400th project delivered; 3,200-strong workforce" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={<>Twenty-five years of <span className="text-gold-gradient">building trust.</span></>}
        description="Meridian Construction Group was founded in 2001 in Munich with a single conviction: every landmark starts with a promise kept. Today, we deliver commercial, industrial, residential and infrastructure projects across Germany and Central Europe."
        crumbs={[{ label: "About" }]}
      />

      <section className="section-y bg-background">
        <div className="container-x grid gap-16 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="relative pl-6 border-l-2 border-gold">
              <v.Icon className="h-10 w-10 text-gold-deep" strokeWidth={1.4} />
              <h3 className="mt-6 font-display font-black text-3xl">{v.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-charcoal text-cream">
        <div className="container-x">
          <span className="eyebrow !text-gold">Milestones</span>
          <h2 className="mt-5 font-display font-black text-4xl md:text-6xl text-white max-w-3xl">A timeline of <span className="text-gold-gradient">signature moments.</span></h2>
          <div className="mt-16 relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <div key={t.year} className={`relative grid md:grid-cols-2 gap-8 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}>
                  <div className={`pl-14 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:[direction:ltr]"}`}>
                    <div className="font-display font-black text-5xl text-gold">{t.year}</div>
                    <p className="mt-3 text-white/70 text-lg leading-relaxed">{t.event}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 w-4 h-4 rounded-full bg-gold ring-4 ring-charcoal" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
          <div className="relative aspect-[4/5] max-w-md rounded-sm overflow-hidden bg-charcoal">
            <img src={ceoImg} alt="" loading="lazy" width={800} height={1000} className="h-full w-full object-cover" />
          </div>
          <div>
            <span className="eyebrow">Leadership</span>
            <h2 className="mt-5 font-display font-black text-4xl md:text-5xl leading-[1.1]">A word from our Chief Executive.</h2>
            <blockquote className="mt-8 text-lg leading-relaxed text-foreground/85 border-l-2 border-gold pl-6">
              "We do not sell buildings — we sell certainty. Certainty that milestones will be hit, that budgets will hold, that people will go home safe every single day. That is the only product worth putting our name on."
            </blockquote>
            <div className="mt-6">
              <div className="font-display font-bold text-lg">Karim Nassar</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Group Chief Executive Officer</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-x">
          <span className="eyebrow">Recognition</span>
          <h2 className="mt-5 font-display font-black text-4xl md:text-5xl">Certifications & Awards</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "ISO 9001:2015 Quality",
              "ISO 14001 Environment",
              "ISO 45001 Safety",
              "Deutscher Baupreis 2023",
              "ENR Global Top 250",
              "LEED Accredited Firm",
              "Bauindustrie Verband Member",
              "TÜV SÜD Certified Contractor",
            ].map((c) => (
              <div key={c} className="p-6 border border-border rounded-sm hover:border-gold hover:shadow-md transition">
                <Award className="h-8 w-8 text-gold-deep" strokeWidth={1.4} />
                <p className="mt-4 font-display font-semibold">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
