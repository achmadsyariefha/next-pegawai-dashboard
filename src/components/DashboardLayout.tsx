import { ReactNode } from "react";
import Link from "next/link";
import ThemeWrapper from "./ThemeWrapper";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <ThemeWrapper>
            <div className="flex flex-col min-h-screen border-b bg-background text-foreground">
                {/* Header */}
                <header className="flex items-center justify-between p-4 border-b">
                    <h1 className="text-lg font-bold">OIKN Dashboard</h1>
                    {/* <button
                        onClick={toggleTheme}
                        className="text-sm px-3 py-1 rounded bg-muted text-muted-foreground hover:bg-muted-hover"
                    >
                        {theme === "light" ? "Light" : "Dark"}
                    </button> */}
                    {/* <div className="text-sm text-gray-500">Smart ASN</div> */}
                    {/* You can add navigation or user profile here */}
                </header>

                {/* Main Content */}
                <div className="flex flex-1">
                    {/* Sidebar */}
                    <aside className="w-64 border-r p-4">
                        <nav className="space-y-2">
                            <Link href="/csv" className="block">CSV Viewer</Link>
                            {/* <a href="/asn" className="block px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-neutral-800">Smart ASN</a> */}
                            {/* Add more navigation links as needed */}
                        </nav>
                    </aside>
                    {/* Content Area */}
                    <main className="flex-1 p-4">{children}</main>
                </div>
            </div>
        </ThemeWrapper>
        );
}