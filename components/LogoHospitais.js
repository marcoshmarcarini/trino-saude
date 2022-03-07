import Image from "next/image"
export default function LogoHospitais(){
    return(
        <>
            <div className="logos-hospitais animate-[aparecer_400ms_ease-in]">
                <Image src="/img/logos-hospitais.svg" width={300} height={100}/>
            </div>
        </>
    )
}