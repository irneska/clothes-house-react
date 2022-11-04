import './ItemPage.css'
import { Link, useLocation } from "react-router-dom"

function ItemPage() {
    const location = useLocation();
    const state = location.state;
    console.log(state)
    return (
        <div>
            {state && (<>
                <div className='item'>
                    <img src={state.image} alt="wmnSwt" />
                    <div className='itemInfo'>
                        <h2>{state.name}</h2>
                        <p className='color'>Color: {state.color}</p>
                        <p className='price'>Price: {state.price} UAH</p>
                        <button className='cart'>Add to cart</button>
                        <Link to='/catalog'>
                            <button className='back'>Go back</button>
                        </Link>
                    </div>
                </div></>)}
        </div>
    )
}

export default ItemPage
