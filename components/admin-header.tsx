import { logo } from '@/lib'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'

const AdminHeader = () => {
  return (
			<header>
				<main className="relative container lg:px-0 px-0">
					<div className="w-full flex items-start space-x-0">
						<div className="flex-1 py-4 bg-white px-8 flex items-center justify-between">
							<Link href="/">
								<Image
									src={logo}
									alt="logo"
									width={50}
									height={50}
									className="block"
								/>
							</Link>
							<div className="w-max">
								<Button
									onClick={() => signOut()}
									variant={"ghost"}
									type="button"
									className="font-medium w-full text-base flex items-center justify-start rounded-lg">
									<LogOut className="" />
								</Button>
							</div>
						</div>
					</div>
				</main>
			</header>
	)
}

export default AdminHeader