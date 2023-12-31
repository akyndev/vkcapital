import { z } from "zod"

export const authSchema = z.object({
	name: z.string().min(3, "Name can't be two characters"),
	email: z.string().email(),
	password: z.string().min(10, "Password must not be less than 10 characters"),
})

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(10, "Password must not be less than 10 characters"),
})

const PlanEnum = z.enum(["BASIC", "STANDARD", "PREMIUM", "EXCLUSIVE"])
const TransactionTypesEnum = z.enum(["TOPUP", "WITHDRAW"])

export const txSchema = z.object({
	id: z.string(),
	userId: z.string(),
	type: TransactionTypesEnum,
	amount: z.number(),
	createdAt: z.union([z.date(), z.string().datetime(), z.string()]),
})

export const userSchema = z.object({
	id: z.string(),
	name: z.string().nullable(),
	email: z.string().nullable(),
	emailVerified: z.date().nullable(),
	password: z.string().nullable(),
	image: z.string().nullable(),
	balance: z.number().default(0),
	interest: z.number().default(0),
	plan: PlanEnum.default("BASIC"),
	transactions: z.union([z.undefined(), z.array(txSchema)]),
	createdAt: z.union([z.date(), z.string().datetime(), z.string()]),
	updatedAt: z.union([z.undefined(), z.string().datetime(), z.date()]),
})
