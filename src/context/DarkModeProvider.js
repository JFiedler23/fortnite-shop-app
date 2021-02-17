import { useState } from 'react';
import DarkModeContext from './DarkModeContext';

function DarkModeProvider ({ children }) {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    const textColor = theme === "light" ? "black" : "white";
    const backgroundColor = theme === "light" ? "white" : "#1c1b21";

    document.body.style.color = textColor;
    document.body.style.backgroundColor = backgroundColor;

    return(
        <DarkModeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeProvider;