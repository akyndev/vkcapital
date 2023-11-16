import type { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient()

const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				email: { label: "Email" },
				password: { label: "Password" },
			},
			authorize(credentials, req) {
				return {
					id: "1",
				}
			},
		}),
	],
	pages: {
		signIn: "/auth",
	},
}

export default authOptions
