import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
    title: "The Render Test | LLM Visual Gallery",
    description: "Benchmarking the visual and logic capabilities of modern LLMs.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.variable} ${mono.variable} antialiased selection:bg-accent selection:text-black`}>
                {children}
            </body>
        </html>
    );
}
