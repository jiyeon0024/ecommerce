import "./Price.css";

function Price(props) {
  return (
    <p>
      <span className="price">$</span>
      {props.children}
      <span className="price">.00</span>
    </p>
  );
}

export default Price;
