import { prisma } from "@/lib/authOptions"
import React from "react"

async function AdminDashboard() {
	const allUser = await prisma.user.findMany()

	console.log(allUser)

	return (
		<div>
			{allUser.map((user, i) => (
        <div className="" key={user.id}>
          {user.name}
        </div>
			))}
		</div>
	)
}

export default AdminDashboard
