"use client"
import type { User } from "@/lib/types"
import { cn, formattedValue } from "@/lib/utils"
import { ArrowDown, ArrowUp, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Separator } from "./ui/separator"
import { useSelector } from "@/lib/redux"
import { selectTxOpenNav } from "@/lib/redux/slices/selectors"

const Dashboard = ({ data }: { data: User }) => {
	const [amount, setAmount] = useState(1000)
	const [plan, setPlan] = useState(20)
	const [interest, setInterest] = useState({
		daily: 0.0,
		monthly: 0.0,
		yearly: 0.0,
	})
	const open = useSelector(selectTxOpenNav)
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
			<div
				className={cn("sm:w-24 lg:w-64 h-screen lg:block", { "sm:w-52": open })}
			/>
			<div className="flex-1 py-8 space-y-6">
				<div className="grid md:grid-cols-2 grid-cols-1 gap-6">
					<div className="bg-white rounded-lg space-y- p-6">
						<h2 className="text-xl font-extrabold mb-3">Total Balance</h2>
						<h2 className="text-xl font-extrabold">
							{formattedValue(data.balance + data.interest)}
						</h2>
						<p className="text-sm capitalize text-muted-foreground font-medium">
							last interest
						</p>
						<div className="mt-3  flex flex-wrap gap-3">
							<Link target="_blank" href={"https://telegram.me/VKFinanceTeam"}>
								<Button className="rounded-full w-32">Top up</Button>
							</Link>
							<Link target="_blank" href={"https://telegram.me/VKFinanceTeam"}>
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
						<div className="mt-3 flex flex-wrap gap-y-1 gap-x-4 items-center">
							<Button
								className="rounded-full w-32 sm:w-44"
								variant={
									data.balance >= 1000 && data.balance <= 4999
										? "default"
										: "outline"
								}>
								Standard
							</Button>
							<h2 className="text-lg text-[#369A40] font-semibold">
								+ {formattedValue(calIn(20))}{" "}
								<small className="text-black font-normal">yearly</small>
							</h2>
						</div>
						<div className="mt-3 flex flex-wrap gap-y-1 gap-x-4 items-center">
							<Button
								className="rounded-full w-32 sm:w-44"
								variant={
									data.balance >= 5000 && data.balance <= 9999
										? "default"
										: "outline"
								}>
								Premium
							</Button>
							<h2 className="text-lg text-[#369A40] font-semibold">
								+ {formattedValue(calIn(30))}{" "}
								<small className="text-black font-normal">yearly</small>
							</h2>
						</div>
						<div className="mt-3 flex flex-wrap gap-y-1 gap-x-4 items-center">
							<Button
								className="rounded-full w-32 sm:w-44"
								variant={data.balance >= 10000 ? "default" : "outline"}>
								Exclusive
							</Button>
							<h2 className="text-lg text-[#369A40] font-semibold">
								+ {formattedValue(calIn(40))}{" "}
								<small className="text-black font-normal">yearly</small>
							</h2>
						</div>
					</div>
				</div>

				<div className="grid md:grid-cols-2 grid-cols-1 gap-6">
					<div className="bg-white rounded-lg p-6">
						<div className="flex items-center justify-between mb-3">
							<h3 className="font-extrabold text-lg md:text-xl">
								Latest transactions
							</h3>
							<Link href={"/transactions"}>
								<Button
									variant={"ghost"}
									className="text-primary px-2 py-1 font-semibold">
									See More
								</Button>
							</Link>
						</div>
						{data.transactions ? (
							<>
								{data.transactions.length > 0 ? (
									<div className="">
										{data.transactions.slice(0, 6).map((d, i) => (
											<div
												key={i}
												className="flex items-start flex-wrap gap-4 border-b border-muted first:border-t py-2">
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
													<h4 className="font-semibold">
														{d.type === "TOPUP"
															? "Balance Top up"
															: "Withdrawal"}
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
									<p className="w-full h-full pb-2 flex items-center justify-center text-xl">
										No recent transaction
									</p>
								)}
							</>
						) : null}
					</div>
					<div className="bg-white rounded-lg p-6 lg:h-full flex flex-col">
						<div className="flex items-center justify-between mb-3">
							<h3 className="font-extrabold text-lg md:text-xl">
								Deposit Calculator
							</h3>
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
								min={10}
							/>
							<div className="my-3 flex items-center gap-3 flex-wrap">
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
							<div className="my-3 flex items-center gap-3 flex-wrap">
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
								If you invest {formattedValue(amount)} your estimated returns
								will be:{" "}
							</p>
							<div className="flex flex-wrap gap-4 justify-between">
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
