import Navbar from "@/components/Navbar";
import "./globals.css";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import getCurrentUser from "./actions/getCurrentUser";
import Script from "next/script";
import ToastProvider from "@/components/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar currentUser={currentUser} />
        <ToastProvider />
        {children}
        <Script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=04d0b7cafa9cb1f5b68301b2980a5edb&libraries=services,clusterer&autoload=false" />
      </body>
    </html>
  );
}
