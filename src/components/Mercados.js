import React, {useState, useEffect} from 'react';
import { Table, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { Link, useHistory } from "react-router-dom";
import Mercado from '../models/Mercado';
import MercadosAdapter from '../adapters/MercadosAdapter';


function Mercados () {
    const history = useHistory();
    const [mercados, setMercados] = useState([]);
    const mercadosAdapter = new MercadosAdapter()


    useEffect(() =>{
        carregaMercados();
    }, [])

    function carregaMercados(){
        mercadosAdapter.fetchResources(setMercados);
    }

    function deletarMercado(mercado){
        if (window.confirm("Deseja mesmo deletar o mercado?")) {
            new Mercado(mercado).destroy(confirmaMercadoDeletado)
        }
    }

    function confirmaMercadoDeletado(mercado){
        carregaMercados();

    }

    function renderMercado(mercado){
        if(mercado.length < 1) {
            return null
        }

        return (
            <tr>
                <th scope="row">
                    {mercado.id}
                </th>
                <td>
                    {mercado.nome}
                </td>

                <td>
                    <UncontrolledButtonDropdown>
                        <DropdownToggle caret>
                            Ações 
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>
                                Opções
                            </DropdownItem>
                            <DropdownItem onClick={(e) => {
                            e.preventDefault();
                            history.push("/editar_mercado/" + mercado.id);
                            }}>
                                Editar
                            </DropdownItem>
                            <DropdownItem onClick={(e) => {
                                e.preventDefault();
                                deletarMercado(mercado)
                            }}>
                                Deletar
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                </td> 
            </tr>
        )
    }

    return ( 
        <>  
            <div className="row">
                <div className="col">
                    <h1>Lista de Mercados</h1>
                </div>
                <div className="col">
                    <Link className="float-right btn btn-default" to="/novo_mercado"> Nova Loja </Link>
                </div>
            </div>    
            <Table
                dark
                size=""
                striped
                >
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Nome
                        </th>
                        <th>
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {mercados.map(mercado => {
                        return renderMercado(mercado);
                    })}
                </tbody>
            </Table>
        </>   
     );
}

export default Mercados ;

