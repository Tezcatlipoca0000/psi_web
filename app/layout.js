import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Psi Benjamín González",
  description: "Psychologist Benjamín González personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} p-4 w-screen min-h-screen`}>
        <header>
          <div className="flex justify-between">
            <h1>
              Psi Benjamín González
            </h1>
            <nav className="w-3/4">
              <ul className="flex justify-evenly">
                <li>Inicio</li>
                <li>Psicometría</li>
                <li>Agenda</li>
                <li>Contacto</li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
