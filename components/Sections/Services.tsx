import { FaArrowRightLong } from 'react-icons/fa6';
import { FaClipboardCheck, FaUserCheck, FaCalendarCheck, FaBookOpen } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Card {
  heading: string;
  description: string;
  icon: IconType;
}

const allCards: Card[] = [
  {
    heading: 'Checkride Preparation',
    description: 'Comprehensive oral and practical test preparation.',
    icon: FaClipboardCheck,
  },
  {
    heading: 'Mock Checkrides',
    description: 'Realistic FAA-style oral and flight evaluations.',
    icon: FaUserCheck,
  },
  {
    heading: 'DPE Coordination',
    description: 'Guidance with scheduling your FAA practical test.',
    icon: FaCalendarCheck,
  },
  {
    heading: 'ACS-Based Training',
    description: 'Every lesson aligned with FAA Airman Certification Standards.',
    icon: FaBookOpen,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full snap-start overflow-hidden bg-white py-20 md:py-28"
    >
      {/* Background - Clean white with subtle pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#1a1a2e 1px, transparent 1px), linear-gradient(90deg, #1a1a2e 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center px-5 sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-4xl">
          <div className="flex flex-col items-center text-center">
            {/* Badge - Clean dark text, matching hero style but inverted */}
            <div className="mb-5 inline-flex items-center gap-2.5 px-4 py-2 sm:mb-6">
              <span className="text-[0.80rem] font-bold uppercase tracking-[0.25em] text-[#1a1a2e]/60 sm:tracking-[0.35em]">
                FAA Part 61 Training · Miami
              </span>
            </div>

            {/* Heading - Dark text with subtle shadow */}
            <h2
              className="font-serif font-bold leading-[1.05] text-[#1a1a2e]"
              style={{
                fontSize: 'clamp(2.25rem, 5.5vw, 4.75rem)',
              }}
            >
              Checkride Success
              <br />
              <span
                className="inline-block bg-clip-text text-transparent transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Starts Here
              </span>
            </h2>

            {/* Description - Dark text with good contrast */}
            <p
              className="mx-auto mt-4 max-w-xl text-[#1a1a2e]/80 sm:mt-5"
              style={{
                fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
                lineHeight: '1.7',
              }}
            >
              <span className="font-semibold text-[#1a1a2e]">One-on-one instruction</span>,
              realistic <span className="font-semibold text-[#1a1a2e]">mock evaluations</span>, and
              comprehensive oral preparation designed to help you approach your FAA practical test
              with confidence.
            </p>

            {/* Cards Grid */}
            <div className="mt-6 grid w-full gap-4 sm:grid-cols-2 md:mt-8 lg:gap-5">
              {allCards.map((card, i) => {
                const Icon = card.icon;
                const step = String(i + 1).padStart(2, '0');

                return (
                  <div
                    key={card.heading}
                    className="group relative flex flex-col items-center rounded-sm border border-[#1a1a2e]/10 bg-white px-6 py-8 text-center shadow-[0_2px_14px_-8px_rgba(0,0,0,0.08)] transition-all duration-200 hover:border-[#1a1a2e]/20 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                  >
                    {/* Step marker */}
                    <span className="absolute right-5 top-5 font-serif text-[11px] font-medium tracking-[0.2em] text-[#1a1a2e]/30">
                      {step}
                    </span>

                    {/* Icon container */}
                    <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#1a1a2e]/10 bg-[#1a1a2e]/5 text-[#1a1a2e]/60 transition-colors group-hover:border-[#1a1a2e]/20 group-hover:text-[#1a1a2e]">
                      <Icon size={20} className="relative z-10" />
                    </div>

                    <h3 className="text-lg font-semibold tracking-tight text-[#1a1a2e]">
                      {card.heading}
                    </h3>

                    <p className="mt-2 max-w-[22ch] text-sm leading-6 text-[#1a1a2e]/70">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA - Matching hero button style */}
            <div className="mt-8 sm:mt-10">
              <a
                href="#programs"
                className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-sm bg-[#1a1a2e] px-7 text-[10px] font-semibold uppercase tracking-[0.15em] text-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-[#1a1a2e]/90 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] sm:px-8 sm:text-xs"
              >
                Explore More
                <FaArrowRightLong className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
