// app/fleet/page.tsx
'use client';
import Hero from '@/components/Fleets/Hero';
import FleetComponents from '@/components/Fleets/FleetComponent';
import SimulatorCTA from '@/components/Fleets/SimulatorCTA';
const Page = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      
      <Hero />
      <FleetComponents />
      <SimulatorCTA />
    </div>
  );
};

export default Page;
