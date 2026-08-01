// libs/Auth/AdminVerification.ts
import { cookies } from 'next/headers';
import { verifyToken } from '../JWT';

export const isVerifiedAdmin = async (token?: string) => {
  try {
    // If token is not provided, get it from cookies
    if (!token) {
      const cookieStore = await cookies();
      const cookieToken = cookieStore.get('admin_token')?.value;
      if (!cookieToken) return false;
      token = cookieToken;
    }

    // Verify the token
    const decoded = await verifyToken(token);
    console.log(decoded);

    // Check if token contains admin role
    if (!decoded || decoded.role !== 'admin') {
      return false;
    }

    return true;
  } catch (error) {
    console.error('Admin verification failed:', error);
    return false;
  }
};
