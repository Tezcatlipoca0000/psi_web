import { Inter } from "next/font/google";
import Image from "next/image";
import headshot from "../public/me_2.png";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Psi Benjamín González",
  description: "Sitio web personal del psicólogo Benjamín González",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} tracking-wider text-white min-h-screen`}>

        <header className="py-10 bg-lime-900 text-gray-100 border-4 border-lime-900 border-b-gray-100">
          <div className="flex items-center justify-evenly">
            <Image
              src={headshot}
              alt="Foto del lic. Benjamín González"
              className="rounded-full overflow-hidden border-2 border-amber-300"
            />
            <div className="">
              <h1 className="text-4xl font-bold">
                Lic. Benjamín González
              </h1>
              <h2>
                Cédula Profesional: 7630912<br/>
                Universidad Autónoma de Nuevo León
              </h2>
            </div>
          </div>
        </header>

        <main className="bg-gradient-to-tr from-lime-800 to-amber-300 h-full">
          {children}
        </main>

        <footer className="h-14 p-4 bg-lime-900 border-4 border-lime-900 border-t-gray-100">
          Sitio Creado por Lic. Benjamín González
        </footer>

      </body>
    </html>
  );
}
