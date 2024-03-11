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
      <body className={`${inter.className} tracking-wider text-gray-700 w-screen min-h-screen`}>
        <header className="mt-12">
          <div className="flex items-center justify-evenly">
            <Image
              src={headshot}
              alt="Foto del lic. Benjamín González"
              className="rounded-full overflow-hidden"
            />
            <div className="">
              <h1 className="text-4xl font-bold text-gray-100">
                Psi Benjamín González
              </h1>
              <h2>
                Cédula Profesional: 7<br/>
                Universidad Autónoma de Nuevo León
              </h2>
            </div>
          </div>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
