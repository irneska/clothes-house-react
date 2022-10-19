import { Link } from "react-router-dom";
import './Card.css'

function Card(props) {
    return (
        <div className="card">
            <Link className='cardLink' to={props.path}>
                <div className='cardPic-wrap'>
                    <img
                        className='cardImage'
                        alt='clothes'
                        src={props.src}
                    />
                </div>
                <div className='cardInfo'>
                    <h5 className='cardText'>{props.text}</h5>
                    <p className='price'>{props.price} UAH</p>
                </div>
            </Link>
        </div>

    );
}
export default Card
