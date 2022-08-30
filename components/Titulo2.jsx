import { Fragment } from "react";

export default function Titulo(props) {
    if (props.pequeno) {
        return (
            <>
                <p>{props.titulo}</p>
                <p>{props.subtitulo}</p>
            </>
        )
    }
    return (
        <>
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
        </>
    )
}