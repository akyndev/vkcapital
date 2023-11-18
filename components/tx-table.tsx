import { formattedValue } from '@/lib/utils'
import React from 'react'

const TxTable = ({ tx }: { tx: any }) => {
  return (
		<>
			<table className="w-full text-left">
				<tr className="border-b border-gray-200 pb-3">
					<th className="pl-2">Type</th>
					<th className="pl-3">Status</th>
					<th>Amount</th>
					<th>Date Created</th>
				</tr>
				{tx.map((tx: any) => (
					<tr
						key={tx.id}
						className="border-b font-medium text-sm border-gray-200 hover:bg-gray-100 transition-all duration-300 cursor-pointer">
						<td className="pl-2">{tx.type}</td>
						<td>
							<p className="bg-green-300 w-max py-2 px-4 rounded-full">
								success
							</p>
						</td>
						<td className="font-bold">{formattedValue(tx.amount)}</td>
						<td>Aug 22, 2023</td>
					</tr>
				))}
			</table>
		</>
	)
}

export default TxTable