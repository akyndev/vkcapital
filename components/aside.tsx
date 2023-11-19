"use client"
import { logo } from "@/lib"
import { openNav, useDispatch, useSelector } from "@/lib/redux"
import { selectTxOpenNav } from "@/lib/redux/slices/selectors"
import { cn } from "@/lib/utils"
import { LayoutDashboard, LogOut, ScrollText, UserCog2 } from "lucide-react"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

const adminArr = [
	"rnrwakonda@gmail.com",
	"kuzzogrind@gmail.com",
	"rytglobal@gmail.com",
	"elprimeroinvestments@gmail.com",
	"akinladejoseph3880@gmail.com",
]

const Aside = () => {
	const pathname = usePathname()
	const { data, status } = useSession()
	const open = useSelector(selectTxOpenNav)
	const dispatch = useDispatch()

	return (
		<aside
			className={cn(
				"fixed inset-y-0 -left-full sm:left-0 w-64 sm:w-24 lg:w-64 z-20 overflow-hidden lg:z-10 bg-white transition-all duration-300",
				{
					"left-0 sm:w-52": open,
				},
			)}
			onClick={() => {
				if (open) {
					dispatch(openNav())
				}
			}}>
			<div className="flex items-start px-5 lg:px-8 h-full justify-center gap-y-16 flex-col">
				<div className="flex items-end pt-4">
					<Link href="/">
						<Image
							src={logo}
							alt="logo"
							width={100}
							height={100}
							className="h-10 lg:h-auto w-16"
						/>
					</Link>
				</div>
				<nav className="flex-1 w-full">
					<ul className="w-full flex flex-col gap-y-3">
						<li
							className={cn(
								"font-medium w-full  lg:w-full sm:w-max py-3 rounded-lg ",
								{
									"bg-[#C5AA17] text-white": pathname === "/",
								},
							)}>
							<Link
								href={"/"}
								className="flex items-center justify-start lg:px-6 px-4 space-x-3">
								<LayoutDashboard
									className=""
									fill={pathname === "/" ? "white" : undefined}
									color={pathname === "/" ? "white" : "black"}
								/>
								<span
									className={cn("sm:hidden lg:block", { "sm:block": open })}>
									Dashboard
								</span>
							</Link>
						</li>
						<li
							className={cn(
								"font-medium w-full  lg:w-full sm:w-max py-3 rounded-lg ",
								{
									"bg-[#C5AA17] text-white": pathname === "/transactions",
								},
							)}>
							<Link
								href={"/transactions"}
								className="flex items-center justify-start lg:px-6 px-4 space-x-3">
								<ScrollText
									className=""
									fill={pathname === "/transactions" ? "white" : undefined}
									color={pathname === "/transactions" ? "white" : "black"}
								/>
								<span
									className={cn("sm:hidden lg:block", { "sm:block": open })}>
									Transactions
								</span>
							</Link>
						</li>

						{data ? (
							<>
								{adminArr.includes(data.user?.email as string) ? (
									<li
										className={cn(
											"font-medium w-full  lg:w-full sm:w-max py-3 rounded-lg ",
											{
												"bg-[#C5AA17] text-white": pathname.includes("/admin"),
											},
										)}>
										<Link
											href={"/admin"}
											className="flex items-center justify-start lg:px-6 px-4 space-x-3">
											<UserCog2
												fill={pathname.includes("/admin") ? "white" : undefined}
												color={pathname.includes("/admin") ? "white" : "black"}
											/>
											<span
												className={cn("sm:hidden lg:block", {
													"sm:block": open,
												})}>
												Manage users
											</span>
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
						className={cn(
							"font-medium mx-auto w-max mt-2 text-base flex items-center justify-start rounded-lg",
							{ "w-full": open },
						)}>
						<LogOut className="rotate-180 mr-3" />
						<span className={cn("sm:hidden lg:block", { "sm:block": open })}>
							logout
						</span>
					</Button>
				</div>
			</div>
		</aside>
	)
}

export default Aside
