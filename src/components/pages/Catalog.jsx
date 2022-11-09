import './Catalog.css'
import { useEffect, useState } from 'react'
import Card from '../Cards/Card.jsx'
import axios from "axios";
import Loader from '../Loader/Loader.jsx';


function Catalog() {
  const [loading, setLoading] = useState(true)
  const [Clothes, setClothes] = useState([])

  useEffect(() => {
      axios.get('http://localhost:8080/api/clothes').then(res => {
          setClothes(res.data)
      })
  }, [])
  setTimeout(() => {
    setLoading(false)
}, 1000)
  const [filtered, setFiltered] = useState(Clothes)
  const [value, setValue] = useState('')
  useEffect(() => {
    setFiltered(Clothes)
  }, [Clothes])

  function sexFilter(sex) {
    if (sex === 'Sex') {
      setFiltered(Clothes)
    } else {
      let newClothes = [...Clothes].filter(item => item.sex === sex)
      setFiltered(newClothes)
    }
  }
  function priceFilter(price) {
    if (price === 'Price range') {
      setFiltered(Clothes)
    } else if (price === '300 UAH - 800 UAH') {
      let newClothes = [...Clothes].filter(item => item.price > 300 && item.price < 800)
      setFiltered(newClothes)
    } else if (price === '800 UAH - 1500 UAH') {
      let newClothes = [...Clothes].filter(item => item.price > 800 && item.price < 1500)
      setFiltered(newClothes)
    } else {
      let newClothes = [...Clothes].filter(item => item.price > 1500 && item.price < 2500)
      setFiltered(newClothes)
    }
  }
  const filteredArray = filtered.filter(item => {
    return item.name.toLowerCase().includes(value.toLowerCase())
  })
  let rendered_items_list = filteredArray.map(
    (item) =>
      <Card
        src={item.image}
        text={item.name}
        sex={item.sex}
        price={item.price}
        color={item.color}
        id={item.id}
      />
  )
  return (
    <>
     {loading ?
     <Loader/>
     :
    <div>
      <section className='filters'>
        <select className='select_filter' name="prices" id="prices" onChange={() => priceFilter(document.getElementById("prices").options[document.getElementById("prices").selectedIndex].text)}>
          <option value="placeholder" disabled="" selected="">Price range</option>
          <option value="range300-800">300 UAH - 800 UAH</option>
          <option value="range800-1500">800 UAH - 1500 UAH</option>
          <option value="range1500-2500">1500 UAH - 2500 UAH</option>
        </select>

        <select className='select_filter' name="sex" id="sex" onChange={() => sexFilter(document.getElementById("sex").options[document.getElementById("sex").selectedIndex].text)}>
          <option value="placeholder" disabled="" selected="">Sex</option>
          <option value="men">men</option>
          <option value="women">women</option>
        </select>
        <div className='search_catalog'>
          {/* <button className='catalog_btn'>Apply</button> */}
          <input className='search_input' type="text" name="name" placeholder="Search..." onChange={(event) => setValue(event.target.value)} />
        </div>
      </section>
      <div className='cardItems'>
        {rendered_items_list}
      </div>
    </div>

}
</>
  )
}

export default Catalog
