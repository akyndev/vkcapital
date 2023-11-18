import React from "react"
import { Skeleton } from "./ui/skeleton"

const tx = ["", "", "", ""]

const TxLoader = () => {
	return (
		<table className="w-full text-left">
			<thead>
				<tr className="border-b border-gray-200 pb-3">
					<th className="pl-2">Type</th>
					<th className="pl-3">Status</th>
					<th>Amount</th>
					<th>Date Created</th>
				</tr>
			</thead>
			<tbody>
				{tx.map((tx, i) => (
					<tr
						key={i}
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
						<td>
							<Skeleton className="h-4" />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default TxLoader
