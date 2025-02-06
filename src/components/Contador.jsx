// import { useState } from "react";
import './Contador.css'; // Importamos el archivo CSS
import { useContador } from "../hooks/useContador";

export const Contador = () => {
    // const [value, setValue] = useState(0);

    const {add,rest,clear,contador} = useContador(0);

  

    return (
        <div className="contador-container">
            <h1 className="contador-titulo">Contador</h1>
            <h1 className="contador-valor">{contador}</h1>
            <div className="contador-botones">
                <button className="btn btn-success" onClick={()=> add(1)}>+</button>
                <button className="btn btn-warning" onClick={clear}>C</button>
                <button className="btn btn-danger" onClick={()=> rest(1)}>-</button>
            </div>
        </div>
    );
};