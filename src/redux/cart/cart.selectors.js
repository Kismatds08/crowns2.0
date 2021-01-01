import {createSelector} from 'reselect'


// Input Selector 

 const selectCart = state => state.cart


// For Selecting Cart Items from the Cart

export const selectCartItems = createSelector(
    [selectCart], 
    (
        cart => cart.cartItems
    )
)

// For Selecting Item Count 
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (
        cartItems => cartItems.reduce(
            (accumulatedQuantity, {quantity}) => accumulatedQuantity + quantity
        ,0) 
    )
)


// For Hidden Property
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

// Select Cart Total
export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price
    ,0))
)
