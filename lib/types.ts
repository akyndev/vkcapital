import { z } from "zod"
import { authSchema, userSchema } from "../prisma/schema"

export type Auth = z.infer<typeof authSchema>


export type User = z.infer<typeof userSchema>