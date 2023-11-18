/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { createTx, updateUser } from "./thunks"

const initialState: CounterSliceState = {
	value: 0,
	status: "idle",
}

export const counterSlice = createSlice({
	name: "app",

	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		increment: (state) => {
			state.value += 1
		},
		decrement: (state) => {
			state.value -= 1
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createTx.fulfilled, (state, action) => {
				state.status = "idle"
				state.value += action.payload
			})
			// .addCase(updateUser.fulfilled, (state, action) => {
			// 	state.status = "idle"
			// 	state.value += action.payload
			// })
	},
})

export const { increment, incrementByAmount, decrement } = counterSlice.actions

/* Types */
export interface CounterSliceState {
	value: number
	status: "idle" | "loading" | "failed"
}
