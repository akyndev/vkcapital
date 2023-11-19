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
import {
	selectTx,
	selectTxOpenNav,
	selectUser,
} from "@/lib/redux/slices/selectors"
import { User } from "@/lib/types"
import { cn, formattedValue } from "@/lib/utils"
import * as d from "next/dynamic"
import { notFound } from "next/navigation"
import { useEffect } from "react"
import useSWR from "swr"


const TxTable = d.default(() => import("../../../../../components/tx-table"), {
	ssr: false,
})


export const dynamic = "force-dynamic"
export const revalidate = 0
export const fetchCache = "force-no-store";


const fetcher = (...rest: any) =>
	fetch(rest, { method: "GET", cache: "no-store", next: { revalidate: 0 } }).then((res) => res.json())

const UserPage = ({ params }: { params: { slug: string } }) => {
	const { data, isLoading, error } = useSWR<User & { message: string }>(
		`/api/${params.slug}`,
		fetcher,
	)
	const tx = useSelector(selectTx)
	const user = useSelector(selectUser)
	const dispatch = useDispatch()
	const open = useSelector(selectTxOpenNav)

	useEffect(() => {
		if (!isLoading && data && data.message) {
			if (data.message === "no user found") {
				notFound()
			}
		}
		if (!isLoading && data && data.transactions) {
			dispatch(updateTxState([...data.transactions]))
			dispatch(updateUserState({ ...data }))
		}
	}, [isLoading, dispatch, data])

	return (
		<main className="relative container lg:px-8">
			<div className="w-full h-screen flex items-start space-x-0">
				<div
					className={cn("sm:w-24 lg:w-64 h-screen lg:block", {
						"sm:w-52": open,
					})}
				/>
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
							<AdminForm
								uBalance={data?.balance as number}
								uInterest={data?.interest as number}
								email={params.slug}
							/>
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
