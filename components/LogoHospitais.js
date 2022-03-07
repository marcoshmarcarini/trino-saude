import Image from "next/image"
export default function LogoHospitais(){
    return(
        <>
            <div className="logos-hospitais">
                <Image src="/img/logos-hospitais.svg" width={300} height={100}/>
            </div>
        </>
    )
}