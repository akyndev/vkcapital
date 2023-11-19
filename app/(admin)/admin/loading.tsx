import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const allUser = ["", "","", "","", "","", "","", "","", "","", "",]



const Laoding = () => {
  return (
		<main className="relative container lg:px-8">
			<div className="w-full h-screen flex items-start space-x-0">
				<div className="sm:w-24 lg:w-64 h-screen lg:block" />
				<div className="flex-1 py-8 space-y-6 bg-white p-8 mt-8 capitalize rounded-lg">
					<table className="w-full">
						<tr className="border-b border-gray-200 pb-3">
							<th className="pl-2">Name</th>
							<th>Email</th>
							<th>Balance</th>
							<th>Interest</th>
							<th>Plan</th>
							<th>Date Created</th>
						</tr>
						{allUser.map((user, i) => (
							<tr
								key={i}
								// onClick={() => router.push(`/admin/users/${user.email}`)}
								className="border-b font-medium text-sm border-gray-200 hover:bg-gray-100 transition-all duration-300 cursor-pointer">
								<td className="pl-2">
									<Skeleton className='h-4' />
								</td>
								<td>
									<Skeleton className='h-4' />
								</td>
								<td className="font-bold">
									<Skeleton className='h-4' />
								</td>
								<td className="text-[#37e237] font-bold">
									<Skeleton className='h-4' />
								</td>
								<td>
									<Skeleton className='h-4' />
								</td>
								<td>
									<Skeleton className='h-4' />
								</td>
							</tr>
						))}
					</table>
				</div>
			</div>
		</main>
	)
}

export default Laoding