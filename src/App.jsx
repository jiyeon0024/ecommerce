import { useEffect, useState } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import FilterBar from "./component/FilterBar";

function App() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [filtered, setFiltered] = useState([]);
  function getData() {
    fetch("./src/data.json")
      .then((data) => data.json())
      .then((val) => {
        setData(val.products);
        setFiltered(val.products);
      });
    console.log(data);
  }

  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  function filterData() {
    let newData = [];
    data.forEach((i) => {
      console.log(i);
      if (selected.every((val) => i.category === val)) {
        newData.push(i);
        console.log(newData);
      }
    });
    setFiltered(newData);
    console.log(newData);
  }

  function addToSelected(val) {
    console.log(val);
    if (!selected.includes(val)) setSelected([...selected, val]);
  }

  function removeFromSelected(val) {
    let filtered = selected.filter((i) => i !== val);
    setSelected(filtered);
  }

  useEffect(() => {
    filterData();
  }, [selected]);

  console.log(selected);

  return (
    <div>
      <Header
        data={data}
        setFiltered={setFiltered}
        clearSelected={() => setSelected([])}
      ></Header>
      {selected.length > 0 ? (
        <div>
          <FilterBar
            category={selected}
            setSelected={removeFromSelected}
            onClick={() => setSelected([])}
          ></FilterBar>
        </div>
      ) : null}

      <Main setSelected={addToSelected} filtered={filtered}></Main>
    </div>
  );
}

export default App;
