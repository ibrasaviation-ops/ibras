'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// ─── Reviews Data ────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    id: 1,
    name: 'Captain Michael Rodriguez',
    role: 'First Officer, Delta Air Lines',
    avatar: 'MR',
    rating: 5,
    text: 'Ibras Aviation transformed my career. The instructors are world-class, and the structured Part 141 program prepared me for the airlines in ways I never expected. I went from zero to airline-ready in just 18 months.',
    date: 'January 2024',
  },
  {
    id: 2,
    name: 'Sarah Thompson',
    role: 'Commercial Pilot, Private Jet Charter',
    avatar: 'ST',
    rating: 5,
    text: 'The attention to detail at Ibras Aviation is unmatched. The Redbird simulator training was invaluable, and the instructors truly care about your success. I felt confident and prepared for every checkride.',
    date: 'December 2023',
  },
  {
    id: 3,
    name: 'James Williams',
    role: 'CFI, Ibras Aviation Graduate',
    avatar: 'JW',
    rating: 5,
    text: "Training at Ibras Aviation was the best decision of my life. The fleet is well-maintained, the scheduling is flexible, and the community is supportive. Now I'm giving back as a CFI.",
    date: 'November 2023',
  },
  {
    id: 4,
    name: 'Emily Chen',
    role: 'Private Pilot, Aviation Enthusiast',
    avatar: 'EC',
    rating: 5,
    text: 'I came to Ibras Aviation with zero experience and earned my PPL in record time. The instructors break down complex concepts into simple, understandable lessons. Highly recommended!',
    date: 'October 2023',
  },
  {
    id: 5,
    name: 'David Park',
    role: 'First Officer, American Airlines',
    avatar: 'DP',
    rating: 5,
    text: 'The self-examining authority at Ibras Aviation is a game-changer. No waiting weeks for DPEs. I completed my Private and Instrument checkrides in-house. The $300 admin fee is incredibly fair.',
    date: 'September 2023',
  },
  {
    id: 6,
    name: 'Jessica Martinez',
    role: 'Student Pilot',
    avatar: 'JM',
    rating: 5,
    text: 'The environment at Ibras Aviation is encouraging and professional. The multi-engine training was comprehensive, and I felt fully prepared for my commercial checkride. Thank you, Ibras Aviation team!',
    date: 'August 2023',
  },
];

// ─── Star Rating Component ──────────────────────────────────────────────────
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'fill-accent text-accent' : 'fill-gray-300 text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────
const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // ── Determine visible cards based on screen size ─────────────────────
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // ── Navigation ──────────────────────────────────────────────────────
  const maxIndex = Math.max(0, REVIEWS.length - visibleCards);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // ── Touch handlers for swipe ──────────────────────────────────────
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  // ── Auto-play ──────────────────────────────────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  // ── Dot indicators ──────────────────────────────────────────────────
  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const totalDots = maxIndex + 1;

  return (
    <section
      id="reviews"
      className="min-h-screen py-24 lg:py-36 px-5 sm:px-8 lg:px-12 bg-white snap-end"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Header ─────────────────────────────────────────────────── */}
        <div className="text-center mb-14 lg:mb-20">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 text-accent">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
            What Our Pilots Say
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Real stories from real pilots who trained at Ibras Aviation and went on to achieve their
            aviation dreams.
          </p>
        </div>

        {/* ── Carousel ────────────────────────────────────────────────── */}
        <div
          className="relative"
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out py-10"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {REVIEWS.map((review) => (
                <div
                  key={review.id}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  <div className="h-full bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-accent/30 transition-all duration-300 hover:shadow-xl">
                    {/* Rating */}
                    <div className="mb-4">
                      <StarRating rating={review.rating} />
                    </div>

                    {/* Text */}
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 line-clamp-4">
                      "{review.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0 bg-accent">
                        {review.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-black font-semibold text-sm truncate">{review.name}</p>
                        <p className="text-gray-500 text-xs truncate">{review.role}</p>
                        <p className="text-gray-400 text-[10px] mt-0.5">{review.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Navigation Buttons ────────────────────────────────── */}
          {REVIEWS.length > visibleCards && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-black hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 z-10"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-black hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 z-10"
                aria-label="Next reviews"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* ── Dot Indicators ────────────────────────────────────────── */}
        {totalDots > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalDots)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* ── Stats ──────────────────────────────────────────────────── */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-200 pt-12">
          <div className="text-center">
            <p className="text-3xl font-bold text-black">200+</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Graduates</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-black">98%</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Pass Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-black">4.9</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-black">15+</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Aircraft Fleet</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
