"use client"
import { useSession } from "next-auth/react"
import Dashboard from "@/components/dashboard"
import DashboardLoader from "@/components/dashboard-loader"
import React, { useEffect } from "react"
import { userSchema } from "@/prisma/schema"
import { User } from "@/lib/types"
import useSwr from "swr"

const fetcher = (...rest: unknown[]) =>
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
		return <p>Failed</p>
	}

	return (
		<main className="relative container lg:px-8">
			{status === "loading" ? (
				<>
					<DashboardLoader />
				</>
			) : (
				<>{parsedUser.success ? <Dashboard data={parsedUser.data} /> : null}</>
			)}
		</main>
	)
}
