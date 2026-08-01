// app/schedule/page.tsx
'use client';

import { useState } from 'react';
import { schadualMeeting } from '../../actions/schadualMeeting';

const SchedulePage = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  // Hardcoded time slots
  const timeSlots = [
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
  ];

  // Generate next 14 days for date selection
  const getDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const dates = getDates();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError(null);
  };

  const validateStep1 = () => {
    if (!selectedDate) {
      setError('Please select a date');
      return false;
    }
    if (!selectedTime) {
      setError('Please select a time slot');
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.firstName.trim()) {
      setError('First name is required');
      return false;
    }
    if (!formData.lastName.trim()) {
      setError('Last name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email address is required');
      return false;
    }
    if (!isValidEmail(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.phone.trim()) {
      setError('Phone number is required');
      return false;
    }
    if (!isValidPhone(formData.phone)) {
      setError('Please enter a valid phone number');
      return false;
    }
    return true;
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone: string) => {
    return /^[\d\s\-()]+$/.test(phone) && phone.replace(/[\s\-()]/g, '').length >= 10;
  };

  const handleNext = () => {
    setError(null);
    if (step === 1) {
      if (validateStep1()) {
        setStep(2);
      }
    } else if (step === 2) {
      if (validateStep2()) {
        setStep(3);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setIsLoading(true);

    try {
      const appointmentData = {
        selectedDate,
        selectedTime,
        ...formData,
      };

      const result = await schadualMeeting(appointmentData);

      if (result.success) {
        setSuccessMessage(
          'Your appointment has been booked successfully! We will send you a confirmation email shortly.'
        );
        setTimeout(() => {
          setStep(1);
          setSelectedDate('');
          setSelectedTime('');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
          });
          setSuccessMessage(null);
        }, 5000);
      } else {
        setError(result.message || 'Failed to book appointment. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDateForDisplay = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-[#F8FAFC] to-[#F0F4F8] pt-24 pb-20 md:pt-28">
      {/* Bright atmospheric overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#133A7C 1px, transparent 1px), linear-gradient(90deg, #133A7C 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#5D84D6]/10 blur-3xl" />
        <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-[#1F4E9A]/5 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-[#5D84D6]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5">
        {/* Header */}
        <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.45em] text-secondary md:text-xs">
          Begin Your Journey
        </p>
        <h1 className="text-center font-serif text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-ink md:text-5xl">
          Book a School Tour
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-ink-muted">
          Step inside Ibras Aviation. Walk through our hangar, see the fleet up close, sit in our
          Redbird FMX simulator, and meet the instructors who train tomorrow's airline pilots. Bring
          your questions about programs, financing, and admissions — we'll answer all of them.
        </p>

        {/* Error/Success Messages */}
        {error && (
          <div className="mt-6 rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
            <div className="flex items-start gap-3">
              <svg
                className="h-5 w-5 text-red-500 mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          </div>
        )}

        {successMessage && (
          <div className="mt-6 rounded-xl bg-green-50 border border-green-200 p-4 text-sm text-green-700">
            <div className="flex items-start gap-3">
              <svg
                className="h-5 w-5 text-green-500 mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{successMessage}</span>
            </div>
          </div>
        )}

        {/* Progress Indicator */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`relative flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold shadow-sm transition-all duration-300 ${
                  s === step
                    ? 'bg-secondary text-white shadow-md ring-4 ring-secondary/15'
                    : s < step
                    ? 'bg-secondary/10 text-secondary border border-secondary/30'
                    : 'bg-white text-ink-faint border border-border'
                }`}
              >
                {s < step ? (
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  s
                )}
              </div>
              {s < 3 && (
                <div
                  className={`h-px w-10 transition-colors duration-300 ${
                    s < step ? 'bg-secondary/40' : 'bg-border'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Date & Time Selection */}
        {step === 1 && (
          <div className="mt-10 space-y-8 rounded-2xl  bg-white p-6 shadow-md md:p-8">
            <div>
              <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-ink">
                Select Date
              </label>
              <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-7">
                {dates.map((date, index) => {
                  const dateStr = date.toISOString().split('T')[0];
                  const isSelected = selectedDate === dateStr;
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedDate(dateStr);
                        setError(null);
                      }}
                      className={`rounded-xl border p-2.5 text-center text-xs transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'border-secondary bg-secondary/5 text-ink ring-2 ring-secondary/20 shadow-md -translate-y-0.5'
                          : 'border-border bg-white text-ink-faint hover:border-secondary/40 hover:bg-secondary/3 hover:-translate-y-0.5'
                      }`}
                    >
                      <div className="text-[10px] uppercase text-ink-faint">
                        {date.toLocaleDateString('en-US', { weekday: 'short' })}
                      </div>
                      <div className="text-sm font-semibold text-ink">{date.getDate()}</div>
                      <div className="text-[10px] text-ink-faint">
                        {date.toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-ink">
                Select Time{' '}
                <span className="text-[10px] font-normal normal-case text-ink-faint">
                  (Eastern Time)
                </span>
              </label>
              <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4">
                {timeSlots.map((time, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedTime(time);
                      setError(null);
                    }}
                    className={`rounded-xl border p-3 text-center text-sm font-medium transition-all duration-200 cursor-pointer ${
                      selectedTime === time
                        ? 'border-secondary bg-secondary/5 text-ink ring-2 ring-secondary/20 shadow-md -translate-y-0.5'
                        : 'border-border bg-white text-ink-faint hover:border-secondary/40 hover:bg-secondary/3 hover:-translate-y-0.5'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                disabled={!selectedDate || !selectedTime}
                className="rounded-xl bg-secondary px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-secondary-hover hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-md cursor-pointer"
              >
                Next Step →
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Personal Information */}
        {step === 2 && (
          <form
            className="mt-10 space-y-6 rounded-2xl  bg-white p-6 shadow-md md:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink-muted">
                  First Name <span className="text-secondary">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-border bg-[#F8FAFC] px-4 py-3.5 text-ink placeholder:text-ink-faint transition-all focus:border-secondary focus:bg-white focus:outline-none focus:ring-4 focus:ring-secondary/10"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink-muted">
                  Last Name <span className="text-secondary">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-border bg-[#F8FAFC] px-4 py-3.5 text-ink placeholder:text-ink-faint transition-all focus:border-secondary focus:bg-white focus:outline-none focus:ring-4 focus:ring-secondary/10"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink-muted">
                Email Address <span className="text-secondary">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-border bg-[#F8FAFC] px-4 py-3.5 text-ink placeholder:text-ink-faint transition-all focus:border-secondary focus:bg-white focus:outline-none focus:ring-4 focus:ring-secondary/10"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink-muted">
                Phone Number <span className="text-secondary">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-border bg-[#F8FAFC] px-4 py-3.5 text-ink placeholder:text-ink-faint transition-all focus:border-secondary focus:bg-white focus:outline-none focus:ring-4 focus:ring-secondary/10"
                placeholder="(555) 555-5555"
                required
              />
            </div>

            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={handleBack}
                className="rounded-xl border border-border bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink-muted transition-all duration-300 hover:border-secondary/30 hover:bg-secondary/3 hover:text-ink cursor-pointer"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={
                  !formData.firstName || !formData.lastName || !formData.email || !formData.phone
                }
                className="rounded-xl bg-secondary px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-secondary-hover hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-md cursor-pointer"
              >
                Review Booking →
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="mt-10">
            <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl">
              {/* Atmospheric highlight */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-highlight/10 blur-3xl" />

              <div className="relative mb-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 ring-4 ring-secondary/5">
                  <svg
                    className="h-8 w-8 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="font-serif text-2xl font-semibold text-ink">
                  Confirm Your Appointment
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Please review your details before booking
                </p>
              </div>

              <div className="relative space-y-0 divide-y divide-border rounded-xl border border-border bg-[#F8FAFC] px-5">
                <div className="flex justify-between py-3.5">
                  <span className="text-sm text-ink-muted">Date</span>
                  <span className="text-sm font-semibold text-ink">
                    {formatDateForDisplay(selectedDate)}
                  </span>
                </div>
                <div className="flex justify-between py-3.5">
                  <span className="text-sm text-ink-muted">Time</span>
                  <span className="text-sm font-semibold text-ink">{selectedTime} (ET)</span>
                </div>
                <div className="flex justify-between py-3.5">
                  <span className="text-sm text-ink-muted">Name</span>
                  <span className="text-sm font-semibold text-ink">
                    {formData.firstName} {formData.lastName}
                  </span>
                </div>
                <div className="flex justify-between py-3.5">
                  <span className="text-sm text-ink-muted">Email</span>
                  <span className="text-sm font-semibold text-ink">{formData.email}</span>
                </div>
                <div className="flex justify-between py-3.5">
                  <span className="text-sm text-ink-muted">Phone</span>
                  <span className="text-sm font-semibold text-ink">{formData.phone}</span>
                </div>
              </div>

              <div className="relative mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={isLoading}
                  className="rounded-xl border border-border bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink-muted transition-all duration-300 hover:border-secondary/30 hover:bg-secondary/3 hover:text-ink cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ← Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="relative rounded-xl bg-secondary px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-secondary-hover hover:shadow-lg hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">Booking...</span>
                  ) : (
                    'Book Appointment'
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchedulePage;
