import React, { Dispatch, SetStateAction, useState } from "react"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import axios from "axios"
import { useToast } from "./ui/use-toast"
import {
	getAllUsers,
	updateAllUsersState,
	useDispatch,
	useSelector,
} from "@/lib/redux"
import { ToastAction } from "./ui/toast"
import { Loader2 } from "lucide-react"
import { selectAllUsers } from "@/lib/redux/slices/selectors"

type DialogProps = {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
	email: string
}

const DeleteDialog = ({ open, setOpen, email }: DialogProps) => {
	const { toast } = useToast()
	const dispatch = useDispatch()
	const users = useSelector(selectAllUsers)
	const [deleting, setDeleting] = useState(false)

	const handleDelete = async () => {
		setDeleting(true)
		try {
			await axios.delete(`/api/delete/${email}`)
			setDeleting(false)
			const newList = users.filter((user) => user.email !== email)
			dispatch(updateAllUsersState(newList))
			toast({
				variant: "success",
				description: "User successfully deleted",
			})
		} catch (error) {
			console.log(error)
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: "There was a problem with your request.",
				action: <ToastAction altText="Try again">Try again</ToastAction>,
			})
		}
		setOpen(false)
		setDeleting(false)
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you sure absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</DialogDescription>
					<DialogFooter>
						<div className="flex items-center justify-end gap-4 mt-2">

						<Button
							variant={"outline"}
							className="w-full xs:w-32"
							onClick={() => setOpen(false)}>
							Cancel
						</Button>
						<Button
							onClick={handleDelete}
							className="bg-destructive hover:bg-red-700 w-full xs:w-32">
							{deleting ? <Loader2 className="animate-spin" /> : "Delete"}
						</Button>
							</div>
					</DialogFooter>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default DeleteDialog
