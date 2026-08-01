// app/admin/actions/loginAdmin.ts
'use server';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { generateToken } from '../../libs/JWT';

interface LoginData {
  email: string;
  password: string;
}

export const loginAdmin = async (data: LoginData) => {
  try {
    const { email, password } = data;

    // Validate inputs
    if (!email || !password) {
      return {
        success: false,
        message: 'Email and password are required',
      };
    }

    // Get environment variables
    const storedHash =
      process.env.NODE_ENV === 'development'
        ? `$2b$12$gnb6wYak62kOO2I${process.env.LOGIN_PASS}`
        : process.env.LOGIN_PASS;
    const adminEmail = process.env.EMAIL_USER;

    if (!storedHash || !adminEmail) {
      console.error('Missing environment variables: LOGIN_PASS or EMAIL_USER');
      return {
        success: false,
        message: 'Server configuration error',
      };
    }

    const isEmailCorrect = email === adminEmail;
    const isPasswordCorrect = await bcrypt.compare(password, storedHash);

    if (!isEmailCorrect || !isPasswordCorrect) {
      return {
        success: false,
        message: 'Invalid credentials',
      };
    }

    // Generate token
    const token = await generateToken({ email, role: 'admin' });
    const cookieStore = await cookies();

    cookieStore.set({
      name: 'admin_token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return {
      success: true,
      message: 'Login successful',
    };
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      message: 'An error occurred during login. Please try again.',
    };
  }
};
