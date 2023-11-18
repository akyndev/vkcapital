"use client"
import AdminForm from "@/components/admin-form"
import TxForm from "@/components/tx-form"
import { selectCount, useDispatch, useSelector } from "@/lib/redux"
import dynamic from "next/dynamic"
import React, { useState } from "react"

const tx  = [
	{
		id: "65577fc27d87616483052b1a",
		userId: "65577dd57d87616483052b13",
		type: "TOPUP",
		amount: 500,
	},
	{
		id: "65577fc27d87616483052b1b",
		userId: "65577dd57d87616483052b13",
		type: "TOPUP",
		amount: 500,
	},
	{
		id: "65577fc27d87616483052b1a",
		userId: "65577dd57d87616483052b13",
		type: "TOPUP",
		amount: 500,
	},
	{
		id: "65577fc27d87616483052b1b",
		userId: "65577dd57d87616483052b13",
		type: "TOPUP",
		amount: 500,
	},
	{
		id: "65577fc27d87616483052b1a",
		userId: "65577dd57d87616483052b13",
		type: "TOPUP",
		amount: 500,
	},
	{
		id: "65577fc27d87616483052b1b",
		userId: "65577dd57d87616483052b13",
		type: "TOPUP",
		amount: 500,
	},
]

const TxTable = dynamic(() => import("../../../../../components/tx-table"), {
	ssr: false,
})

const UserPage = ({ params }: { params: { slug: string } }) => {
	const state = useSelector(selectCount)


	console.log(state)

	return (
		<main className="relative container lg:px-8">
			<div className="w-full h-screen flex items-start space-x-0">
				<div className="sm:w-32 lg:w-64 h-screen lg:block" />
				<div className="flex-1 py-8 space-y-6">
					<div className="p-6 bg-white rounded-lg">
						<div className="grid grid-cols-3 gap-6 ">
							<div className="border-gray-300 border rounded-lg p-6 w-full">
								<h4 className="text-muted-foreground text-sm font-medium">
									Total Balance
								</h4>
								<h2 className="font-bold my-1">$3,000.00</h2>
							</div>
							<div className="border-gray-300 border rounded-lg p-6 w-full">
								<h4 className="text-muted-foreground text-sm font-medium">
									Total Interest
								</h4>
								<h2 className="font-bold my-1">$67.00</h2>
							</div>
							<div className="border-gray-300 border rounded-lg p-6 w-full">
								<h4 className="text-muted-foreground text-sm font-medium">
									Current Plan
								</h4>
								<h2 className="font-bold my-1">Basic</h2>
							</div>
						</div>
						<div className="mt-3">
							<AdminForm />
						</div>
					</div>
					<div className="bg-white p-6 mt-8 capitalize rounded-lg">
						<TxTable tx={tx} />
						<div className="flex items-center justify-end mt-3">
							<TxForm />
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default UserPage
