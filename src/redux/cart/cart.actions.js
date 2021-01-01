import CartActionTypes from './cart.types'


export const toggleCartHidden = () => (
    // Action is in form of object -> type=>Mandatory and payload=> Optional
    {
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    }
)

// ADD ITEM
export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

// REMOVE ITEM
export const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

// CLEAR ITEM
export const clearItem = (item) => ({
    type: CartActionTypes.CLEAR_ITEM,
    payload: item
})