"use client"

import { authSchema } from "@/prisma/schema"
import { Auth } from "@/lib/types"
import React, { useEffect, useState } from "react"
import { FieldValue, FieldValues, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"

const AuthForm = ({
	form,
	setForm,
}: {
	form: boolean
	setForm: (e: boolean) => void
}) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm<Auth>({ resolver: zodResolver(authSchema) })

	const { data, status } = useSession()
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const [showPassword, setShowPassword] = useState(false)

	const onSumbit = (e: Auth) => {
		setLoading(true)
		try {
			if (!form) {
				signIn("credentials", {
					email: e.email,
					password: e.password,
				})
				setLoading(false)
			} else {
				fetch("/api/register", {
					method: "POST",
					body: JSON.stringify(e),
				})
					.then((res) => res.json())
					.then(() => {
						signIn("credentials", {
							email: e.email,
							password: e.password,
						}),
							setLoading(false)
					})
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<form
			onSubmit={handleSubmit(onSumbit)}
			className="lg:w-96 w-full mx-auto space-y-4">
			{form ? (
				<>
					<div className="flex flex-col items-start justify-start">
						<Label
							htmlFor="firstname"
							className="ml-2 font-semibold text-sm mb-1">
							Fullname
						</Label>
						<Input type="text" {...register("name")} placeholder="John Doe" />
					</div>
					{errors.name && (
						<p className="ml-2 font-semibold text-sm mb-1 text-destructive mt-1">
							{errors.name.message}
						</p>
					)}
				</>
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
				<Label htmlFor="password" className="ml-2 font-semibold text-sm mb-1">
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

			<Button disabled={status === "loading"} className="w-full">
				{!form ? (
					<span>{loading ? "Signing in..." : "Sign in"}</span>
				) : (
					<span>{loading ? "Signing up..." : "Sign up"}</span>
				)}
			</Button>

			{!form ? (
				<p className="tracking-tight">
					Don&apos;t already have an account?
					<Button
						type="button"
						variant={"ghost"}
						onClick={() => {
							reset()
							setForm(true)
						}}
						className="py-0 h-max text-[#C5AA17] hover:bg-transparent hover:text-[#C5AA17] px-1">
						Create an account
					</Button>
				</p>
			) : (
				<p className="tracking-tight">
					Already have an account?
					<Button
						type="button"
						variant={"ghost"}
						onClick={() => {
							reset()
							setForm(false)
						}}
						className="py-0 h-max text-[#C5AA17] hover:bg-transparent hover:text-[#C5AA17] px-1">
						Sign in
					</Button>
				</p>
			)}
		</form>
	)
}

export default AuthForm
