'use client';

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "theme-light" | "theme-dark";

const ThemeContext = createContext<{
    theme: Theme;
    toggleTheme: () => void;
}>({
    theme: "theme-light",
    toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("theme-light");
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        const html = document.documentElement;
        html.classList.remove("theme-light", "theme-dark");
        html.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme((prevTheme) => (prevTheme === "theme-light" ? "theme-dark" : "theme-light"));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);