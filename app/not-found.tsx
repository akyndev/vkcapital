import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
	return (
		<div className="w-full grid place-content-center h-screen">
			<div className="text-center">
				<h1 className="text-9xl font-extrabold">404</h1>
				<p className="text-xl font-medium my-6">Could not find requested resource</p>
				<Link href="/">
					<Button className="mt-6 text-xl py-8 px-12">Return Home</Button>
				</Link>
			</div>
		</div>
	)
}
