import { prisma } from "@/lib/authOptions"
import { NextResponse } from "next/server"

export async function POST(
	request: Request,
	{ params }: { params: { slug: string } },
) {

	const { balance, interest, plan } = await request.json()
    const email = params.slug 
    
	const updated = await prisma.user.update({
		where: {
			email,
		},
		data: {
			balance,
			interest,
			plan,
		},
	})

	return NextResponse.json({ ...updated }, { status: 201 })
}
