/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { getAllUsers, updateUser } from "../thunks"
import { User } from "@/lib/types"
import { txSlice } from ".."

const initialState: UserSliceState = {
	value: {
		id: "655753262627f9401ba2693d",
		name: "ryt",
		email: "elprimeroinvestments@gmail.com",
		emailVerified: null,
		password: "$2a$10$FdgCOl5FaSPvUNOB/XYCDOPaoUKUSwEce4WIegkSw.5x4LsoRrIVG",
		image: null,
		balance: 5000,
		interest: 300,
		plan: "PREMIUM",
		transactions: [],
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	users: [],
	status: "idle",
	close: false,
}

export const userSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		updateUserState: (state, action) => {
			state.value = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(updateUser.pending, (state) => {
				state.close = false
				state.status = "loading"
			})
			.addCase(updateUser.fulfilled, (state, action) => {
				state.status = "idle"
				state.close = true
				state.value = action.payload
			})
			.addCase(updateUser.rejected, (state) => {
				state.status = "failed"
			})
			.addCase(getAllUsers.pending, (state) => {
				state.status = "loading"
			})
			.addCase(getAllUsers.fulfilled, (state, action) => {
				state.status = "idle"
				state.users = action.payload
			})
			.addCase(getAllUsers.rejected, (state) => {
				state.status = "failed"
			})
	},
})

export const { updateUserState } = userSlice.actions

/* Types */
export interface UserSliceState {
	close: boolean
	value: User
	users: User[]
	status: "idle" | "loading" | "failed"
}
