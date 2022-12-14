import { useContext } from 'react';
import { createContext, useState } from 'react';

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

function useTheme() {
    const context =  useContext(ThemeContext);
    if(context === undefined){
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

function useThemeUpdate() {
    const context =  useContext(ThemeUpdateContext);
    if(context === undefined){
        throw new Error('useThemeUpdate must be used within a ThemeProvider');
    }
    return context;
}

function ThemeProvider({children}) {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, useTheme, useThemeUpdate }