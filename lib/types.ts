import { z } from "zod"
import { authSchema, txSchema, userSchema } from "../prisma/schema"

export type Auth = z.infer<typeof authSchema>

export type User = z.infer<typeof userSchema>

export type Transaction = z.infer<typeof txSchema>
