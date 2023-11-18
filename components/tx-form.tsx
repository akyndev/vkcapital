"use client"
import React, { useState } from "react"
import { Button } from "./ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "./ui/select"

const TxForm = () => {
	const [tx, setTx] = useState({
		amount: 100,
		type: "Default",
	})


	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()



	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="w-full md:w-max">Add a transaction</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add Transaction</DialogTitle>
					<DialogDescription>
						Add a new transaction to the user&#39;s transactions. Click save
						when you&#39;re done.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit}>
					<div className="grid gap-4 py-4">
						<div className=" gap-4">
							<Label htmlFor="name" className="text-right pl-2 mb-3">
								Amount
							</Label>
							<Input
								type="number"
								step={50}
								onChange={(e) =>
									setTx({ ...tx, amount: Number(e.currentTarget.value) })
								}
								id="name"
								min={0}
								defaultValue={tx.amount}
								className="col-span-3"
							/>
						</div>
						<div className="w-full">
							<Select
								onValueChange={(e: unknown) =>
									setTx({ ...tx, type: e as string })
								}>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Type of transaction" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Types</SelectLabel>
										<SelectItem value="TOPUP">Top up</SelectItem>
										<SelectItem value="WITHDRAW">Withdraw</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>
					<DialogFooter>
						<Button type="submit">Save changes</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}

export default TxForm
