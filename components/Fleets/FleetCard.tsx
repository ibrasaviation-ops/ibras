'use client';
import { useEffect, useRef, useState } from 'react';
import type { Aircraft } from '@/data/fleet';

interface FleetCardProps {
  aircraft: Aircraft;
  index: number;
}

export default function FleetCard({ aircraft, index }: FleetCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Alternate layout: even index = image left, content right; odd index = image right, content left
  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image - positioned based on index */}
      <div className={`relative ${!isEven ? 'order-1 md:order-2' : 'order-2 md:order-1'}`}>
        <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(19,58,124,0.08)] ring-1 ring-ink/5 transition-all duration-500 hover:shadow-[0_12px_60px_rgba(19,58,124,0.15)] hover:ring-secondary/20">
          <img
            src={aircraft.image || '/fleet/placeholder.webp'}
            alt={aircraft.name}
            className="w-full h-75 md:h-100 object-cover transition-transform duration-700 hover:scale-105"
          />

          {/* Premium gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
        </div>
      </div>

      {/* Content - positioned based on index */}
      <div className={`${!isEven ? 'order-2 md:order-1' : 'order-1 md:order-2'}`}>
        {/* Category label */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-px bg-gradient-to-r from-secondary to-transparent" />
          <span className="text-xs text-secondary font-semibold uppercase tracking-wider">
            {aircraft.category}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-serif text-ink mb-1">{aircraft.name}</h2>

        {/* Description */}
        <p className="text-ink-muted leading-relaxed mb-6">{aircraft.description}</p>

        {/* Specs Grid - Premium Cards */}
        <div className="grid grid-cols-2 gap-3">
          {aircraft.specs.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <div
                key={idx}
                className="group flex items-center gap-3 bg-white rounded-xl p-3 border border-ink/5 shadow-sm transition-all duration-300 hover:border-secondary/30 hover:shadow-[0_4px_20px_rgba(19,58,124,0.08)] hover:-translate-y-0.5"
              >
                <div className="p-1.5 rounded-lg bg-gradient-to-br from-secondary/10 to-primary/10 group-hover:from-secondary/20 group-hover:to-primary/20 transition-all duration-300">
                  <Icon className="w-4 h-4 text-secondary shrink-0" />
                </div>
                <div>
                  <p className="text-xs text-ink-faint">{spec.label}</p>
                  <p className="text-sm text-ink font-medium">{spec.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
