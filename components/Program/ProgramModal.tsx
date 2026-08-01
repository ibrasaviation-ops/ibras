'use client';

import type { Program } from '@/data/Programs';
import { FaArrowRight, FaCheck, FaTimes } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import { TriangleAlert } from 'lucide-react';

interface ProgramModalProps {
  program: Program | null;
  isActive: boolean;
  onClose: () => void;
}

export default function ProgramModal({ program, isActive, onClose }: ProgramModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle animation and rendering
  useEffect(() => {
    if (isActive && program) {
      setShouldRender(true);
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isActive, program]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isActive]);

  if (!shouldRender || !program) return null;

  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 z-50 flex items-center justify-center p-4
        transition-opacity duration-200
        ${isVisible ? 'bg-ink/40 backdrop-blur-md' : 'bg-ink/0 backdrop-blur-none opacity-0'}
      `}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className={`
          relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden
          rounded-[28px] border border-ink/10 bg-white/90 shadow-[0_32px_80px_rgba(15,31,61,0.35)] backdrop-blur-2xl
          transition-opacity duration-200
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 flex-shrink-0 border-b border-ink/10 bg-white/85 p-5 backdrop-blur-2xl sm:p-6">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-ink/10 bg-ink/[0.03] p-2 text-ink-faint hover:border-ink/20 hover:bg-ink/[0.06] hover:text-ink sm:right-5 sm:top-5"
            aria-label="Close modal"
          >
            <FaTimes className="text-sm" />
          </button>

          <div className="max-w-[calc(100%-3rem)]">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">
              {program.trainingType || 'Flight Training'}
            </span>

            <h2 className="mt-1.5 font-serif text-2xl font-bold leading-tight text-ink sm:text-3xl">
              {program.title}
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {program.duration && (
                <span className="rounded-full border border-ink/10 bg-ink/[0.03] px-3 py-1 text-sm font-medium text-ink-muted">
                  {program.duration}
                </span>
              )}

              {program.price && (
                <span className="rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1 text-sm font-semibold text-primary">
                  ${program.price.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Scrollable Body - Optimized for fast scrolling */}
        <div
          className="flex-1 overflow-y-auto overscroll-contain p-5 sm:p-6 md:p-8"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'thin',
            willChange: 'scroll-position',
          }}
        >
          <div className="space-y-6">
            {program.bestFor && (
              <div className="rounded-2xl border border-ink/10 bg-surface/[0.03] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
                  Best For
                </p>
                <p className="mt-1 text-base font-medium capitalize leading-relaxed text-ink">
                  {program.bestFor}
                </p>
              </div>
            )}

            {/* Overview */}
            {program.overview && (
              <section>
                <h3 className="mb-2.5 font-serif text-xl font-semibold text-ink">
                  Program Overview
                </h3>
                {program.headLine && (
                  <h4 className="mb-3 font-serif text-lg font-semibold tracking-tight text-secondary">
                    {program.headLine}
                  </h4>
                )}
                <p
                  className="leading-7 text-ink-muted"
                  dangerouslySetInnerHTML={{ __html: program.overview }}
                />
              </section>
            )}

            {/* Learning Outcomes */}
            {program.learningOutcomes && program.learningOutcomes.length > 0 && (
              <section className="rounded-2xl border border-ink/10 bg-white p-4 shadow-[0_4px_16px_rgba(15,31,61,0.04)] sm:p-5">
                <h3 className="mb-4 font-serif text-xl font-semibold text-ink">
                  What You&apos;ll Learn
                </h3>
                <div className="space-y-3">
                  {program.learningOutcomes.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-secondary/20 bg-secondary/[0.08] text-secondary">
                        <FaCheck className="text-[9px]" />
                      </div>
                      <p
                        className="leading-7 text-ink-muted"
                        dangerouslySetInnerHTML={{ __html: detail }}
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Course Includes */}
            {program.courseIncludes && program.courseIncludes.length > 0 && (
              <section className="rounded-2xl border border-ink/10 bg-white p-4 shadow-[0_4px_16px_rgba(15,31,61,0.04)] sm:p-5">
                <h3 className="mb-4 font-serif text-xl font-semibold text-ink">Course Includes</h3>
                <div className="space-y-2.5">
                  {program.courseIncludes.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/[0.08] text-primary">
                        <FaCheck className="text-[9px]" />
                      </div>
                      <p className="text-ink-muted" dangerouslySetInnerHTML={{ __html: item }} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Third Party Fees */}
            {program.thirdPartyFees && (
              <section className="rounded-2xl border border-accent/25 bg-accent/[0.08] p-4">
                <p className="text-sm leading-relaxed text-ink-muted">
                  <span className="font-semibold text-ink">Note:</span> {program.thirdPartyFees}
                </p>
              </section>
            )}

            {/* Disclaimer */}
            {program.disclaimer && (
              <section className="flex items-start gap-3 rounded-2xl border border-secondary/20 bg-secondary/[0.06] p-4">
                <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <p className="text-sm leading-relaxed text-ink-muted">{program.disclaimer}</p>
              </section>
            )}

            {/* CTA Button */}
            <div className="border-t border-ink/10 pt-6">
              <a
                href="#contact"
                onClick={onClose}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl px-6 py-3 font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_24px_rgba(19,58,124,0.35)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_12px_32px_rgba(31,78,154,0.45)]"
                style={{
                  background:
                    'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
                }}
              >
                <span>{program.cta || 'Get Started'}</span>
                <FaArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
