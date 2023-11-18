import { prisma } from "@/lib/authOptions"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
	const { name, email, password } = await request.json()

	const tx = await prisma.transaction.create({
		data: {
			userId: "655753262627f9401ba2693d",
			type: "TOPUP",
			amount: 9000,
		},
	})

	return NextResponse.json({ ...tx }, { status: 201 })
}
