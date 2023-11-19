"use client"
import Aside from "@/components/aside"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import React, { useEffect } from "react"

export const dynamic = "force-dynamic"
export const revalidate = 0
export const fetchCache = "force-no-store"

const adminArr = [
	"rnrwakonda@gmail.com",
	"kuzzogrind@gmail.com",
	"rytglobal@gmail.com",
	"elprimeroinvestments@gmail.com",
	"akinladejoseph3880@gmail.com",
]

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
	const { data, status } = useSession({ required: true })

	useEffect(() => {}, [])

	if (status === "loading") {
		return (
			<>
				<Aside />
				<Header />
				<div className="container lg:px-8">
					<div className="w-full h-[80vh] flex-col bg-white rounded-lg flex items-center justify-center text-xl font-extrabold mt-4">
						<Loader2 className="animate-spin" />
					</div>
				</div>
			</>
		)
	}

	return (
		<div>
			{status === "authenticated" &&
			adminArr.includes(data?.user?.email as string) ? (
				<>
					<Aside />
					<Header />
					{children}
				</>
			) : (
				<>
					<Aside />
					<Header />

					<div className="container lg:px-8">
						<div className="w-full h-[80vh] flex-col bg-white rounded-lg flex items-center justify-center text-xl font-extrabold mt-4">
							<p className="mb-3">Only admin can access this page</p>
							<Link href={"/"}>
								<Button>Go back Home</Button>
							</Link>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default AdminLayout
