"use client"
import Dashboard from "@/components/dashboard"
import DashboardLoader from "@/components/dashboard-loader"
import { updateTxState, useDispatch } from "@/lib/redux"
import { Transaction, User } from "@/lib/types"
import { userSchema } from "@/prisma/schema"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
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
	const dispatch = useDispatch()

	useEffect(() => {
		if (!isLoading && data && data.transactions) {
			dispatch(updateTxState([...data.transactions]))
		}
	}, [isLoading, dispatch, data])

	if (isLoading) {
		return (
			<main className="relative container lg:px-8">
				<DashboardLoader />
			</main>
		)
	}

	if (!parsedUser.success) throw new Error("Failed to Pass")

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
