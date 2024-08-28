
import { useRef } from "react";
import "./App.css";
import html2canvas from "html2canvas";

function App() {
  const tablaRef = useRef(null);

  function capturarTabla(tabla) {
    html2canvas(tabla).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `Sopa de fideo.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <div className="contenedor">
      <h1>Recetas</h1>
      <table className="tabla-receta" ref={tablaRef}>
        <thead>
          <tr>
            <th className="encabezado">Sopa de fideo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="ingredientes">Ingredientes</td>
          </tr>
          <tr>
            <td className="ingrediente">
              ◾ 1 Bolsa de sopa la moderna de 200 g.
            </td>
          </tr>
          <tr>
            <td className="ingrediente">◾ 2 Jitomates grandes.</td>
          </tr>
          <tr>
            <td className="ingrediente">◾ 1 Pedazo de cebolla.</td>
          </tr>
          <tr>
            <td className="ingrediente">◾ Medio diente de ajo.</td>
          </tr>
          <tr>
            <td className="ingrediente">◾ 1 Knorr suiza.</td>
          </tr>
          <tr>
            <td className="ingrediente">◾ Sal al gusto.</td>
          </tr>
          <tr>
            <td className="preparacion">Preparacion</td>
          </tr>
          <tr>
            <td className="paso">
              👆 <b>Paso 1.</b> Agregar en el vaso de la licuadora, los 2
              jitomates picados, el pedazo de cebolla, el medio diente de ajo,
              el cubo de knnor suiza, sal al gusto y medio litro de agua.
            </td>
          </tr>
          <tr>
            <td className="paso">
              👆 <b>Paso 2.</b> Moler a manera de que quede a tu gusto, ya sea
              bien molido o martajado.
            </td>
          </tr>
          <tr>
            <td className="paso">
              👆 <b>Paso 3.</b> En una cacerola ancha, agregar 4 cucharadas de
              aceite, poner en la estufa a fuego alto, cuando ya este caliente
              el aceite, agregar la sopa y mover para freir uniformemente.
            </td>
          </tr>
          <tr>
            <td className="paso">
              👆 <b>Paso 4.</b> Cuando la sopa adopte un color cafe claro,
              agregar el pure y mover, dejar hervir por 3 minutos.
            </td>
          </tr>
          <tr>
            <td className="paso">
              👆 <b>Paso 5.</b> Despues de los 3 minutos de hervir, agregar agua
              al gusto a manera de obtener las porciones deseadas.
            </td>
          </tr>
          <tr>
            <td className="paso">
              👆 <b>Paso 6.</b> Hervir durante 15 minutos y apagar al fuego.
            </td>
          </tr>
          <tr>
            <td className="paso">
              👆 <b>Paso 7.</b> Sirva y disfrute.
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="pie">© Reyna Benito Rodrigo</td>
          </tr>
        </tfoot>
      </table>
      <br></br>
      <button className="capturar" onClick={() => capturarTabla(tablaRef.current)}>Capturar 📸</button>
    </div>
  );
}

export default App;
