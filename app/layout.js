import { Inter } from "next/font/google";
import Image from "next/image";
import headshot from "../public/me_2.png";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  generator: "Next.js",
  applicationName: "Psi Benjamín González",
  referrer: "origin-when-cross-origin",
  keywords: ["Psicología", "Benjamín González", "Psicoanálisis", "Terapia", "Motivación", "Emprendimiento"],
  authors: [{name: "Benjamín González"}],
  creator: "Benjamín González",
  publisher: "Benjamín González",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
    date: true,
  },
  title: "Psi Benjamín González",
  description: "Psicología Clínica con Orientación Psicoanalítica; Motivación, Desempeño, Emprendimiento, Desgaste, Estrés",
  openGraph: {
    title: "Psi Benjamín González",
    description: "Psicología Clínica con Orientación Psicoanalítica; Motivación, Desempeño, Emprendimiento, Desgaste, Estrés",
    url: "pending url",
    siteName: "Psi Benjamín González",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} tracking-wider text-white min-h-screen`}>

        <header className="py-10 bg-lime-900 text-gray-100 border-4 border-lime-900 border-b-gray-100">
          <div className="flex items-center p-2 md:justify-evenly">
            <Image
              src={headshot}
              alt="Foto del lic. Benjamín González"
              className="rounded-full overflow-hidden border-2 border-amber-300"
            />
            <div className="">
              <h1 className="text-4xl font-bold text-right md:text-center">
                Lic. Benjamín González
              </h1>
              <h2 className="text-right md:text-center">
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
          <span>Sitio Creado por Lic. Benjamín González</span>
          <span className="float-right text-xs">V-1.0</span>
        </footer>

      </body>
    </html>
  );
}
