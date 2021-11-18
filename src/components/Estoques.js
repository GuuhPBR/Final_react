import React, {useState, useEffect} from 'react';
import { Table, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { Link, useHistory } from "react-router-dom";
import Estoque from '../models/Estoque';
import EstoquesAdapter from '../adapters/EstoquesAdapter';


function Estoques () {
    const history = useHistory();
    const [estoques, setEstoques] = useState([]);
    const estoquesAdapter = new EstoquesAdapter()


    useEffect(() =>{
        carregaEstoques();
    }, [])

    function carregaEstoques(){
        estoquesAdapter.fetchResources(setEstoques);
    }

    function deletarEstoque(estoque){
        if (window.confirm("Deseja mesmo deletar o estoque?")) {
            new Estoque(estoque).destroy(confirmaEstoqueDeletado)
        }
    }

    function confirmaEstoqueDeletado(estoque){
        carregaEstoques();
    }

    function renderEstoque(estoque){
        if(estoque.length < 1) {
            return null
        }

        return (
            <tr>
                <th scope="row">
                    {estoque.id}
                </th>

                <td>
                    {estoque.alimento_id}
                </td>
                <td>
                    {estoque.mercado_id}
                </td>
                <td>
                    {estoque.quantidade} Kgs
                </td>
                <td>
                    {estoque.data_entrada}
                </td>
                <td>
                    {estoque.data_validade}
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
                            history.push("/editar_estoque/" + estoque.id);
                            }}>
                                Editar
                            </DropdownItem>
                            <DropdownItem onClick={(e) => {
                                e.preventDefault();
                                deletarEstoque(estoque)
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
                    <h1>Lista de Estoque</h1>
                </div>
                <div className="col">
                    <Link className="float-right btn btn-default" to="/novo_estoque"> Novo Estoque </Link>
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
                            Alimento
                        </th>
                        <th>
                            Mercado
                        </th>
                        <th>
                            Quantidade
                        </th>
                        <th>
                            Data - Entrada
                        </th>
                        <th>
                            Data - Vencimento
                        </th>
                        <th>
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {estoques.map(estoque => {
                        return renderEstoque(estoque);
                    })}
                </tbody>
            </Table>
        </>   
     );
}

export default Estoques;