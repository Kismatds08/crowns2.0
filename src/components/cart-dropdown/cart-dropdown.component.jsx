import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.component'

import {withRouter} from 'react-router-dom'

const CartDropDown = ({cartItems, history}) => (
    <div className = 'cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(
                    cartItem => 
                    <CartItem key={cartItem.id} item={cartItem} />
                )
            }
        </div>
        <CustomButton onClick= {
            () => {
                history.push('/checkout')
            }
        }> 
            GO TO CHECKOUT
        </CustomButton>
    </div>
)

const mapStateToProps = ({cart:{cartItems}}) =>  ({
    cartItems
})

export default withRouter(connect(mapStateToProps, null)(CartDropDown))