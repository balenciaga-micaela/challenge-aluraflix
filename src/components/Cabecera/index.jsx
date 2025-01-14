import React from "react";
import { Link } from "react-router-dom";

import logo from "./logoMain.png";
import CabeceraLink from "../CabeceraLink";
import styled from "styled-components";

const CabeceraEstilizada = styled.header`
  display: flex;
  padding: 20px;
  border-bottom: 2px solid #2271d1;
  box-shadow: 0 2px 5px #2271d1;
  justify-content: space-between;

  @media (max-width: 430px) {
    display: none;
  }
`;

const NavEstiliado = styled.nav`
  display: flex;
  gap: 20px;
`;

function Cabecera() {
  return (
    <CabeceraEstilizada>
      <Link to="/">
        <section>
          <img src={logo} alt="Logo Alura" />
        </section>
      </Link>
      <NavEstiliado>
        <CabeceraLink url="/">Home</CabeceraLink>
        <CabeceraLink url="/Nuevo">Nuevo video</CabeceraLink>
      </NavEstiliado>
    </CabeceraEstilizada>
  );
}

export default Cabecera;
