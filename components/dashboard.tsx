import React from "react"
import Chart from "./chart"
import { MoreHorizontal, TrendingUp } from "lucide-react"
import { Button } from "./ui/button"

const Dashboard = () => {
	return (
		<div className="w-full h-screen flex items-start space-x-0">
			<div className="sm:w-32 lg:w-64 h-screen lg:block" />
			<div className="flex-1 py-8 space-y-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<div className="bg-white rounded-lg space-y- p-6">
						<h2 className="text-xl font-extrabold mb-3">Total Balance</h2>
						<h2 className="text-xl text-[#369A40] font-extrabold">+ $24.65</h2>
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
						<h2 className="text-xl font-extrabold my-3">$29394.65</h2>
						<div className="flex w-20 text-sm items-center justify-center text-[#369A40] rounded-full space-x-2 py-2 bg-green-400/20">
							<TrendingUp size={16} className="" />
							<span> +8%</span>
						</div>
					</div>
					<div className="bg-white rounded-lg p-6">
						<h4 className="text-muted-foreground text-sm font-medium">
							Total Income
						</h4>
						<h2 className="text-xl font-extrabold my-3">$29394.65</h2>
						<div className="flex w-20 text-sm items-center justify-center text-[#369A40] rounded-full space-x-2 py-2 bg-green-400/20">
							<TrendingUp size={16} className="" />
							<span> +8%</span>
						</div>
					</div>
					<div className="bg-white rounded-lg p-6">
						<h4 className="text-muted-foreground text-sm font-medium">
							Total Income
						</h4>
						<h2 className="text-xl font-extrabold my-3">$29394.65</h2>
						<div className="flex w-20 text-sm items-center justify-center text-[#369A40] rounded-full space-x-2 py-2 bg-green-400/20">
							<TrendingUp size={16} className="" />
							<span> +8%</span>
						</div>
					</div>
					<div className="bg-white rounded-lg p-6">
						<h4 className="text-muted-foreground text-sm font-medium">
							Total Income
						</h4>
						<h2 className="text-xl font-extrabold my-3">$29394.65</h2>
						<div className="flex w-20 text-sm items-center justify-center text-[#369A40] rounded-full space-x-2 py-2 bg-green-400/20">
							<TrendingUp size={16} className="" />
							<span> +8%</span>
						</div>
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
								<div className="flex w-max p-3 text-sm items-center justify-center text-[#369A40] rounded-full space-x-2 bg-green-400/20">
									<TrendingUp size={16} className="" />
								</div>
								<div className="flex-1">
									<h4 className="font-bold">Balance Top Up</h4>
									<p className="text-xs text-muted-foreground">
										Personal Payment
									</p>
								</div>
								<h3 className="font-extrabold text-[#369A40]">+ $300.00</h3>
							</div>
							<div className="flex items-start space-x-4">
								<div className="flex w-max p-3 text-sm items-center justify-center text-[#369A40] rounded-full space-x-2 bg-green-400/20">
									<TrendingUp size={16} className="" />
								</div>
								<div className="flex-1">
									<h4 className="font-bold">Balance Top Up</h4>
									<p className="text-xs text-muted-foreground">
										Personal Payment
									</p>
								</div>
								<h3 className="font-extrabold text-[#369A40]">+ $300.00</h3>
							</div>
							<div className="flex items-start space-x-4">
								<div className="flex w-max p-3 text-sm items-center justify-center text-[#369A40] rounded-full space-x-2 bg-green-400/20">
									<TrendingUp size={16} className="" />
								</div>
								<div className="flex-1">
									<h4 className="font-bold">Balance Top Up</h4>
									<p className="text-xs text-muted-foreground">
										Personal Payment
									</p>
								</div>
								<h3 className="font-extrabold text-[#369A40]">+ $300.00</h3>
							</div>
							<div className="flex items-start space-x-4">
								<div className="flex w-max p-3 text-sm items-center justify-center text-[#369A40] rounded-full space-x-2 bg-green-400/20">
									<TrendingUp size={16} className="" />
								</div>
								<div className="flex-1">
									<h4 className="font-bold">Balance Top Up</h4>
									<p className="text-xs text-muted-foreground">
										Personal Payment
									</p>
								</div>
								<h3 className="font-extrabold text-[#369A40]">+ $300.00</h3>
							</div>
							<div className="flex items-start space-x-4">
								<div className="flex w-max p-3 text-sm items-center justify-center text-[#369A40] rounded-full space-x-2 bg-green-400/20">
									<TrendingUp size={16} className="" />
								</div>
								<div className="flex-1">
									<h4 className="font-bold">Balance Top Up</h4>
									<p className="text-xs text-muted-foreground">
										Personal Payment
									</p>
								</div>
								<h3 className="font-extrabold text-[#369A40]">+ $300.00</h3>
							</div>
						</div>
					</div>
					<div className="bg-white rounded-lg p-6 h-80 lg:h-full flex flex-col">
						<div className="flex items-center justify-between mb-3">
							<h3 className="font-extrabold text-xl">Investment</h3>
							<MoreHorizontal />
						</div>
						<div className="flex-1 lg:h-auto">
							<Chart />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
