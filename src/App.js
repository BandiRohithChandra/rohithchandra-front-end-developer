import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import NurserySection from './components/NurserySection';
import ProductsListSection from './components/ProductsListSection';
import SubscribeAndFollowSection from './components/SubscribeAndFollowSection';
import ThankYouPage from './components/ThankYouPage';
import CartSection from './components/CartSection';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  const handleAddToCart = (product, quantity) => {
    // Your logic for adding the product to the cart
    console.log(`Added ${quantity} of ${product.productName} to the cart.`);
};
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={
                        <>
                            <NurserySection />
                            <ProductsListSection onAddToCart={handleAddToCart} /> 
                            
                        </>
                    } />
                    <Route path="/thank-you/:id/:productName" element={<ThankYouPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                    <Route path="/cart" element={<CartSection />} />
                </Routes>
                <SubscribeAndFollowSection />
            </div>
        </Router>
    );
}

export default App;
