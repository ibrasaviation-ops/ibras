import Image from 'next/image';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';

const InstructorPage = () => {
  const stats = [
    {
      label: 'Years Experience',
      value: '5+',
      icon: Clock,
      description: 'Of professional flight instruction',
    },
    {
      label: 'Students Taught',
      value: '20+',
      icon: Users,
      description: 'From beginner to advanced pilots',
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-[#F0F4F8] px-5 py-24 md:px-8 md:py-32">
      {/* Bright atmospheric overlay - clouds above an airport, morning sky */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid texture for depth */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#133A7C 1px, transparent 1px), linear-gradient(90deg, #133A7C 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        {/* Soft cloud glows */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#5D84D6]/10 blur-3xl" />
        <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-[#1F4E9A]/5 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-[#5D84D6]/5 blur-3xl" />

        {/* Additional subtle wisps */}
        <div className="absolute top-40 left-1/4 h-32 w-64 rounded-full bg-white blur-2xl" />
        <div className="absolute bottom-40 right-1/3 h-24 w-48 rounded-full bg-[#133A7C]/5 blur-2xl" />
        <div className="absolute top-2/3 left-10 h-40 w-40 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Hero Section */}
        <section className="mb-20" aria-labelledby="instructor-heading">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              {/* Heading */}
              <h1
                id="instructor-heading"
                className="font-serif text-4xl font-semibold leading-[1.1] text-[#050B16] md:text-5xl lg:text-6xl"
              >
                Meet{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#1F4E9A] to-[#5D84D6] bg-clip-text text-transparent">
                    Ibrahim
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 rounded-full bg-[#1F4E9A]/20 blur-sm"></span>
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#1F4E9A]"></span>
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#1E293B] md:text-lg lg:mx-0">
                Flight training is more than earning certificates, it's about developing the
                knowledge, judgment, and confidence to fly safely. My goal is to provide
                professional, personalized instruction that helps every student progress efficiently
                while building a strong foundation for long-term success in aviation.
              </p>
            </div>

            {/* Right Column - Instructor Image */}
            <div className="relative flex items-center justify-center">
              <div className="group relative w-full max-w-md overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-2 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-[#1F4E9A]/25">
                {/* Image Container */}
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#1F4E9A]/5 to-[#5D84D6]/5">
                  <Image
                    src="/instructor.jpg"
                    alt="Ibrahim - Certified Flight Instructor standing next to an aircraft"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Soft linear overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B16]/15 via-transparent to-transparent"></div>
                </div>

                {/* Decorative Elements - subtle radial highlights */}
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full border border-[#1F4E9A]/10 bg-[#1F4E9A]/5 blur-2xl"></div>
                <div className="absolute -left-4 -top-4 h-32 w-32 rounded-full border border-[#5D84D6]/10 bg-[#5D84D6]/5 blur-2xl"></div>
                <div className="absolute -bottom-2 -right-2 h-16 w-16 border-2 border-[#1F4E9A]/15"></div>

                {/* Subtle glow behind image on hover */}
                <div className="absolute -inset-4 bg-[#1F4E9A]/5 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
              </div>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="mt-16 flex items-center justify-center gap-4" aria-hidden="true">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#1F4E9A]/30"></div>
            <div className="h-2 w-2 rotate-45 border border-[#1F4E9A]/40"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#1F4E9A]/30"></div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          id="stats"
          className="border-t border-[#E2E8F0] pt-12"
          aria-labelledby="stats-heading"
        >
          <h2 id="stats-heading" className="sr-only">
            Instructor Statistics
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-6 text-center shadow-md transition-all duration-300 hover:border-[#1F4E9A]/25 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Soft gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1F4E9A]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                  {/* Subtle cloud glow inside stat cards */}
                  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#5D84D6]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                  <div className="relative">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#1F4E9A]/10 text-[#1F4E9A] transition-colors group-hover:bg-[#1F4E9A]/15">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-3xl font-bold text-[#1F4E9A]">{stat.value}</div>
                    <div className="mt-1 text-sm font-medium uppercase tracking-wider text-[#050B16]">
                      {stat.label}
                    </div>
                    <p className="mt-2 text-xs text-[#64748B]">{stat.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default InstructorPage;
