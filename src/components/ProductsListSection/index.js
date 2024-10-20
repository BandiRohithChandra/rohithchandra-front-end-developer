import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProductCard from '../ProductCard';
import AddToCartModal from '../AddToCartModal'
import './index.css';


const productsList = [
    { id: 1, productName: 'Monsterra-1', price: 299, productImage: 'https://i.imgur.com/opbUuUv.png', rating: 3.5,ratingImg: 'https://i.imgur.com/OeDOIEo.png', previousPrice: '$399', productDescription: 'Indoor Plant, Low maintenance'  },
    { id: 2, productName: 'Monsterra-2', price: 399, productImage: 'https://i.imgur.com/n09PIXD.png', rating: 4.0,ratingImg: 'https://i.imgur.com/OeDOIEo.png', previousPrice: '$599', productDescription: 'Indoor Plant, Low maintenance'  },
    { id: 3, productName: 'Monsterra-3', price: 269, productImage: 'https://i.imgur.com/opbUuUv.png', rating: 4.5,ratingImg: 'https://i.imgur.com/OeDOIEo.png', previousPrice: '$799', productDescription: 'Indoor Plant, Low maintenance'  },
    { id: 4, productName: 'Monsterra-4', price: 599, productImage: 'https://i.imgur.com/opbUuUv.png', rating: 2.5,ratingImg: 'https://i.imgur.com/OeDOIEo.png', previousPrice: '$899', productDescription: 'Indoor Plant, Low maintenance'  },
    { id: 5, productName: 'Monsterra-5', price: 799, productImage: 'https://i.imgur.com/n09PIXD.png', rating: 3.4,ratingImg: 'https://i.imgur.com/OeDOIEo.png', previousPrice: '$999', productDescription: 'Indoor Plant, Low maintenance'  },
    { id: 6, productName: 'Monsterra-6', price: 569, productImage: 'https://i.imgur.com/opbUuUv.png', rating: 4.8,ratingImg: 'https://i.imgur.com/OeDOIEo.png', previousPrice: '$799', productDescription: 'Indoor Plant, Low maintenance'  },
    { id: 7, productName: 'Monsterra-7', price: 299, productImage: 'https://i.imgur.com/opbUuUv.png', rating: 3.5,ratingImg: 'https://i.imgur.com/OeDOIEo.png', previousPrice: '$399', productDescription: 'Indoor Plant, Low maintenance'  },
    { id: 8, productName: 'Monsterra-8', price: 399, productImage: 'https://i.imgur.com/n09PIXD.png', rating: 4.0,ratingImg: 'https://i.imgur.com/OeDOIEo.png', previousPrice: '$599', productDescription: 'Indoor Plant, Low maintenance'  },
    { id: 9, productName: 'Monsterra-9', price: 269, productImage: 'https://i.imgur.com/opbUuUv.png', rating: 4.5,ratingImg: 'https://i.imgur.com/OeDOIEo.png', previousPrice: '$799', productDescription: 'Indoor Plant, Low maintenance'  },
    { id: 10, productName: 'Monsterra-18', price: 599, productImage: 'https://i.imgur.com/opbUuUv.png', rating: 2.5,ratingImg: 'https://i.imgur.com/OeDOIEo.png', previousPrice: '$899', productDescription: 'Indoor Plant, Low maintenance'  },
    { id: 11, productName: 'Monsterra-10', price: 799, productImage: 'https://i.imgur.com/n09PIXD.png', rating: 3.4,ratingImg: 'https://i.imgur.com/OeDOIEo.png', previousPrice: '$999', productDescription: 'Indoor Plant, Low maintenance'  },
    { id: 12, productName: 'Monsterra-11', price: 569, productImage: 'https://i.imgur.com/opbUuUv.png', rating: 4.8,ratingImg: 'https://i.imgur.com/OeDOIEo.png', previousPrice: '$799', productDescription: 'Indoor Plant, Low maintenance'  },
    { id: 13, productName: 'Monsterra-12', price: 299, productImage: 'https://i.imgur.com/opbUuUv.png', rating: 3.5,ratingImg: 'https://i.imgur.com/OeDOIEo.png', previousPrice: '$399', productDescription: 'Indoor Plant, Low maintenance'  },
    { id: 14, productName: 'Monsterra-13', price: 399, productImage: 'https://i.imgur.com/n09PIXD.png', rating: 4.0,ratingImg: 'https://i.imgur.com/OeDOIEo.png', previousPrice: '$599', productDescription: 'Indoor Plant, Low maintenance'  },
    { id: 15, productName: 'Monsterra-14', price: 269, productImage: 'https://i.imgur.com/opbUuUv.png', rating: 4.5,ratingImg: 'https://i.imgur.com/OeDOIEo.png', previousPrice: '$799', productDescription: 'Indoor Plant, Low maintenance'  },
    { id: 16, productName: 'Monsterra-15', price: 599, productImage: 'https://i.imgur.com/opbUuUv.png', rating: 2.5,ratingImg: 'https://i.imgur.com/OeDOIEo.png', previousPrice: '$899', productDescription: 'Indoor Plant, Low maintenance'  },
    { id: 17, productName: 'Monsterra-16', price: 799, productImage: 'https://i.imgur.com/n09PIXD.png', rating: 3.4,ratingImg: 'https://i.imgur.com/OeDOIEo.png', previousPrice: '$999', productDescription: 'Indoor Plant, Low maintenance'  },
    { id: 18, productName: 'Monsterra-17', price: 569, productImage: 'https://i.imgur.com/opbUuUv.png', rating: 4.8,ratingImg: 'https://i.imgur.com/OeDOIEo.png', previousPrice: '$799', productDescription: 'Indoor Plant, Low maintenance'  },

]

