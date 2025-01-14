import React from "react";
import styled from "styled-components";

const FormEstilizado = styled.form`
  background-color: ${(props) => (props.$primario ? "#03122F" : "black")};
  color: ${(props) => (props.$primario ? "#2271D1" : "white")};
  border: ${(props) => (props.$primario ? "1px solid #6BD1FF" : "none")};
  padding: 10px 20px;

  border-radius: 5px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;

  div {
    display: flex;
    flex-direction: ${(props) => (props.$primario ? "column" : "row")};
    gap: 1rem;
  }

  button,
  input,
  textarea,
  select {
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    color: white;
    background-color: #03122f;
  }

  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  h2 {
    color: ${(props) => (props.$primario ? "red" : "white")};
  }
`;

const FormularioVideos = ({
  valoresIniciales = {},
  onSubmit,
  onCancel,
  onChange,
  children,
  primario,
  tituloFormulario,
}) => {
  const { titulo = "", src = "", descripcion = "" } = valoresIniciales;

  return (
    <FormEstilizado method="dialog" onSubmit={onSubmit} $primario={primario}>
      <h3>{tituloFormulario}</h3>
      <label>Título</label>
      <input
        type="text"
        name="titulo"
        value={titulo}
        onChange={(e) => onChange("titulo", e.target.value)}
        placeholder="Título del video"
        required
      />
      {children}
      <label>Video</label>
      <input
        type="text"
        name="src"
        value={src}
        onChange={(e) => onChange("src", e.target.value)}
        placeholder="URL del video"
        required
      />

      <label>Descripción</label>
      <textarea
        name="descripcion"
        value={descripcion}
        onChange={(e) => onChange("descripcion", e.target.value)}
        placeholder="Descripción del video"
        required
      />
      <div>
        <button type="submit">Guardar</button>

        <button type="button" onClick={onCancel}>
          Limpiar
        </button>
      </div>
    </FormEstilizado>
  );
};

export default FormularioVideos;
