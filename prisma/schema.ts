import { z } from "zod"

export const authSchema = z
	.object({
		name: z.string().optional(),
		email: z.string().email(),
		password: z
			.string()
			.min(10, "Password must not be less than 10 characters"),
	})
	
