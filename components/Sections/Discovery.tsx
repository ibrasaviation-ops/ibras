'use client';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

const Discovery = () => {
  return (
    <section id="discovery">
      <div className="relative h-screen w-full snap-start overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src="/discovery.mp4" type="video/mp4" />
          </video>

          {/* Layered overlays */}
          <div className="absolute inset-0 bg-background/20" />
          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/10 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-10 mx-auto flex h-full w-full max-w-screen-2xl items-center justify-center px-6 md:px-12">
          <div className="flex w-full max-w-2xl flex-col items-center text-center">
            {/* Eyebrow */}
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full px-4 py-2 sm:mb-4">
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent sm:text-[11px] sm:tracking-[0.35em]">
                Take the First Step
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-balance whitespace-pre-line font-serif font-semibold uppercase leading-[0.98] tracking-tight text-foreground drop-shadow-[0_2px_20px_rgba(5,11,22,0.6)]"
              style={{
                fontSize: 'clamp(2.25rem, 5.5vw, 4.75rem)',
              }}
            >
              Discovery{' '}
              <span
                className="bg-linear-to-r from-highlight to-secondary-hover bg-clip-text text-transparent"
                style={{
                  fontSize: 'clamp(2.25rem, 5.5vw, 3.75rem)',
                }}
              >
                Flight Experience
              </span>
            </h2>

            {/* Supporting text */}
            <p className="max-w-md text-pretty text-base leading-relaxed text-muted md:text-lg">
              Your first real flight lesson starts here. Sit in the pilot seat, take the controls,
              and experience what it's like to train as a pilot with one-on-one FAA instruction.
            </p>

            {/* CTA */}
            <div className="mt-6 sm:mt-7">
              <Link
                href="/DiscoveryFlights"
                className="group relative inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-foreground sm:text-xs sm:tracking-[0.3em]"
              >
                <span className="relative">
                  Book Your Discovery Flight
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-accent/50" />
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-highlight transition-all duration-200 group-hover:w-full" />
                </span>
                <FaArrowRightLong className="transition-transform duration-200 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discovery;
