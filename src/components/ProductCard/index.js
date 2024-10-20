import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const ProductCard = ({ eachProduct, onAddToCart }) => {
    const { id, productName, productDescription, rating, ratingImg, previousPrice, price, productImage } = eachProduct;
    const [quantity, setQuantity] = useState(0);
    const [isToggled, setIsToggled] = useState(true);

    const handleClick = () => {
      setIsToggled(!isToggled);
    };

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <li className='list-card'>
            <div className='image-card'>
                <img src={productImage} alt={`${productName} img`} className='product-image' />
                <Link to={`/thank-you/${id}/${encodeURIComponent(productName)}`} className='view-product-button'>View Product</Link>
            </div>
            <h2 className='product-name'>{productName}</h2>
            <p className='product-description'>{productDescription}</p>
            <div className='rating-layout'>
                <div>
                    <img src={ratingImg} alt='rating' className='image-rating' />
                </div>
                
                <p className='rating'>{rating}</p>
            </div>
            <div className='pricing-layout'>
                <p className='previous-price'>{previousPrice}</p>
                <span className='actual-price'>{price}</span>
            </div>
            <div className='button-container'>
                <div className='add-to-cart-section'>
                    <button variant="secondary" className='increase-button' onClick={incrementQuantity}>+</button>
                    <button
                        type="button"
                        className='cart-button'
                        onClick={() => onAddToCart(eachProduct, quantity)}
                        disabled={quantity === 0}
                    >
                        <span className='button-description'>
                            {quantity > 0 ? quantity : "Add to Cart"}
                        </span>
                    </button>

                    <button variant="secondary" className='decrease-button' onClick={decrementQuantity}>-</button>

                </div>
                <div className='buyon-wrapper'>
                    <button onClick={handleClick} className={isToggled ? 'rent-btn' : 'rent-btn active'}>
                        {isToggled ? 'Buy on Rent' : 'Rent Added'}
                    </button>
                    
                </div>  
            </div>
        </li>
    );
};

export default ProductCard;
