import { createSelector } from "reselect"

const selectUser = state => state.user

// Select CurrentUser from User

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)