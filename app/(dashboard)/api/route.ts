import { prisma } from "@/lib/authOptions"

export async function POST() {
	const user = await prisma.user.create({
		data: {
			name: "Akinlade joseph",
			email: "akinladeirede@gmail.com",
			balance: 0.0,
			interest: 98.78,
			plan: "diamond",
			profit: "90.65",
			emailVerified: new Date(),
			transactions: {
				create: [
					{
						type: "TOPUP",
						amount: 300.0,
					},
					{
						type: "WITHDRAW",
						amount: 20.5,
					},
					{
						type: "TOPUP",
						amount: 600.0,
					},
					{
						type: "WITHDRAW",
						amount: 1000.0,
					},
				],
			},
		},
	})

	const data = user
	return Response.json(data, { status: 201 })
}
