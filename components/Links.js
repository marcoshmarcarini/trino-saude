import LogoHospitais from "./LogoHospitais";
import LogoTrino from "./LogoTrino";


export default function Links(){
    return(
        <>
            <div className="bg-orange-600 dark:bg-purple-800 text-center flex flex-column justify-center">
               <div className="content-area">
                    <LogoTrino/>
                        <a href="https://trinoonline.com.br/" className=" text-white bg-purple-800 hover:bg-purple-400  dark:bg-orange-600 dark:hover:bg-orange-400 transition-all w-btnmd h-btnsm rounded-md animate-[aparecer_400ms_ease-in]">
                            Acesse o nosso site
                        </a>
                        <a href="https://wa.me/5528992729289?text=Olá!+Vim+do+Instagram.+Quero+mais+informações+sobre+o+plano." className=" text-white bg-purple-800 hover:bg-purple-400  dark:bg-orange-600 dark:hover:bg-orange-400 transition-all w-btnmd h-btnsm rounded-md animate-[aparecer_400ms_ease-in]">
                            WhatsApp
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=br.com.spsnet.trino&hl=pt_BR&gl=US" className=" text-white bg-purple-800 hover:bg-purple-400  dark:bg-orange-600 dark:hover:bg-orange-400 transition-all w-btnmd h-btnsm rounded-md animate-[aparecer_400ms_ease-in]">
                            Baixe nosso App <br/>na Play Store
                        </a>
                        <a href="https://apps.apple.com/br/app/trino-sa%C3%BAde/id1609767214" className="text-white bg-purple-800 hover:bg-purple-400  dark:bg-orange-600 dark:hover:bg-orange-400 transition-all w-btnmd h-btnsm rounded-md animate-[aparecer_400ms_ease-in]">
                        Baixe nosso App <br/>na AppStore
                        </a>
                        <a href="https://www.facebook.com/trinosaude" className="animate-[aparecer_400ms_ease-in]">
                            <img src="https://img.icons8.com/ios/50/ffffff/facebook--v1.png"/>
                        </a>
                </div>
            </div>
        </>
    )
}