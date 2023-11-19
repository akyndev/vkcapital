import type { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

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
			async authorize(credentials, req) {
				if (!credentials || !credentials.email || !credentials.password) {
					return null
				}

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				})

				if (!user) throw new Error("user not found")

				if (!user.password) throw new Error("No password for this account")

				const p = await bcrypt.compare(credentials.password, user.password)

				if (!p) throw new Error("password is not valid")

				return {
					id: user?.id,
					name: user?.name,
					email: user?.email,
				}
			},
		}),
	],
	pages: {
		signIn: "/auth/login",
		error: "/auth/login",
	},
	session: {
		strategy: "jwt",
	},
	callbacks: {
		async redirect({ url, baseUrl }) {
			return baseUrl
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
	debug: process.env.NODE_ENV === "development",
}

export default authOptions
