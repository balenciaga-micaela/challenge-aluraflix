import styled from "styled-components"

const MainEstilizado = styled.main`

background: radial-gradient(circle, white, rgb(15, 14, 75));
padding: 20px; 
margin: 20px;
display: flex;
justify-content: center;
align-items: center;

h1{
    color: black;
}
`

const Page404 = () => {
    return (
        <MainEstilizado >
            
            <img src="img\imagen404 (1).png" alt="" />
            <h1>Ops, esta página no existe</h1>
            
        </MainEstilizado>
    )
}

export default Page404