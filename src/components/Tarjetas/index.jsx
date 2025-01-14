import styled from "styled-components";

const ContenedorVideos = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  max-width: 100%;
  box-sizing: border-box;

  /* Estilo de la barra de scroll para pantallas pequeñas */
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  ::-webkit-scrollbar {
    height: 20px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: violet;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: black;
  }

  scrollbar-width: auto;
  scrollbar-color: #6bd1ff black;
  border-radius: 10px;
  padding: 2%;
`;

const VideoEstilizado = styled.iframe`
  display: flex;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top: 5px solid transparent;
  box-shadow: 0 -2px 10px 2px #00ffcc;

  @media (max-width: 768px) {
    min-width: 300px;
    flex: 0 0 auto;
  }
`;

const PieVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid white;
  border-bottom: 5px solid transparent;
  box-shadow: 0 -2px 10px 2px #00ffcc;
`;
const BotonEstilizado = styled.button`
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 10px;
  border: none;
  justify-content: center;
  color: white;
  background-color: #000000;
`;
const ImgEstilizado = styled.img`
  background-color: black;
  background-size: cover;
  color: white;
`;

const Tarjetas = (props) => {
  const { videos, categoria } = props;
  const { handleBorrarVideo } = props;

  const { onOpenModal } = props;

  const videosFiltrados = videos.filter(
    (video) => video.categoria === categoria
  );

  if (!Array.isArray(videosFiltrados) || videosFiltrados.length === 0) {
    return (
      <div>
        <p>No hay videos disponibles para la categoría "{categoria}".</p>
      </div>
    );
  }

  return (
    <ContenedorVideos>
      {videosFiltrados.map((video) => (
        <div key={video.id}>
          <VideoEstilizado
            src={video.src}
            title={video.id}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></VideoEstilizado>
          <PieVideo>
            <BotonEstilizado onClick={() => handleBorrarVideo(video.id)}>
              <ImgEstilizado src="img/botonBorrar.png" alt="boton borrar" />
              BORRAR
            </BotonEstilizado>

            <BotonEstilizado
              onClick={() => {
                onOpenModal(video.id);
              }}
            >
              <ImgEstilizado src="img/botonEditar.png" alt="boton editar" />
              EDITAR
            </BotonEstilizado>
          </PieVideo>
        </div>
      ))}
    </ContenedorVideos>
  );
};
export default Tarjetas;
