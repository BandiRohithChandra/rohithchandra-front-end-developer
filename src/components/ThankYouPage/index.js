import { useParams } from 'react-router-dom';
import './index.css';

const ThankYouPage = () => {
    const { productName } = useParams();

    return (
        <div className='thankyou-container'>
            <h2>Hello!</h2>
            <h1 className='main-heading'>Thank You!</h1>
            <p className='description'>Thank you for your interest in <span className='span-element'>{decodeURIComponent(productName)}</span></p>
            <div>
                <button type = 'button' className='home-button'>Back To Home</button>
            </div>
        </div>
    );
};

export default ThankYouPage;
