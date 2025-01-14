import styled from "styled-components";
import NombreSeccion from "../SeccionName";

const BannerEstilizado = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  gap: 20px;

  @media (max-width: 430px) {
    display: none;
  }

  iframe {
    width: 50%;
    border-radius: 10px;
    margin-bottom: 20%;
    margin-top: 20%;
  }
  h2 {
    display: flex;
    color: white;
    font-size: 2rem;
    margin-bottom: 20px;
  }
  p {
    display: flex;
    color: white;
    font-size: 1rem;
    margin-bottom: 20px;
  }

  img {
    width: 50%;
    border-radius: 10px;
  }
`;
const FondoBanner = styled.div`
  position: relative;

  color: #fff;
  text-align: center;
  padding: 20px;
  z-index: 1;
  box-shadow: 0 -2px 10px 2px #00ffcc;

  div::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("img/thumnail.jpg");
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    z-index: -1;
  }

  @media (max-width: 430px) {
    display: none;
  }
`;

const TextosBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 10%;
`;

const Banner = ({ titulo, descripcion }) => {
  return (
    <FondoBanner>
      <BannerEstilizado>
        <TextosBanner>
          <NombreSeccion nombre="Front-end" />
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
        </TextosBanner>
        <img src="img/thumnail.jpg" alt="imagen video" />
      </BannerEstilizado>
    </FondoBanner>
  );
};

export default Banner;
