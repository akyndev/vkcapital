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
import { updateUser, useDispatch, useSelector } from "@/lib/redux"
import { Loader2 } from "lucide-react"
import { selectUserClose, selectUserStatus } from "@/lib/redux/slices/selectors"

const AdminForm = ({ email }: { email: string }) => {
	const [user, setUser] = useState<{
		balance: number
		interest: number
		plan: "BASIC" | "STANDARD" | "PREMIUM" | "EXCLUSIVE"
	}>({
		balance: 100,
		interest: 100,
		plan: "BASIC",
	})
	const dispatch = useDispatch()
	const status = useSelector(selectUserStatus)
	const close = useSelector(selectUserClose)
	const [open, setOpen] = useState(false)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		try {
			dispatch(updateUser({ email, ...user }))
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
									setUser({ ...user, balance: Number(e.currentTarget.value) })
								}
								id="name"
								min={0}
								defaultValue={user.balance}
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
									setUser({ ...user, interest: Number(e.currentTarget.value) })
								}
								id="name"
								min={0}
								defaultValue={user.interest}
								className="col-span-3"
							/>
						</div>
						<div className="w-full">
							<Select
								onValueChange={(
									e: "BASIC" | "STANDARD" | "PREMIUM" | "EXCLUSIVE",
								) => setUser({ ...user, plan: e })}>
								<SelectTrigger className="w-full">
									<SelectValue placeholder={user.plan} />
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
						<Button type="submit" className="w-4/12">
							{status === "loading" ? (
								<Loader2 className="animate-spin" />
							) : (
								"Save changes"
							)}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}

export default AdminForm
