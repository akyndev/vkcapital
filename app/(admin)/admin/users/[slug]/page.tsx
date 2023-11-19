"use client"
import AdminForm from "@/components/admin-form"
import TxForm from "@/components/tx-form"
import TxLoader from "@/components/txLoader"
import { Skeleton } from "@/components/ui/skeleton"
import {
	updateTxState,
	updateUserState,
	useDispatch,
	useSelector,
} from "@/lib/redux"
import { selectTx, selectUser } from "@/lib/redux/slices/selectors"
import { Transaction, User } from "@/lib/types"
import { formattedValue } from "@/lib/utils"
import { userSchema } from "@/prisma/schema"
import dynamic from "next/dynamic"
import React, { useEffect, useState } from "react"
import useSwr from "swr"

const TxTable = dynamic(() => import("../../../../../components/tx-table"), {
	ssr: false,
})

const fetcher = (...rest: any) =>
	fetch(rest, { method: "GET" }).then((res) => res.json())

const UserPage = ({ params }: { params: { slug: string } }) => {
	const { data, isLoading, error } = useSwr<User>(
		`/api/${params.slug}`,
		fetcher,
	)
	const tx = useSelector(selectTx)
	const user = useSelector(selectUser)
	const dispatch = useDispatch()
	// const parsedUser = userSchema.safeParse(data)

	useEffect(() => {
		if (!isLoading) {
			dispatch(updateTxState([...data?.transactions as Array<Transaction>]))
			dispatch(updateUserState({ ...data }))
		}
	}, [isLoading, dispatch, data])

	return (
		<main className="relative container lg:px-8">
			<div className="w-full h-screen flex items-start space-x-0">
				<div className="sm:w-32 lg:w-64 h-screen lg:block" />
				<div className="flex-1 py-8 space-y-6">
					<div className="p-6 bg-white rounded-lg">
						<div className="flex flex-wrap gap-y-4 gap-x-6">
							<div className="border-gray-300 border rounded-lg p-6 flex-1">
								<h4 className="text-muted-foreground text-sm font-medium">
									Total Balance
								</h4>
								{isLoading ? (
									<Skeleton className="h-8 w-32 mt-1" />
								) : (
									<h2 className="font-bold my-1">
										{formattedValue(user.balance)}
									</h2>
								)}
							</div>
							<div className="border-gray-300 border rounded-lg p-6 flex-1">
								<h4 className="text-muted-foreground text-sm font-medium">
									Total Interest
								</h4>
								{isLoading ? (
									<Skeleton className="h-8 w-32 mt-1" />
								) : (
									<h2 className="font-bold my-1">
										{formattedValue(user.interest)}
									</h2>
								)}
							</div>
							<div className="border-gray-300 border rounded-lg p-6 flex-1">
								<h4 className="text-muted-foreground text-sm font-medium">
									Current Plan
								</h4>
								{isLoading ? (
									<Skeleton className="h-8 w-32 mt-1" />
								) : (
									<h2 className="font-bold my-1">{user.plan}</h2>
								)}
							</div>
						</div>
						<div className="mt-3">
							<AdminForm email={params.slug} />
						</div>
					</div>
					<div className="bg-white p-6 mt-8 capitalize rounded-lg">
						{isLoading ? <TxLoader /> : <TxTable transactions={tx} />}
						<div className="flex items-center justify-end mt-3">
							<TxForm userId={data?.id as string} />
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default UserPage
