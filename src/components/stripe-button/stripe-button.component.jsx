import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51GvzQ8LG1c5o9Wnq6jfpJGKZoc8ycMWO0gUpltLlSm6WqcmTByaiPea0DaFt0wki8H4O9igqBrxUHDNljnozpuvW00cdC2OWd2'

    const onToken = token => {
        alert('Payment Successful')
    }
    return (
        <StripeCheckout 
        label='Pay Now'
        name='Ecommerce Pvt Ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total price is ${price}`}
        amount = {priceForStripe}
        panelLabel='Pay Now'
        token = {onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton