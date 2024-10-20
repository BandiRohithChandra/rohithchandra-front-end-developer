import { Container, Row, Col } from 'reactstrap'
import './index.css'

const SubscribeAndFollowSection = () => {
    return (
        <div className='main-container'>
            <Container>

                <Row>
                    <Col md={4}>
                        <div className='subscribe-section'>
                            <h1 className='subscribe-heading'>SUBSCRIBE TO OUR NEWSLETTER</h1>
                            <p className='subscribe-description'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necesbus enim</p>
                            <input type="text" placeholder='Enter Your Email Address' className='email-element' />
                            <div>
                                <button type="button" className='subscribe-button'>SUBSCRIBE</button>
                            </div>

                        </div>
                    </Col>
                    <Col md={2}>
                        <div className='about-container'>
                            <h1 style={{
                                color: "#000000",
                                fontFamily: "Poppins",
                                fontSize: "20px",
                                fontWeight: 500,
                                lineHeight: "30px",
                                textAlign: "left"
                            }}>About</h1>
                            <p className='details-list'>Our Story</p>
                            <p className='details-list'>Blogs</p>
                            <p className='details-list'>Careers</p>
                            <p className='details-list'>Contact Us</p>
                            <p className='details-list'>Help & Support</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className='services-container'>
                            <h1 style={{
                                color: "#000000",
                                fontFamily: "Poppins",
                                fontSize: "20px",
                                fontWeight: 500,
                                lineHeight: "30px",
                                textAlign: "left"
                            }}>OUR SERVICES</h1>
                            <p className='details-list'>Book Maali</p>
                            <p className='details-list'>Plant Day Care</p>
                            <p className='details-list'>Rent Plants</p>
                            <p className='details-list'>Plants & Pots</p>
                            <p className='details-list'>Gardening Tools</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className='useful-container'>
                            <h1 style={{
                                color: "#000000",
                                fontFamily: "Poppins",
                                fontSize: "20px",
                                fontWeight: 500,
                                lineHeight: "30px",
                                textAlign: "left"
                            }}>useful links</h1>
                            <p className='details-list'>My Account</p>
                            <p className='details-list'>Orders & Returns</p>
                            <p className='details-list'>Track Order</p>
                            <p className='details-list'>Terms & Conditions</p>
                            <p className='details-list'>Privacy Policy</p>
                            <p className='details-list'>Return, Refund & Replacement Policy</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className='contact-container'>
                            <h1 style={{
                                color: "#000000",
                                fontFamily: "Poppins",
                                fontSize: "20px",
                                fontWeight: 500,
                                lineHeight: "30px",
                                textAlign: "left"
                            }}>GET IN TOUCH</h1>
                            <p className='details-list'>Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003

                            </p>
                            <p className='details-list'>

                                Call:
                                +919958287272

                            </p>
                            <p className='details-list'>

                                Email: care@chaperoneplants.com</p>

                        </div>
                    </Col>
                </Row>
            </Container>
            <div>
                <h1 className='sub-heading'>Chaperone</h1>
                <p className='sub-description'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
            </div>
            <div className='follow-container'>
                <h2 className='follow-heading'>Follow us on</h2>
                <div className='icons-container'>
                    <a href = "https://www.instagram.com/chaperoneplants/?utm_source=ig_web_button_share_sheet&igshid=ZDNlZDc0MzIxNw%3D%3D" ><img src = "https://i.imgur.com/cIQk93Q.png" alt = "instagram" className='icon-image' /></a>
                    <a href = "https://www.facebook.com/?_rdr" ><img src = "https://i.imgur.com/V1PdDmj.png" alt = "facebook" className='icon-image' /></a>
                    <a href = "https://www.threads.net/login" ><img src = "https://i.imgur.com/ihikTPF.png" alt = "threads" className='icon-image' /></a>
                    <a href = "https://www.youtube.com/" ><img src = "https://i.imgur.com/nMFOq77.png" alt = "youtube" className='icon-image' /></a>
                    <a href = "https://www.linkedin.com/company/chaperone-plants/" ><img src = "https://i.imgur.com/yvdhFB4.png" alt = "linkedin" className='icon-image' /></a>
                </div>
            </div>
            <hr className='bottom-line' />
            <p className='bottom-content'>© 2023, chaperone.com All rights reserved.</p>
        </div>
    )
}

export default SubscribeAndFollowSection