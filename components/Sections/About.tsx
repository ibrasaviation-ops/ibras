import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function About() {
  return (
    <section id="about">
      <div className="relative h-screen w-full snap-start overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src="/about.mp4" type="video/mp4" />
          </video>

          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-background/80 via-surface/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-10 flex items-center px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left: narrative */}
            <div className="max-w-xl md:max-w-2xl">
              {/* Eyebrow badge */}
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full px-4 py-2 ">
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent sm:text-[11px] sm:tracking-[0.35em]">
                  Built On Passion
                </span>
              </div>

              {/* Heading */}
              <h2
                className="font-serif font-bold uppercase leading-[1.05] tracking-tight text-foreground drop-shadow-[0_2px_20px_rgba(5,11,22,0.6)]"
                style={{
                  fontSize: 'clamp(2.2rem, 5.2vw, 4.5rem)',
                }}
              >
                Who We Are
              </h2>

              {/* Description */}
              <div className="mt-4 space-y-5 ">
                <p className="max-w-lg text-sm leading-7 text-muted sm:text-base md:text-lg md:leading-8">
                  Based in Miami, our independent flight instruction program was founded from a deep
                  passion for aviation and the freedom of flight. Led by an{' '}
                  <span className="font-semibold text-foreground">
                    FAA-certified flight instructor
                  </span>
                  , we provide focused,{' '}
                  <span className="font-semibold text-foreground">one-on-one training</span>{' '}
                  designed to build real skill, confidence, and sound decision-making in the
                  cockpit.
                </p>

                <p className="max-w-lg text-sm leading-7 text-muted/85 sm:text-base md:text-lg md:leading-8">
                  Our approach is personal, flexible, and performance-driven, helping every student
                  progress efficiently while maintaining the highest standards of{' '}
                  <span className="font-semibold text-highlight">safety</span> and professionalism
                  throughout their aviation journey.
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/schedule"
                className="group relative mt-8 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-foreground sm:mt-10 sm:text-xs sm:tracking-[0.3em]"
              >
                <span className="relative">
                  Schedule a Meeting
                  <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-100 bg-accent/50 transition-colors duration-200 group-hover:bg-highlight" />
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
