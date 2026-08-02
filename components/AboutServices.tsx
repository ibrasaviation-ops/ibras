// 'use client';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaClipboardCheck, FaUserCheck, FaCalendarCheck, FaBookOpen } from 'react-icons/fa';
import { IconType } from 'react-icons';

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

interface Service {
  icon: IconType;
  label: string;
  description: string;
}

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const services: Service[] = [
  {
    icon: FaClipboardCheck,
    label: 'Checkride Preparation',
    description: 'Comprehensive oral and practical test preparation.',
  },
  {
    icon: FaUserCheck,
    label: 'Mock Checkrides',
    description: 'Realistic FAA-style oral and flight evaluations.',
  },
  {
    icon: FaCalendarCheck,
    label: 'DPE Coordination',
    description: 'Guidance with scheduling your FAA practical test.',
  },
  {
    icon: FaBookOpen,
    label: 'ACS-Based Training',
    description: 'Every lesson aligned with FAA Airman Certification Standards.',
  },
];

/* -------------------------------------------------------------------------- */
/*  ServiceCard                                                               */
/* -------------------------------------------------------------------------- */

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <div className="group flex flex-col gap-4 rounded-3xl border border-border/10 bg-white/40 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/55 shadow-2xl cursor-pointer">
      <div className="flex justify-between items-center gap-3.5">
        {/* Icon container - 48x48 */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background/8 text-primary transition-colors duration-300 group-hover:bg-primary-hover/14">
          <Icon size={20} aria-hidden="true" />
        </div>

        {/* Rounded pill label */}
        <span className="inline-flex items-center rounded-full bg-border px-4 py-2 text-sm font-semibold text-white">
          {service.label}
        </span>
      </div>

      <p className="text-[0.925rem] leading-relaxed text-ink-muted">{service.description}</p>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  AboutServices                                                             */
/* -------------------------------------------------------------------------- */

const AboutServices = () => {
  const leftServices = services.slice(0, 2);
  const rightServices = services.slice(2, 4);

  return (
    <section aria-labelledby="about-services-heading" className="pt-15">
      <div className="mx-auto w-full max-w-6xl">
        {/* Heading */}
        <div className="mx-auto mb-14 flex max-w-162.5 flex-col items-center text-center sm:mb-16 lg:mb-20">
          <span className="mb-4 text-[0.8rem] font-bold uppercase tracking-[0.3em] text-ink-muted">
            FAA Part 61 Training · Miami
          </span>

          <h2
            id="about-services-heading"
            className="font-serif font-bold leading-[1.08] text-ink"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
          >
            Checkride Success
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, var(--color-secondary), var(--color-primary))',
              }}
            >
              Starts Here
            </span>
          </h2>

          <p className="mt-5 text-[1.05rem] leading-[1.75] text-ink-muted">
            One-on-one instruction, realistic mock evaluations, and comprehensive oral preparation
            designed to help you approach your FAA practical test with confidence.
          </p>
        </div>

        {/* Grid: cards / image / cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          {/* Left column */}
          <div className="flex flex-col gap-8 lg:order-1 lg:gap-10 justify-between items-center">
            {leftServices.map((service) => (
              <ServiceCard key={service.label} service={service} />
            ))}
          </div>

          {/* Center image - shown first on mobile */}
          <div className="order-first lg:order-2">
            <div className="relative h-64 overflow-hidden rounded-3xl shadow-[0_24px_60px_-20px_rgba(15,31,61,0.35)] sm:h-80 lg:h-full lg:min-h-130">
              <Image
                src="/traning.jfif"
                alt="Interior cabin of a private jet, showcasing premium seating and finishes"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                priority
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-8 lg:order-3 lg:gap-10 justify-between items-center">
            {rightServices.map((service) => (
              <ServiceCard key={service.label} service={service} />
            ))}
          </div>
        </div>

        {/* CTA */}
        {/* <div className="mt-14 flex justify-center sm:mt-16 lg:mt-20 ">
          <a
            href="#programs"
            className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-ink px-8 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-[0_8px_30px_rgba(15,31,61,0.25)] transition-all duration-300 hover:translate-x-1 hover:bg-[#0a1528] hover:shadow-[0_12px_40px_rgba(15,31,61,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 sm:px-9  cursor-pointer"
          >
            Explore Programs
            <FaArrowRightLong
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div> */}
        <div className="relative z-20 mt-14 flex justify-center sm:mt-16 lg:mt-20">
          <a
            href="#programs"
            className="group relative z-20 inline-flex h-14 cursor-pointer items-center justify-center gap-2.5 rounded-2xl bg-ink px-8 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-[0_8px_30px_rgba(15,31,61,0.25)] transition-all duration-300 hover:translate-x-1 hover:bg-[#0a1528] hover:shadow-[0_12px_40px_rgba(15,31,61,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 sm:px-9"
          >
            Explore Programs
            <FaArrowRightLong
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
