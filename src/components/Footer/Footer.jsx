import instagram from '../../assets/images/instagram.png';
import telegram from '../../assets/images/telegram.png';
import twitter from '../../assets/images/twitter.png';
import './Footer.css';


function Footer() {
  return (
    <footer>
      <img src={instagram} alt="inst" />
      <img src={telegram} alt="telegram" />
      <img src={twitter} alt="twitter" />
    </footer>
  )
}

export default Footer
