import { z } from 'zod';

export const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  phone: z.string().min(1, 'Phone number is required'),
  course: z.string().min(1, 'Please select a course'),
  authorization: z.string().min(1, 'Please select an authorization option'),
});

export type FormData = z.infer<typeof formSchema>;


export const adminLoginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

export type AdminLoginFormData = z.infer<typeof adminLoginSchema>;
