'use client';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { CgLoadbar } from 'react-icons/cg';
import { faqData } from '../../data/FAQ';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="FAQ"
      className="relative w-full overflow-hidden bg-white py-24 text-primary md:py-32 snap-start"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(theme(colors.ink) 1px, transparent 1px), linear-gradient(90deg, theme(colors.ink) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />
        {/* Aircraft trajectory curve */}
        <svg
          className="absolute left-[4%] top-24 hidden h-[55%] w-[26%] opacity-[0.06] lg:block"
          viewBox="0 0 300 500"
          fill="none"
        >
          <path
            d="M280 20 C 140 120, 160 340, 20 480"
            stroke="currentColor"
            className="text-ink"
            strokeWidth="1.5"
            strokeDasharray="2 10"
            strokeLinecap="round"
          />
          <circle cx="280" cy="20" r="4" className="fill-highlight" />
          <circle cx="20" cy="480" r="4" className="fill-highlight" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-screen-2xl px-6 md:px-12">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full px-4 py-2 sm:mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink-muted sm:text-[11px] sm:tracking-[0.35em]">
              Flight Training Guide
            </span>
          </div>

          <h2 className="mb-5 text-balance font-serif text-4xl font-bold leading-[1.1] text-ink sm:text-5xl lg:text-[3.25rem]">
            Everything You Need
            <br />
            <span className="bg-linear-to-r from-primary to-highlight bg-clip-text font-medium italic text-transparent">
              Before You Fly
            </span>
          </h2>

          <p className="mx-auto max-w-md text-pretty text-base leading-relaxed text-ink-muted lg:text-lg">
            Clear answers from experienced flight instructors, so you can book your first lesson
            with total confidence.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto max-w-3xl space-y-3.5">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border bg-white/80 backdrop-blur-sm transition-colors duration-200 ${
                  isOpen
                    ? 'border-highlight/40 shadow-[0_14px_34px_-14px_rgba(19,58,124,0.25)]'
                    : 'border-ink-faint/15 shadow-[0_2px_14px_-8px_rgba(15,31,61,0.08)] hover:border-highlight/30 hover:shadow-[0_10px_26px_-12px_rgba(19,58,124,0.18)]'
                }`}
              >
                <span
                  className={`absolute left-0 top-0 h-full w-[3px] bg-linear-to-b from-primary to-highlight transition-opacity duration-200 ${
                    isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                  }`}
                />

                <button
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-8 md:py-6"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base font-semibold leading-snug tracking-tight transition-colors duration-200 md:text-lg ${
                      isOpen ? 'text-primary' : 'text-ink'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm transition-colors duration-200 cursor-pointer ${
                      isOpen
                        ? 'border-highlight/40 bg-primary/10 text-primary rotate-180'
                        : 'border-ink-faint/25 bg-primary/[0.04] text-ink group-hover:border-highlight/40 group-hover:bg-primary/[0.08] '
                    }`}
                  >
                    {isOpen ? <CgLoadbar /> : <FaPlus className="text-xs " />}
                  </span>
                </button>

                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`max-w-xl px-6 pb-6 text-sm leading-relaxed text-ink-muted transition-opacity duration-200 md:px-8 md:pb-7 md:text-[15px] ${
                        isOpen ? 'opacity-100 delay-100' : 'opacity-0'
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
