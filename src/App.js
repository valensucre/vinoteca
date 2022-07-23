import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <ItemListContainer welcome="Bienvenidos a mis recomendaciones de vinos!"></ItemListContainer>
    </div>
  );
}

export default App;
