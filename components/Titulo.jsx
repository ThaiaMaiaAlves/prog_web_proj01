import { Fragment } from "react";
//forma com if ternário
//nessa forma é obrigatório usar o else (:)

export default function Titulo(props) {
    return (
        <Fragment>
            {props.pequeno ?
                <>
                    <p>{props.titulo}</p>
                    <p>{props.subtitulo}</p>
                </> :
                <>
                    <h1>{props.titulo}</h1>
                    <h2>{props.subtitulo}</h2>
                </>
            }

        </Fragment>
    )
}