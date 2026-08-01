const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      {/* Image Container */}
      <div className="absolute inset-0">
        <img
          src="/fleet-hero.png"
          alt="Ibras Aviation Fleet"
          className="w-full h-full object-cover"
          loading="eager"
        />

        <div className="absolute inset-0 bg-background/25" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-background/80 via-surface/30 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-start justify-start text-left px-8 lg:px-20 pt-32 lg:pt-40">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left — text */}
            <div>
              {/* Eyebrow */}
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-hover drop-shadow-sm sm:mb-4 sm:text-[13px] sm:tracking-[0.3em] md:mb-6 lg:tracking-[0.4em]">
                Training Aircraft &amp; Simulator Access
              </p>

              <h2 className="font-serif text-[2rem] md:text-[3rem] font-bold leading-tight text-white mb-6 drop-shadow-md">
                Real Aircraft. <br />
                Real Training.
                <br /> Real Confidence.
              </h2>

              <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-xl drop-shadow-sm">
                Train in well-maintained, FAA-compliant aircraft including the Cessna 150, Cessna
                172 Skyhawk, and Tecnam P2010, supported by access to a modern flight simulator for
                structured procedural and instrument training. Every lesson combines real-world
                flying with simulator practice to build skill, confidence, and efficiency from day
                one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
