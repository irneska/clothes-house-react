import './Main.css'
import mainPhoto from '../../assets/images/main-ph.png'
import forHim from '../../assets/images/for-him.png'
import forHer from '../../assets/images/for-her.png'


function Main() {
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
                <button>View more</button>
            </section>
        </main>


    )
}

export default Main
