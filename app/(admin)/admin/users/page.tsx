import { prisma } from "@/lib/authOptions"
import { User } from "@/lib/types"
import { formattedValue } from "@/lib/utils"
import { userSchema } from "@/prisma/schema"
import dynamic from "next/dynamic"
import React from "react"
import { z } from "zod"

const Users = z.array(userSchema)

const Table = dynamic(() => import("../../../../components/table"), {
	ssr: false,
})

async function AdminDashboard() {
	const users = await prisma.user.findMany({})

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
