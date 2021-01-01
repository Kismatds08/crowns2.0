import {userActionTypes} from './user.types'

// If we define this intial state component takes the default value that got assigned
const INTIAL_STATE = {
    currentUser: null,
}

// Reducer
const userReducer = (state = INTIAL_STATE, action) => {
    switch(action.type){
        case userActionTypes.SET_CURRENT_USER:
            return {
                currentUser: action.payload
            }
        default:
            return state
    }
}


export default userReducer
