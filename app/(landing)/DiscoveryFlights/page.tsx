'use client';

import { useState } from 'react';
import Image from 'next/image';

import BookingForm from '@/components/BookingForm';
import { FlightData, Flights } from '@/data/flights';

const Page = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [flightData, setSelectedFlight] = useState<FlightData | null>(null);

  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="relative overflow-hidden">
          {/* Hero Image */}
          <div className="absolute inset-x-0 top-0 h-[35vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh]">
            <Image
              src="/fleet-hero.png"
              alt="Discovery Flight in a Cessna 172"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Cards - positioned to overlap hero slightly */}
          <div className="relative z-15 mt-[32vh] px-4 pb-16 sm:mt-[38vh] sm:px-6 md:mt-[42vh] lg:mt-[48vh] lg:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {Flights.map((flight) => (
                  <div
                    key={flight.id}
                    className="mx-auto flex w-full max-w-md flex-col rounded-2xl bg-white shadow-elevated transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-xs"
                  >
                    <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                      <div>
                        <h3 className="mb-3 text-xl font-semibold text-background font-serif sm:text-2xl">
                          {flight.title}
                        </h3>

                        <p className="text-sm leading-7 text-gray-700 sm:text-base">
                          {flight.description}
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setSelectedFlight(flight);
                          setIsBookingOpen(true);
                        }}
                        className="mt-8 w-full rounded-md bg-surface px-5 py-3 text-sm font-semibold text-white transition duration-300 sm:py-3.5 sm:text-base hover:shadow-2xl cursor-pointer"
                      >
                        ${Number(flight.price).toFixed(2)}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="mx-auto mt-14 max-w-4xl lg:max-w-5xl">
                <h2 className="mb-6 text-center text-2xl font-bold text-surface font-serif sm:text-3xl lg:text-4xl md:text-left">
                  Your First Flight Starts Here.
                </h2>

                <p className="mb-6 text-sm leading-7 text-primary sm:text-base sm:leading-8">
                  A Discovery Flight offers a true introduction to aviation, guided by a certified
                  flight instructor from start to finish. You'll meet your instructor, complete a
                  preflight aircraft walkaround, and experience approximately one hour of hands-on
                  flying. Whether you've always dreamed of becoming a pilot or simply want to
                  experience the thrill of flying, this is the perfect first step.
                </p>

                <div className="rounded-card border border-accent/20 bg-accent/5 p-5 rounded-xl">
                  <h3 className="mb-2 text-lg font-semibold text-surface font-serif">
                    Booking Policy
                  </h3>

                  <p className="text-sm leading-7 text-primary-hover sm:text-base">
                    Prices are guaranteed for <strong className="text-surface">30 days</strong>.
                    After that period, your payment remains as a
                    <strong className="text-surface"> non-expiring credit</strong> toward the
                    current Discovery Flight price. All bookings are final and non-refundable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {isBookingOpen && flightData && (
        <BookingForm setOpenForm={setIsBookingOpen} flight={flightData} />
      )}
    </>
  );
};

export default Page;
