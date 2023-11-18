import axios from "axios"
import { createAppAsyncThunk } from "../../createAppAsyncThunk"

export const updateUser = createAppAsyncThunk("", async function (id: string) {
	const res = await axios.patch(`/api/users/${id}`, { name: "john" })
	return res.data
})

export const createTx = createAppAsyncThunk("", async function () {
	const res = await axios.post(`/api/tx`, { userId: "john" })
	return res.data
})
