import React, {useState, useEffect} from 'react';
import { Table, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { Link, useHistory } from "react-router-dom";
import Estoque from '../models/Estoque';
import EstoquesAdapter from '../adapters/EstoquesAdapter';
import ReservaAdapter from '../adapters/ReservaAdapter';
import AlimentosAdapter from '../adapters/AlimentosAdapter';
import MercadosAdapter from '../adapters/MercadosAdapter';
import InstituicoesAdapter from '../adapters/InstituicoesAdapter';
import ReservaModal from './ReservaModal';
import Reserva from '../models/Reserva';


function Estoques () {
    const history = useHistory();
    const [reserva, setReserva] = useState(null);
    const [reservas, setReservas] = useState([]);
    const [estoques, setEstoques] = useState([]);
    const [instituicoes, setInstituicoes] = useState([]);
    const [alimentos, setAlimentos] = useState([]);
    const [mercados, setMercados] = useState([]);
    const reservaAdapter = new ReservaAdapter();
    const estoquesAdapter = new EstoquesAdapter()
    const alimentosAdapter = new AlimentosAdapter()
    const mercadosAdapter = new MercadosAdapter()
    const instituicoesAdapter = new InstituicoesAdapter()

    useEffect(() =>{
        carregaEstoques();
        carregaReservas();
    }, [])

    useEffect(() =>{
        alimentosAdapter.fetchResources(setAlimentos);
    }, [])

    useEffect(() =>{
        mercadosAdapter.fetchResources(setMercados);
    }, [])

    useEffect(() =>{
        instituicoesAdapter.fetchResources(setInstituicoes);
    }, [])

    function carregaEstoques(){
        estoquesAdapter.fetchResources(setEstoques);
    }

    function deletarEstoque(estoque){
        if (window.confirm("Deseja mesmo deletar o estoque?")) {
            new Estoque(estoque).destroy(confirmaEstoqueDeletado)
        }
    }

    function carregaReservas(){
        reservaAdapter.fetchResources(setReservas);
    }

    function confirmaEstoqueDeletado(){
        carregaEstoques();
    }

    function mostraAlimentoNome(alimento_id){
        const alimento = alimentos.find(x => `${x.id}` == alimento_id);
        if(alimento){
            return alimento.nome;
        }
    }

    function mostraMercadoNome(mercado_id){
        const mercado = mercados.find(x => `${x.id}` == mercado_id);
        if(mercado){
            return mercado.nome;
        }
    }

    function cancelaAcao(){
        setReserva(null)
    }

    function recarregaReservas(){
        reservaAdapter.fetchResources(setReservas, [], carregaEstoques());
    }

    function confirmaReserva(instituicao, estoque){
        const reservaModel = new Reserva({estoque_id: estoque.id, instituicao_id: instituicao.id})
        reservaModel.save(() => {
            alert("reserva criada com sucesso");
            setReserva(null);
            recarregaReservas();
        });
    }

    function novaReserva(estoque){
        setReserva(estoque)
    }

    function mostraReservaModal(){
        if(reserva){
            return <ReservaModal 
            modalOpen={true}
            instituicoes={instituicoes}
            estoque={reserva}
            cancelaAcao={cancelaAcao}
            confirmaReserva={confirmaReserva}/>
        }else{
            return null
        }
    }

    function estaReservado(estoque){
        const resultado = reservas.find(reserva => reserva.estoque_id === estoque.id) || {}
        return resultado.id ? true : false;
    }

    function carregaSituacao(estoque){
        if(estoque.data_validade){
            const data_validade = new Date(estoque.data_validade)
            const hoje = new Date();
            const data_vencimento = new Date();;
            data_vencimento.setDate(data_vencimento.getDate() + 6);
            if(data_validade < hoje){
                return 'vencido'
            }else if(data_validade < data_vencimento){
                return 'perto_de_vencer'
            }else{
                return 'indisponivel'
            }
        }
    }

    function mostraSituacao(situacao){
        const label = carregaSituacao(situacao);
        switch (label) {
            case "vencido":
                return <span class="badge bg-danger">Vencido</span>
            case "perto_de_vencer":
                return <span class="badge bg-success">Perto de vencer</span>
            case "indisponivel":
                return <span class="badge bg-primary">Indisponivel</span>
            default:
                return <span class="badge bg-default">N/A</span>
        }
    }

    function mostrarOpcaoReserva(estoque){
        const situacao = carregaSituacao(estoque);
        const reservado = estaReservado(estoque);
        if(situacao != "perto_de_vencer"){
            return null;
        }
        if(reservado){
            return null;
        }
        return (
            <DropdownItem onClick={(e) => {
                e.preventDefault();
                novaReserva(estoque)
            }}>
                Fazer Reserva
            </DropdownItem>
        )
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
                    {mostraAlimentoNome(estoque.alimento_id)}
                </td>
                <td>
                    {mostraMercadoNome(estoque.mercado_id)}
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
                    {mostraSituacao(estoque)}
                </td>
                <td>
                    {estaReservado(estoque) ? "Sim" : "Não" }
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
                            {mostrarOpcaoReserva(estoque)}
                            {mostraReservaModal()}
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
                            Situação
                        </th>
                        <th>
                            Reservado
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