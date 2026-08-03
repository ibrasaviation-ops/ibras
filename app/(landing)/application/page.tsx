'use client';
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Select from 'react-select';
import { StudentRegistration } from '../../actions/registrationAction';
import { FormData, formSchema } from '../../../libs/schema/registrationSchema';
import { toast } from 'react-toastify';
import { program1, program2, program3 } from '@/data/Programs';

// Course options
const allPrograms = [...program1, ...program2, ...program3];

const courseOptions = allPrograms.map((program) => {
  const formatted = `${program.title} (${program.shortCode})`;
  return {
    value: formatted,
    label: formatted,
  };
});

// Custom styles for react-select - Light theme with global variables
const selectStyles = {
  control: (base: any) => ({
    ...base,
    backgroundColor: 'white',
    borderColor: '#e2e8f0',
    borderRadius: '12px',
    padding: '2px 4px',
    boxShadow: 'none',
    '&:hover': {
      borderColor: 'var(--color-secondary)',
    },
    '&:focus-within': {
      borderColor: 'var(--color-secondary)',
      boxShadow: '0 0 0 3px rgba(31, 78, 154, 0.2)',
    },
  }),
  placeholder: (base: any) => ({
    ...base,
    color: 'var(--color-ink-faint)',
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: '12px',
    overflow: 'hidden',
    marginTop: '4px',
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isFocused ? 'var(--color-secondary)' : 'white',
    color: state.isFocused ? 'white' : 'var(--color-background)',
    '&:active': {
      backgroundColor: 'var(--color-primary)',
    },
  }),
};

export default function AdmissionForm() {
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      course: '',
      authorization: '',
    },
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const result = await StudentRegistration(data);

      if (result.success) {
        setSuccessMessage(
          'Your application has been submitted successfully! Our admissions team will contact you shortly.'
        );

        reset();

        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      } else {
        setErrorMessage(result.message || 'Something went wrong. Please try again later.');

        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      }
    } catch (error) {
      console.error('Submission error:', error);

      setErrorMessage('Something went wrong. Please try again later.');

      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center p-4 sm:p-8 font-sans py-20 md:py-30 overflow-hidden">
      {/* Cloudy/Whitish effect - atmospheric overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main cloudy linear overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-blue-50/30 via-white/20 to-transparent" />

        {/* Soft cloud glows */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-indigo-100/30 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-accent/10 blur-3xl" />

        {/* Additional subtle wisps */}
        <div className="absolute top-40 left-1/4 h-32 w-64 rounded-full bg-blue-100/20 blur-2xl" />
        <div className="absolute bottom-40 right-1/3 h-24 w-48 rounded-full bg-primary/5 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-4xl w-full rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-6 sm:p-10 md:p-12 transition-all bg-white border border-border/20">
        {errorMessage && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-red-500"
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

              <span>{errorMessage}</span>
            </div>
          </div>
        )}
        {successMessage && (
          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-green-500"
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
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-surface font-serif tracking-tight mb-2">
            Ibras Aviation Admissions
          </h1>
          <div className="text-ink-muted text-base leading-relaxed max-w-[90%]">
            Thank you for your interest in Ibras Aviation! We&apos;re excited to be a part of your
            aviation journey and are here to support your training in any way that we can. Kindly
            fill out the form below regarding Admissions, Enrollment, and Training Programs.
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {/* Name */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-background mb-1.5">
              Name <span className="text-secondary">*</span>
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  {...register('firstName')}
                  placeholder="First Name"
                  className="w-full px-4 py-2.5 bg-white border border-border/30 text-background placeholder-ink-faint focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all rounded-xl"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  {...register('lastName')}
                  placeholder="Last Name"
                  className="w-full px-4 py-2.5 bg-white border border-border/30 text-background placeholder-ink-faint focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all rounded-xl"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-background mb-1.5">
              Email <span className="text-secondary">*</span>
            </label>
            <input
              type="email"
              {...register('email')}
              placeholder="example@example.com"
              className="w-full max-w-md px-4 py-2.5 bg-white border border-border/30 text-background placeholder-ink-faint focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all rounded-xl"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-background mb-1.5">
              Phone Number <span className="text-secondary">*</span>
            </label>
            <input
              type="tel"
              {...register('phone')}
              placeholder="(000) 000-0000"
              className="w-full max-w-md px-4 py-2.5 bg-white border border-border/30 text-background placeholder-ink-faint focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all rounded-xl"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
            <div className="text-xs text-subtle mt-1">Please enter a valid phone number.</div>
          </div>

          {/* Desired course(s) - Using react-select */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-background mb-1.5">
              Select your desired course(s): <span className="text-secondary">*</span>
            </label>
            <div className="w-full max-w-md">
              {isMounted && (
                <Controller
                  name="course"
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Select
                      options={courseOptions}
                      value={courseOptions.find((option) => option.value === value) || null}
                      onChange={(option) => {
                        onChange(option?.value || '');
                      }}
                      onBlur={onBlur}
                      placeholder="Please Select"
                      styles={selectStyles}
                      theme={(theme) => ({
                        ...theme,
                        colors: {
                          ...theme.colors,
                          primary: 'var(--color-secondary)',
                          primary25: '#E8EEF8',
                          primary50: '#D0DDF0',
                        },
                      })}
                    />
                  )}
                />
              )}
              {errors.course && (
                <p className="mt-1 text-sm text-red-500">{errors.course.message}</p>
              )}
            </div>
          </div>

          {/* Radio – Authorization */}
          <div className="mb-8">
            <span className="block text-sm font-medium text-background mb-3">
              I authorize Ibras Aviation to contact me by phone, text message, and email regarding
              admissions, promotions, and marketing communications. I understand that I may opt out
              of marketing communications at any time by notifying Ibras Aviation.
              <span className="text-secondary">*</span>
            </span>
            <div className="space-y-2">
              <label className="flex items-start gap-3 text-sm text-background cursor-pointer">
                <input
                  type="radio"
                  {...register('authorization')}
                  value="I agree to receive admissions, promotions, and marketing communications from Ibras Aviation."
                  className="mt-0.5 w-4 h-4 accent-secondary bg-white border-border/30 focus:ring-secondary/30 rounded"
                />
                <span>
                  I agree to receive admissions, promotions, and marketing communications from Ibras
                  Aviation.
                </span>
              </label>
              <label className="flex items-start gap-3 text-sm text-background cursor-pointer">
                <input
                  type="radio"
                  {...register('authorization')}
                  value="I do not consent to receive phone calls, text messages, or emails from Ibras Aviation regarding admissions, promotions, and marketing communications."
                  className="mt-0.5 w-4 h-4 accent-secondary bg-white border-border/30 focus:ring-secondary/30 rounded"
                />
                <span>
                  I do not consent to receive phone calls, text messages, or emails from Ibras
                  Aviation regarding admissions, promotions, and marketing communications.
                </span>
              </label>
            </div>
            {errors.authorization && (
              <p className="mt-1 text-sm text-red-500">{errors.authorization.message}</p>
            )}
          </div>

          {/* Submit + Branding */}
          <div className="mt-2 flex flex-col items-start">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-linear-to-r from-secondary to-primary hover:from-primary hover:to-background text-foreground font-medium py-2.5 px-8 rounded-xl transition-all shadow-[0_4px_16px_rgba(31,78,154,0.25)] hover:shadow-[0_6px_24px_rgba(31,78,154,0.35)] hover:-translate-y-0.5 text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            <div className="mt-3 text-xs text-subtle">
              Powered by <span className="font-bold text-secondary"> Ibras Aviation</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
