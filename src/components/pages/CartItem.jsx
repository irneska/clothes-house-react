import { useDispatch } from "react-redux"
import "./CartItem.css"
import { setNewPrice, removeFromCart } from '../../data/reducer'


export default function CartItem(props) {
    const dispatch = useDispatch();

    return ( <>
    { parseInt(props.element.count) > 0 ?
        <div className="container">
            <div className="cartItem">
                <img className="cartItemImg" src={props.element.image}></img>
                <div className="cartItemName">
                    <h3>
                        {props.element.name}
                    </h3>
                </div>
            </div>

            <h4>Total price: </h4>
            {props.sum}
        
            <div className="changeCount">
                <button onClick={() => dispatch(setNewPrice({ item: props.element, sum: props.sum - props.element.price, count: parseInt(props.element.count) - 1 }))} text="-"> - </button>
                <div className="count">{props.element.count}</div>
                <button onClick={() => dispatch(setNewPrice({ item: props.element, sum: props.sum + props.element.price, count: parseInt(props.element.count) + 1 }))} > + </button>
            </div>
            <button className="removeBtn" onClick={() => dispatch(removeFromCart(props.element))}>Remove from cart</button>
            </div>
            : <div></div>}
            </>
    )
}