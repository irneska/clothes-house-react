import Items from '../Cards/Items.jsx'
import './Catalog.css'

function Catalog() {
  return (
    <div>
      <section className='filters'>
        <select className='select_filter' name="prices" id="prices">
          <option value="placeholder" disabled="" selected="">Price range</option>
          <option value="range300-800">300 UAH - 800 UAH</option>
          <option value="range800-1500">800 UAH - 1500 UAH</option>
          <option value="range1500-2500">1500 UAH - 2500 UAH</option>
        </select>

        <select className='select_filter' name="sex" id="sex">
          <option value="placeholder" disabled="" selected="">Sex</option>
          <option value="men">men</option>
          <option value="women">women</option>
        </select>
        <div className='search_catalog'>
          <input className='search_input' type="text" name="name" placeholder="Search..." />
          <button className='catalog_btn'>Apply</button>
        </div>
      </section>
      <Items />
    </div>
  )
}

export default Catalog
