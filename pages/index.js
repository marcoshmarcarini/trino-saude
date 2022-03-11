import DarkMode from "../components/Darkmode";
import Cabecalho from "../components/Cabecalho";
import Links from "../components/Links";
import Rodape from "../components/Rodape";


export default function PaginaInicial(){
    return(
        <>
        
            <Cabecalho/>
            <DarkMode />
                <div className="justify-center">
                    <Links/>
                </div>
            <Rodape/>
        </>
    )
}