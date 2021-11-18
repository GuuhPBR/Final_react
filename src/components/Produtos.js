import React, {useState, useEffect} from 'react';
import { Table, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem   } from 'reactstrap';
import { Link, useHistory } from "react-router-dom";
import Alimento from '../models/Alimento';
import AlimentosAdapter from '../adapters/AlimentosAdapter';


function Produtos () {
    const history = useHistory();
    const [alimentos, setAlimentos] = useState([]);
    const alimentosAdapter = new AlimentosAdapter()

    useEffect(() =>{
        carregaAlimento();
    }, [])

    function carregaAlimento(){
        alimentosAdapter.fetchResources(setAlimentos);
    }

    function deletarProduto(alimento){
        if (window.confirm("Deseja mesmo deletar o produto?")) {
            new Alimento(alimento).destroy(confirmaAlimentoDeletado)
        }
    }

    function confirmaAlimentoDeletado(){
        carregaAlimento();
    }
    

    function renderAlimento(alimento){
        if(alimentos.length < 1) {
            return null
        }

        return (
            <tr>
                <th scope="row">
                    {alimento.id}
                </th>
                <td>
                    {alimento.nome}
                </td>
                <td>
                    {alimento.tipo}
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
                            history.push("/editar_alimento/" + alimento.id);
                        }}>
                            Editar
                        </DropdownItem>
                        <DropdownItem onClick={(e) => {
                                e.preventDefault();
                                deletarProduto(alimento)
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
                    <h1>Lista de Produtos</h1>
                </div>
                <div className="col">
                    <Link className="float-right btn btn-default" to="/novo_alimento"> Novo alimento </Link>
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
                            Tipo
                        </th>
                        <th>
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {alimentos.map(alimento => {
                        return renderAlimento(alimento);
                    })}
                </tbody>
            </Table>
        </>   
     );
}

export default Produtos ;

