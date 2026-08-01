// app/admin/login/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Eye, EyeOff, Lock, Mail, AlertCircle, Shield, X } from 'lucide-react';
import { adminLoginSchema, AdminLoginFormData } from '../../libs/schema/registrationSchema';
import { loginAdmin } from '../actions/loginAdmin';
import z from 'zod';

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

// ============ Component ============
export default function AdminLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors | null>(null);

  // Auto-dismiss general errors after 4 seconds
  useEffect(() => {
    if (errors?.general) {
      const timer = setTimeout(() => {
        setErrors((prev) => ({ ...prev, general: undefined }));
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [errors?.general]);

  const onSubmit = async (formData: FormData) => {
    // Set loading state at the very beginning
    setIsLoading(true);
    setErrors(null);

    const rawData = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    // Validate with Zod
    try {
      const { success, data, error } = adminLoginSchema.safeParse(rawData);
      if (!success) {
        const fieldErrors = z.flattenError(error).fieldErrors;
        setErrors({
          email: fieldErrors.email?.[0],
          password: fieldErrors.password?.[0],
        });
        setIsLoading(false);
        return;
      }

      // If validation passes, call the server action
      const response = await loginAdmin(data);

      if (response.success) {
        router.push('/admin');
      } else {
        // Show server error
        setErrors({
          general: response.message || 'Login failed. Please try again.',
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrors({
        general: 'An unexpected error occurred. Please try again.',
      });
      setIsLoading(false);
    }
  };

  // Handle form submission with proper event handling
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-highlight/5 blur-3xl" />
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-surface/80 backdrop-blur-xl rounded-2xl border border-border p-6 sm:p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-primary to-secondary mb-4 shadow-lg shadow-primary/20">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Admin Login</h1>
            <p className="text-sm text-muted mt-1">Sign in to manage IBRAS Aviation</p>
          </div>

          {/* Toast-style General Error Message */}
          {errors?.general && (
            <div className="mb-4 animate-in slide-in-from-top-5 fade-in duration-300">
              <div className="relative p-3 bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                <p className="text-sm text-red-200 flex-1">{errors.general}</p>
                <button
                  onClick={() => setErrors((prev) => ({ ...prev, general: undefined }))}
                  className="text-red-400/60 hover:text-red-300 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
                    isLoading ? 'text-muted/40' : 'text-subtle'
                  }`}
                />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="admin@ibrasaviation.com"
                  className={`w-full pl-10 pr-4 py-2.5 bg-elevated/50 border rounded-xl focus:outline-none focus:ring-2 transition-all text-foreground placeholder-subtle text-sm ${
                    errors?.email
                      ? 'border-white/20 focus:ring-white/5'
                      : 'border-border focus:border-primary focus:ring-primary/30'
                  } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isLoading}
                />
              </div>
              {errors?.email && (
                <div className="mt-1.5 flex items-center gap-1.5 text-red-400 text-xs">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label
                  htmlFor="password"
                  className="text-xs font-semibold uppercase tracking-wider text-muted"
                >
                  Password
                </label>
                <button
                  type="button"
                  className={`text-xs text-primary hover:text-primary-hover transition-colors cursor-pointer ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={() => {
                    if (!isLoading) alert('Contact to Developer');
                  }}
                  disabled={isLoading}
                >
                  Forgot Password
                </button>
              </div>
              <div className="relative">
                <Lock
                  className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
                    isLoading ? 'text-muted/40' : 'text-subtle'
                  }`}
                />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className={`w-full pl-10 pr-12 py-2.5 bg-elevated/50 border rounded-xl focus:outline-none focus:ring-2 transition-all text-foreground placeholder-subtle text-sm ${
                    errors?.password
                      ? 'border-white/20 focus:ring-white/5'
                      : 'border-border focus:border-primary focus:ring-primary/30'
                  } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors cursor-pointer ${
                    isLoading
                      ? 'text-muted/40 cursor-not-allowed'
                      : 'text-subtle hover:text-foreground'
                  }`}
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors?.password && (
                <div className="mt-1.5 flex items-center gap-1.5 text-red-400 text-xs">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.password}</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-primary hover:bg-primary-hover text-white font-semibold py-2.5 rounded-xl transition-all hover:shadow-primary-glow ${
                isLoading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Signing in...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-border">
            <div className="flex items-center justify-center gap-3 text-xs text-muted">
              <Shield className="w-3 h-3" />
              <span>Secure Admin Access</span>
              <span>•</span>
              <span>v2.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
