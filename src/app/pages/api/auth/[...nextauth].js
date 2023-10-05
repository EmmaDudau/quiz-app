import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        Providers.Facebook({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
        }),
        // ...add more providers here
    ],

    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL,

    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error',
        verifyRequest: '/auth/verify-request',
        newUser: null
    }
})

// Now Google and Facebook logins are available on your auth-related pages! Please note that in your production environment, you need to have the environment variables (GOOGLE_ID, GOOGLE_SECRET, FACEBOOK_ID, FACEBOOK_SECRET, and DATABASE_URL) correctly set in your .env file or in your deployment settings.
//
//     Remember to configure the OAuth2 URIs at your Google and Facebook developer dashboards and also to securely store your credentials.
//
//     You can see more details about Google and Facebook providers in the official NextAuth.js documentation:
//
//
//     Google Provider
//
// Facebook Provider
