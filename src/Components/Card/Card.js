import './Card.css'
import { FaStar, FaDownload } from 'react-icons/fa'


const Card = (props) => {
    return (
        <div className='most-popular-item'>
            <div className='card-wrapper'>
                <img className='most-popular-item-image' src={props.image} />
                <div className='most-popular-item-content'>
                    <h4 className='most-popular-item-title' >
                        {props.title} <br />
                        <span>{props.category}</span>
                    </h4>
                    
                </div>

            </div>
        </div>
    )
}

export default Card