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

const AdminForm = () => {
	const [tx, setTx] = useState({
		balance: 100,
		interest: 100,
		plan: "Default",
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="w-full md:w-max">
					Update user&#39;s information
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit User</DialogTitle>
					<DialogDescription>
						Make changes to user&#39;s profile here. Click save when you&#39;re
						done.
					</DialogDescription>
				</DialogHeader>

				<form onSubmit={handleSubmit}>
					<div className="grid gap-4 py-4">
						<div className=" gap-4">
							<Label htmlFor="name" className="text-right pl-2 mb-3">
								Balance
							</Label>
							<Input
								type="number"
								step={50}
								onChange={(e) =>
									setTx({ ...tx, balance: Number(e.currentTarget.value) })
								}
								id="name"
								min={0}
								defaultValue={tx.balance}
								className="col-span-3"
							/>
						</div>

						<div className=" gap-4">
							<Label htmlFor="name" className="text-right pl-2 mb-3">
								Interest
							</Label>
							<Input
								type="number"
								step={50}
								onChange={(e) =>
									setTx({ ...tx, interest: Number(e.currentTarget.value) })
								}
								id="name"
								min={0}
								defaultValue={tx.interest}
								className="col-span-3"
							/>
						</div>
						<div className="w-full">
							<Select
								onValueChange={(e: unknown) =>
									setTx({ ...tx, plan: e as string })
								}>
								<SelectTrigger className="w-full">
									<SelectValue placeholder={tx.plan} />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Plans</SelectLabel>
										<SelectItem value="BASIC">Basic</SelectItem>
										<SelectItem value="STANDARD">Standard</SelectItem>
										<SelectItem value="PREMIUM">Premium</SelectItem>
										<SelectItem value="EXCLUSIVE">Exclusive</SelectItem>
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

export default AdminForm
