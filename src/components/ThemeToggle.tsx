'use client';

import { useTheme } from "@/context/theme-context";

export default function ThemeToggle() {
    const { toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="absolute top-4 right-4 px-2 py-1 border rounded"
        >
            Toggle Theme
        </button>
    );
}