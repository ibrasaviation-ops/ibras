// libs/JWT.ts
import { SignJWT, jwtVerify } from 'jose';

const SECRET = process.env.JWT_SECRET;

interface TokenPayload {
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}

// Make sure SECRET exists
if (!SECRET) {
  throw new Error('JWT_SECRET environment variable is not set');
}

// Convert secret to Uint8Array for jose
const secret = new TextEncoder().encode(SECRET);

export const generateToken = async (payload:any): Promise<string> => {
  try {
    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('7d')
      .sign(secret);
    return token;
  } catch (error) {
    console.error('Token generation failed:', error);
    throw new Error('Failed to generate token');
  }
};

export const verifyToken = async (token: string) => {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
};
