import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoArrowDown } from 'react-icons/go';

export default function Fleet() {
  return (
    <section id="fleet">
      <div className="relative h-screen w-full snap-start overflow-hidden">
        {/* Background - No gradients, just clean overlay */}
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src="/fleet.mp4" type="video/mp4" />
          </video>
  
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center px-5 sm:px-8 lg:px-16">
          <div className="mx-auto w-full max-w-7xl">
            <div className="ml-auto max-w-xl text-right md:max-w-2xl">
              {/* Badge - Clean white with subtle background, matching hero */}
              <div className="mb-5 inline-flex items-center gap-2.5 px-4 py-2 sm:mb-6">
                <span className="text-[0.80rem] font-bold uppercase tracking-[0.25em] text-white/80 sm:tracking-[0.35em]">
                  Modern Training Fleet
                </span>
              </div>

              {/* Heading - Clean white with subtle shadow, matching hero */}
              <h2
                className="font-serif font-bold leading-[1.05] text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.3)]"
                style={{
                  fontSize: 'clamp(1.8rem, 5vw, 3rem)',
                }}
              >
                Modern Aircraft.
                <br />
                <span
                  className="inline-block bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Personalized Instruction
                </span>
                .
              </h2>

              {/* Description - White with good contrast, matching hero */}
              <p
                className="ml-auto mt-5 max-w-xl text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)] sm:mt-6"
                style={{
                  fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
                  lineHeight: '1.7',
                }}
              >
                Train in well-maintained,{' '}
                <span className="font-medium text-white">FAA-compliant training aircraft</span> with
                dedicated <span className="font-medium text-white">one-on-one instruction</span>{' '}
                tailored to your goals. Every lesson is structured to maximize progress, build
                confidence, and prepare you for success from your first flight through your FAA
                checkride.
              </p>

              {/* CTA - Matching hero link style */}
              <div className="mt-7 sm:mt-9">
                <Link
                  href="/fleet"
                  className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-sm bg-white px-7 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1a1a2e] shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-200 hover:bg-white/90 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] sm:px-8 sm:text-xs"
                >
                  See the Fleet
                  <FaArrowRightLong className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
