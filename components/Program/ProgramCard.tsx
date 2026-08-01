'use client';

import { ArrowRight, Clock } from 'lucide-react';
import { Program } from '@/data/Programs';

interface ProgramCardProps {
  program: Program;
  onOpenModal: (program: Program) => void;
}

export default function ProgramCard({ program, onOpenModal }: ProgramCardProps) {
  // Format price
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(program.price || 0);

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white/70 p-6 shadow-[0_4px_20px_rgba(15,31,61,0.06)] backdrop-blur-xl transition-colors duration-200 hover:border-secondary/40">
      {/* Gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-secondary/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

      {/* Top border */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-secondary/50 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

      <span className="relative mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-secondary">
        {program.shortCode}
      </span>

      {/* Category Badge */}
      {program.bestFor && (
        <div className="relative mb-3 flex items-center justify-end">
          <span className="rounded-full border border-primary/15 bg-primary/[0.06] px-2.5 py-0.5 text-[9px] font-medium capitalize text-primary">
            {program.bestFor}
          </span>
        </div>
      )}

      {/* Title */}
      <h3 className="relative mb-2 line-clamp-2 font-serif text-xl font-bold leading-tight text-ink">
        {program.title}
      </h3>

      {/* Description */}
      {program.overview && (
        <p
          className="relative mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-muted"
          dangerouslySetInnerHTML={{ __html: program.overview }}
        />
      )}

      {/* Price & Duration */}
      <div className="relative flex flex-col border-t border-ink/10 pt-4">
        {program.price && (
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-[28px] font-bold leading-none tracking-tight text-ink">
                {formattedPrice}
              </span>
              <span className="text-[11px] font-medium text-ink-faint">USD</span>
            </div>
            {program.duration && (
              <div className="mt-1.5 flex items-center gap-1.5 text-xs text-ink-faint">
                <Clock size={12} />
                <span>{program.duration}</span>
              </div>
            )}
          </div>
        )}

        {/* CTA */}
        <button
          onClick={() => onOpenModal(program)}
          className="group/btn relative mt-6 inline-flex w-fit cursor-pointer items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-primary transition-colors duration-200 hover:text-secondary-hover sm:mt-8 sm:text-xs"
        >
          <span className="relative">
            Read More
            <span className="absolute -bottom-1 left-0 h-px w-full bg-primary/20" />
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-secondary-hover transition-all duration-200 group-hover/btn:w-full" />
          </span>
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover/btn:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
}
