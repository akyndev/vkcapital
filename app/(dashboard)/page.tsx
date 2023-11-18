"use client"
import Dashboard from "@/components/dashboard"
import DashboardLoader from "@/components/dashboard-loader"
import { User } from "@/lib/types"
import { userSchema } from "@/prisma/schema"
import { useSession } from "next-auth/react"
import useSwr from "swr"

const fetcher = (...rest: any) =>
	fetch(rest, { method: "GET" }).then((res) => res.json())

export default function Home() {
	const { data: session, status } = useSession({ required: true })
	const { data, isLoading, error } = useSwr<User>(
		`/api/${session?.user?.email}`,
		fetcher,
	)
	const parsedUser = userSchema.safeParse(data)

	if (isLoading) {
		return (
			<main className="relative container lg:px-8">
				<DashboardLoader />
			</main>
		)
	}

	if (!parsedUser.success) {
		return (
			<main className="relative container lg:px-8">
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ab!
					Distinctio deserunt commodi veritatis. Fuga, repudiandae illo! In
					explicabo quos tempore sed est eos nesciunt repellendus consequuntur
					corrupti, nemo atque?
				</p>
			</main>
		)
	}

	return (
		<main className="relative container lg:px-8">
			{status === "loading" && isLoading ? (
				<>
					<DashboardLoader />
				</>
			) : (
				<>{parsedUser.success ? <Dashboard data={parsedUser.data} /> : null}</>
			)}
		</main>
	)
}
