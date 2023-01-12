import { SecondaryButton } from '../Buttons/Buttons'
import './GamingLibraryCard.css'



const GamingLibraryCard = (props) => {
    return (
        <div className='gaming-library-card'>
            <ul>
                <li><img src={props.image} alt="" /></li>
                <li style={{paddingLeft: 32, paddingRight: 32}}><h4>{props.title}</h4><span>{props.category}</span></li>
                

                <SecondaryButton>Read</SecondaryButton>

            </ul>

        </div>
    )
}

export default GamingLibraryCard