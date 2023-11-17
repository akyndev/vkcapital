"use client"
import { logo } from "@/lib"
import Image from "next/image"
import React from "react"
import { LayoutDashboard, LogOut } from "lucide-react"
import { Separator } from "./ui/separator"
import { signOut } from "next-auth/react"
import { Button } from "./ui/button"
import Link from "next/link"

const Aside = () => {
	return (
		<aside className="fixed inset-y-0 left-0 w-0 sm:w-32 lg:w-64 z-20 overflow-hidden lg:z-10 bg-white">
			<div className="flex items-start px-8 h-full space-y-16 flex-col">
				<div className="flex items-end pt-8">
					<Image
						src={logo}
						alt="logo"
						width={100}
						height={100}
						className="h-auto w-16"
					/>
					<p className="text-xl italic ml-2 hidden lg:block">vkcapitals</p>
				</div>
				<nav className="flex-1 w-full">
					<ul className="w-full flex flex-col space-y-3">
						<li className="font-medium w-full text-white py-3 rounded-lg bg-[#C5AA17]">
							<Link
								href={"/"}
								className="flex items-center justify-start px-6 space-x-3">
								<LayoutDashboard className="" fill="white" color="white" />
								<span className="hidden lg:block">Dashboard</span>
							</Link>
						</li>
						{/* <li className="font-medium w-full py-3 rounded-lg">
							<Link
								href={"/"}
								className="flex items-center justify-start px-6 space-x-3">
								<LayoutDashboard className="" />
								<span className="hidden lg:block">Transactions</span>
							</Link>
						</li>
						<li className="font-medium w-full py-3 rounded-lg">
							<Link href={"/"} className="flex items-center justify-start px-6 space-x-3">
								<LayoutDashboard className="" />
								<span className="hidden lg:block">Plans</span>
							</Link>
						</li>
						<li className="font-medium w-full py-3  rounded-lg">
							<Link href={"/"} className="flex items-center justify-start px-6 space-x-3">
								<LayoutDashboard className="" />
								<span className="hidden lg:block">Subscribtons</span>
							</Link>
						</li> */}
					</ul>
				</nav>
				<div className="w-full pb-4">
					<Separator />
					<Button
						onClick={() => signOut()}
						variant={"ghost"}
						type="button"
						className="font-medium w-full mt-2 text-base flex items-center justify-start rounded-lg">
						<LogOut className="rotate-180 mr-3" />
						<span className="hidden lg:block">logout</span>
					</Button>
				</div>
			</div>
		</aside>
	)
}

export default Aside
