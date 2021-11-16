import React, {useState, useEffect} from 'react';
import { Table, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem   } from 'reactstrap';
import { Link } from "react-router-dom";
import AlimentosAdapter from '../adapters/AlimentosAdapter';


function Produtos () {
    const [alimentos, setAlimentos] = useState([]);
    const alimentosAdapter = new AlimentosAdapter()


    useEffect(() =>{
        alimentosAdapter.fetchResources(setAlimentos);
    }, [])

    console.log("alimentos", alimentos);

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
                    {alimento.quantidade} kg
                </td>
                <td>
                    {alimento.data_entrada}
                </td>
                <td>
                {alimento.data_validade}
                </td>
                <td>
                <UncontrolledButtonDropdown>
                    <DropdownToggle caret>
                        n sei 
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>
                            Opções
                        </DropdownItem>
                        <DropdownItem>
                            Editar
                        </DropdownItem>
                        <DropdownItem>
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
                    {alimentos.map(alimento => {
                        return renderAlimento(alimento);
                    })}
                </tbody>
            </Table>
        </>   
     );
}

export default Produtos ;

