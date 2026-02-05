import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// 1. Define which routes are protected
const isProtectedRoute = createRouteMatcher([
  '/profile(.*)', 
  '/questions-bank(.*)', 
  '/notices(.*)'
]);

export default clerkMiddleware(async (auth, req) => {
  // 2. Check if the current request matches a protected route
  if (isProtectedRoute(req)) {
    // 3. Use .protect() to automatically redirect unauthenticated users
    await auth.protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}