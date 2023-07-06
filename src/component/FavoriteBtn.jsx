import { BsFillHeartFill } from "react-icons/bs";
import "./FavoriteBtn.css";

function FavoriteBtn(props) {
  return (
    <button
      onClick={props.onClick}
      className={`favoriteBtn ${props.isFavorite ? "red" : ""}`}
    >
      <BsFillHeartFill className="heart" />
    </button>
  );
}

export default FavoriteBtn;
