import React from "react";
import { useState, useEffect } from "react";

import ListaCategorias from "../components/ListaCategorias";
import FormularioVideos from "../components/Formulario";

const Formulario = ({
  onSubmit,
  categoria,
  valorSeleccionado,
  setValorSeleccionado,
  tituloFormulario,
}) => {
  const [nuevoVideo, setNuevoVideo] = useState({
    titulo: "",
    categoria: "",
    src: "",
    descripcion: "",
  });

  const manejarCambio = (campo, valor) => {
    setNuevoVideo((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    onSubmit(nuevoVideo);
    setNuevoVideo({
      titulo: "",
      categoria: "",
      src: "",
      descripcion: "",
    });
    setValorSeleccionado("");
  };

  useEffect(() => {
    setNuevoVideo((prev) => ({
      ...prev,
      categoria: valorSeleccionado,
    }));
  }, [valorSeleccionado]);

  return (
    <div>
      <FormularioVideos
        valoresIniciales={nuevoVideo}
        onSubmit={manejarEnvio}
        onChange={manejarCambio}
        onCancel={() =>
          setNuevoVideo({
            titulo: "",
            categoria: "",
            src: "",
            descripcion: "",
          })
        }
        primario={false}
        tituloFormulario={tituloFormulario}
      >
        <ListaCategorias
          categoria={categoria}
          valorSeleccionado={valorSeleccionado}
          setValorSeleccionado={setValorSeleccionado}
        />
      </FormularioVideos>
    </div>
  );
};

export default Formulario;
