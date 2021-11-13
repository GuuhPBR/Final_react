import React from 'react';
import styled from "styled-components";

const Centralizando = styled.div`
    text-align: center;
    font-size: 30px;

`;

function Sobre() {
    return (                
        <>    
            <Centralizando>
                Sobre nós
            </Centralizando>
            <Centralizando>
                Atualmente vivemos 
            </Centralizando>  
        </>                     
     );
}

export default Sobre;