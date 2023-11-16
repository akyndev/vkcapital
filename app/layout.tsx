import Session from "@/provider/session"
import "./globals.css"
import type { Metadata } from "next"
import { Mulish } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Mulish({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={cn("bg-gray-100", inter.className)}>
				<Session>{children}</Session>
			</body>
		</html>
	)
}
