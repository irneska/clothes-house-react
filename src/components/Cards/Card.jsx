import { Link } from "react-router-dom";
import './Card.css'

function Card(props) {
    const {path, src, text, price, sex, color, id}  = props
    return (
        <div className="card">
            <Link className='cardLink' to= {"/catalog/item/" + id} state={{image: src, name: text,
                        price: price, color: color, sex: sex}}>
                <div className='cardPic-wrap'>
                    <img
                        className='cardImage'
                        alt='clothes'
                        src={src}
                    />
                </div>
                <div className='cardInfo'>
                    <h5 className='cardText'>{text}</h5>
                    <p className='price'>{price} UAH</p>
                </div>
            </Link>
        </div>

    );
}
export default Card
