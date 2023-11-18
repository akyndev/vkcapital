"use client"
import React, { useEffect, useState } from "react"
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
import { useDispatch, useSelector } from "@/lib/redux"
import { createTx } from "@/lib/redux/slices/thunks"
import { selectTxClose, selectTxStatus } from "@/lib/redux/slices/selectors"
import { Loader2 } from "lucide-react"

const TxForm = ({ userId }: { userId: string }) => {
	const [tx, setTx] = useState<{ type: "TOPUP" | "WITHDRAW"; amount: number }>({
		amount: 100,
		type: "TOPUP",
	})

	const [open, setOpen] = useState(false)

	const status = useSelector(selectTxStatus)
	const close = useSelector(selectTxClose)
	const dispatch = useDispatch()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		try {
			dispatch(createTx({ ...tx, userId, id: userId }))
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		if (status === "idle" && open && close) {
			setOpen(false)
		}
	}, [status, open, close])

	return (
		<Dialog open={open} onOpenChange={setOpen}>
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
								onValueChange={(e: "TOPUP" | "WITHDRAW") =>
									setTx({ ...tx, type: e })
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
						<Button type="submit" className="w-4/12">
							{status === "loading" ? <Loader2 className="animate-spin" /> : "Save changes"}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}

export default TxForm
