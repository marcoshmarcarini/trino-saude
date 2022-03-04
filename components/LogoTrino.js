import Image from "next/image"

export default function LogoTrino(){
    return(
        <>
            <div>
                <Image src="/img/logo.svg" width={200} height={100}/>
            </div>
        </>
    )
}