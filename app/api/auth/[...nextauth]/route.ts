
import { authOptions } from "@/app/utils/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// import NextAuth, { AuthOptions } from 'next-auth';
// import GithubProvider from 'next-auth/providers/github';
// import GoogleProvider from 'next-auth/providers/google';
// import Credentials from 'next-auth/providers/credentials';
// import { PrismaAdapter } from '@next-auth/prisma-adapter';
// import { compare } from 'bcrypt';

// import prismadb from '@/lib/prismadb';


// export const authOptions: AuthOptions = {
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID || '1e6ee52360bb6e9f35a6',
//       clientSecret: process.env.GITHUB_SECRET || '600e61b02f002013198670df9c7905b211967380',
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID || '',
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
//     }),
//     Credentials({
//       id: 'credentials',
//       name: 'Credentials',
//       credentials: {
//         email: {
//           label: 'Email',
//           type: 'text',
//         },
//         password: {
//           label: 'Password',
//           type: 'passord'
//         }
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error('Email and password required');
//         }

//         const user = await prismadb.user.findUnique({ where: {
//           email: credentials.email
//         }});

//         if (!user || !user.hashedPassword) {
//           throw new Error('Email does not exist');
//         }

//         const isCorrectPassword = await compare(credentials.password, user.hashedPassword);

//         if (!isCorrectPassword) {
//           throw new Error('Incorrect password');
//         }

//         return user;
//       }
//     })
//   ],
//   pages: {
//     signIn: '/auth'
//   },
//   debug: process.env.NODE_ENV === 'development',
//   adapter: PrismaAdapter(prismadb),
//   session: { strategy: 'jwt' },
//   jwt: {
//     secret: process.env.NEXTAUTH_JWT_SECRET,
//   },
//   secret: process.env.NEXTAUTH_SECRET
// };

// export default NextAuth(authOptions);
