/* Instruments */
import type { ReduxState } from "@/lib/redux"

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTx = (state: ReduxState) => state.tx.value
export const selectUser = (state: ReduxState) => state.user.value
export const selectUserStatus = (state: ReduxState) => state.user.status
export const selectTxStatus = (state: ReduxState) => state.tx.status
export const selectTxClose = (state: ReduxState) => state.tx.close
export const selectUserClose = (state: ReduxState) => state.user.close
