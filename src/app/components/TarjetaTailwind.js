export default function TarjetaTailwind({ titulo, descripcion, imagen, etiqueta }) {
  return (
    <div className="flex flex-col p-4 m-2 w-64 bg-white text-gray-800 border border-gray-200 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
      {imagen && (
       <img src={imagen} alt={titulo} className="w-full h-40 object-cover rounded-md mb-3" />
      )}
      <h2 className="text-xl font-bold mb-2">{titulo}</h2>
      <p className="text-sm text-gray-600 mb-2">{descripcion}</p>
      {etiqueta && (
        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded mt-2 inline-block">
          {etiqueta}
        </span>
      )}
    </div>
  );
}
