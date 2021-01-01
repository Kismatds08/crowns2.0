// Combining all Reducers
// Combining All Reducers
import {combineReducers} from 'redux'
import cartReducer from './cart/cart.reducer'
import userReducer from './user/user.reducer'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'

const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

// its just a possible configuration for redux persist to use
const persistConfig = {
    key:'root',
    storage: storage,
    whitelist: ['cart']
}


export default persistReducer(persistConfig, rootReducer)