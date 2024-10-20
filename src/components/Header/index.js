import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'; 
import './index.css';

const Header = () => {
    return (
        <div>
            <div className='free-shipping-container'>
                <Container>
                    <Row className='justify-content-end'>
                        <Col md={6}>
                            <p className='content'>Free Shipping on orders above 999/-</p>
                        </Col>
                        <Col md={3}>
                            <p className='contact'>Call us on: +91 98768 05120</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <div className='profile-section-container'>
                <Container>
                    <Row>
                        <Col md={3}>
                            <div className='image-container'>
                                <div>
                                    <img src="https://i.imgur.com/MfQ3AQq.png" alt="chaperone" className='chaperone-img' />
                                </div>
                                <h1 className='header-heading'>Chaperone</h1>
                            </div>
                        </Col>
                        <Col md={7}>
                            <ul className='list-of-chaperone'>
                                <li className='list'>
                                    <Link to="/" className="header-link">Home</Link> {/* Link to Home */}
                                </li>
                                <li className='list'>Plants & Pots</li>
                                <li className='list'>Tools</li>
                                <li className='list'>Our Services</li>
                                <li className='list'>Blog</li>
                                <li className='list'>Our Story</li>
                                <li className='list'>FAQs</li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <div className='end-section'>
                                <div className='profile'>
                                    <img src="https://i.imgur.com/f7kGcFh.png" className='profile-img' alt="my profile" />
                                    <p className='profile-name'>My Profile</p>
                                </div>
                                <div className='cart-png'>
                                    <img src="https://i.imgur.com/bDE8qvW.png" alt="my cart" className='cart-img' />
                                    <p className='cart-name'>Cart</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
                <div className='input-container'>
                    <input type="text" placeholder='Search Plant' className='input-element' />
                </div>
            </div>
        </div>
    );
};

export default Header;
