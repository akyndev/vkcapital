import { z } from "zod"
import { authSchema } from "../prisma/schema"

export type Auth = z.infer<typeof authSchema>
