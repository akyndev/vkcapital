"use client"
import { useSession } from "next-auth/react"
import Dashboard from "@/components/dashboard"
import DashboardLoader from "@/components/dashboard-loader"
import React from "react"
import { Button } from "@/components/ui/button"


export default function Home() {
	const { data, status } = useSession({ required: false })

	return (
		<main className="relative container lg:px-8">
			{/* <Button onClick={() => {
				fetch("/api", {
					method: "POST",
					body: JSON.stringify("string")
				}).then((res) => res.json())
			}}
			
			className="ml-96">
				Create user
			</Button> */}
			{status === "loading" ? (
				<>
					<DashboardLoader />
				</>
			) : (
				<>
					<Dashboard />
				</>
			)}

		</main>
	)
}
