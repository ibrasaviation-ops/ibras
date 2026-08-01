import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function Fleet() {
  return (
    <section id="fleet">
      <div className="relative h-screen w-full snap-start overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src="/fleet.mp4" type="video/mp4" />
          </video>

          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
          />

          {/* Right scrim for text legibility */}
          <div className="absolute inset-0 bg-linear-to-l from-background/75 via-background/25 to-transparent md:from-background/70 md:via-background/10 md:to-transparent/0" />

          {/* Radial spotlight */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 55% at 28% 45%, transparent 30%, color-mix(in srgb, var(--color-background) 35%, transparent) 100%)',
            }}
          />

          {/* Bottom transition gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-linear-to-t from-background/75 via-surface/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-10 flex items-center px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="mx-auto w-full max-w-7xl items-end gap-5">
            {/* Right: narrative */}
            <div className="order-1 ml-auto max-w-xl text-right md:max-w-2xl lg:order-2">
              {/* Eyebrow badge */}
              <div className="mb-5 inline-flex items-center gap-2.5 rounded-full px-4 py-2 sm:mb-6">
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent sm:text-[11px] sm:tracking-[0.35em]">
                  Modern Training Fleet
                </span>
              </div>

              {/* Heading */}
              <h2
                className="font-serif font-bold leading-[1.05] text-foreground drop-shadow-[0_2px_20px_rgba(5,11,22,0.6)]"
                style={{
                  fontSize: 'clamp(1.8rem, 5vw, 3rem)',
                }}
              >
                Modern Aircraft.
                <br />
                <span className="bg-linear-to-r from-highlight to-secondary-hover bg-clip-text text-transparent">
                  Personalized Instruction
                </span>
                .
              </h2>

              {/* Description */}
              <p className="ml-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:mt-6 md:text-lg">
                Train in well-maintained,{' '}
                <span className="font-semibold text-foreground">
                  FAA-compliant training aircraft
                </span>{' '}
                with dedicated{' '}
                <span className="font-semibold text-foreground">one-on-one instruction</span> to
                your goals. Every lesson is structured to maximize progress, build confidence, and
                prepare you for success from your first flight through your FAA checkride
              </p>

              {/* CTA */}
              <Link
                href="/fleet"
                className="group relative mt-7 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-foreground sm:mt-9 sm:text-xs sm:tracking-[0.3em]"
              >
                <span className="relative">
                  See the Fleet
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-white/15" />
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-highlight shadow-[0_0_8px_var(--color-highlight)] transition-all duration-200 group-hover:w-full" />
                </span>
                <FaArrowRightLong className="transition-transform duration-200 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
