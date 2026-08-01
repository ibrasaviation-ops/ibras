'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';

const TSAPage = () => {
  const router = useRouter();

  // Data for the fee table
  const feeData = [
    { item: 'Application', cost: '$140' },
    { item: 'NATA Application', cost: '$99' },
    { item: 'Fingerprinting', cost: '$100' },
  ];

  // Step data
  const steps = [
    {
      number: 1,
      title: 'Basic Information',
      desc: 'Provide your full name, date of birth, country of birth, height, weight, gender, eye color, and hair color.',
    },
    {
      number: 2,
      title: 'Other Names',
      desc: "List any other names you've used (leave blank if none).",
    },
    {
      number: 3,
      title: 'Citizenship Information',
      desc: "Include your country of citizenship and whether it's current, dual, or historical. If you were born in that country, use your date of birth as the start date.",
    },
    {
      number: 4,
      title: 'Upload Documents',
      desc: 'Upload a valid passport and approved visa. Fill in all document details as requested.',
    },
    {
      number: 5,
      title: 'Addresses',
      desc: 'Enter your current address and a five-year address history.',
    },
    {
      number: 6,
      title: 'Employment',
      desc: 'Indicate your status (student, unemployed, or employed) and provide employment details if applicable.',
    },
  ];

  // Training requirements data
  const trainingTypes = [
    {
      title: 'Initial pilot certification',
      desc: 'Whether private, recreational, sport pilot, fixed-wing, rotorcraft, on land, on sea, etc., because such training provides a pilot with basic piloting skills.',
    },
    {
      title: 'Instrument Rating',
      desc: "Because such training enhances a pilot's abilities to pilot an aircraft in bad weather or at night and enables a pilot to better understand the instruments and physiological experiences of flying without reference to visual cues outside the aircraft.",
    },
    {
      title: 'Multi-Engine Rating',
      desc: "Because such training enhances a pilot's ability to pilot larger aircraft with more than one engine.",
    },
    {
      title: 'Type rating',
      desc: 'A specific certification a pilot obtains to operate a certain type of aircraft, because this training is required beyond the initial, multi-engine, and instrument certifications.',
    },
    {
      title: 'Recurrent training for type rating',
      desc: 'Required to maintain or renew a type rating already held by a pilot.',
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-b from-[#F8FAFC] to-[#F0F4F8] pt-24 pb-24 md:pt-32">
      {/* Bright atmospheric overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern for texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-linear(#133A7C 1px, transparent 1px), linear-linear(90deg, #133A7C 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        {/* Soft cloud glows in light blue/white tones */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#5D84D6]/10 blur-3xl" />
        <div className="absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-[#1F4E9A]/5 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-[#5D84D6]/5 blur-3xl" />

        {/* Additional subtle wisps */}
        <div className="absolute top-20 left-1/4 h-32 w-64 rounded-full bg-white blur-2xl" />
        <div className="absolute bottom-40 right-1/3 h-24 w-48 rounded-full bg-[#133A7C]/5 blur-2xl" />
      </div>

      <article className="relative z-10 mx-auto max-w-3xl px-5 md:px-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#64748B] transition-all hover:text-[#050B16] cursor-pointer"
        >
          <FaArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
          Back
        </button>

        {/* Header */}
        <header className="mt-10">
          <span className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#1F4E9A] sm:mb-4 sm:text-[13px] sm:tracking-[0.3em] md:mb-6 lg:tracking-[0.4em]">
            International Students
          </span>

          <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-[#050B16] md:text-5xl lg:text-6xl">
            TSA Clearance Requirements
          </h1>
          <p className="mt-4 text-lg font-medium leading-relaxed text-[#1F4E9A]">
            Stay compliant, fly confidently — TSA clearance made simple.
          </p>
          <p className="mt-6 text-base leading-relaxed text-[#1E293B]">
            At Ibras Aviation, your safety and compliance with federal regulations are our top
            priorities. If you are a non-U.S. citizen or non-U.S. National seeking flight training
            in the United States, the Transportation Security Administration (TSA) requires that you
            obtain official clearance before beginning certain types of flight training.
          </p>
        </header>

        {/* Divider */}
        <div className="my-12 h-px bg-linear-to-r from-transparent via-[#E2E8F0] to-transparent" />

        {/* Who Needs TSA Clearance? */}
        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#050B16] md:text-3xl">
            Who Needs TSA Clearance?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#1E293B]">
            You will need TSA approval if you are:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-1.5 text-base leading-relaxed text-[#1E293B] [&>li::marker]:text-[#1F4E9A]">
            <li>Not a U.S. citizen or U.S. national, and</li>
            <li>Planning to train in an aircraft or simulator toward any of the following:</li>
          </ul>
        </section>

        {/* Training Types List */}
        <dl className="mt-6 space-y-3">
          {trainingTypes.map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#E2E8F0] border-l-4 border-l-[#1F4E9A]/40 bg-white p-6 shadow-md transition-all duration-300 hover:border-l-[#1F4E9A] hover:shadow-lg md:p-7"
            >
              <dt className="flex items-start gap-3 text-base font-semibold text-[#050B16]">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1F4E9A]/10 text-[10px] font-bold text-[#1F4E9A]">
                  {index + 1}
                </span>
                {item.title}
              </dt>
              <dd className="mt-2 pl-8 text-sm leading-relaxed text-[#64748B]">{item.desc}</dd>
            </div>
          ))}
        </dl>

        {/* US Citizens Note */}
        <div className="mt-10 rounded-2xl border border-[#1F4E9A]/20 bg-[#1F4E9A]/[0.04] p-6 md:p-8">
          <p className="text-sm leading-relaxed text-[#1E293B]">
            <strong className="text-[#050B16]">U.S. citizens</strong> do not need TSA approval but
            must present valid proof of citizenship to Ibras Aviation (such as a U.S. passport or
            birth certificate with government-issued photo ID) prior to training.
          </p>
        </div>

        {/* How to Apply */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-[#050B16] md:text-3xl">
            How to Apply for TSA Clearance
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#1E293B]">
            <strong className="text-[#050B16]">Log into the TSA Website.</strong>{' '}
            <a
              href="https://www.fts.tsa.dhs.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#1F4E9A] transition-colors hover:underline"
            >
              Click here to access the TSA website
              <FaExternalLinkAlt className="h-3 w-3" />
            </a>
            .
          </p>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-base leading-relaxed text-[#1E293B] [&>li::marker]:text-[#1F4E9A]">
            <li>If you&apos;ve previously registered, log in using your User ID and Password.</li>
            <li>
              If you&apos;re a new user, click{' '}
              <strong className="text-[#050B16]">&ldquo;Create New Student Account&rdquo;</strong>{' '}
              (top right, below the login). TSA will email your User ID and Password — make a note
              of this along with the answers to your three security questions, then return to the
              TSA website and log in to begin your application.
            </li>
          </ul>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-[#050B16] md:text-3xl">
            Step-by-Step Application Guide
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#1E293B]">
            From the <strong className="text-[#050B16]">Manage My Personal Information</strong>{' '}
            section:
          </p>

          <ol className="mt-6 space-y-3">
            {steps.map((step) => (
              <li
                key={step.title}
                className="flex gap-5 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:p-7"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#1F4E9A]/30 bg-[#1F4E9A]/5 text-sm font-bold text-[#1F4E9A]">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[#050B16]">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Create & Submit */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-[#050B16] md:text-3xl">
            Create &amp; Submit Your Application
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#1E293B]">
            Once you have entered all your personal information, you may proceed to creating your
            application and submitting payment of the{' '}
            <strong className="text-[#050B16]">$140 application fee</strong>.
          </p>

          <h3 className="mt-8 font-serif text-xl font-semibold text-[#050B16] md:text-2xl">
            Fingerprints
          </h3>
          <p className="mt-4 text-base leading-relaxed text-[#1E293B]">
            You will receive an email titled{' '}
            <strong className="text-[#050B16]">
              &ldquo;Documents Accepted / Fingerprint Instructions.&rdquo;
            </strong>{' '}
            Ibras Aviation will assist you with fingerprint scheduling. For your appointment, print
            and bring:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-1.5 text-base leading-relaxed text-[#1E293B] [&>li::marker]:text-[#1F4E9A]">
            <li>Your TSA Fingerprint Email</li>
            <li>A completed NATA Form</li>
            <li>Your passport</li>
          </ul>
        </section>

        {/* Fees Table */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-md">
          <div className="bg-[#F8FAFC] px-6 py-4 border-b border-[#E2E8F0]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#64748B]">
              Required Fees
            </p>
          </div>
          <table className="w-full text-left">
            <tbody>
              {feeData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-[#E2E8F0] last:border-b-0 transition-colors hover:bg-[#F8FAFC] ${
                    index % 2 === 1 ? 'bg-[#F8FAFC]/50' : 'bg-white'
                  }`}
                >
                  <td className="px-6 py-4 text-sm text-[#1E293B]">{row.item}</td>
                  <td className="px-6 py-4 text-right text-sm font-medium text-[#050B16]">
                    {row.cost}
                  </td>
                </tr>
              ))}
              <tr className="border-t border-[#E2E8F0] bg-[#1F4E9A]/[0.04]">
                <td className="px-6 py-4 text-sm font-semibold uppercase tracking-wide text-[#050B16]">
                  Total
                </td>
                <td className="px-6 py-4 text-right text-lg font-bold text-[#1F4E9A]">$339</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* After Clearance */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-[#050B16] md:text-3xl">
            After Clearance
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-[#1E293B]">
            <p>
              You must select a flight training provider from the portal to participate in flight
              training. You cannot use the portal to set up flight training events — only a provider
              you select can create a training event for you. All flight training arrangements are
              made between you and the provider; TSA is not involved in determining what flight
              training you receive.
            </p>
            <p>
              Providers are required by regulation to record your flight training events on the
              portal. You can view events providers have created for you by logging into your
              account and scrolling down on the Home page to see a table listing all of your
              training events.
            </p>
            <div className="rounded-2xl border border-[#1F4E9A]/20 bg-[#1F4E9A]/[0.04] p-6">
              <p className="text-sm font-medium text-[#050B16]">
                <span className="text-[#1F4E9A]">Important:</span> You must select{' '}
                <strong>Ibras Aviation</strong> as your flight provider to receive your clearance
                for the appropriate training.
              </p>
            </div>
          </div>

          <h3 className="mt-8 font-serif text-xl font-semibold text-[#050B16] md:text-2xl">
            How Long Does It Take?
          </h3>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-[#1E293B]">
            <p>
              TSA processing typically takes{' '}
              <strong className="text-[#050B16]">1 to 4 weeks</strong>, depending on your background
              and fingerprint submission. We recommend starting the process as early as possible to
              avoid training delays.
            </p>
            <p>
              If you have questions or need assistance with your TSA application, our team is here
              to help. Please contact us directly — we&apos;re happy to walk you through the
              process.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="my-16 h-px bg-linear-to-r from-transparent via-[#E2E8F0] to-transparent" />

        {/* Call to Action */}
        <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
          <Link
            href="/DiscoveryFlights"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-sm bg-[#1F4E9A] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#133A7C] hover:shadow-lg active:scale-95 sm:w-auto sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.25em]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="whitespace-nowrap">Book a Discovery Flight</span>
              <FaArrowRightLong className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-1 sm:h-4 sm:w-4" />
            </span>
            <div className="absolute inset-0 -translate-y-full bg-linear-to-t from-white/10 to-transparent transition-transform duration-300 group-hover/btn:translate-y-0" />
          </Link>

          <Link
            href="/application"
            rel="noopener noreferrer"
            className="group/btn2 relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-sm border border-[#E2E8F0] bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#050B16] transition-all duration-300 hover:border-[#1F4E9A] hover:bg-[#1F4E9A]/5 active:scale-95 sm:w-auto sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.25em]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="whitespace-nowrap">Start Flight Training</span>
              <ChevronRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover/btn2:translate-x-1 group-hover/btn2:opacity-100 sm:h-4 sm:w-4" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-[#1F4E9A]/5 to-transparent transition-transform duration-300 group-hover/btn2:translate-x-0" />
          </Link>
        </div>
      </article>
    </main>
  );
};

export default TSAPage;
