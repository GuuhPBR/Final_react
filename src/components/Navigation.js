import React from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Lista, ItemLista  } from './Styles';

function Navigation() {
    const history = useHistory();

    function logOut(event){
        event.preventDefault();
        history.push("/");
    }

    return ( 
        <div className="row">
            <div className="col-12" style={{height: 100}}>
                <nav>
                    <Lista>
                        <ItemLista>
                            <Link className="link_to ancora" to="/">Home</Link>
                        </ItemLista>
                        <ItemLista> 
                            <Link className="link_to ancora" to="/Instituicoes">Instituições</Link>
                        </ItemLista>
                        <ItemLista> 
                            <Link className="link_to ancora" to="/Mercados">Mercados</Link>
                        </ItemLista>
                        <ItemLista> 
                            <Link className="link_to ancora" to="/Produtos">Produtos</Link>
                        </ItemLista>
                        <ItemLista> 
                            <Link className="link_to ancora" to="/Estoques">Estoques</Link>
                        </ItemLista>
                        <ItemLista> 
                            <Link className="link_to ancora" to="/Reservas">Reservas</Link>
                        </ItemLista>
                    </Lista>
                </nav>
            </div>        
        </div>
     );
}

export default Navigation;