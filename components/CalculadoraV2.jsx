import { loadGetInitialProps } from "next/dist/shared/lib/utils";

function soma(a, b) {
    return a + b
}
function subtracao(a, b) {
    return a - b
}
function multiplicacao(a, b) {
    return a * b
}
function divisao(a, b) {
    return a / b
}


export default function init() {
    let resultado = 0;
    let operador = ''
    if (props.soma) {
        resultado = soma(props.num1, props.num2);
        operador = "+"
    }
     (props.subtracao) {
        resultado = subtracao(props.num1, props.num2);
        operador = "-"
    }



    return (
        <>
            <h1>Resultado</h1>
            <h2>{props.num1} {operador} {props.num2} =
                {resultado}</h2>
        </>
    )
}
