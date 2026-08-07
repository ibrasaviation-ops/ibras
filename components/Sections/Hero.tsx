import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';
import { GoArrowDown } from 'react-icons/go';

export default function Home() {
  return (
    <section id="hero">
      <div className="relative h-screen w-full snap-start overflow-hidden">
        {/* Background - With overlay for video contrast */}
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          {/* ADD THIS: Dynamic overlay for video contrast */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#050B16]/25 to-[#050B16]/40" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-5 sm:px-8 lg:px-16 pt-15">
          <div className="flex w-full max-w-4xl flex-col items-center text-center">
            {/* Badge - Clean white with subtle background */}
            <div className="mb-5 inline-flex items-center gap-2.5  px-4 py-2 sm:mb-6">
              <span className=" text-[0.65rem] sm:text-[0.80rem] font-bold uppercase tracking-[0.25em] text-white/80 sm:tracking-[0.35em]">
                FAA Part 61 Training • Personalized Instruction • Miami
              </span>
            </div>

            {/* Heading - Clean white text with subtle shadow */}

            <h1
              className="max-w-2xl font-serif font-bold leading-[1.05] text-foreground drop-shadow-[0_2px_20px_rgba(5,11,22,0.6)]"
              style={{
                fontSize: 'clamp(2.25rem, 5.2vw, 4.25rem)',
              }}
            >
              Your Pilot Journey
              <br />
              Starts{' '}
              <span
                className="inline-block bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Here
              </span>
            </h1>


            {/* Subheading - White with good contrast */}
            <p
              className="mt-5 max-w-xl text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)] sm:mt-6"
              style={{
                fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
                lineHeight: '1.7',
              }}
            >
              FAA Part 61 flight training with personalized one-on-one instruction. From{' '}
              <span className="font-medium text-white">Private Pilot</span> to{' '}
              <span className="font-medium text-white">Commercial Pilot</span>, train at your own
              pace with an experienced independent flight instructor.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
              <Link
                href="/DiscoveryFlights"
                className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-sm bg-white px-7 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1a1a2e] shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-200 hover:bg-white/90 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] sm:w-auto sm:px-8 sm:text-xs"
              >
                Book Discovery Flight
                <FaArrowRightLong className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/application"
                className="inline-flex h-12 w-full items-center justify-center rounded-sm border border-white/30 bg-white/10 px-7 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-all duration-200 hover:border-white/60 hover:bg-white/20 hover:scale-[1.02] sm:w-auto sm:px-8 sm:text-xs"
              >
                Start Training
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center text-white/60 md:flex animate-bounce">
          <span className="text-[9px] uppercase tracking-[0.4em]">Scroll</span>
          <GoArrowDown className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" />
        </div>
      </div>
    </section>
  );
}