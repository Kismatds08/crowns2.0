import CustomButton from '../custom-button/custom-button.component'
import './collection-item.styles.scss'

import {connect} from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

const CollectionItem = ({item,addItemToTheCart}) => {
    const {name, price, imageUrl} = item
    return(
        <div className='collection-item'>
            <div 
                className='image'
                style={{backgroundImage:`url(${imageUrl})`}}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => addItemToTheCart(item)} inverted='true'> Add to Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    // addItem: 'Arjun',
    // addItem: function (item){

     //   dispatch(addItem(item))

    //}
    addItemToTheCart: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem)