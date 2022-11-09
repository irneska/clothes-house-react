import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <p>CLOTHES HOUSE</p>
      <nav>
        <Link to='/'> Home </Link>
        <Link to='/catalog'> Catalog</Link>
        <Link to='/cart'> Cart </Link>
      </nav>
    </header>
  )
}

export default Header;
