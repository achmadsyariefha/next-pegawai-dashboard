'use client';

import { useTheme } from "@/context/theme-context";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 px-4 rounded border border-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
        >
            Switch to {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"} Mode
        </button>
    );
}