import logo from "../Cabecera/logoMain.png";
import styled from "styled-components";
import CabeceraLink from "../CabeceraLink";

const FooterEstilizado = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
  padding: 20px;
  border-top: 5px solid transparent;
  box-shadow: 0 -2px 10px 2px #00ffcc;
  img {
    display: block;
  }

  div {
    display: none;
  }

  @media (max-width: 430px) {
    img {
      display: none;
    }

    div {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;

const Footer = (pantallaCompleta) => {
  return (
    <FooterEstilizado>
      <img src={logo} alt="Logo Alura" />
      <div>
        <CabeceraLink url="/">Home</CabeceraLink>
        <CabeceraLink url="/Nuevo">Nuevo</CabeceraLink>
      </div>
    </FooterEstilizado>
  );
};

export default Footer;
