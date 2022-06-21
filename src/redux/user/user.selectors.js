import { createSelector } from "reselect"

const selecrUser = state => state.user

export const selectCurrentUser = createSelector(
    [selecrUser],
    user => user.currentUser
)