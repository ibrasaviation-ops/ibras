import { FaArrowRightLong } from 'react-icons/fa6';
import { FaClipboardCheck, FaUserCheck, FaCalendarCheck, FaBookOpen } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Card {
  heading: string;
  description: string;
  icon: IconType;
}

const allCards: Card[] = [
  {
    heading: 'Checkride Preparation',
    description: 'Comprehensive oral and practical test preparation.',
    icon: FaClipboardCheck,
  },
  {
    heading: 'Mock Checkrides',
    description: 'Realistic FAA-style oral and flight evaluations.',
    icon: FaUserCheck,
  },
  {
    heading: 'DPE Coordination',
    description: 'Guidance with scheduling your FAA practical test.',
    icon: FaCalendarCheck,
  },
  {
    heading: 'ACS-Based Training',
    description: 'Every lesson aligned with FAA Airman Certification Standards.',
    icon: FaBookOpen,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-linear-to-b from-background via-surface to-background py-24 md:py-36 snap-start"
    >
      {/* Background depth - simplified */}
      <div className="pointer-events-none absolute inset-0">
        {/* Blueprint-inspired grid, faint */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 100%)',
          }}
        />

        {/* Center vignette to keep focus on content */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 35%, transparent 45%, color-mix(in srgb, var(--color-background) 55%, transparent) 100%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-screen-2xl px-6 md:px-12">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 backdrop-blur-md">
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent sm:text-[11px] sm:tracking-[0.35em]">
              FAA Part 61 Training · Miami
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-balance font-serif font-semibold uppercase leading-[0.98] tracking-tight text-foreground"
            style={{
              fontSize: 'clamp(2.25rem, 5.5vw, 4.75rem)',
            }}
          >
            Checkride Success
            <br />
            <span className="bg-linear-to-r from-highlight to-secondary-hover bg-clip-text text-transparent">
              Starts Here
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted md:text-lg">
            <span className="font-semibold text-foreground">One-on-one instruction</span>, realistic{' '}
            <span className="font-semibold text-foreground">mock evaluations</span>, and
            comprehensive oral preparation designed to help you approach your FAA practical test
            with confidence.
          </p>

          {/* Journey flow */}
          <div className="mt-6 grid w-full gap-5 sm:grid-cols-2 md:mt-10">
            {allCards.map((card, i) => {
              const Icon = card.icon;
              const step = String(i + 1).padStart(2, '0');

              return (
                <div
                  key={card.heading}
                  className="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 text-center shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-colors hover:border-highlight/40 hover:bg-white/[0.07]"
                >
                  {/* Step marker */}
                  <span className="absolute right-5 top-5 font-serif text-[11px] font-medium tracking-[0.2em] text-subtle/60">
                    {step}
                  </span>

                  {/* Icon container */}
                  <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-linear-to-br from-white/[0.08] to-white/[0.02] text-muted transition-colors group-hover:border-highlight/50 group-hover:text-foreground">
                    <Icon size={20} className="relative z-10" />
                  </div>

                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {card.heading}
                  </h3>

                  <p className="mt-2 max-w-[22ch] text-sm leading-6 text-muted">
                    {card.description}
                  </p>

                  {/* Connector to next step */}
                  {i < allCards.length - 1 && (
                    <span className="pointer-events-none absolute -bottom-5 left-1/2 hidden h-5 w-px -translate-x-1/2 bg-linear-to-b from-white/20 to-transparent sm:block md:hidden lg:block" />
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-4">
            <a
              href="#programs"
              className="group relative mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-accent hover:text-foreground transition-colors sm:mt-8 sm:text-xs sm:tracking-[0.3em]"
            >
              <span className="relative">
                Explore More
                <span className="absolute -bottom-1.5 left-0 h-px w-full bg-white/15" />
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-highlight shadow-[0_0_8px_var(--color-highlight)] transition-all duration-300 group-hover:w-full" />
              </span>
              <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
