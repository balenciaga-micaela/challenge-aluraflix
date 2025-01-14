const ListaCategorias = ({
  categoria,
  setValorSeleccionado,
  valorSeleccionado,
}) => {
  const manejoDelCambio = (event) => {
    const seleccion = event.target.value;
    setValorSeleccionado(seleccion);
    console.log("Categoría seleccionada:", seleccion);
  };

  if (!Array.isArray(categoria)) {
    return null;
  }

  return (
    <select value={valorSeleccionado} onChange={manejoDelCambio}>
      <option value="" disabled defaultValue="" hidden>
        Seleccionar Categoria
      </option>
      {categoria.map((categoria, index) => {
        return <option key={index}>{categoria}</option>;
      })}
    </select>
  );
};

export default ListaCategorias;
