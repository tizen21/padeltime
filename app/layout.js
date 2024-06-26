import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Head from "next/head";
import ClientLayout from "./client-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Padel Time",
  description: "Ton site de Padel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      {/* <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <body
        className="min-h-screen bg-fixed bg-cover"
        style={{ backgroundImage: "url(/background.jpg)" }}
      >
        {/* <ClientLayout> */}
        <Header />
        <main className="">{children}</main>
        {/*  </ClientLayout> */}
      </body>
    </html>
  );
}
