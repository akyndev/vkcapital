"use client"
import TxTable from "@/components/tx-table"
import TxLoader from "@/components/txLoader"
import { updateTxState, useDispatch, useSelector } from "@/lib/redux"
import { selectTx } from "@/lib/redux/slices/selectors"
import { Transaction, User } from "@/lib/types"
import { cn } from "@/lib/utils"
import { userSchema } from "@/prisma/schema"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import useSwr from "swr"
import { selectTxOpenNav } from "@/lib/redux/slices/selectors"

const fetcher = (...rest: any) =>
	fetch(rest, { method: "GET" }).then((res) => res.json())

const Transactions = () => {
	const tx = useSelector(selectTx)
	const { data: session, status } = useSession({ required: true })
	const { data, isLoading, error } = useSwr<User>(
		`/api/${session?.user?.email}`,
		fetcher,
	)
	const parsedUser = userSchema.safeParse(data)
	const dispatch = useDispatch()
const open = useSelector(selectTxOpenNav)
	useEffect(() => {
		if (!isLoading) {
			dispatch(updateTxState([...(data?.transactions as Array<Transaction>)]))
		}
	}, [isLoading, dispatch, data])

	return (
		<div>
			<div className="w-full h-screen flex items-start space-x-0">
				<div
					className={cn("sm:w-24 lg:w-64 h-screen lg:block", {
						"sm:w-52": open,
					})}
				/>
				<div className="flex-1 py-8 space-y-6 px-6">
					<div className="rounded-lg bg-white p-6">
						{isLoading ? (
							<TxLoader />
						) : (
							<>
								{tx.length > 0 ? (
									<TxTable transactions={tx} />
								) : (
									<p className="flex items-center justify-center text-lg">
										No recent transactions
									</p>
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Transactions
