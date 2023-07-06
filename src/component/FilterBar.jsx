import Btn from "./Btn";
import "./FilterBar.css";

function FilterBar({ setSelected, category, onClick }) {
  return (
    <div className="filterBox">
      {category.map((i) => {
        return (
          <div>
            <Btn>{i}</Btn>{" "}
            <span className="close" onClick={onClick}>
              x
            </span>
          </div>
        );
      })}
      <Btn onClick={onClick}>Clear</Btn>
    </div>
  );
}

export default FilterBar;
