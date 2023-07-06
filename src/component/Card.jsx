import "./Card.css";
import Btn from "./Btn";
import Price from "./Price";
import FavoriteBtn from "./FavoriteBtn";
import Rating from "./Rating";
import { useEffect, useState } from "react";
function Card({ data, setSelected }) {
  const [isFavorite, setIsFavorite] = useState(false);
  console.log(isFavorite);

  function handleFavorite() {
    console.log("favorite");
    if (localStorage.getItem("favorite")) {
      let favorites = JSON.parse(localStorage.getItem("favorite"));

      if (favorites.includes(data.title)) {
        favorites = favorites.filter((item) => item != data.title);
        setIsFavorite(false);
      } else {
        setIsFavorite(true);
        favorites.push(data.title);
      }

      // console.log(favorites);
      localStorage.setItem("favorite", JSON.stringify(favorites));
    } else {
      localStorage.setItem("favorite", JSON.stringify([data.title]));
      setIsFavorite(true);
    }
  }

  const checkFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorite"));
    if (favorites.includes(data.title)) {
      setIsFavorite(true);
    }
  };
  useEffect(() => {
    checkFavorite();
  }, []);
  return (
    <div className="cardBox">
      <Btn
        className="categoryBtn"
        onClick={() => {
          setSelected(data.category);
        }}
      >
        {data.category}
      </Btn>

      <FavoriteBtn
        isFavorite={isFavorite}
        className={isFavorite ? "red" : "favoriteIcon"}
        onClick={handleFavorite}
      ></FavoriteBtn>
      <img className="img" src={data.images[0]} alt="" />

      <p className="brand">{data.brand}</p>
      <div className="firstRow">
        <p className="heading">{data.title}</p>
        <Price className="dataPrice">{data.price}</Price>
      </div>

      <Rating className="secondRow">Rating: {data.rating}</Rating>

      <Btn>Add to Cart</Btn>
    </div>
  );
}

export default Card;
