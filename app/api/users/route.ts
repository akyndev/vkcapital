import { prisma } from "@/lib/authOptions"
import { NextRequest, NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

export const revalidate = 0

export async function GET(request: NextRequest) {
	const path = "/admin/users"
	console.log(path)
	revalidatePath(path)
	try {
		const users = await prisma.user.findMany({})
		if (!users)
			return NextResponse.json({ message: "No user found" }, { status: 200 })
		return NextResponse.json({ data: [...users] }, { status: 200 })
	} catch (error: any) {
		console.log(error)
		return NextResponse.json({ message: error.message }, { status: 500 })
	}
}
