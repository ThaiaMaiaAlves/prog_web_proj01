export default function init(props) {
    //props.numero++ //nao podemos alterar uma propriedade, não é permitido. Então a solução é jogar o valor para uma variável.
    return (
        <>
            <h1>{props.numero + 1}</h1>
            <h1>x</h1>
            <h1>{incrementar(props.numero)}</h1>
        </>
    )

}

function incrementar(numero) {
    numero++
    return numero
}