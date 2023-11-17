import { z } from "zod"

export const authSchema = z.object({
	name: z.string().optional(),
	email: z.string().email(),
	password: z.string().min(10, "Password must not be less than 10 characters"),
})


export const userSchema = z.object({
	id: z.string(),
	name: z.string().nullable(),
	email: z.string().nullable(),
	emailVerified: z.date().nullable(),
	image: z.string().nullable(),
	balance: z.number(),
	interest: z.number(),
	plan: z.enum(["BASIC", "STANDARD", "PREMIUM", "EXCLUSIVE"]),
	password: z.string().nullable(),
	transactions: z.array(
		z.object({
			id: z.string(),
			userId: z.string(),
			type: z.enum(["TOPUP", "WITHDRAW"]),
			amount: z.number(),
		}),
	),
})
