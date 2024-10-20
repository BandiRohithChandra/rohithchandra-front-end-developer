import './index.css'

const CartSection = () => {
    return(
        <div className='cart-container'>
            <h1 className='cart-heading'>Your Cart</h1>
            <hr className='hr-line'/>
            <h2 className='order-placed-heading'>Congratulations Order Placed!</h2>
            <div>
                <img src = "https://i.imgur.com/SHQ5f1z.png" className='order-placed' alt ="order-placed" /> 
            </div>
            <p className='order-placed-description'>Thank you for choosing Chaperone services.
            We will soon get in touch with you!</p>
            <div className='button-container'>
                <button type='button' className='continue-shopping-button'>continue shopping</button>
            </div>
            </div>
            
    )
}

export default CartSection 