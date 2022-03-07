import Cabecalho from "../components/Cabecalho";
import Links from "../components/Links";
import Rodape from "../components/Rodape";


export default function PaginaInicial(){
    return(
        <>
            <Cabecalho/>
                <div className="justify-center">
                    <Links/>
                </div>
            <Rodape/>
        </>
    )
}