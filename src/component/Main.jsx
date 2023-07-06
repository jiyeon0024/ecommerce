import "./Main.css";
import Card from "./Card";
function Main({ filtered, setSelected }) {
  return (
    <main className="main-container">
      {filtered.map((data) => {
        return <Card data={data} setSelected={setSelected}></Card>;
      })}
    </main>
  );
}

export default Main;
