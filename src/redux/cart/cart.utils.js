// Utiltity functions allow us to keep files clean and organize functions


// Adding Item Utility
export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )

    // Find Method if it true it will return true or it will return undefined

    if(existingCartItem){
        return cartItems.map(
            cartItem => 
            (cartItem.id === cartItemToAdd.id) ? 
            {...cartItem, quantity: cartItem.quantity + 1}
            :
            cartItem
        )
    }

    // return [[],{id:'1',name:'blue beannie', price: 18, quantity: 1}]
    return [...cartItems, {...cartItemToAdd, quantity: 1}]

}


// Remove Item Utility
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    // Removing whole cart item itself if at all the quantity reaches to 1
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(
            cartItem => cartItem.id !== cartItemToRemove.id
            )
    }

    // Else reducing the quantity by 1
    return cartItems.map(
        cartItem => cartItem.id  === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1}
        :
        cartItem
    )
}
