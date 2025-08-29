import TarjetaGlobal from "./components/TarjetaGlobal";
import TarjetaModulo from "./components/TarjetaModulo";
import TarjetaDinamica from "./components/TarjetaDinamica";
import TarjetaTailwind from "./components/TarjetaTailwind";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Demostración de Estilos</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ejemplo con CSS Global</h2>
        <TarjetaGlobal
          titulo="Tarjeta Global"
          contenido="Esta tarjeta usa estilos definidos en globals.css"
          color="blue"
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ejemplo con CSS Modules</h2>
        <TarjetaModulo
          nombre="Tarjeta Módulo"
          descripcion="Tarjeta con estilos únicos usando CSS Modules"
          categoria="Primaria"
          variant="tarjetaPrimaria"
        />
        <TarjetaModulo
          nombre="Tarjeta Secundaria"
          descripcion="Otro ejemplo con variante secundaria"
          categoria="Secundaria"
          variant="tarjetaSecundaria"
        />
        <TarjetaModulo
          nombre="Tarjeta Éxito"
          descripcion="Variante con estilo de éxito"
          categoria="Éxito"
          variant="tarjetaExito"
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ejemplo con Estilos en Línea</h2>
        <TarjetaDinamica
          titulo="Tarjeta Dinámica Activa"
          contenido="Se muestra con borde verde cuando está activa."
          colorFondo="#f0f8ff"
          colorTexto="#000"
          ancho="250px"
          activo={true}
        />
        <TarjetaDinamica
          titulo="Tarjeta Dinámica Inactiva"
          contenido="Se muestra con borde gris cuando está inactiva."
          colorFondo="#fff0f5"
          colorTexto="#333"
          ancho="250px"
          activo={false}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Ejemplo con Tailwind CSS</h2>
        <TarjetaTailwind
          titulo="Tarjeta Tailwind"
          descripcion="Tarjeta moderna usando clases de Tailwind CSS"
          imagen="https://i.pinimg.com/736x/50/7d/cf/507dcfb2f3246bf82183bc39e6ae23f4.jpg"
          etiqueta="Tailwind"
        />
      </section>
    </main>
  );
}
