import { prisma } from "@/lib/authOptions"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
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
