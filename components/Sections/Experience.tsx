import { FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';

export default function Experience() {
  return (
    <section id="experience">
      <div className="relative h-screen w-full snap-start overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src="/team.mp4" type="video/mp4" />
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

          {/* Base navy wash */}
          <div className="absolute inset-0 bg-background/25" />

          {/* Left-to-right scrim */}
          <div className="absolute inset-0 bg-linear-to-r from-background/85 via-background/30 to-transparent md:from-background/80 md:via-background/15 md:to-transparent/0" />

          {/* Soft blue bloom */}
          <div
            className="absolute -right-1/4 -top-1/4 h-[65%] w-[65%] rounded-full opacity-35 blur-3xl"
            style={{
              background:
                'radial-gradient(circle, color-mix(in srgb, var(--color-highlight) 50%, transparent) 0%, transparent 70%)',
            }}
          />

          {/* Cinematic vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 42%, color-mix(in srgb, var(--color-background) 60%, transparent) 100%)',
            }}
          />

          {/* Bottom transition gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-background/80 via-surface/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-10 flex items-center px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left: narrative */}
            <div className="max-w-xl md:max-w-2xl">
              {/* Eyebrow badge */}
              <div className="mb-5 inline-flex items-center gap-2.5 rounded-full px-4 py-2 sm:mb-6">
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent sm:text-[11px] sm:tracking-[0.35em]">
                  Expert Instructors
                </span>
              </div>

              {/* Heading */}
              <h2
                className="text-balance whitespace-pre-line font-serif font-semibold uppercase leading-[0.98] tracking-tight text-foreground drop-shadow-[0_2px_20px_rgba(5,11,22,0.6)]"
                style={{
                  fontSize: 'clamp(2.25rem, 5.5vw, 4.75rem)',
                }}
              >
                Experienced{' '}
                <span className="bg-linear-to-r from-highlight to-secondary-hover bg-clip-text text-transparent">
                  CFIs
                </span>
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:mt-6 md:text-lg">
                Our team of{' '}
                <span className="font-semibold text-foreground">Certified Flight Instructors</span>{' '}
                are professionals who are genuinely passionate about helping you achieve your
                aviation dreams. You receive{' '}
                <span className="font-semibold text-highlight">expert, personalized guidance</span>{' '}
                tailored to your goals.
              </p>

              {/* CTA */}
              <Link
                href="/team"
                className="group relative mt-7 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-foreground sm:mt-9 sm:text-xs sm:tracking-[0.3em]"
              >
                <span className="relative">
                  Meet the Team
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-white/15" />
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-highlight shadow-[0_0_8px_var(--color-highlight)] transition-all duration-200 group-hover:w-full" />
                </span>
                <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
