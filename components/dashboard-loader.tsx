import { Loader, MoreHorizontal } from "lucide-react"
import React from "react"
import { Button } from "./ui/button"
import { Skeleton } from "./ui/skeleton"

const DashboardLoader = () => {
	return (
		<div className="w-full h-screen flex items-start space-x-0">
			<div className="sm:w-32 lg:w-64 h-screen lg:block" />
			<div className="flex-1 py-8 space-y-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<div className="bg-white rounded-lg space-y- p-6">
						<h2 className="text-xl font-extrabold mb-3">Total Balance</h2>
						<Skeleton className="h-6 w-32" />
						<p className="text-sm capitalize text-muted-foreground font-medium">
							last interest
						</p>
						<div className="mt-3  space-x-2">
							<Button className="rounded-full w-32 bg-[#369A40]">Top up</Button>
							<Button
								className="rounded-full w-32 text-[#369A40]"
								variant={"outline"}>
								Withdraw
							</Button>
						</div>
					</div>
					<div className="bg-white rounded-lg  p-6">
						<h2 className="text-xl font-extrabold mb-3">Plan</h2>
						<div className="mt-3  space-x-4 flex items-center">
							<Button className="rounded-full w-56" variant={"outline"}>
								Premium
							</Button>
							<h2 className="text-xl text-[#369A40] font-extrabold">
								+ $24.65
							</h2>
						</div>
						<div className="mt-3  space-x-4 flex items-center">
							<Button className="rounded-full w-56" variant={"outline"}>
								Diamond
							</Button>
							<h2 className="text-xl text-[#369A40] font-extrabold">
								+ $94.89
							</h2>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					<div className="bg-white rounded-lg p-6">
						<h4 className="text-muted-foreground text-sm font-medium">
							Total Income
						</h4>
						<Skeleton className="h-6 w-32 my-3" />
						<Skeleton className="h-8 w-16 rounded-full" />
					</div>
					<div className="bg-white rounded-lg p-6">
						<h4 className="text-muted-foreground text-sm font-medium">
							Total Income
						</h4>
						<Skeleton className="h-6 w-32 my-3" />
						<Skeleton className="h-8 w-16 rounded-full" />
					</div>
					<div className="bg-white rounded-lg p-6">
						<h4 className="text-muted-foreground text-sm font-medium">
							Total Income
						</h4>
						<Skeleton className="h-6 w-32 my-3" />
						<Skeleton className="h-8 w-16 rounded-full" />
					</div>
					<div className="bg-white rounded-lg p-6">
						<h4 className="text-muted-foreground text-sm font-medium">
							Total Income
						</h4>
						<Skeleton className="h-6 w-32 my-3" />
						<Skeleton className="h-8 w-16 rounded-full" />
					</div>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<div className="bg-white rounded-lg p-6">
						<div className="flex items-center justify-between mb-3">
							<h3 className="font-extrabold text-xl">Latest transactions</h3>
							<MoreHorizontal />
						</div>
						<div className="space-y-4">
							<div className="flex items-start space-x-4">
								<Skeleton className="h-10 w-10 rounded-full" />
								<Skeleton className="h-10 flex-1 rounded-lg" />
								<Skeleton className="h-10 w-16" />
							</div>
							<div className="flex items-start space-x-4">
								<Skeleton className="h-10 w-10 rounded-full" />
								<Skeleton className="h-10 flex-1 rounded-lg" />
								<Skeleton className="h-10 w-16" />
							</div>
							<div className="flex items-start space-x-4">
								<Skeleton className="h-10 w-10 rounded-full" />
								<Skeleton className="h-10 flex-1 rounded-lg" />
								<Skeleton className="h-10 w-16" />
							</div>
							<div className="flex items-start space-x-4">
								<Skeleton className="h-10 w-10 rounded-full" />
								<Skeleton className="h-10 flex-1 rounded-lg" />
								<Skeleton className="h-10 w-16" />
							</div>
							<div className="flex items-start space-x-4">
								<Skeleton className="h-10 w-10 rounded-full" />
								<Skeleton className="h-10 flex-1 rounded-lg" />
								<Skeleton className="h-10 w-16" />
							</div>
						</div>
					</div>
					<div className="bg-white rounded-lg p-6 h-max lg:h-full flex flex-col">
						<div className="flex items-center justify-between mb-3">
							<h3 className="font-extrabold text-xl">Investment</h3>
							<MoreHorizontal />
						</div>
						<div className="flex-1 flex items-center justify-center h-56 lg:h-auto">
							<div className="animate-spin">
								<Loader />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DashboardLoader
