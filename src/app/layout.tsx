import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "../store/ReduxProvider";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  title: "Restaurant Managemet",
  description: "Generated by cwreate next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
        <Toaster position="bottom-center" />
        {children}
        </ReduxProvider>
        </body>
    </html>
  );
}
