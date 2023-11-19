"use client"
import { logo } from "@/lib"
import Image from "next/image"
import React from "react"
import { Button } from "./ui/button"
import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"
import Link from "next/link"

const Header = () => {
	return (
		<header>
			<main className="relative container lg:px-0 px-0">
				<div className="w-full flex items-start space-x-0">
					<div className="sm:w-32 lg:w-64 h-1 lg:block"></div>
					<div className="flex-1 py-4 bg-white px-4 sm:px-8 flex items-center sm:justify-end justify-between">
						<Link href="/">
							<Image
								src={logo}
								alt="logo"
								width={50}
								height={50}
								className="sm:hidden block"
							/>
						</Link>
						<div className="w-max">
							<Button
								onClick={() => signOut()}
								variant={"ghost"}
								type="button"
								className="font-medium w-full text-base flex items-center justify-start rounded-lg px-1 py-1 sm:px-3 sm:py-2">
								<LogOut className="" />
							</Button>
						</div>
					</div>
				</div>
			</main>
		</header>
	)
}

export default Header
