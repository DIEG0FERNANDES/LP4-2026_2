import "./App.css";
import { Btn, CardUser } from "./components";

function App() {
  return (
    <>
      <Btn texto="salvar" corDeFundo="green" />
      <Btn texto="editar" corDeFundo="yellow" />
      <Btn texto="deletar" corDeFundo="red" />

      <CardUser
        foto="https://i.pinimg.com/1200x/bb/49/f9/bb49f99b18fa61858f461514bdf94df4.jpg"
        nome="Cookie Monster"
        cargo="Monstro"
      />
    </>
  );
}

export default App;
