import React, { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './index.css';

const AddToCartModal = ({ isOpen, toggle, product, onAddToCart, quantity, setQuantity }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setQuantity(1); 
    }, [product, setQuantity]);

    if (!product) return null;

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    const handleConfirm = () => {
        onAddToCart(product, quantity);
        navigate('/cart'); 
    };

    return (
        <Modal show={isOpen} onHide={toggle}>
            <Modal.Header closeButton>
                <Modal.Title>Add to Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2>{product.productName}</h2>
                <img src={product.productImage} alt={product.productName} className='product-image' />
                <p>{product.productDescription}</p>
                <p>Price: ${product.price}</p>
                <div className="quantity-control">
                    <Button variant="secondary" onClick={decrementQuantity}>-</Button>
                    <span className="mx-2">{quantity}</span>
                    <Button variant="secondary" onClick={incrementQuantity}>+</Button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={toggle}>Cancel</Button>
                <Button variant="primary" onClick={handleConfirm}>Confirm Add to Cart</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddToCartModal;
