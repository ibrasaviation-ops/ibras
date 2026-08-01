// components/DiscoveryFlights/BookingForm.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { X, Phone } from 'lucide-react';
import type { FlightData } from '@/data/flights';
import { boookFlightAction } from '../app/actions/bookFlight';

interface BookingFormProps {
  setOpenForm: (open: boolean) => void;
  flight: FlightData;
}

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  streetAddress: string;
  apartment: string;
  city: string;
  state: string;
  zipCode: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ setOpenForm, flight }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const total = flight.price + flight.subCharges;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const validateForm = (): boolean => {
    const { firstName, lastName, email, phone, streetAddress, city, state, zipCode } = customerInfo;

    if (!firstName.trim()) {
      setError('First name is required');
      return false;
    }
    if (!lastName.trim()) {
      setError('Last name is required');
      return false;
    }
    if (!email.trim()) {
      setError('Email address is required');
      return false;
    }
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!phone.trim()) {
      setError('Phone number is required');
      return false;
    }
    if (!isValidPhone(phone)) {
      setError('Please enter a valid phone number');
      return false;
    }
    if (!streetAddress.trim()) {
      setError('Street address is required');
      return false;
    }
    if (!city.trim()) {
      setError('City is required');
      return false;
    }
    if (!state.trim()) {
      setError('State is required');
      return false;
    }
    if (!zipCode.trim()) {
      setError('ZIP code is required');
      return false;
    }
    if (!isValidZipCode(zipCode)) {
      setError('Please enter a valid ZIP code');
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

  const isValidZipCode = (zip: string) => {
    return /^\d{5}(-\d{4})?$/.test(zip);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const bookingData = {
        flightId: flight.id,
        customer: customerInfo,
        total: total,
        flightTitle: flight.title,
      };

      const result = await boookFlightAction({
        customer: customerInfo,
        total: total,
        flightTitle: flight.title,
      });

      if (result.success) {
        console.log('Booking Data:', bookingData);
        setIsSuccess(true);
        setTimeout(() => {
          setOpenForm(false);
          setIsSuccess(false);
        }, 3000);
      } else {
        setError(result.message || 'Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Booking failed:', error);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenForm(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [setOpenForm]);

  // Prevent body scroll when form is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      {/* Backdrop - Light overlay with blur */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
        onClick={() => setOpenForm(false)}
      />

      {/* Modal - Light theme with rounded corners */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
        <div
          className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden relative border border-border/50 flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header - Fixed at top */}
          <div className="flex-shrink-0 flex items-center justify-between p-4 sm:p-6 border-b border-border/50 bg-white/95 backdrop-blur-sm z-10">
            <h2 className="text-xl sm:text-2xl font-bold text-ink">Complete Your Purchase</h2>
            <button
              onClick={() => setOpenForm(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close booking form"
            >
              <X className="w-5 h-5 text-ink-muted hover:text-ink" />
            </button>
          </div>

          {/* Modal Body - Scrollable */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 relative">
            {/* Subtle atmospheric effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-highlight/10 blur-3xl" />
            </div>

            {isSuccess ? (
              <div className="text-center py-8 sm:py-12 relative z-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-ink">Booking Confirmed!</h3>
                <p className="text-ink-muted mt-2">
                  We'll send you the confirmation details shortly.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
                {/* Checkout Form - Left Side */}
                <div className="lg:col-span-2">
                  {error && (
                    <div className="mb-4 rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                      <div className="flex items-start gap-2">
                        <svg
                          className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0"
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

                  <form onSubmit={handleSubmit}>
                    <div>
                      {/* Customer Information */}
                      <div>
                        <h3 className="text-lg font-semibold text-ink mb-4">
                          Customer Information
                        </h3>

                        {/* First & Last Name Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <div>
                            <input
                              type="text"
                              name="firstName"
                              required
                              value={customerInfo.firstName}
                              onChange={handleChange}
                              placeholder="First Name"
                              className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition placeholder:text-ink-faint bg-white text-ink"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              name="lastName"
                              required
                              value={customerInfo.lastName}
                              onChange={handleChange}
                              placeholder="Last Name"
                              className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition placeholder:text-ink-faint bg-white text-ink"
                            />
                          </div>
                        </div>

                        {/* Email & Phone Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <div>
                            <input
                              type="email"
                              name="email"
                              required
                              value={customerInfo.email}
                              onChange={handleChange}
                              placeholder="Email"
                              className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition placeholder:text-ink-faint bg-white text-ink"
                            />
                          </div>
                          <div>
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={customerInfo.phone}
                              onChange={handleChange}
                              placeholder="Phone"
                              className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition placeholder:text-ink-faint bg-white text-ink"
                            />
                          </div>
                        </div>

                        {/* Street Address */}
                        <div className="mb-3 sm:mb-4">
                          <input
                            type="text"
                            name="streetAddress"
                            required
                            value={customerInfo.streetAddress}
                            onChange={handleChange}
                            placeholder="Street Address"
                            className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition placeholder:text-ink-faint bg-white text-ink"
                          />
                        </div>

                        {/* Apartment (optional) */}
                        <div className="mb-3 sm:mb-4">
                          <input
                            type="text"
                            name="apartment"
                            value={customerInfo.apartment}
                            onChange={handleChange}
                            placeholder="Apartment, suite, etc. (optional)"
                            className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition placeholder:text-ink-faint bg-white text-ink"
                          />
                        </div>

                        {/* City, State, ZIP Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                          <div>
                            <input
                              type="text"
                              name="city"
                              required
                              value={customerInfo.city}
                              onChange={handleChange}
                              placeholder="City"
                              className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition placeholder:text-ink-faint bg-white text-ink"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              name="state"
                              required
                              value={customerInfo.state}
                              onChange={handleChange}
                              placeholder="State"
                              className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition placeholder:text-ink-faint bg-white text-ink"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              name="zipCode"
                              required
                              value={customerInfo.zipCode}
                              onChange={handleChange}
                              placeholder="ZIP Code"
                              className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition placeholder:text-ink-faint bg-white text-ink"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Form Actions */}
                      <div className="mt-6">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-secondary hover:bg-secondary-hover text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-[0_4px_20px_rgba(31,78,154,0.3)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none cursor-pointer"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                              </svg>
                              Processing...
                            </span>
                          ) : (
                            'Submit'
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Order Summary - Right Side */}
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 sticky top-6 border border-border/50">
                    <div>
                      {/* Product */}
                      <div className="mb-4">
                        <div>
                          <h4 className="font-semibold text-ink">{flight.title}</h4>
                          <p className="text-sm text-ink-muted mt-1">{flight.description}</p>
                        </div>
                      </div>

                      <hr className="border-border my-4" />

                      {/* Price Breakdown */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-ink-muted">Subtotal</span>
                          <span className="font-medium text-ink">${flight.price.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-ink-muted">Surcharge</span>
                          <span className="font-medium text-ink">
                            ${flight.subCharges.toFixed(2)}
                          </span>
                        </div>

                        <hr className="border-border my-4" />

                        <div className="flex justify-between text-lg font-bold">
                          <span className="text-ink">Total</span>
                          <span className="text-secondary">${total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Company Info */}
                    <div className="mt-6 pt-4 border-t border-border">
                      <div>
                        <div>
                          <h4 className="font-semibold text-ink">Ibras Aviation</h4>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-sm text-ink-muted">
                          <Phone className="w-4 h-4 text-ink-muted" />
                          <span>+1 (954) 799-2097</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
