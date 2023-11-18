import { prisma } from "@/lib/authOptions"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
	const { amount, userId, type } = await request.json()

	await prisma.transaction.create({
		data: {
			userId,
			type,
			amount,
			createdAt: new Date(),
		},
	})

	const txs = await prisma.transaction.findMany({
		where: {
			userId,
		},
	})

	return NextResponse.json({ data: txs }, { status: 201 })
}
