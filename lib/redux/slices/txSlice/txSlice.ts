/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { createTx } from "../thunks"
import { Transaction } from "@/lib/types"

const initialState: TxSliceState = {
	value: [],
	openNav: false,
	status: "idle",
	close: false,
}

export const txSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		updateTxState: (state, action) => {
			state.value = action.payload
		},
		updateTxCloseState: (state) => {
			state.close = false
		},
		openNav: (state) => {
			state.openNav = !state.openNav
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createTx.pending, (state) => {
				state.close = false
				state.status = "loading"
			})
			.addCase(createTx.fulfilled, (state, action) => {
				state.status = "idle"
				state.close = true
				state.value = action.payload.data
			})
			.addCase(createTx.rejected, (state) => {
				state.status = "failed"
				state.close = false
			})
	},
})

export const { updateTxState, openNav, updateTxCloseState } = txSlice.actions

/* Types */
export interface TxSliceState {
	close: boolean
	openNav: boolean
	value: Transaction[]
	status: "idle" | "loading" | "failed"
}
