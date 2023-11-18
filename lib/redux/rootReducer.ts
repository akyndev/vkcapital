/* Instruments */
import { txSlice, userSlice } from "./slices"

export const reducer = {
	tx: txSlice.reducer,
	user: userSlice.reducer,
}
