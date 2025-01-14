import React from "react";
import { Routes, Route } from "react-router-dom";
import Formulario from "./pages/Formulario";
import Inicio from "./pages/Inicio";

import Page404 from "./pages/Page404";
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import styled from "styled-components";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const Fondo = styled.div`
  background-color: rgb(15, 14, 75);
  min-height: 100vh;
`;

function App() {
  const [videos, setVideos] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategorias] = useState([]);
  const [valorSeleccionado, setValorSeleccionado] = useState("");
  const [id, setId] = useState("");

  const handleBorrarVideo = async (id) => {
    try {
      // Realiza la solicitud DELETE a la API
      const respuesta = await fetch(`http://localhost:5000/videos/${id}`, {
        method: "DELETE",
      });

      if (!respuesta.ok) {
        throw new Error("No se pudo eliminar el video de la base de datos.");
      }

      // Elimina visualmente el video después de la respuesta exitosa
      const nuevosVideos = videos.filter((video) => video.id !== id);
      setVideos(nuevosVideos);

      console.log(`Video eliminado con éxito: id ${id}`);
    } catch (error) {
      console.error("Error al eliminar el video:", error);
    }
  };

  useEffect(() => {
    const fetchId = async () => {
      try {
        const respuesta = await fetch("http://localhost:5000/videos");
        const data = await respuesta.json();

        // Verificar que hay videos
        if (data.length > 0) {
          // Obtener categorías únicas
          const idUnico = [...new Set(data.map((video) => video.id))];
          setId(idUnico);
        } else {
          console.error("No hay videos disponibles en la respuesta.");
        }
      } catch (error) {
        console.error("Error al obtener los videos:", error);
      }
    };

    fetchId();
  }, []);

  useEffect(() => {
    const fetchTitulo = async () => {
      try {
        const respuesta = await fetch("http://localhost:5000/videos");
        const data = await respuesta.json();

        // Asegurarse de acceder a 'videos'
        if (data.length > 0) {
          setTitulo(data[0].titulo);
        } else {
          console.error("No hay videos disponibles en la respuesta.");
        }
      } catch (error) {
        console.error("Error al obtener los videos:", error);
      }
    };

    fetchTitulo();
  }, []);

  useEffect(() => {
    const fetchDescripcion = async () => {
      try {
        const respuesta = await fetch("http://localhost:5000/videos");
        const data = await respuesta.json();

        // Asegurarse de acceder a 'videos'
        if (data.length > 0) {
          setDescripcion(data[0].descripcion);
        } else {
          console.error("No hay videos disponibles en la respuesta.");
        }
      } catch (error) {
        console.error("Error al obtener los videos:", error);
      }
    };

    fetchDescripcion();
  }, []);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const respuesta = await fetch("http://localhost:5000/videos");
        const data = await respuesta.json();

        // Verificar que hay videos
        if (data.length > 0) {
          // Obtener categorías únicas
          const categoriasUnicas = [
            ...new Set(data.map((video) => video.categoria)),
          ];
          setCategorias(categoriasUnicas);
        } else {
          console.error("No hay videos disponibles en la respuesta.");
        }
      } catch (error) {
        console.error("Error al obtener los videos:", error);
      }
    };

    fetchCategorias();
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const respuesta = await fetch("http://localhost:5000/videos");
        const data = await respuesta.json();
        setVideos(data);
      } catch (error) {
        console.error("Error al obtener los videos:", error);
      }
    };

    fetchVideos();
  }, []);

  const agregarVideo = async (nuevoVideo) => {
    try {
      const respuesta = await fetch("http://localhost:5000/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoVideo),
      });

      if (respuesta.ok) {
        const videoAgregado = await respuesta.json();
        setVideos((prevVideos) => [...prevVideos, videoAgregado]);
        console.log("Video agregado con éxito:", videoAgregado);
      } else {
        console.error("Error al agregar el video:", respuesta.status);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  const manejarEnvio = (nuevoVideo) => {
    if (!nuevoVideo.categoria) {
      console.error("Por favor, selecciona una categoría.");
      return;
    }
    const videoConId = {
      ...nuevoVideo,
      id: generarId(),
    };
    agregarVideo(videoConId);
  };

  const generarId = () => {
    return Math.random().toString(36).substring(2, 9);
  };

  useEffect(() => {
    const getData = async () => {
      const respuesta = await fetch("http://localhost:5000/videos");
      const data = await respuesta.json();
      setVideos([...data]);
    };
    getData();
  }, []);

  return (
    <>
      <Fondo>
        <GlobalStyles />
        <Cabecera />
        <Routes>
          <Route
            path="/"
            element={
              <Inicio
                videos={videos}
                setVideos={setVideos}
                titulo={titulo}
                descripcion={descripcion}
                handleBorrarVideo={handleBorrarVideo}
                categoria={categoria}
                tituloFormulario={"EDITAR VIDEO"}
                valorSeleccionado={valorSeleccionado}
                setValorSeleccionado={setValorSeleccionado}
                mostrarBoton={true}
              />
            }
          />
          <Route
            path="/Nuevo"
            element={
              <Formulario
                agregarVideo={agregarVideo}
                key={id}
                categoria={categoria}
                valorSeleccionado={valorSeleccionado}
                setValorSeleccionado={setValorSeleccionado}
                onSubmit={manejarEnvio}
                tituloFormulario={"NUEVO VIDEO"}
              />
            }
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Fondo>
    </>
  );
}

export default App;
