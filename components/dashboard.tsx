"use client"
import React, { useCallback, useEffect, useState } from "react"
import { ArrowDown, ArrowUp, MoreHorizontal } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Separator } from "./ui/separator"
import { Label } from "./ui/label"
import { cn, formattedValue } from "@/lib/utils"
import type { User } from "@/lib/types"
import Link from "next/link"

const Dashboard = ({ data }: { data: User }) => {
	const [amount, setAmount] = useState(1000)
	const [plan, setPlan] = useState(20)
	const [interest, setInterest] = useState({
		daily: 0.0,
		monthly: 0.0,
		yearly: 0.0,
	})

	const cal = useCallback(() => {
		if (amount <= 999) {
			setInterest({
				daily: 0,
				monthly: 0,
				yearly: 0,
			})
		} else {
			const yearly = (plan / 100) * amount
			const monthly = yearly / 12
			const daily = monthly / 30
			setInterest({
				daily,
				monthly,
				yearly,
			})
		}
	}, [plan, amount])

	const calIn = (num: number) => {
		return (num / 100) * data.balance
	}

	useEffect(() => {
		cal()
	}, [plan, amount, cal])

	return (
		<div className="w-full h-screen flex items-start space-x-0">
			<div className="sm:w-32 lg:w-64 h-screen lg:block" />
			<div className="flex-1 py-8 space-y-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<div className="bg-white rounded-lg space-y- p-6">
						<h2 className="text-xl font-extrabold mb-3">Total Balance</h2>
						<h2 className="text-xl font-extrabold">
							{formattedValue(data.balance + data.interest)}
						</h2>
						<p className="text-sm capitalize text-muted-foreground font-medium">
							last interest
						</p>
						<div className="mt-3  space-x-2">
							<Link target="_blank" href={"https://telegram.me/VKFinanceSA"}>
								<Button className="rounded-full w-32">Top up</Button>
							</Link>
							<Link target="_blank" href={"https://telegram.me/VKFinanceSA"}>
								<Button
									className="rounded-full w-32 text-[#C5AA17]"
									variant={"outline"}>
									Withdraw
								</Button>
							</Link>
						</div>

						<div className="mt-3">
							<h2 className=" font-semibold">{data.plan}</h2>
							<p className="text-sm capitalize text-muted-foreground font-medium">
								Current Plan
							</p>
						</div>
					</div>
					<div className="bg-white rounded-lg  p-6">
						<h2 className="text-xl font-extrabold mb-3">Plan</h2>
						<div className="mt-3  space-x-4 flex items-center">
							<Button
								className="rounded-full w-56"
								variant={
									data.balance >= 1000 && data.balance <= 4999
										? "default"
										: "outline"
								}>
								Standard
							</Button>
							<h2 className="text-xl text-[#369A40] font-extrabold">
								+ {formattedValue(calIn(20))}{" "}
								<small className="text-black font-normal">yearly</small>
							</h2>
						</div>
						<div className="mt-3  space-x-4 flex items-center">
							<Button
								className="rounded-full w-56"
								variant={
									data.balance >= 5000 && data.balance <= 9999
										? "default"
										: "outline"
								}>
								Premium
							</Button>
							<h2 className="text-xl text-[#369A40] font-extrabold">
								+ {formattedValue(calIn(30))}{" "}
								<small className="text-black font-normal">yearly</small>
							</h2>
						</div>
						<div className="mt-3  space-x-4 flex items-center">
							<Button
								className="rounded-full w-56"
								variant={data.balance > 10000 ? "default" : "outline"}>
								Exclusive
							</Button>
							<h2 className="text-xl text-[#369A40] font-extrabold">
								+ {formattedValue(calIn(40))}{" "}
								<small className="text-black font-normal">yearly</small>
							</h2>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<div className="bg-white rounded-lg p-6">
						<div className="flex items-center justify-between mb-3">
							<h3 className="font-extrabold text-xl">Latest transactions</h3>
							<MoreHorizontal />
						</div>
						{data.transactions.length > 0 ? (
							<div className="space-y-4">
								{data.transactions.map((d, i) => (
									<div key={i} className="flex items-start space-x-4">
										{d.type === "TOPUP" ? (
											<div className="flex w-max p-3 text-sm items-center justify-center text-[#369A40] rounded-full space-x-2 bg-green-400/20">
												<ArrowUp size={16} className="" />
											</div>
										) : (
											<div className="flex w-max p-3 text-sm items-center justify-center text-[#9a3636] rounded-full space-x-2 bg-red-400/20">
												<ArrowDown size={16} className="" />
											</div>
										)}
										<div className="flex-1">
											<h4 className="font-bold">
												{d.type === "TOPUP" ? "Balance Top up" : "Withdrawal"}
											</h4>
											<p className="text-xs text-muted-foreground">
												Personal Payment
											</p>
										</div>
										<h3
											className={cn("font-extrabold text-destructive", {
												"text-[#369A40]": d.type === "TOPUP",
											})}>
											{d.type === "TOPUP" ? "+" : "-"}
											{formattedValue(d.amount)}
										</h3>
									</div>
								))}
							</div>
						) : (
							<p className="w-full h-full flex items-center justify-center text-xl">
								No recent transaction
							</p>
						)}
					</div>
					<div className="bg-white rounded-lg p-6 lg:h-full flex flex-col">
						<div className="flex items-center justify-between mb-3">
							<h3 className="font-extrabold text-xl">Deposit Calculator</h3>
							<MoreHorizontal />
						</div>
						<div className="flex-1">
							<Label className="ml-2 font-semibold text-lg" htmlFor="amount">
								Amount($)
							</Label>
							<Input
								type="number"
								id="amount"
								onChange={(e) => {
									cal()
									setAmount(Number(e.target.value))
								}}
								value={amount}
								min={100}
								step={50}
							/>
							<div className="my-3 space-x-3">
								<Button onClick={() => setAmount(1000)} variant={"outline"}>
									1000
								</Button>
								<Button onClick={() => setAmount(5000)} variant={"outline"}>
									5000
								</Button>
								<Button onClick={() => setAmount(10000)} variant={"outline"}>
									10000
								</Button>
								<Button
									onClick={() => setAmount(data.balance)}
									variant={"outline"}>
									All
								</Button>
							</div>
							<div className="my-3 space-x-3">
								<Button
									onClick={() => {
										setPlan(20)
									}}
									className={cn("hover:bg-[#C5AA17] hover:text-white", {
										"bg-[#C5AA17] text-white": plan === 20,
									})}
									variant={"outline"}>
									Standard
								</Button>
								<Button
									onClick={() => {
										setPlan(30)
									}}
									className={cn("hover:bg-[#C5AA17] hover:text-white", {
										"bg-[#C5AA17] text-white": plan === 30,
									})}
									variant={"outline"}>
									Premuim
								</Button>
								<Button
									onClick={() => {
										setPlan(40)
									}}
									className={cn("hover:bg-[#C5AA17] hover:text-white", {
										"bg-[#C5AA17] text-white": plan === 40,
									})}
									variant={"outline"}>
									Exclusive
								</Button>
							</div>
							<p>
								Transfer from your balance:{" "}
								<b>{formattedValue(data.balance)}</b>
							</p>
							<Separator className="my-3" />
							<p className="mb-2">
								If you invest ${"0.000"} your estimated returns will be:{" "}
							</p>
							<div className="grid grid-cols-3">
								<div>
									<p className="text-sm">Daily</p>
									<h2 className="font-extrabold text-xl">
										{formattedValue(interest.daily)}
									</h2>
								</div>
								<div>
									<p className="text-sm">Monthly</p>
									<h2 className="font-extrabold text-xl">
										{formattedValue(interest.monthly)}
									</h2>
								</div>
								<div>
									<p className="text-sm">Yearly</p>
									<h2 className="font-extrabold text-xl">
										{formattedValue(interest.yearly)}
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
