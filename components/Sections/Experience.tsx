import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';

export default function Experience() {
  return (
    <section id="instructors">
      <div className="relative h-screen w-full snap-start overflow-hidden">
        {/* Background - No gradients, just clean overlay */}
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src="/team.mp4" type="video/mp4" />
          </video>
          {/* ADD THIS: Dynamic overlay for video contrast */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#050B16]/25 to-[#050B16]/40" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center px-5 sm:px-8 lg:px-16">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-xl md:max-w-2xl">
              {/* Badge - Clean white with subtle background, matching hero */}
              <div className="mb-5 inline-flex items-center gap-2.5 px-4 py-2 sm:mb-6">
                <span className="text-[0.80rem] font-bold uppercase tracking-[0.25em] text-white/80 sm:tracking-[0.35em]">
                  Expert Instructors
                </span>
              </div>

              {/* Heading - Clean white with subtle shadow, matching hero */}
              <h2
                className="font-serif font-bold leading-[1.05] text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.3)]"
                style={{
                  fontSize: 'clamp(2.25rem, 5.5vw, 4.75rem)',
                }}
              >
                Experienced{' '}
                  <span
                className="inline-block bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
              CFIs
              </span>
              </h2>

              {/* Description - White with good contrast, matching hero */}
              <p
                className="mt-5 max-w-xl text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)] sm:mt-6"
                style={{
                  fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
                  lineHeight: '1.7',
                }}
              >
                Our team of{' '}
                <span className="font-medium text-white">Certified Flight Instructors</span> are
                professionals who are genuinely passionate about helping you achieve your aviation
                dreams. You receive{' '}
                <span
                  className="font-medium text-white"
                 
                >
                  expert, personalized guidance
                </span>{' '}
                tailored to your goals.
              </p>

              {/* CTA - Light theme version */}
              <div className="mt-8 sm:mt-10">
                <Link
                  href="/team"
                  className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Meet the Team
                  <FaArrowRightLong className="transition-transform duration-200 group-hover:translate-x-1 text-primary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}