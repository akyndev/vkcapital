import { prisma } from "@/lib/authOptions"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
	req: NextRequest,
	{ params }: { params: { slug: string } },
) {
	const email = params.slug
	try {
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
			include: {
				transactions: true,
			},
		})

		return NextResponse.json({ ...user }, { status: 200 })
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error }, { status: 500 })
	}
}
