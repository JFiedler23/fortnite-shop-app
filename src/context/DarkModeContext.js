import { createContext } from 'react';

const DarkModeContext = createContext({
    theme: "light" | "dark",
    toggleTheme: () => null
});

export default DarkModeContext;
