"use client"
import { User } from "@/lib/types"
import { formattedValue } from "@/lib/utils"
import { useRouter } from "next/navigation"
import React from "react"

const Table = ({ allUser }: { allUser: User[] }) => {
	const router = useRouter()

	return (
		<div className="flex-1 py-8 space-y-6 bg-white p-8 mt-8 capitalize rounded-lg">
			<table className="w-full text-left">
				<tr className="border-b border-gray-200 pb-3">
					<th className="pl-2">Name</th>
					<th>Email</th>
					<th>Balance</th>
					<th>Interest</th>
					<th>Plan</th>
					<th>Date Created</th>
				</tr>
				{allUser.map((user) => (
					<tr
						key={user.id}
						onClick={() => router.push(`/admin/users/${user.email}`)}
						className="border-b font-medium text-sm border-gray-200 hover:bg-gray-100 transition-all duration-300 cursor-pointer">
						<td className="pl-2">{user.name}</td>
						<td>{user.email}</td>
						<td className="font-bold">{formattedValue(user.balance)}</td>
						<td className="text-[#37e237] font-bold">{user.interest}</td>
						<td>{user.plan}</td>
						<td>Aug 22, 2023</td>
					</tr>
				))}
			</table>
		</div>
	)
}

export default Table