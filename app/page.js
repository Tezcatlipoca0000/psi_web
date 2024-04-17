import Image from "next/image";
import psi from "../public/psi.svg";


export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center w-full pt-12">
        
        <h1 id="title" className="text-center text-4xl font-bold">
          Psicología Clínica con Orientación Psicoanalítica
        </h1>

        <Image
          src={psi}
          alt="Imagen de una letra griega Psi"
          className="mt-1.5 mb-4"
        />

        <h2 className="text-2xl font-medium text-center">
          ¡Alcanza tu máximo potencial!
        </h2>
      
        <section className="flex flex-col px-2 w-full md:w-[50%] lg:w-[35%] py-12">
          <table className="w-full table-auto mt-4">
            <tbody>
              <tr>
                <td className="text-left">
                  Correo:
                </td>
                <td  className="text-right">
                  <a className="ml-2 underline text-blue-700 transition ease-in-out hover:text-amber-400 duration-300" href="mailto:psibenjamingzz@gmail.com" target="_blank">
                    psibenjamingzz@gmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  Facebook:
                </td>
                <td className="text-right">
                  <a className="ml-2 underline text-blue-700 transition ease-in-out hover:text-amber-400 duration-300" href="https://www.facebook.com/profile.php?id=61551830980840&locale=es_LA" target="_blank">
                    Benjamín González
                  </a>
                </td>
              </tr>
              <tr>
                <td  className="text-left">
                  Tel. & WhatsApp:
                </td>
                <td  className="text-right">
                  81-1013-5362
                </td>
              </tr>
            </tbody>
          </table>
        </section>

      </div>
    </>
  );
}
