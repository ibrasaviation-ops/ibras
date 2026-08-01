'use client';
import { useState } from 'react';
import ProgramCard from '../Program/ProgramCard';
import { program1, program2, program3 } from '@/data/Programs';
import ProgramModal from '../Program/ProgramModal';
import type { Program } from '@/data/Programs';

const CATEGORIES = [
  { label: 'Professional Training Services', number: '01', data: program1 },
  { label: 'Recurrent & Proficiency Services', number: '02', data: program2 },
  { label: 'Advanced Pilot Services', number: '03', data: program3 },
];

const Program = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleOpenModal = (program: any) => {
    setSelectedProgram(program);
    setIsModalActive(true);
  };

  const handleCloseModal = () => {
    setIsModalActive(false);
    setTimeout(() => {
      setSelectedProgram(null);
    }, 200);
  };

  return (
    <section
      id="programs"
      className="relative w-full overflow-hidden bg-white py-24 text-ink md:py-32 snap-start"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--color-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--color-primary) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 75% 65% at 50% 0%, black 40%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 75% 65% at 50% 0%, black 40%, transparent 100%)',
          }}
        />
        {/* Light accents */}
        <div className="absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-secondary/6 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-screen-2xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-20 max-w-3xl md:mb-28">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full px-4 py-2 sm:mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink-muted sm:text-[11px] sm:tracking-[0.35em]">
              Courses
            </span>
          </div>

          <h2 className="text-balance font-serif text-4xl font-bold uppercase leading-[0.98] tracking-tight text-ink md:text-5xl lg:text-6xl">
            Every Stage of Flight Training,
            <br className="my-2 hidden sm:block" />
            <span className="bg-linear-to-r from-primary to-secondary-hover bg-clip-text text-transparent">
              One Instructor
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl">
            From first lesson to checkride ready. Personalized training, built around you.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-16 md:gap-20">
          {CATEGORIES.map((category) => (
            <div key={category.label} className="flex flex-col gap-6 md:gap-8">
              {/* Category header */}
              <div className="flex items-baseline gap-4 border-l-2 border-secondary/40 pl-5 md:gap-5 md:pl-6">
                <h3 className="font-serif text-xl font-bold uppercase tracking-wide text-ink md:text-2xl">
                  {category.label}
                </h3>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
                {category.data.map((program, index) => (
                  <ProgramCard key={index} program={program} onOpenModal={handleOpenModal} />
                ))}
              </div>
            </div>
          ))}

          {/* Disclaimer */}
          <p className="mt-4 max-w-3xl border-t border-ink/10 pt-6 text-sm leading-relaxed text-ink-faint">
            Pricing shown reflects our members-only rate, based on FAA-minimum requirements; actual
            cost may vary with each student&apos;s progress and is subject to change.
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalActive && selectedProgram && (
        <ProgramModal
          program={selectedProgram}
          isActive={isModalActive}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default Program;
