import React from "react";
import { useState, useEffect } from "react";

import FormularioVideos from "../Formulario/index";
import ListaCategorias from "../ListaCategorias/index";

const Modal = ({
  isOpen,
  onClose,
  videoAEditar,
  actualizarVideos,
  categoria,
  valorSeleccionado,
  setValorSeleccionado,
  mostrarBoton,
  tituloFormulario,
}) => {
  const [valores, setValores] = useState({
    titulo: videoAEditar ? videoAEditar.titulo : "",
    src: videoAEditar ? videoAEditar.src : "",
    categoria: videoAEditar ? videoAEditar.categoria : "",
    descripcion: videoAEditar ? videoAEditar.descripcion : "",
  });

  useEffect(() => {
    if (videoAEditar) {
      setValores((prev) => ({
        ...prev,
        categoria: valorSeleccionado,
      }));
    }
  }, [valorSeleccionado, videoAEditar]);

  if (!isOpen || !videoAEditar) return null;
  if (!Array.isArray(categoria)) {
    return null;
  }

  const handleChange = (campo, valor) => {
    setValores((prev) => ({ ...prev, [campo]: valor }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedVideo = { ...videoAEditar, ...valores };

    try {
      const respuesta = await fetch(
        `http://localhost:5000/videos/${videoAEditar.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedVideo),
        }
      );

      if (!respuesta.ok) {
        throw new Error("Error al actualizar el video en la base de datos.");
      }

      const videoActualizado = await respuesta.json();

      actualizarVideos(videoActualizado);
      onClose();
    } catch (error) {
      console.error("Error al actualizar el video:", error);
    }
  };

  return (
    <div style={styles.overlay}>
      <FormularioVideos
        valoresIniciales={valores}
        onSubmit={handleSubmit}
        onChange={handleChange}
        categoria={categoria}
        valorSeleccionado={valorSeleccionado}
        setValorSeleccionado={setValorSeleccionado}
        onCancel={() =>
          setValores({
            titulo: "",
            categoria: "",
            src: "",
            descripcion: "",
          })
        }
        mostrarBoton={mostrarBoton}
        primario
        tituloFormulario={tituloFormulario}
      >
        <ListaCategorias
          categoria={categoria}
          valorSeleccionado={valorSeleccionado}
          setValorSeleccionado={setValorSeleccionado}
        />
      </FormularioVideos>

      <button onClick={(e) => onClose()} style={styles.button}>
        <img src="img/botonX.png" alt="cerrar" style={styles.img} />
      </button>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
  },
  button: {
    position: "relative",
    top: "-260px",
    right: "40px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
  img: {
    width: "20px",
    height: "20px",
    cursor: "pointer",
  },
};

export default Modal;
