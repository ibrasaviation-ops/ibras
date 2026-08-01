import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isVerifiedAdmin } from './libs/Auth/AdminVarification';

export const middleware = async (request: NextRequest) => {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  const isValid = await isVerifiedAdmin(token);
  if (!isValid) {
    // Clear invalid token
    const response = NextResponse.redirect(new URL('/', request.url));
    response.cookies.delete('admin_token');
    return response;
  }

  // Token is valid, allow access
  return NextResponse.next();
  // console.log(request);
};

export const config = {
  matcher: '/admin/:path*',
};
