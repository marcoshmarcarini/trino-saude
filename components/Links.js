import LogoHospitais from "./LogoHospitais";
import LogoTrino from "./LogoTrino";

export default function Links(){
    return(
        <>
            <div className="bg-orange-600 dark:bg-purple-800 text-center flex flex-column justify-center">
                
               <div className="content-area">
                    <LogoTrino/>
                    <a href="#" className="text-white bg-purple-800 hover:bg-purple-400  dark:bg-orange-600 dark:hover:bg-orange-400 transition-all w-btnmd h-btnsm rounded-md">
                        Site
                    </a>
                    <a href="#" className="text-white bg-purple-800 hover:bg-purple-400  dark:bg-orange-600 dark:hover:bg-orange-400 transition-all w-btnmd h-btnsm rounded-md">
                        WhatsApp
                    </a>
                    <a href="#" className="text-white bg-purple-800 hover:bg-purple-400  dark:bg-orange-600 dark:hover:bg-orange-400 transition-all w-btnmd h-btnsm rounded-md">
                        App Google
                    </a>
                    <a href="#" className="text-white bg-purple-800 hover:bg-purple-400  dark:bg-orange-600 dark:hover:bg-orange-400 transition-all w-btnmd h-btnsm rounded-md">
                        App AppStore
                    </a>
                    <LogoHospitais/>
                </div>
            </div>
        </>
    )
}