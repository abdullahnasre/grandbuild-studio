import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Meridian Construction Group" },
      { name: "description", content: "Request a consultation or a project quote. Offices in Munich, Stuttgart, Frankfurt and Berlin." },
      { property: "og:title", content: "Contact — Meridian Construction Group" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const offices = [
  { city: "Munich", country: "Germany", addr: "Maximilianstraße 24, 80539 Munich", phone: "+49 89 555 0180", flag: "🇩🇪" },
  { city: "Stuttgart", country: "Germany", addr: "Königstraße 42, 70173 Stuttgart", phone: "+49 711 555 2100", flag: "🇩🇪" },
  { city: "Frankfurt", country: "Germany", addr: "Mainzer Landstraße 88, 60329 Frankfurt am Main", phone: "+49 69 555 0700", flag: "🇩🇪" },
  { city: "Berlin", country: "Germany", addr: "Unter den Linden 15, 10117 Berlin", phone: "+49 30 555 4400", flag: "🇩🇪" },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={<>Let's discuss <span className="text-gold-gradient">your next project.</span></>}
        description="Tell us about your project — sector, scope, timeline — and the right team will be in touch within one business day."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="section-y bg-background">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <div className="p-8 md:p-12 border border-border rounded-sm bg-secondary/30">
            <h2 className="font-display font-black text-3xl md:text-4xl">Request a consultation</h2>
            <p className="mt-3 text-muted-foreground">All fields marked with * are required.</p>

            {submitted ? (
              <div className="mt-10 p-8 border-2 border-gold rounded-sm bg-gold/10 text-center">
                <Send className="h-10 w-10 text-gold-deep mx-auto" strokeWidth={1.4} />
                <h3 className="mt-4 font-display font-bold text-2xl">Thank you.</h3>
                <p className="mt-2 text-muted-foreground">We have received your inquiry and will respond within one business day.</p>
              </div>
            ) : (
              <form
                className="mt-8 grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name *" name="name" required />
                  <Field label="Company" name="company" />
                  <Field label="Email *" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <Select label="Project type *" name="type" options={["Commercial", "Residential", "Industrial", "Infrastructure", "Interior Fit-out", "Consultancy"]} />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Select label="Estimated budget" name="budget" options={["Under $5M", "$5M – $25M", "$25M – $100M", "$100M+"]} />
                  <Select label="Timeline" name="timeline" options={["Immediate", "3–6 months", "6–12 months", "12+ months"]} />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Project description *</label>
                  <textarea required rows={5} className="mt-2 w-full bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold" placeholder="Tell us about scope, site, key constraints..." />
                </div>
                <button type="submit" className="btn-gold mt-2 self-start">
                  Submit Inquiry <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          {/* Contact panel */}
          <div className="space-y-4">
            <ContactItem Icon={Phone} title="Speak with us" value="+49 89 555 0180" hint="Mon – Fri, 08:00 – 18:00 CET" />
            <ContactItem Icon={Mail} title="Email" value="contact@meridian-bau.de" hint="We respond within one business day" />
            <ContactItem Icon={MessageCircle} title="WhatsApp" value="+49 151 555 0180" hint="Business inquiries only" />
            <ContactItem Icon={Clock} title="Working hours" value="Mon – Fri · 08:00 – 18:00" hint="Regional offices follow local calendars" />
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary">
        <div className="container-x">
          <span className="eyebrow">Regional presence</span>
          <h2 className="mt-5 font-display font-black text-4xl md:text-5xl">Four offices. <span className="text-gold-gradient">One team.</span></h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {offices.map((o) => (
              <div key={o.city} className="p-8 border border-border rounded-sm bg-background hover:border-gold transition">
                <div className="text-3xl">{o.flag}</div>
                <h3 className="mt-4 font-display font-black text-2xl">{o.city}</h3>
                <p className="text-xs uppercase tracking-widest text-gold-deep font-semibold">{o.country}</p>
                <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                  <p className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-gold-deep mt-0.5" /> {o.addr}</p>
                  <p className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-gold-deep mt-0.5" /> {o.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({ Icon, title, value, hint }: { Icon: typeof Phone; title: string; value: string; hint: string }) {
  return (
    <div className="p-6 border border-border rounded-sm bg-background flex gap-4 items-start">
      <div className="grid place-items-center h-12 w-12 rounded-sm bg-charcoal shrink-0">
        <Icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{title}</div>
        <div className="mt-1 font-display font-bold text-lg">{value}</div>
        <div className="mt-1 text-xs text-muted-foreground">{hint}</div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} required={required} className="mt-2 w-full bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold" />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">{label}</label>
      <select id={name} name={name} className="mt-2 w-full bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold">
        <option value="">Select an option</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
