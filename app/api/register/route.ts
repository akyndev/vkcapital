import { prisma } from "@/lib/authOptions"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
	const { name, email, password } = await request.json()

	if (!email || !password) {
		return NextResponse.json({ message: "failed to create user" }, { status: 400 })
	}
	const hashPassword = await bcrypt.hash(password, 10)

	const newUser = await prisma.user.create({
		data: {
			name,
			email,
			password: hashPassword,
		},
	})

	return NextResponse.json({ newUser }, { status: 201 })
}
