import Head from "next/head"
import { useTheme } from "next-themes"
export default function Cabecalho(){
    return(
        <>
            <Head>
                <title>Trino Saúde</title>
                <meta name="Author" content="Marcos Henrique Marcarini Junior"/>
                <meta name="theme-color" content="`${setTheme(theme === 'light' ? 'dark' : 'light')}`"/>
            </Head>
        </>
    )
}