"use client"
import { logo } from "@/lib"
import Image from "next/image"
import React from "react"
import { LayoutDashboard, LogOut, ScrollText, UserCog2 } from "lucide-react"
import { Separator } from "./ui/separator"
import { signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const adminArr = [
	"rnrwakonda@gmail.com",
	"kuzzogrind@gmail.com",
	"rytglobal@gmail.com",
	"elprimeroinvestments@gmail.com",
	// "akinladejoseph3880@gmail.com",
]

const Aside = () => {
	const pathname = usePathname()
	const { data, status } = useSession()

	return (
		<aside className="fixed inset-y-0 left-0 w-0 sm:w-32 lg:w-64 z-20 overflow-hidden lg:z-10 bg-white">
			<div className="flex items-start px-8 h-full space-y-16 flex-col">
				<div className="flex items-end pt-8">
					<Link href="/">
						<Image
							src={logo}
							alt="logo"
							width={100}
							height={100}
							className="h-auto w-16"
						/>
					</Link>
				</div>
				<nav className="flex-1 w-full">
					<ul className="w-full flex flex-col space-y-3">
						<li
							className={cn("font-medium w-full  py-3 rounded-lg ", {
								"bg-[#C5AA17] text-white": pathname === "/",
							})}>
							<Link
								href={"/"}
								className="flex items-center justify-start px-6 space-x-3">
								<LayoutDashboard
									className=""
									fill={pathname === "/" ? "white" : undefined}
									color={pathname === "/" ? "white" : "black"}
								/>
								<span className="hidden lg:block">Dashboard</span>
							</Link>
						</li>
						<li
							className={cn("font-medium w-full py-3 rounded-lg ", {
								"bg-[#C5AA17] text-white": pathname === "/transactions",
							})}>
							<Link
								href={"/transactions"}
								className="flex items-center justify-start px-6 space-x-3">
								<ScrollText
									fill={pathname === "/transactions" ? "white" : undefined}
									color={pathname === "/transactions" ? "white" : "black"}
								/>
								<span className="hidden lg:block">Transactions</span>
							</Link>
						</li>

						{data ? (
							<>
								{adminArr.includes(data.user?.email as string) ? (
									<li
										className={cn("font-medium w-full py-3 rounded-lg ", {
											"bg-[#C5AA17] text-white": pathname.includes("/admin"),
										})}>
										<Link
											href={"/admin"}
											className="flex items-center justify-start px-6 space-x-3">
											<UserCog2
												fill={pathname.includes("/admin") ? "white" : undefined}
												color={pathname.includes("/admin") ? "white" : "black"}
											/>
											<span className="hidden lg:block">Manage user</span>
										</Link>
									</li>
								) : null}
							</>
						) : null}
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
