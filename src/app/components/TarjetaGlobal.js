export default function TarjetaGlobal({ titulo, contenido, color }) {
  return (
    <div className="tarjeta-global">
      <h2 className="titulo-global" style={{ color: color }}>
        {titulo}
      </h2>
      <p className="contenido-global">{contenido}</p>
    </div>
  );
}
