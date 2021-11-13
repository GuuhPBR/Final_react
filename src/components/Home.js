import React from 'react';
import fundo_comida from '../img/fundo_comida.jpg';
import Img from './img.js';

function Home () {
    return (
        <>
            <div>
                <Img imagem={fundo_comida} className="imagemfundo" alt="Fundo com alimentos"/>
                <p class="center">Seja Bem Vindo!</p>
            </div>
        </>
     );
}

export default Home;
