import "./Cart.css"
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import CartItem from './CartItem'

export default function Cart() {
    const cart = useSelector((state) => state.items.cart);
    let totalSum = 0;
    cart.map(clothes => { totalSum = clothes.sum + totalSum })
    return (
        <div className="cartPage">
            <h1>Shopping cart</h1>
            <div className="boughtItems">
                {cart.length > 0 ? cart.map(clothes => 
                <CartItem image={clothes.item.image} element={clothes.item} sum={clothes.sum} />)
                : <div>Buy something</div>}
            </div>


            <div className="sum">
                <h3>Total sum: </h3>
                <h3>{totalSum}</h3>
            </div>
            <Link to='/catalog'>
                <button className="backBtn">Back</button>
            </Link>
        </div>
    )
}
