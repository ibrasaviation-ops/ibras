import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoArrowDown } from 'react-icons/go';

export default function About() {
  return (
    <section id="about">
      <div className="relative h-screen w-full snap-start overflow-hidden">
        {/* Background - No gradients, just clean overlay */}
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src="/about.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center px-5 sm:px-8 lg:px-16">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-xl md:max-w-2xl">
              {/* Badge - Clean white with subtle background, matching hero */}
              <div className="mb-5 inline-flex items-center gap-2.5 px-4 py-2 sm:mb-6">
                <span className="text-[0.80rem] font-bold uppercase tracking-[0.25em] text-white/80 sm:tracking-[0.35em]">
                  Built On Passion
                </span>
              </div>

              {/* Heading - Clean white with subtle shadow, matching hero */}
              <h2
                className="font-serif font-bold leading-[1.05] text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.3)]"
                style={{
                  fontSize: 'clamp(2.2rem, 5.2vw, 4.5rem)',
                }}
              >
                Who We Are
              </h2>

              {/* Description - White with good contrast, matching hero */}
              <div className="mt-4 space-y-5 sm:mt-6">
                <p
                  className="max-w-lg text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                  style={{
                    fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
                    lineHeight: '1.7',
                  }}
                >
                  Based in Miami, our independent flight instruction program was founded from a deep
                  passion for aviation and the freedom of flight. Led by an{' '}
                  <span className="font-medium text-white">FAA-certified flight instructor</span>,
                  we provide focused,{' '}
                  <span className="font-medium text-white">one-on-one training</span> designed to
                  build real skill, confidence, and sound decision-making in the cockpit.
                </p>

                <p
                  className="max-w-lg text-white/85 drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                  style={{
                    fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
                    lineHeight: '1.7',
                  }}
                >
                  Our approach is personal, flexible, and performance-driven, helping every student
                  progress efficiently while maintaining the highest standards of{' '}
                  <span
                    className="inline-block bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      backgroundImage:
                        'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    safety
                  </span>{' '}
                  and professionalism throughout their aviation journey.
                </p>
              </div>

              {/* CTA - Matching hero button style */}
              <div className="mt-8 sm:mt-10">
                <Link
                  href="/schedule"
                  className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Schedule a Meeting
                  <FaArrowRightLong className="transition-transform duration-200 group-hover:translate-x-1 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
