import Session from "@/provider/session"
import "./globals.css"
import type { Metadata } from "next"
import { Mulish } from "next/font/google"
import { cn } from "@/lib/utils"
import ReduxProvider from "@/provider/redux"

const inter = Mulish({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "VK capital",
	description:
		"VK Capital is a versatile investment platform designed to empower investors in achieving their financial goals. By providing a user-friendly interface, it allows individuals to save and invest with specific objectives in mind, such as starting a business, planning for retirement, or funding a child's college education. The platform offers a range of investment options, catering to diverse financial aspirations. With VK Capital, users can strategically allocate their funds, benefit from potential returns, and work towards building a secure and prosperous financial future",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn("bg-gray-100", inter.className)}>
				<ReduxProvider>
					<Session>{children}</Session>
				</ReduxProvider>
			</body>
		</html>
	)
}
