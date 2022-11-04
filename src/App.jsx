import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/pages/Home.jsx';
import Catalog from './components/pages/Catalog.jsx';
import ItemPage from './components/pages/ItemPage.jsx';
import Cart from './components/pages/Cart.jsx';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog/item/:id" element={<ItemPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
