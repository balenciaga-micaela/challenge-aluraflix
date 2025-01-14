import Banner from "../components/Banner";
import NombreSeccion from "../components/SeccionName";
import Tarjetas from "../components/Tarjetas";
import { useState } from "react";
import Modal from "../components/ModalDeEdicion";
import styled from "styled-components";

const InicioEstilizado = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Inicio = ({
  videos,
  titulo,
  descripcion,
  handleBorrarVideo,
  categoria,
  setVideos,
  valorSeleccionado,
  setValorSeleccionado,
  id,
  mostrarBoton,
  tituloFormulario,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [videoAEditar, setVideoAEditar] = useState({
    id: "",
    titulo: "",
    descripcion: "",
    categoria: "",
    src: "",
  });

  const handleOpenModal = (id) => {
    const videoSeleccionado = videos.find((video) => video.id === id);
    if (videoSeleccionado) {
      setVideoAEditar(videoSeleccionado);
      setModalOpen(true);
    } else {
      console.error("No se encontró el video con el id", id);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const actualizarVideos = (videoActualizado) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === videoActualizado.id ? videoActualizado : video
      )
    );
  };

  return (
    <InicioEstilizado>
      <Banner titulo={titulo} descripcion={descripcion} />
      <NombreSeccion nombre={categoria[0]} />
      <Tarjetas
        videos={videos}
        categoria={categoria[0]}
        handleBorrarVideo={handleBorrarVideo}
        onOpenModal={handleOpenModal}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoAEditar={videoAEditar}
        actualizarVideos={actualizarVideos}
        categoria={categoria}
        valorSeleccionado={valorSeleccionado}
        setValorSeleccionado={setValorSeleccionado}
        id={id}
        mostrarBoton={mostrarBoton}
        tituloFormulario={tituloFormulario}
      />

      <NombreSeccion nombre={categoria[1]} />
      <Tarjetas
        videos={videos}
        categoria={categoria[1]}
        handleBorrarVideo={handleBorrarVideo}
        onOpenModal={handleOpenModal}
      />

      <NombreSeccion nombre={categoria[2]} />
      <Tarjetas
        videos={videos}
        categoria={categoria[2]}
        handleBorrarVideo={handleBorrarVideo}
        onOpenModal={handleOpenModal}
      />
    </InicioEstilizado>
  );
};
export default Inicio;
