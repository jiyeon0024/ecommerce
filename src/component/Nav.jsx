import "./Nav.css";
import SearchBar from "./SearchBar";
import { AiOutlineShoppingCart } from "react-icons/ai";
function Nav({ data, setFiltered, clearSelected }) {
  return (
    <nav className="nav">
      <div className="logo">JJ MARKET</div>
      <div className="navEl">
        <ul className="navUl">
          <li className="el">Categories</li>
          <li className="el">Deals</li>
          <li className="el">What's new</li>
          <li className="el">Delivery</li>
          <SearchBar
            data={data}
            setFiltered={setFiltered}
            clearSelected={clearSelected}
          ></SearchBar>
          <li className="el cart">
            <AiOutlineShoppingCart size={30} className="cartIcon" />
            <span>Cart</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
