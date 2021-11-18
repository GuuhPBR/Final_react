import React, {useState, useEffect} from 'react';
import { Table, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { Link, useHistory } from "react-router-dom";
import Instituicao from '../models/Instituicao';
import InstituicoesAdapter from '../adapters/InstituicoesAdapter';


function Instituicoes() {
    const history = useHistory();
    const [instituicoes, setinstituicoes] = useState([]);
    const instituicoesAdapter = new InstituicoesAdapter()


    useEffect(() =>{
        carregainstituicoes();
    }, [])

    function carregainstituicoes(){
        instituicoesAdapter.fetchResources(setinstituicoes);
    }

    function deletarInstituicao(instituicao){
        if (window.confirm("Deseja mesmo deletar a instituição?")) {
            new Instituicao(instituicao).destroy(confirmaInstituicaoDeletado)
        }
    }

    function confirmaInstituicaoDeletado(instituicao){
        carregainstituicoes();

    }

    function renderinstituicao(instituicao){
        if(instituicao.length < 1) {
            return null
        }

        return (
            <tr>
                <th scope="row">
                    {instituicao.id}
                </th>
                <td>
                    {instituicao.nome}
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
                            history.push("/editar_instituicao/" + instituicao.id);
                            }}>
                                Editar
                            </DropdownItem>
                            <DropdownItem onClick={(e) => {
                                e.preventDefault();
                                deletarInstituicao(instituicao)
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
                    <h1>Lista de Instituiçãos</h1>
                </div>
                <div className="col">
                    <Link className="float-right btn btn-default" to="/novo_instituicao"> Nova Instituição </Link>
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
                    {instituicoes.map(instituicao => {
                        return renderinstituicao(instituicao);
                    })}
                </tbody>
            </Table>
        </>   
     );
}

export default Instituicoes ;