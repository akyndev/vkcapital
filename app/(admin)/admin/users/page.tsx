import { prisma } from "@/lib/authOptions"
import { userSchema } from "@/prisma/schema"
import * as d from "next/dynamic"
import { z } from "zod"

const Users = z.array(userSchema)

const Table = d.default(() => import("../../../../components/table"), {
	ssr: false,
})

export const dynamic = "force-dynamic"
export const revalidate = 0
export const fetchCache = "force-no-store"

async function getAllUsers() {
	try {
		const users = await prisma.user.findMany({})
		return users
	} catch (error) {
		console.log(error)
	}
}

async function AdminDashboard() {
	const users = await getAllUsers()

	const pUsers = Users.safeParse(users)

	if (!pUsers.success) {
		return (
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi omnis
				dolor consequuntur numquam animi officiis nam iste quis, illo quam eius,
				asperiores hic dicta fugit eos facere ipsa dolorem nostrum.
			</div>
		)
	}

	return (
		<main className="relative container lg:px-8">
			<div className="w-full h-screen flex items-start space-x-0">
				<div className="sm:w-32 lg:w-64 h-screen lg:block" />
				<Table allUser={pUsers.data} />
			</div>
		</main>
	)
}

export default AdminDashboard
