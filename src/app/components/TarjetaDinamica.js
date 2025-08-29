export default function TarjetaDinamica({
  titulo,
  contenido,
  colorFondo,
  colorTexto,
  ancho,
  activo,
}) {
  const style = {
    backgroundColor: colorFondo,
    color: colorTexto,
    width: ancho,
    padding: "16px",
    margin: "10px",
    borderRadius: "8px",
    border: activo ? "2px solid green" : "2px solid gray",
    transition: "all 0.3s ease",
  };

  return (
    <div style={style}>
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </div>
  );
}
