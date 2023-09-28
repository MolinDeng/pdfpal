// import { authMiddleware } from '@kinde-oss/kinde-auth-nextjs/server';

// export const config = {
//   matcher: ['/dashboard/:path*', '/auth-callback'],
// };

// export default authMiddleware;

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
};
