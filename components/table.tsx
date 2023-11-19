"use client"
import { updateAllUsersState, useDispatch, useSelector } from "@/lib/redux"
import { selectAllUsers } from "@/lib/redux/slices/selectors"
import { User } from "@/lib/types"
import { formattedValue } from "@/lib/utils"
import { Trash2 } from "lucide-react"
import moment from "moment"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import useSWR from "swr"
import DeleteDialog from "./confirm-delete"
import { Skeleton } from "./ui/skeleton"

const allUser = ["", "", "", "", "", "", "", "", "", "", "", "", "", ""]
const fetcher = (...rest: any) =>
	fetch(rest, { method: "GET", next: { revalidate: 0 } }).then((res) =>
		res.json(),
	)

const Table = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const [open, setOpen] = useState(false)
	const [email, setEmail] = useState("")
	const users = useSelector(selectAllUsers)
	const { data, isLoading, error } = useSWR<{ data: User[] }>(
		"/api/users",
		fetcher,
	)

	useEffect(() => {
		console.log(data?.data, "qwerty")
		if (!isLoading && data && data.data) {
			dispatch(updateAllUsersState([...data.data]))
		}
	}, [isLoading, dispatch, data])

	const handleDelete = async (e: string) => {
		setEmail(e)
		setOpen(!open)
	}

	if (isLoading) {
		return (
			<div className="flex-1 py-8 space-y-6 bg-white p-8 mt-8 capitalize rounded-lg">
				<table className="w-full">
					<thead>
						<tr className="border-b border-gray-200 pb-3">
							<th className="pl-2">Name</th>
							<th>Email</th>
							<th>Balance</th>
							<th>Interest</th>
							<th>Plan</th>
							<th>Date Created</th>
						</tr>
					</thead>
					<tbody>
						{allUser.map((user, i) => (
							<tr
								key={i}
								// onClick={() => router.push(`/admin/users/${user.email}`)}
								className="border-b font-medium text-sm border-gray-200 hover:bg-gray-100 transition-all duration-300 cursor-pointer">
								<td className="pl-2">
									<Skeleton className="h-4" />
								</td>
								<td>
									<Skeleton className="h-4" />
								</td>
								<td className="font-bold">
									<Skeleton className="h-4" />
								</td>
								<td className="text-[#37e237] font-bold">
									<Skeleton className="h-4" />
								</td>
								<td>
									<Skeleton className="h-4" />
								</td>
								<td>
									<Skeleton className="h-4" />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		)
	}

	return (
		<div className="flex-1 py-8 space-y-6 bg-white p-8 mt-8 capitalize rounded-lg">
			{users.length > 0 ? (
				<table className="w-full text-left">
					<thead>
						<tr className="border-b border-gray-200 pb-3">
							<th className="pl-2">Name</th>
							<th className="hidden md:block">Email</th>
							<th>Balance</th>
							<th>Interest</th>
							<th>Plan</th>
							<th className="hidden md:block">Date Created</th>
							<th className=""></th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr
								key={user.id}
								className="border-b font-medium text-sm border-gray-200 hover:bg-gray-100 transition-all duration-300 cursor-pointer">
								<td
									onClick={() => router.push(`/admin/users/${user.email}`)}
									className="pl-2">
									{user.name}
								</td>
								<td
									onClick={() => router.push(`/admin/users/${user.email}`)}
									className="lowercase hidden md:block">
									{user.email}
								</td>
								<td
									onClick={() => router.push(`/admin/users/${user.email}`)}
									className="font-bold">
									{formattedValue(user.balance)}
								</td>
								<td
									onClick={() => router.push(`/admin/users/${user.email}`)}
									className="text-[#37e237] font-bold">
									{user.interest}
								</td>
								<td
									onClick={() => router.push(`/admin/users/${user.email}`)}
									className="text-xs font-bold">
									{user.plan}
								</td>
								<td
									onClick={() => router.push(`/admin/users/${user.email}`)}
									className="hidden md:block">
									{moment(user.createdAt).format("ll")}
								</td>
								<td onClick={() => handleDelete(user.email as string)}>
									<Trash2 className="h-4 w-4" fill="red" color="red" />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>No active user</p>
			)}
			<DeleteDialog open={open} setOpen={setOpen} email={email} />
		</div>
	)
}

export default Table
