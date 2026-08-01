import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';
import { GoArrowDown } from 'react-icons/go';

export default function Home() {
  return (
    <section id="hero">
      <div className="relative h-screen w-full snap-start overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/25" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-background/80 via-surface/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-5 sm:px-8 lg:px-16">
          <div className="flex w-full max-w-4xl flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full px-4 py-2 sm:mb-6">
              <span className="text-[0.80rem] font-bold uppercase tracking-[0.25em] text-accent  sm:tracking-[0.35em]">
                FAA Part 61 Training • Personalized Instruction • Miami
              </span>
            </div>

            {/* Heading */}
            <h1
              className="max-w-2xl font-serif font-bold leading-[1.05] text-foreground drop-shadow-[0_2px_20px_rgba(5,11,22,0.6)]"
              style={{
                fontSize: 'clamp(2.25rem, 5.2vw, 4.25rem)',
              }}
            >
              Your Pilot Journey
              <br />
              Starts{' '}
              <span className="bg-linear-to-r from-highlight to-secondary-hover bg-clip-text text-transparent">
                Here
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="mt-5 max-w-xl text-muted sm:mt-6"
              style={{
                fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
                lineHeight: '1.7',
              }}
            >
              FAA Part 61 flight training with personalized one-on-one instruction. From{' '}
              <span className="font-medium text-foreground">Private Pilot</span> to{' '}
              <span className="font-medium text-foreground">Commercial Pilot</span>, train at your
              own pace with an experienced independent flight instructor.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
              <Link
                href="/DiscoveryFlights"
                className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-sm bg-foreground px-7 text-[10px] font-semibold uppercase tracking-[0.15em] text-primary shadow-[0_8px_30px_rgba(255,255,255,0.12)] transition-colors duration-200 hover:bg-muted sm:w-auto sm:px-8 sm:text-xs"
              >
                Book Discovery Flight
                <FaArrowRightLong className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/application"
                className="inline-flex h-12 w-full items-center justify-center rounded-sm border border-white/20 bg-white/4 px-7 text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground backdrop-blur-md transition-colors duration-200 hover:border-foreground/60 hover:bg-elevated/50 sm:w-auto sm:px-8 sm:text-xs"
              >
                Start Training
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue - removed for cleaner UI, or keep minimal */}
        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center text-accent/80 md:flex animate-bounce">
          <span className="text-[9px] uppercase tracking-[0.4em]">Scroll</span>
          <GoArrowDown />
        </div>
      </div>
    </section>
  );
}
