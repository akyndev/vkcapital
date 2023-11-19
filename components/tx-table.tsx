import { Transaction } from "@/lib/types"
import { cn, formattedValue } from "@/lib/utils"
import moment from "moment"
import React from "react"

const TxTable = ({ transactions }: { transactions: Transaction[] }) => {
	return (
		<>
			{transactions ? (
				<table className="w-full text-left">
					<thead>
						<tr className="border-b border-gray-200 pb-3">
							<th className="pl-2">Type</th>
							<th className="pl-3 hidden sm:block">Status</th>
							<th>Amount</th>
							<th className="hidden xs:block">Date Created</th>
						</tr>
					</thead>
					<tbody>
						{transactions.length > 0 ? (
							<>
								{transactions.map((tx) => (
									<tr
										key={tx.id}
										className="border-b font-medium text-sm border-gray-200 hover:bg-gray-100 transition-all duration-300 cursor-pointer">
										<td className="pl-2 text-sm">{tx.type}</td>
										<td className="hidden sm:block">
											<p className="bg-green-300 w-max py-2 px-4 rounded-full">
												success
											</p>
										</td>
										<td
											className={cn("font-bold text-green-500", {
												"text-destructive": tx.type === "WITHDRAW",
											})}>
											{formattedValue(tx.amount)}
										</td>
										<td className="hidden xs:block">
											{moment(tx.createdAt).format("ll")}
										</td>
									</tr>
								))}
							</>
						) : (
							<div>No recent transactions</div>
						)}
					</tbody>
				</table>
			) : (
				<div>No recent transactions</div>
			)}
		</>
	)
}

export default TxTable
