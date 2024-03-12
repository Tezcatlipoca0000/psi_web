import { Inter } from "next/font/google";
import Image from "next/image";
import headshot from "../public/me.png";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Psi Benjamín González",
  description: "Psychologist Benjamín González personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} tracking-wider text-gray-100 w-screen h-screen`}>
        <header className="py-10 bg-lime-900 text-gray-100 border-4 border-lime-900 border-b-gray-100">
          <div className="flex items-center justify-evenly">
            <Image
              src={headshot}
              alt="Foto del lic. Benjamín González"
              className="rounded-full overflow-hidden"
            />
            <div className="">
              <h1 className="text-4xl font-bold">
                Psi Benjamín González
              </h1>
              <h2>
                Cédula Profesional: 7<br/>
                Universidad Autónoma de Nuevo León
              </h2>
            </div>
          </div>
        </header>
        <main className="bg-gradient-to-b from-lime-800 to-lime-100 h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
