
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center w-full pt-12">
        <div id="parent-title">
          <h1 id="title" className="text-center text-4xl font-bold">
            Psicología clínica con orientación psicoanalítica
          </h1>
          <div id="brace">
            <div id="left-brace"></div>
            <div id="right-brace"></div>
          </div>
        </div>
        <table className="w-1/2 mt-4">
          <thead>
            <tr>
              <th colspan="2" className="text-center text-2xl font-medium">
                Especializado en:
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center text-xl font-normal mb-4">Motivación</td>
              <td className="text-center text-xl font-normal mb-4">Emprendedurismo</td>
            </tr>
            <tr>
              <td className="text-center text-xl font-normal mb-4">Desempeño</td>
              <td className="text-center text-xl font-normal mb-4">Bloqueos</td>
            </tr>
            <tr>
              <td className="text-center text-xl font-normal mb-4">Adolescentes</td>
              <td className="text-center text-xl font-normal mb-4">Adultos</td>
            </tr>
            <tr>
              <td className="text-center text-xl font-normal mb-4">Parejas</td>
              <td className="text-center text-xl font-normal mb-4">Familiar</td>
            </tr>
            <tr>
              <td className="text-center text-xl font-normal mb-4"></td>
              <td className="text-center text-xl font-normal mb-4"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col pl-8 pt-12">
        <h1 className="text-4xl font-bold">
          Contacto:
        </h1>
        <h2>
          ¡Alcanza tu máximo potencial! Haz tu cita el día de hoy.
        </h2>
        <ul>
          <li>
            Correo: psibenjamingzz@gmail.com
          </li>
          <li>
            Tel & What's App: 81 1013 5362
          </li>
          <li>
            Facebook: 
          </li>
        </ul>
      </div>
    </>
  );
}
