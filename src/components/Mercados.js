import React, {useState, useEffect} from 'react';
import { Table, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { Link } from "react-router-dom";
import MercadosAdapter from '../adapters/MercadosAdapter';


function Mercados () {
    const [mercados, setMercados] = useState([]);
    const mercadosAdapter = new MercadosAdapter()


    useEffect(() =>{
        mercadosAdapter.fetchResources(setMercados);
    }, [])

    console.log("mercados", mercados);

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
                    {mercado.estoque} 
                </td>
                <td>
                    {mercado.quantidade_loja} kg
                </td>
                <td>
                    {mercado.data_entrada}
                </td>
                <td>
                {mercado.data_validade}
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
                            Loja
                        </th>
                        <th>
                            Estoque
                        </th>
                        <th>
                            Quantidade Disponivel
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
                    {mercados.map(mercado => {
                        return renderMercado(mercado);
                    })}
                </tbody>
            </Table>
        </>   
     );
}

export default Mercados ;

