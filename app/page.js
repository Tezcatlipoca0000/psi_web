
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
        <table class="w-1/2 mt-4">
          <thead>
            <tr>
              <th colspan="2" class="text-center text-2xl font-medium">
                Especializado en:
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center text-xl font-normal mb-4">Adolescentes</td>
              <td class="text-center text-xl font-normal mb-4">Adultos</td>
            </tr>
            <tr>
              <td class="text-center text-xl font-normal mb-4">Parejas</td>
              <td class="text-center text-xl font-normal mb-4">Depresión</td>
            </tr>
            <tr>
              <td class="text-center text-xl font-normal mb-4">Estres</td>
              <td class="text-center text-xl font-normal mb-4">Ansiedad</td>
            </tr>
            <tr>
              <td class="text-center text-xl font-normal mb-4">Soledad</td>
              <td class="text-center text-xl font-normal mb-4">Bloqueos</td>
            </tr>
            <tr>
              <td class="text-center text-xl font-normal mb-4">Emprendedurismo</td>
              <td class="text-center text-xl font-normal mb-4">Desempeño</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col pl-8 pt-12">
        <h1 className="text-4xl font-bold">
          Contacto:
        </h1>
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
