import React from 'react';
import styled from "styled-components";

const AtividadeEstilo = styled.div`
    height: auto;
`;

const Imagem = styled.img`
    height: auto;
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto
`;

function Img(props) {
    return ( 
        <AtividadeEstilo>
            <Imagem src={props.imagem} />
        </AtividadeEstilo>  
     );
}


export default Img;