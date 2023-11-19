import { img, logo } from "@/lib"
import Image from "next/image"
import React from "react"

const AuthLayout = (props: React.PropsWithChildren) => {
	return (
		<main>
			<div className="container">
				<div className="flex items-center">
					<div className="h-screen hidden relative lg:block w-full lg:col-span-1">
						<Image
							src={logo}
							alt="logo"
							width={100}
							height={100}
							className="h-auto w-24 absolute top-6 left-4"
						/>
						<Image
							src={img}
							alt="Image"
							width={400}
							height={400}
							className="h-full w-full object-cover"
						/>
						<p className="text-black font-medium text-lg absolute bottom-8 right-4 left-32">
							VK Capital is an innovative investment platform designed to
							empower investors in achieving their financial goals. This
							user-friendly platform enables individuals to save and invest with
							a specific focus, whether it be starting a business, planning for
							retirement, or funding their child&apos;s future. VK Capital
							provides a streamlined and accessible avenue for users to grow
							their wealth through strategic investments. With a range of
							investment options and personalized goal-setting features, VK
							Capital aims to make financial planning and wealth accumulation
							more accessible and tailored to individual aspirations.
						</p>
					</div>
					<div className="h-screen w-full flex flex-col items-center justify-between py-8">
						{props.children}
					</div>
				</div>
			</div>
		</main>
	)
}

export default AuthLayout
