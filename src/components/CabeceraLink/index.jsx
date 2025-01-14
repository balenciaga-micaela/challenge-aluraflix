import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkEstilizado = styled(Link)`
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgb(212, 223, 240);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  white-space: nowrap;
  width: fit-content;

  margin: 0;
  padding: 10px;
  box-sizing: border-box;
`;

function CabeceraLink({ url, children }) {
  return <LinkEstilizado to={url}>{children}</LinkEstilizado>;
}

export default CabeceraLink;
