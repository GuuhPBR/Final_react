import React, {useState, useEffect} from 'react';
import { Table, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { Link, useHistory } from "react-router-dom";
import Reserva from '../models/Reserva';
import MercadosAdapter from '../adapters/MercadosAdapter';
import ReservaAdapter from '../adapters/ReservaAdapter';
import EstoquesAdapter from '../adapters/EstoquesAdapter';
import AlimentosAdapter from '../adapters/AlimentosAdapter';
import InstituicoesAdapter from '../adapters/InstituicoesAdapter';


function Reservas () {
    const history = useHistory();
    const [reservas, setReservas] = useState([]);
    const [mercados, setMercados] = useState([]);
    const [alimentos, setAlimentos] = useState([]);
    const [estoques, setEstoques] = useState([]);
    const [instituicoes, setInstiuicoes] = useState([]);
    const mercadosAdapter = new MercadosAdapter();
    const reservaAdapter = new ReservaAdapter();
    const instituicoesAdapter = new InstituicoesAdapter();
    const alimentosAdapter = new AlimentosAdapter();
    const estoquesAdapter = new EstoquesAdapter();


    useEffect(() =>{
        carregaReservas();
        carregaAlimentos();
        carregaInstituicoes();
        carregaEstoques();
        carregaMercados();
    }, [])

    function carregaReservas(){
        reservaAdapter.fetchResources(setReservas);
    }

    function carregaInstituicoes(){
        instituicoesAdapter.fetchResources(setInstiuicoes);
    }

    function carregaAlimentos(){
        alimentosAdapter.fetchResources(setAlimentos);
    }

    function carregaMercados(){
        mercadosAdapter.fetchResources(setMercados);
    }

    function carregaEstoques(){
        estoquesAdapter.fetchResources(setEstoques);
    }

    function deletarReserva(reserva){
        if (window.confirm("Deseja mesmo deletar a Reserva?")) {
            new Reserva(reserva).destroy(confirmaReservaDeletado)
        }
    }

    function confirmaReservaDeletado(){
        carregaReservas();
    }

    function mostraInstiruicao(instituicao_id){
        const instituicao = instituicoes.find(i => i.id === instituicao_id);
        console.log('instituicao', instituicao);
        if(instituicao){
            return instituicao.nome;
        }
    }

    function carregaEstoque(reserva){
        const estoque = estoques.find(i => i.id === reserva.estoque_id);
        return estoque;
    }

    function mostraMercado(reserva){
        const estoque = carregaEstoque(reserva)
        if(estoque){
            const mercado = mercados.find(i => `${i.id}` === estoque.mercado_id);
            if(mercado){
                return mercado.nome;
            }
        }
    }

    function mostraAlimento(reserva){
        const estoque = carregaEstoque(reserva)
        if(estoque){
            const alimento = alimentos.find(i => `${i.id}` === estoque.alimento_id);
            if(alimento){
                return alimento.nome;
            }
        }
    }

    function mostraQuantidade(reserva){
        const estoque = carregaEstoque(reserva)
        if(estoque){
            return estoque.quantidade;
        }
    }

    function renderReserva(reserva){
        if(reserva.length < 1) {
            return null
        }

        return (
            <tr>
                <th scope="row">
                    {reserva.id}
                </th>
                <td>
                    {mostraInstiruicao(reserva.instituicao_id)}
                </td>
                <td>
                    {mostraAlimento(reserva)}
                </td>
                <td>
                    {mostraMercado(reserva)}
                </td>
                <td>
                    {mostraQuantidade(reserva)}
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
                                deletarReserva(reserva)
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
                    <h1>Lista de Reserva</h1>
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
                            Instituicao
                        </th>
                        <th>
                            Alimento
                        </th>
                        <th>
                            Mercado
                        </th>
                        <th>
                            Quantidade Kg
                        </th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {reservas.map(reserva => {
                        return renderReserva(reserva);
                    })}
                </tbody>
            </Table>
        </>   
     );
}

export default Reservas;