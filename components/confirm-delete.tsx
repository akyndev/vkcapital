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
import { getAllUsers, useDispatch } from "@/lib/redux"
import { ToastAction } from "./ui/toast"
import { Loader2 } from "lucide-react"

type DialogProps = {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
	email: string
}

const DeleteDialog = ({ open, setOpen, email }: DialogProps) => {
	const { toast } = useToast()
	const dispatch = useDispatch()
	const [deleting, setDeleting] = useState(false)

	const handleDelete = async () => {
		setDeleting(true)
		try {
			await axios.delete(`/api/delete/${email}`)
			setDeleting(false)
            toast({
                variant: "success",
				description: "User successfully deleted",
			})
			dispatch(getAllUsers())
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
						<Button variant={"outline"} className="w-32" onClick={() => setOpen(false)}>
							Cancel
						</Button>
						<Button
							onClick={handleDelete}
							className="bg-destructive hover:bg-red-700 w-32">
							{deleting ? <Loader2 className="animate-spin" /> : "Delete"}
						</Button>
					</DialogFooter>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default DeleteDialog
