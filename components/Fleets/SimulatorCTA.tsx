import Link from 'next/link';
import { Plane, ChevronRight, Clock, Users, Award } from 'lucide-react';
import { FaArrowRightLong } from 'react-icons/fa6';

const FleetCTA = () => {
  return (
    <section className="relative overflow-hidden border-t border-ink/10 bg-linear-to-b from-white via-[#F4F6FA] to-white px-6 py-24 text-center md:px-12 md:py-32">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-130 w-130 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(93,132,214,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/25 bg-primary/5 px-6 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/10">
          <Plane className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Flight Simulator Access
          </span>
          <Plane className="h-4 w-4 text-primary" />
        </div>

        {/* Heading */}
        <div className="space-y-4 font-serif">
          <h2 className="text-balance text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink md:text-5xl lg:text-7xl">
            Train Smarter{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-linear-to-r from-primary to-highlight bg-clip-text text-transparent">
                on the Ground
              </span>
              {/* Underline accent */}
              <span className="absolute -bottom-2 left-0 h-0.75 w-full bg-linear-to-r from-highlight/60 to-transparent" />
            </span>
          </h2>
        </div>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg md:leading-8">
          Experience realistic training with our{' '}
          <span className="font-medium text-primary">state-of-the-art flight simulator</span>,
          designed to reinforce flight procedures, sharpen{' '}
          <span className="font-medium text-primary">instrument flying skills</span>, and safely
          practice <span className="font-medium text-primary">emergency scenarios</span> in a
          controlled environment. Every simulator session helps{' '}
          <span className="font-medium text-primary">reduce training time</span>, improve
          proficiency, and build the confidence you need before stepping into the{' '}
          <span className="font-medium text-primary">actual aircraft</span>.
        </p>

        {/* Feature Highlights */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: Users, label: 'Expert Instructors', description: 'CFI certified' },
            { icon: Clock, label: 'Flexible Scheduling', description: 'Book when you want' },
            { icon: Award, label: 'Accelerated Program', description: 'Faster certification' },
          ].map((item) => (
            <div
              key={item.label}
              className="group/feature relative overflow-hidden rounded-xl border border-ink/10 bg-white p-4 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/feature:opacity-100" />
              <item.icon className="relative mx-auto mb-2 h-5 w-5 text-primary transition-transform duration-300 group-hover/feature:scale-110" />
              <p className="relative text-sm font-medium text-ink">{item.label}</p>
              <p className="relative text-xs text-ink-faint">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="relative my-12">
          <div className="h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
            <Plane className="h-4 w-4 text-primary/40" />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/DiscoveryFlights"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-sm bg-linear-to-b from-primary to-primary-hover px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-md shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95 sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Discovery Flight
              <FaArrowRightLong className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </span>
            <div className="absolute inset-0 -translate-y-full bg-linear-to-t from-white/20 to-transparent transition-transform duration-300 group-hover/btn:translate-y-0" />
          </Link>

          <Link
            href="/application"
            rel="noopener noreferrer"
            className="group/btn2 relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-sm border border-ink/15 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-ink transition-all duration-300 hover:border-primary hover:bg-primary/5 active:scale-95 sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Flight Training
              <ChevronRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover/btn2:translate-x-1 group-hover/btn2:opacity-100" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-primary/5 to-transparent transition-transform duration-300 group-hover/btn2:translate-x-0" />
          </Link>
        </div>

        {/* Trust Indicator */}
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-ink-faint/70">
          Start your journey today
        </p>
      </div>
    </section>
  );
};

export default FleetCTA;
