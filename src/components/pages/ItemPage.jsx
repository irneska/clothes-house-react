import './ItemPage.css'
import { Link, useLocation } from "react-router-dom"
import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Loader from '../Loader/Loader.jsx';


function ItemPage() {
    
    let {id} = useParams();
        const [loading, setLoading] = useState(true)
        const [clothes, setClothes] = useState({id: 1, name: "none", price: 0, image: "",  sex: "", color:""})
    
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    
        useEffect(() => {
            axios.get(`http://localhost:8080/api/clothes/get/${id}`).then(res => setClothes(res.data))
        }, [id])
    return (
        <div>
            {loading ?
        <Loader/>
        :
                <div className='item'>
                    <img src={clothes.image} alt="wmnSwt" />
                    <div className='itemInfo'>
                        <h2>{clothes.name}</h2>
                        <p className='color'>Color: {clothes.color}</p>
                        <p className='price'>Price: {clothes.price} UAH</p>
                        <button className='cart'>Add to cart</button>
                        <Link to='/catalog'>
                            <button className='back'>Go back</button>
                        </Link>
                    </div>
                </div>}
        </div>
    )
}

export default ItemPage
