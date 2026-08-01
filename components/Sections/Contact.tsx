'use client';
import { Phone, Mail, MapPin, Plane, Send, ChevronRight, Clock, Headphones } from 'lucide-react';
import Link from 'next/link';

const AIRPORTS = [
  { code: 'HWO', name: 'North Perry Airport' },
  { code: 'FXE', name: 'Fort Lauderdale Executive Airport' },
  { code: 'TMB', name: 'Miami Executive Airport' },
  { code: 'LNA', name: 'Lantana Airport' },
];

const BRIEFING_ITEMS = [
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
  { icon: Headphones, label: 'Best Time to Call', value: 'Mon–Fri, 9AM – 6PM EST' },
  { icon: Mail, label: 'Availability', value: '24/7 Online Support' },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 px-6 sm:px-10 lg:px-16 lg:py-36 snap-start"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 -right-32 h-112 w-md rounded-full bg-highlight/[0.07] blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(theme(colors.ink) 1px, transparent 1px), linear-gradient(90deg, theme(colors.ink) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        {/* Trajectory curve */}
        <svg
          className="absolute right-[6%] top-16 hidden h-[70%] w-[38%] opacity-[0.06] lg:block"
          viewBox="0 0 400 600"
          fill="none"
        >
          <path
            d="M20 580 C 160 480, 120 220, 380 20"
            stroke="currentColor"
            className="text-ink"
            strokeWidth="1.5"
            strokeDasharray="2 10"
            strokeLinecap="round"
          />
          <circle cx="20" cy="580" r="4" className="fill-highlight" />
          <circle cx="380" cy="20" r="4" className="fill-highlight" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-20 lg:grid-cols-2 lg:gap-24">
          {/* Left Column */}
          <div>
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full px-4 py-2 sm:mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink-muted sm:text-[11px] sm:tracking-[0.35em]">
                Contact
              </span>
            </div>

            {/* Headline */}
            <h2 className="mb-6 font-serif text-4xl font-bold leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
              Ready for Your
              <br />
              <span className="bg-linear-to-r from-primary to-highlight bg-clip-text font-medium italic text-transparent">
                First Flight?
              </span>
            </h2>

            <p className="mb-11 max-w-md text-pretty text-base leading-relaxed text-ink-muted lg:text-lg">
              Your aviation journey begins with a single flight. Whether you&apos;re pursuing a
              Private Pilot License or advancing your skills, our one-on-one instruction is built
              around your goals and your schedule.
            </p>

            {/* CTA Buttons */}
            <div className="mb-14 flex flex-wrap gap-4">
              <Link
                href="DiscoveryFlights"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-ink px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(15,31,61,0.5)] hover:shadow-[0_16px_36px_-8px_rgba(19,58,124,0.55)]"
              >
                <Plane className="relative h-4 w-4" />
                <span className="relative">Book Discovery Flight</span>
                <ChevronRight className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/application"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-xl border border-ink-faint/35 bg-white px-7 py-3.5 text-sm font-semibold text-ink-muted hover:border-highlight/50 hover:text-ink hover:shadow-md"
              >
                <Send className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                Start Training
              </Link>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="group relative flex items-start gap-5 rounded-2xl border border-ink-faint/10 bg-white/80 p-5 pl-6 shadow-[0_2px_16px_-8px_rgba(15,31,61,0.08)] backdrop-blur-sm hover:border-highlight/30 hover:shadow-[0_12px_28px_-10px_rgba(19,58,124,0.18)]">
                <span className="absolute left-0 top-1/2 h-8 w-0.75 -translate-y-1/2 rounded-full bg-linear-to-b from-primary to-highlight opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/[0.07] group-hover:bg-primary/10">
                  <Phone className="h-4.5 w-4.5 text-primary" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
                    Phone
                  </p>
                  <a
                    href="tel:3053997353"
                    className="text-base font-medium text-ink hover:text-primary"
                  >
                    +1 (954) 799-2097
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="group relative flex items-start gap-5 rounded-2xl border border-ink-faint/10 bg-white/80 p-5 pl-6 shadow-[0_2px_16px_-8px_rgba(15,31,61,0.08)] backdrop-blur-sm hover:border-highlight/30 hover:shadow-[0_12px_28px_-10px_rgba(19,58,124,0.18)]">
                <span className="absolute left-0 top-1/2 h-8 w-0.75 -translate-y-1/2 rounded-full bg-linear-to-b from-primary to-highlight opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/[0.07] group-hover:bg-primary/10">
                  <Mail className="h-4.5 w-4.5 text-primary" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
                    Email
                  </p>
                  <a
                    href="mailto:Ibrasaviation@gmail.com"
                    className="text-base font-medium text-ink hover:text-primary"
                  >
                    Ibrasaviation@gmail.com
                  </a>
                </div>
              </div>

              {/* Address + Airports */}
              <div className="group relative flex items-start gap-5 rounded-2xl border border-ink-faint/10 bg-white/80 p-5 pl-6 shadow-[0_2px_16px_-8px_rgba(15,31,61,0.08)] backdrop-blur-sm hover:border-highlight/30 hover:shadow-[0_12px_28px_-10px_rgba(19,58,124,0.18)]">
                <span className="absolute left-0 top-1/2 h-8 w-0.75 -translate-y-1/2 rounded-full bg-linear-to-b from-primary to-highlight opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/[0.07] group-hover:bg-primary/10">
                  <MapPin className="h-4.5 w-4.5 text-primary" strokeWidth={1.75} />
                </div>
                <div className="flex-1">
                  <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
                    Training Locations
                  </p>
                  <p className="mb-3 text-sm font-medium text-ink">Miami, South Florida, USA</p>
                  <div className="flex flex-wrap gap-2">
                    {AIRPORTS.map((airport) => (
                      <span
                        key={airport.code}
                        className="inline-flex items-center gap-1.5 rounded-md border border-ink-faint/20 bg-primary/4 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-ink-muted hover:border-highlight/40 hover:bg-primary/8 hover:text-ink"
                      >
                        <span className="h-1 w-1 rounded-full bg-highlight/70" />
                        {airport.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Briefing Panel */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="relative rounded-[28px] border border-ink-faint/12 bg-white/90 p-9 shadow-[0_30px_60px_-20px_rgba(15,31,61,0.18)] backdrop-blur-sm">
                {/* Corner brackets */}
                <span className="absolute -left-px -top-px h-6 w-6 rounded-tl-[28px] border-l-2 border-t-2 border-highlight/40" />
                <span className="absolute -right-px -bottom-px h-6 w-6 rounded-br-[28px] border-b-2 border-r-2 border-highlight/40" />

                {/* Header */}
                <div className="mb-8 flex items-center gap-4 border-b border-ink-faint/12 pb-7">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-secondary shadow-[0_8px_20px_-6px_rgba(19,58,124,0.5)]">
                    <Plane className="h-6 w-6 text-white" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-highlight">
                      Flight Briefing
                    </p>
                    <h3 className="text-xl font-bold text-ink">Ready to Fly?</h3>
                  </div>
                </div>

                {/* Info Cards */}
                <div className="space-y-3">
                  {BRIEFING_ITEMS.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="group flex items-center gap-3.5 rounded-xl border border-transparent bg-primary/[0.035] p-4 hover:border-highlight/25 hover:bg-primary/[0.07]"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                        <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-faint">
                          {label}
                        </p>
                        <p className="text-sm font-medium text-ink">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-7 border-t border-ink-faint/12 pt-6">
                  <p className="text-center text-xs tracking-wide text-ink-faint">
                    Your journey starts with one conversation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
