import { prisma } from "@/lib/authOptions"
import React from "react"

async function AdminDashboard() {
	const allUser = await prisma.user.findMany()

  const tx = await prisma.transaction.findUnique({
		where: {
			id: "65577fc27d87616483052b1a",
    },
    include: {
      user: true
    }
	})

	console.log(tx)

	return (
		<div>
			<ul>
				{allUser.map((user, i) => (
					<li className="" key={user.id}>
						{user.name}
					</li>
				))}
			</ul>
		</div>
	)
}

export default AdminDashboard
