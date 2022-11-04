import './Main.css'
import mainPhoto from '../../assets/images/main-ph.png'
import forHim from '../../assets/images/for-him.png'
import forHer from '../../assets/images/for-her.png'
import firstItem from '../../assets/images/first-item.png'
import secondItem from '../../assets/images/second-item.png'
import thirdItem from '../../assets/images/third-item.png'
import { useState } from 'react'

function Main() {
    const [show, setShow] = useState(false)
    return (
        <main>
            <section className='firstPage'>
                <img src={mainPhoto} alt="main" />
                <div className='mainInfo'>
                    <h1>Find your style here</h1>
                    <h3>CLOTHES HOUSE</h3>
                </div>
            </section>
            <section className='secondPage'>
                <div className='clothes'>
                    <div className='forHim'>
                        <img src={forHim} alt="man" />
                        <p>FOR HIM</p>
                    </div>
                    <div className='forHer'>
                        <img src={forHer} alt="woman" />
                        <p>FOR HER</p>
                    </div>
                </div>
                <button onClick={() => setShow(!show)}>View more</button>
                {show && 
                <section className='viewMorePage'>
                    <h2>THE MOST POPULAR ITEMS</h2>
                    <div className='popularItems'>
                        <div className='firstItm'>
                            <img src={firstItem} alt="item" />
                            <h5 className='cardText'>Wool jacket-shirt</h5>
                            <p className='price'>899 UAH</p>
                        </div>
                        <div className='secondItm'>
                            <img src={secondItem} alt="item" />
                            <h5 className='cardText'>Velor minidress</h5>
                            <p className='price'>769 UAH</p>
                        </div>
                        <div className='thirdItm'>
                            <img src={thirdItem} alt="item" />
                            <h5 className='cardText'>Faux fur jacket</h5>
                            <p className='price'>1299 UAH</p>
                        </div>
                    </div>
                        <button className='viewLess'>View less</button>
                </section>}
            </section>
        </main>


    )
}

export default Main
