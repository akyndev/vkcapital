import { prisma } from "@/lib/authOptions"
import { NextRequest, NextResponse } from "next/server"

export const revalidate = true

export async function DELETE(
	req: NextRequest,
	{ params }: { params: { slug: string } },
) {
	const email = params.slug
	try {
		 await prisma.user.delete({
			where: {
				email,
			},
			include: {
				transactions: true,
			},
         })
        
		return NextResponse.json({ message: "user deleted" }, { status: 200 })
	} catch (error : any) {
		console.log(error)
		return NextResponse.json({ message: error.message }, { status: 500 })
	}
}
