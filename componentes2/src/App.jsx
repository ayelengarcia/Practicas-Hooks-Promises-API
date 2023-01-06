import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
      setContador(Math.max(contador - 1, 0));
    
  };
  const reset = () => {
    setContador(Math.max(0));
  };

  return (
    <div className="App">
      <div className="contador">{contador}</div>

      <div>
        <Button texto={"SUMAR ➕"} setContador={sumar} contador={contador} />
        <Button texto={"RESTAR ➖"} setContador={restar} contador={contador} />
        <Button
          texto={"RESET ❌"}
          conditional={true}
          setContador={reset}
          contador={contador}
        />
      </div>
    </div>
  );
}

export default App;
