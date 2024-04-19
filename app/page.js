import Image from "next/image";
import psi from "../public/psi.svg";
import bin from "../public/binary.svg";


export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center w-full pt2">
        <section id="specialties" className="py-12 px-2 w-full flex justify-evenly">
          <div className="flex flex-col items-center">
            <Image
              src={psi}
              alt="Imagen de una letra griega Psi"
            />

            <h2 className="text-2xl font-medium text-center">
              Servicios De Psicoterapia En Línea:
            </h2>

            <ul>
              <li>
                Primera Entrevista Gratuita 
              </li>
              <li>
                Consultoría
              </li>
              <li>
                Consejería
              </li>
              <li>
                Psicoterapia con Enfoque Psicoanalítico
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={bin}
              alt="Imagen de un código binario"
            />

            <h2 className="text-2xl font-medium text-center">
              Servicios De Informática:
            </h2>

            <ul>
              <li>
                Análisis de Datos
              </li>
              <li>
                Visualización de Datos
              </li>
              <li>
                Administración de Bases de Datos
              </li>
              <li>
                Diseño y Desarrollo en General
              </li>
            </ul>
          </div>
        </section>
      
        <section className="flex flex-col px-2 w-full md:w-[50%] lg:w-[35%] py-12">
          <h2 className="text-2xl font-medium text-center">
            Contacto:
          </h2>

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
