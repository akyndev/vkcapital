"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Login as Auth } from "@/lib/types"
import { authSchema, loginSchema } from "@/prisma/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff } from "lucide-react"
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import React, { useState } from "react"
import { useForm } from "react-hook-form"

const Login = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm<Auth>({ resolver: zodResolver(loginSchema) })

	const { data, status } = useSession()
	const router = useRouter()
	const err = useSearchParams().get("error")
	const [loading, setLoading] = useState(false)
	const [showPassword, setShowPassword] = useState(false)

	const onSumbit = (e: Auth) => {
		setLoading(true)
		try {
			signIn("credentials", {
				email: e.email,
				password: e.password,
			})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<div className="justify-end flex w-full">
				<Link href={"/auth/register"}>
					<Button className="rounded-full w-36">Register</Button>
				</Link>
			</div>
			<div className="text-center flex-1 items-center justify-center flex flex-col">
				<div className="mx-auto w-full lg:w-max my-6">
					<h1 className="text-4xl font-semibold tracking-tighter">
						Welcome Back
					</h1>
					<p className="w-full lg:w-96 text-sm lg:text-base">
						Seize the opportunity to grow your future wealth and financial
						security.
					</p>
				</div>
				<form
					onSubmit={handleSubmit(onSumbit)}
					className="lg:w-96 w-full mx-auto space-y-4">
					{err ? (
						<p className="font-semibold capitalize mb-1 text-destructive mt-1">
							{err}
						</p>
					) : null}

					<div className="flex flex-col items-start justify-start">
						<Label htmlFor="email" className="ml-2 font-semibold text-sm mb-1">
							Email
						</Label>
						<Input
							type="email"
							{...register("email")}
							placeholder="example@gmail.com"
							autoComplete="username"
						/>
						{errors.email && (
							<p className="ml-2 font-semibold text-sm mb-1 text-destructive mt-1">
								{errors.email.message}
							</p>
						)}
					</div>

					<div className="flex flex-col items-start justify-start">
						<Label
							htmlFor="password"
							className="ml-2 font-semibold text-sm mb-1">
							Password
						</Label>
						<div className="relative w-full">
							<Input
								type={showPassword ? "text" : "password"}
								{...register("password")}
								autoComplete="current-password"
							/>
							<div
								onClick={() => setShowPassword(!showPassword)}
								className="absolute right-4 top-3 cursor-pointer">
								{!showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
							</div>
						</div>
						{errors.password && (
							<p className="ml-2 font-semibold text-sm mb-1 text-destructive mt-1">
								{errors.password.message}
							</p>
						)}
					</div>

					<Button disabled={status === "loading" || loading} className="w-full">
						<span>{loading ? "Signing in..." : "Sign in"}</span>
					</Button>

					<p className="tracking-tight">
						Don&apos;t already have an account?
						<Link href={"/auth/register"}>
							<Button
								type="button"
								variant={"ghost"}
								onClick={() => {
									reset()
								}}
								className="py-0 h-max text-[#C5AA17] hover:bg-transparent hover:text-[#C5AA17] px-1">
								Create an account
							</Button>
						</Link>
					</p>
				</form>
			</div>
		</>
	)
}

export default Login
