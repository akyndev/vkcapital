"use client"
import Dashboard from "@/components/dashboard"
import DashboardLoader from "@/components/dashboard-loader"
import { Button } from "@/components/ui/button"
import { updateTxState, useDispatch } from "@/lib/redux"
import { User } from "@/lib/types"
import { userSchema } from "@/prisma/schema"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { useEffect } from "react"
import useSWR from "swr"
export const dynamic = "force-dynamic"

const fetcher = (...rest: any) =>
	fetch(rest, { method: "GET", cache: "no-store" }).then((res) => res.json())

export default function Home() {
	const { data: session, status } = useSession({ required: true })
	const { data, isLoading, error } = useSWR<User>(
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

	if (!parsedUser.success) {
		return (
			<div className="container lg:px-8">
				<div className="w-full h-[80vh] flex-col bg-white rounded-lg flex items-center justify-center text-xl font-extrabold mt-4">
					<p className="mb-3">Login in to see the dashboard</p>
					<Link href={"/auth/login"}>
						<Button>Go back Login</Button>
					</Link>
				</div>
			</div>
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
