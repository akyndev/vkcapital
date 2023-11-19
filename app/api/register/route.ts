import { prisma } from "@/lib/authOptions"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
	const { name, email, password } = await request.json()

	try {
		if (!email || !password || !name) {
			return NextResponse.json(
				{ message: "Please all provide credentials" },
				{ status: 400 },
			)
		}

		const existingUser = await prisma.user.findUnique({
			where: {
				email
			}
		})

		if (existingUser) {
			return NextResponse.json({ message: "User already exist login instead" }, { status: 400 })
		}

		const hashPassword = await bcrypt.hash(password, 10)

		const newUser = await prisma.user.create({
			data: {
				name,
				email,
				password: hashPassword,
				createdAt: new Date(),
			},
		})

		return NextResponse.json({ newUser }, { status: 201 })
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 })
	}
}
