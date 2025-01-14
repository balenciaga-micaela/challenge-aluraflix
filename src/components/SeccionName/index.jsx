import styled from "styled-components";

const ContenedorNombreEstilizado = styled.div`
  display: flex;
  justify-content: center;
  background-color: #6bd1ff;
  border-radius: 15px;
  width: 40vw;
  margin: 2% 1%;

  h2 {
    font-size: 1.5em;
    color: #f5f5f5;
    padding: 10px;
    padding: 0px 25px 0px 25px;
    margin: 10px;
  }
`;

const NombreSeccion = ({ nombre }) => {
  return (
    <ContenedorNombreEstilizado>
      <h2>{nombre}</h2>
    </ContenedorNombreEstilizado>
  );
};
export default NombreSeccion;
