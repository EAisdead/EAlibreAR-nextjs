import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import EAlogo from "./assets/EAthink.png";

export const ealibre = " | EAlibre AR.";

export const metadata: Metadata = {
  title: "EAlibre AR | Compra y Vende nada.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="h-16 bg-red-600 px-4">
          <div className="max-w-screen-lg m-auto flex">
            <Link className="h-16 w-16 md:mr-10 " href="/">
              <Image
                src={EAlogo}
                alt="Home"
                className="h-16 w-16 hover:scale-95 transition-transform duration-500 ease-linear"
              ></Image>
            </Link>
            <form
              action="/items"
              className="p-4 flex gap-4 flex-1 ml-auto max-w-screen-lg pr-0"
            >
              <input
                type="text"
                name="search"
                className="bg-gray-800 h-8 px-2 flex-1 rounded-md  hover:border-[3px] hover:border-black hover:scale-[1.02] border-transparent transition-all duration-300 ease-in-out"
              />
              <button
                type="submit"
                className="bg-black color-white h-8 px-2 rounded-md hover:bg-gray-800 hover:scale-110 transition-all duration-300 ease-in-out"
              >
                Smite
              </button>
            </form>
          </div>
        </header>
        <main className="max-w-screen-lg m-auto ">{children}</main>

        <footer className="w-full p-4 text-xs m-auto text-center bottom-0 relative mt-8 border-t-[3px] border-t-red-600">
          <p>
            Built by:
            <Link href="/" className=" text-red-600 hover:underline">
              EA
            </Link>
          </p>
          <h6 className=" font-mono opacity-20">Its all relative.</h6>
        </footer>
      </body>
    </html>
  );
}
