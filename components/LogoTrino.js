import Image from "next/image"

export default function LogoTrino(){
    return(
        <>
            <div className="logo-trino animate-[aparecer_400ms_ease-in]">
                <Image src="/img/logo.svg" width={200} height={100}/>
            </div>
        </>
    )
}