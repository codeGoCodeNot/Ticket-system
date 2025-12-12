import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/header";
import ThemeProvider from "../components/theme/theme-provider";
import "./globals.css";
import { Toaster } from "sonner";
import RedirectToast from "../components/redirect-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ticket system",
  description: "ticket system project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main
            className="
          min-h-screen flex-1
          overflow-y-auto overflow-x-hidden
          py-24 px-8
          flex flex-col
          "
          >
            {children}
          </main>
          <Toaster expand />
          <RedirectToast />
        </ThemeProvider>
      </body>
    </html>
  );
}
