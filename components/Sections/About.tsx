import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import AboutServices from '../AboutServices';

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full  snap-start overflow-hidden bg-white py-20 md:py-28 px-5"
    >
      {/* Background - Clean white with subtle pattern */}
      {/* <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#1a1a2e 1px, transparent 1px), linear-gradient(90deg, #1a1a2e 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />
      </div> */}
      {/* Content Container */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 sm:px-8 lg:px-16">
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center py-12 lg:py-0">
            {/* Badge - Light theme style */}
            <div className="mb-5 inline-flex items-center gap-2.5 px-4 py-2 sm:mb-6">
              <span className="text-[0.80rem] font-bold uppercase tracking-[0.25em] text-slate-500 sm:tracking-[0.35em]">
                Built On Passion
              </span>
            </div>

            {/* Heading - Dark for light theme */}
            <h2
              className="font-serif font-bold leading-[1.05] text-slate-900"
              style={{
                fontSize: 'clamp(2.2rem, 5.2vw, 4.5rem)',
              }}
            >
              Who We Are
            </h2>

            {/* Description - Dark text for readability */}
            <div className="mt-4 space-y-5 sm:mt-6">
              <p
                className="max-w-lg text-slate-700"
                style={{
                  fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
                  lineHeight: '1.7',
                }}
              >
                Based in Miami, our independent flight instruction program was founded from a deep
                passion for aviation and the freedom of flight. Led by an{' '}
                <span className="font-semibold text-slate-900">
                  FAA-certified flight instructor
                </span>
                , we provide focused,{' '}
                <span className="font-semibold text-slate-900">one-on-one training</span> designed
                to build real skill, confidence, and sound decision-making in the cockpit.
              </p>

              <p
                className="max-w-lg text-slate-600"
                style={{
                  fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
                  lineHeight: '1.7',
                }}
              >
                Our approach is personal, flexible, and performance-driven, helping every student
                progress efficiently while maintaining the highest standards of{' '}
                <span
                  className="inline-block bg-clip-text text-transparent transition-all duration-300 hover:-translate-y-0.5"
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

            {/* CTA - Light theme version */}
            <div className="mt-8 sm:mt-10">
              <Link
                href="/schedule"
                className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Schedule a Meeting
                <FaArrowRightLong className="transition-transform duration-200 group-hover:translate-x-1 text-primary" />
              </Link>
            </div>
          </div>

          {/* Right Column - Image with Professional Design */}
          <div className="relative flex items-center justify-center">
            {/* Main Image Container */}
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Glow effect behind image - lighter for light theme */}
              <div className="absolute -inset-4 rounded-2xl bg-linear-to-br from-primary/10 via-secondary/5 to-transparent blur-2xl opacity-70" />

              {/* Image Frame - Light theme border */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-200/50">
                {/* The Image */}
                <Image
                  src="/about.png"
                  alt="Ibras Aviation - Professional Flight Training"
                  width={600}
                  height={700}
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />

                {/* Overlay gradient for depth - lighter */}
                <div className="absolute inset-0 bg-linear-to-t from-black/5 via-transparent to-transparent" />

                {/* Decorative corner accents - light theme */}
                <div className="absolute -left-8 -top-8 h-16 w-16 border-l-2 border-t-2 border-primary/20" />
                <div className="absolute -bottom-8 -right-8 h-16 w-16 border-b-2 border-r-2 border-primary/20" />
              </div>

              {/* Floating Stats Card - Light theme */}
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white/95 px-6 py-4 shadow-xl shadow-slate-200/60 backdrop-blur-sm border border-slate-200/80 lg:-left-8">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">15+</div>
                    <div className="text-xs text-slate-500">Years Experiance</div>
                  </div>
                  <div className="h-8 w-px bg-slate-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">100%</div>
                    <div className="text-xs text-slate-500">Success Rate</div>
                  </div>
                  <div className="h-8 w-px bg-slate-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">70+</div>
                    <div className="text-xs text-slate-500">Students</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutServices />
    </section>
  );
}
