"use client"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import Image from "next/image"
import { img, logo } from "@/lib"
import AuthForm from "@/components/auth-form"
const Auth = () => {
	const [form, setForm] = useState<boolean>(false)

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
							retirement, or funding their child&apos;s college education. VK
							Capital provides a streamlined and accessible avenue for users to
							grow their wealth through strategic investments. With a range of
							investment options and personalized goal-setting features, VK
							Capital aims to make financial planning and wealth accumulation
							more accessible and tailored to individual aspirations.
						</p>
					</div>
					<div className="h-screen w-full flex flex-col items-center justify-between py-8">
						<div
							className="justify-end flex w-full"
							onClick={() => setForm(!form)}>
							{!form ? (
								<Button className="rounded-full w-36">Register</Button>
							) : (
								<Button className="rounded-full w-36">Login</Button>
							)}
						</div>
						<div className="text-center flex-1 items-center justify-center flex flex-col">
							<div className="mx-auto w-max my-6">
								<h1 className="text-4xl font-semibold tracking-tighter">
									{!form ? "Welcome Back" : "Get Started"}
								</h1>
								<p className="w-full lg:w-96 text-sm lg:text-base">
									{!form
										? "Seize the opportunity to grow your future wealth and financial security."
										: "The best time to plant a tree was 20 years ago. The second-best time is now. Similarly, the best time to start investing was yesterday, but the next best time is today."}
								</p>
							</div>
							<AuthForm form={Boolean(form)} setForm={setForm} />
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Auth
