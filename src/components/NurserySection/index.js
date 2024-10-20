import { Container, Row, Col } from 'reactstrap';

import './index.css';




import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const items = [
    { src: 'https://i.imgur.com/WgDZ6Jv.png', altText: 'Image 1', caption: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ' },
    { src: 'https://i.imgur.com/WgDZ6Jv.png', altText: 'Image 2', caption: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum' },
    { src: 'https://i.imgur.com/RsopG9S.png', altText: 'Image 3', caption: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum' },
    { src: 'https://i.imgur.com/WgDZ6Jv.png', altText: 'Image 4', caption: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum' },
    { src: 'https://i.imgur.com/NSDTsoe.png', altText: 'Image 5', caption: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum' },
    { src: 'https://i.imgur.com/nRfhMMa.png', altText: 'Image 6', caption: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum' },
];

const NurserySection = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div>
            
            <Container>
                <Row>
                    <Col>  
                                         
                    <div className='buttons-container mb-3'>
                        <button type="button" className='plant-button'>Plants</button>
                        <button type='button' className='pot-button'>Pots</button>
                    </div>
                        <p className='nursery-description'>
                            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.
                        </p>
                    </Col>
                </Row>
                <div className="carousel-wrapper">
                    <h1 className="mb-3">Nursery</h1>  
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} 
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {/* <div className="d-flex justify-content-center">                */}
                        {items.map((img) => (
                            <div key={img.src} className="mx-2 text-center">
                                <img src={img.src} alt={img.altText} className="img-fluid" />
                                <p>{img.caption}</p>
                            </div>
                        ))}
                        {/* </div> */}
                    </Carousel>

                </div>
            </Container>
        </div>

    );
};

export default NurserySection;
