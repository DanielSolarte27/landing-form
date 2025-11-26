// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Verificar si la petición NO es HTTPS
  const protocol = request.headers.get('x-forwarded-proto') || 'http';
  
  if (protocol !== 'https') {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

// Aplicar a todas las rutas
export const config = {
  matcher: '/:path*',
};