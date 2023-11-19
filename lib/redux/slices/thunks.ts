import axios from "axios"
import { createAppAsyncThunk } from "../createAppAsyncThunk"
import { Transaction } from "@/lib/types"


type Tx = Omit<Transaction, "createdAt">
type U = {
	email: string
	balance: number
	interest: number
	plan: "BASIC" | "STANDARD" | "PREMIUM" | "EXCLUSIVE"
}

export const updateUser = createAppAsyncThunk(
	"app/updateUser",
	async ({ email, ...data }: U) => {
		const res = await axios.patch(`/api/users/${email}`, data)
		return res.data
	},
)

export const createTx = createAppAsyncThunk("app/createTx", async (data: Tx) => {
	const res = await axios.post(`/api/tx`, data)
	return res.data
})


export const getAllUsers = createAppAsyncThunk("app/users", async () => {
	const res = await axios.get("/api/users")
	return res.data.data
})