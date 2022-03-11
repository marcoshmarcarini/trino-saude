import { useTheme } from "next-themes"

export default function DarkMode(){
    const {theme, setTheme} = useTheme()
    return(
        <>
            <div className="liga-desliga bg-orange-600 dark:bg-purple-800">
                <div className="area-dark">
                    <img src="https://img.icons8.com/ios-glyphs/20/ffffff/sun--v1.png"/>
                    <input type="checkbox" id="btn-dark-mode" className="btn-darkmode-checkbox" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}/>
                    <label for="btn-dark-mode" className="ligar_dark bg-purple-800 dark:bg-orange-600"></label>
                    <img src="https://img.icons8.com/ios-glyphs/20/ffffff/do-not-disturb-2.png"/>
                </div>
                {/*
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="btn-darkMode">
                    <img src="https://img.icons8.com/ios-glyphs/50/000000/sun--v1.png"/>
                </button>
                */}
            </div>
        </>
    )
}