import Nav from "./Nav";
import "./Header.css";
function Header({ data, setFiltered, clearSelected }) {
  return (
    <header className="header">
      <Nav
        data={data}
        setFiltered={setFiltered}
        clearSelected={clearSelected}
      ></Nav>
      <div className="banner">
        <h2 className="bannerTitle">Grab Upto 30% Off </h2>
      </div>
    </header>
  );
}

export default Header;
