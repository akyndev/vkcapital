"use client"
import { logo } from "@/lib"
import { openNav, useDispatch, useSelector } from "@/lib/redux"
import { selectTxOpenNav } from "@/lib/redux/slices/selectors"
import { LogOut, Menu, X } from "lucide-react"
import { signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

const Header = () => {
    const open = useSelector(selectTxOpenNav)
	const dispatch = useDispatch()
	return (
		<header>
			<main className="relative container lg:px-0 px-0">
				<div className="w-full flex items-start space-x-0">
					<div className="sm:w-24 lg:w-64 h-1 lg:block"></div>
					<div className="flex-1 py-4 bg-white px-4 sm:px-8 gap-4 flex items-center sm:justify-end justify-between">
						<Link href="/">
							<Image
								src={logo}
								alt="logo"
								width={50}
								height={50}
								className="sm:hidden block"
							/>
						</Link>
						<div className="flex-1 flex justify-end">
							<Button
								onClick={() => signOut()}
								// variant={"ghost"}
								type="button"
								className="font-medium w-max text-base flex items-center justify-start rounded-lg px-1 py-1 sm:px-3 sm:py-2">
								<LogOut className="" />
							</Button>
						</div>
						<div className="w-max lg:hidden">
							{!open ? (
								<Menu
									onClick={() => dispatch(openNav())}
									className="cursor-pointer"
								/>
							) : (
								<X
									onClick={() => dispatch(openNav())}
									className="cursor-pointer"
								/>
							)}
						</div>
					</div>
				</div>
			</main>
		</header>
	)
}

export default Header