const ProductsListSection = ({onViewProduct, onAddToCart}) => {
    const itemsPerPage = 6
    const [visibleCount, setVisibleCount] = useState(itemsPerPage)
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const handleViewMore = () => {
        setVisibleCount(prevCount => Math.min(prevCount + itemsPerPage, productsList.length));
    };

    const toggleModal = () => setModalOpen(!modalOpen);

    const handleAddToCartClick = (product) => {
        setSelectedProduct(product);
        console.log("open the modal")
        setQuantity(1); 
        toggleModal();
    };


    return(
        <div className='products-list-container'>
            <Container>
                <Row>
                    <Col md={3}>
                        <div className='filter-container'>
                            <div className='filter-heading'>
                                <h2 className='filter'>Filters</h2>
                                <h2 className='filter'>CLEAR ALL</h2>
                            </div>
                            <hr  className='horizontal-line'/>
                            <div className='filter-layout'>
                                <h3 className='filter'>Type of Plants</h3>
                                <p className='filter'>+</p>
                            </div>
                            
                            <hr  className='horizontal-line'/>
                            <div className='filter-layout'>
                                <h3 className='filter'>Price</h3>
                                <p className='filter'>+</p>
                            </div>
                            <hr  className='horizontal-line'/>
                            <div className='filter-layout'>
                                <h3 className='filter'>Nursery</h3>
                                <p className='filter'>+</p>
                            </div>
                            <hr  className='horizontal-line'/>
                            <div className='filter-layout'>
                                <h3 className='filter'>Ideal Plants Location</h3>
                                <p className='filter'>+</p>
                            </div>
                            <hr  className='horizontal-line'/>
                            <div className='filter-layout'>
                                <h3 className='filter'>Indoor/ Outdoor</h3>
                                <p className='filter'>+</p>
                            </div>
                            <hr  className='horizontal-line'/>
                            <div className='filter-layout'>
                                <h3 className='filter'>Maintenance</h3>
                                <p className='filter'>+</p>
                            </div>
                            <hr  className='horizontal-line'/>
                            <div className='filter-layout'>
                                <h3 className='filter'>Plant Size</h3>
                                <p className='filter'>+</p>
                            </div>
                            <hr  className='horizontal-line'/>
                            <div className='filter-layout'>
                                <h3 className='filter'>Water Schedule</h3>
                                <p className='filter'>+</p>
                            </div>
                            <hr  className='horizontal-line'/>
                            <div className='filter-layout'>
                                <h3 className='filter'>Color</h3>
                                <p className='filter'>+</p>
                            </div>
                            <hr  className='horizontal-line'/>
                            <div className='filter-layout'>
                                <h3 className='filter'>Seasonal</h3>
                                <p className='filter'>+</p>
                            </div>
                            <hr  className='horizontal-line'/>
                            <div className='filter-layout'>
                                <h3 className='filter'>Light Efficient</h3>
                                <p className='filter'>+</p>
                            </div>
                            
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className='products-layout'>
                            <h2 className='products-count'>300 Products</h2>
                            
                                <button type = "button" className='sort-button'>
                                    SORT BY
                                </button>
                            
                        </div>


                         <ul className='products-container'>
                            {productsList.slice(0, visibleCount).map(eachProduct => (
                                <ProductCard key={eachProduct.id} eachProduct={eachProduct} onViewProduct={onViewProduct} onAddToCart={handleAddToCartClick}  setQuantity={setQuantity} />
                            ))}
                        </ul>
                        {visibleCount < productsList.length && (
                            <div className='view-more-container'>
                                <button type="button" className='view-more-button' onClick={handleViewMore}>
                                    View More
                                </button>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>

            {selectedProduct && (
                <AddToCartModal
                    isOpen={modalOpen}
                    toggle={toggleModal}
                    product={selectedProduct}
                    onAddToCart={(product, qty) => {
                        onAddToCart(product, qty);
                        toggleModal(); 
                    }}
                    quantity={quantity}
                    setQuantity={setQuantity} 
                />
            )}
        </div>
    )
}

export default ProductsListSection