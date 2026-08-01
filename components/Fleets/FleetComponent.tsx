import { aircraftData } from '@/data/fleet';
import FleetCard from './FleetCard';

// Main FleetComponents component that renders all cards
const FleetComponents = () => {
  return (
    <section className="relative bg-white py-16 md:py-24 px-4 md:px-8 lg:px-20 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient background glow */}
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

      <div className="space-y-20 md:space-y-32">
        {aircraftData.map((aircraft, index) => (
          <FleetCard key={aircraft.id} aircraft={aircraft} index={index} />
        ))}
      </div>
    </section>
  );
};

export default FleetComponents;
