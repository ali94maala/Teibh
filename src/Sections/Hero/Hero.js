import ReactDOM from "react-dom/client";
import { PrimaryButton } from "../../Components";
import './Hero.css'


const Hero = () => {
    return (
        <div className='hero-main'>
            <div className='hero-text'>
                <h6 className='hero-subtitle'>Welcome To Teibh</h6>
                <h4 className='hero-title'><em> Browse </em>Our Trading Services Here</h4>

                <PrimaryButton>Browse Now</PrimaryButton>

                {/*
                <div className='main-button'>
                <a href='browse.html'>Browse Now</a>
                </div>
              */}

            </div>
        </div>
    )
}

export default Hero

