import { useState } from "react"

export const useContador = (valorInicial = 0) => {

    const [contador, setContador] = useState(valorInicial);

    const add = (valor = 1) => {
        setContador(contador + valor);
    };

    const rest = (valor = 1) => {
        setContador(contador - valor);
        if(contador < 1){
            setContador(0)

        }
    };

    const clear = () => {
        setContador(0);
    };


    return {
        contador,
        add,
        rest,
        clear
    }
}
