/**
 * An array of results that are accessible to the public
 * These routes do not require authentication 
 * @types {string[]}
*/
export const publicRoutes = [
    '/'
]

/**
 * An array of results that are used for authentication
 * These routes will redirect looged users to '/settings'
 * @types {string[]}
*/
export const authRoutes = [
    '/auth/login',
    '/auth/register',
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @types {string[]}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * The default redirect path after logging in
 * @types {string[]}
 */
export const DEFAULT_LOGIN_REDIRECT = '/'