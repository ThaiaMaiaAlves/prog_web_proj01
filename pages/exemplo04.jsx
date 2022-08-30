//Exemplo de uso do componente Titulo

import Titulo from "../components/Titulo"
import Titulo2 from "../components/Titulo2"
export default function init() {
    return (
        <div>
            <Titulo titulo="Teste Titulo"
            subtitulo="Teste subtitulo" pequeno></Titulo>

            <Titulo2 titulo="Pagina
            Cadastro" subtitulo="Gerenciar cadastro"  />
        </div>        
    )
}        
