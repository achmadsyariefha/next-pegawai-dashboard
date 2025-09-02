'use client';

import { useTheme } from "@/context/theme-context";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { theme, toggleTheme, themeClass } = useTheme();

    return (
        <div className={`min-h-screen ${themeClass} flex flex-col`}>
            {/* Header */}
            <header className="h-16 px-6 flex items-center justify-between border-b bg-background text-foreground">
                <h1 className="text-lg font-bold">OIKN Dashboard</h1>
                <button
                    onClick={toggleTheme}
                    className="text-sm px-3 py-1 rounded bg-muted text-muted-foreground hover:bg-muted-hover"
                >
                    {theme === "light" ? "Light" : "Dark"}
                </button>
                {/* <div className="text-sm text-gray-500">Smart ASN</div> */}
                {/* You can add navigation or user profile here */}
            </header>

            {/* Main Content */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="w-64 border-r p-4 bg-sidebar text-sidebar-foreground">
                    <nav className="space-y-2 text-sm">
                        <a href="/dashboard" className="block px-2 py-1 rounded hover:bg-muted-hover">CSV Viewer</a>
                        {/* <a href="/asn" className="block px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-neutral-800">Smart ASN</a> */}
                        {/* Add more navigation links as needed */}
                    </nav>
                </aside>
                {/* Content Area */}
                <main className="flex-1 p-6">{children}</main>
            </div>
        </div>
        );
}