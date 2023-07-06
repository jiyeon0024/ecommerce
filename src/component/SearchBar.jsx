import "./SearchBar.css";
import Input from "./Input";
import Btn from "./Btn";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
function SearchBar({ data, setFiltered, clearSelected }) {
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    if (inputData.length === 0) {
      clearSelected();

      return;
    }
  }, [inputData]);
  return (
    <div className="searchWrap">
      <Input
        placeholder="Search Products"
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      ></Input>
      {console.log(inputData)}
      <AiOutlineSearch
        size={25}
        className="searchIcon"
        onClick={() => {
          let newInputData = [];
          data.map((i) => {
            if (
              i.category.toLowerCase().includes(inputData.toLowerCase()) ||
              i.title.toLowerCase().includes(inputData.toLowerCase()) ||
              i.brand.toLowerCase().includes(inputData.toLowerCase())
            ) {
              // console.log(i.category);
              newInputData.push(i);
              setFiltered(newInputData);
              return;
            }
          });

          console.log(newInputData);
        }}
      />
    </div>
  );
}

export default SearchBar;
