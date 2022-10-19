import Card from './Card.jsx'
import './Items.css'
import Clothes from '../models/Clothes.jsx'

function Items() {

    let rendered_items_list = Clothes.map(
        (item) =>
            <Card
                src={item.image}
                text={item.name}
                path='/catalog'
                price={item.price}
            />
    )

    return (<div className='cardItems'>
        {rendered_items_list}
    </div>

    )
}

export default Items;