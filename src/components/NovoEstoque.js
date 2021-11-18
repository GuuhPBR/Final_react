import React, {useState, useEffect} from 'react';
import { useHistory, Link } from "react-router-dom";
import { Title, TextCenter, BoxCenter } from './Styles';
import Estoque from '../models/Estoque';
import AlimentosAdapter from '../adapters/AlimentosAdapter';
import MercadosAdapter from '../adapters/MercadosAdapter';

function NovoEstoque() {
    const history = useHistory();
    const [estoque, setEstoque] = useState({});
    const [alimentos, setAlimentos] = useState([]);
    const [mercados, setMercados] = useState([]);
    const alimentosAdapter = new AlimentosAdapter();
    const mercadosAdapter = new MercadosAdapter();

    useEffect(() =>{
        alimentosAdapter.fetchResources(setAlimentos)
        mercadosAdapter.fetchResources(setMercados)
    }, [])

    function setMercado(e){
        setEstoque({...estoque, mercado_id: e.target.value})
    }

    function setAlimento(e){
        setEstoque({...estoque, alimento_id: e.target.value})
    }

    function setQuantidade(quantidade){
        setEstoque({...estoque, quantidade})
    }

    function setDataEntrada(data_entrada){
        setEstoque({...estoque, data_entrada})
    }

    function setDataValidade(data_validade){
        setEstoque({...estoque, data_validade})
    }


    function vaiParaListaDeEstoques(){
        history.push("/estoques");
    }


    function salvar(){
        const estoqueModelo = new Estoque(estoque)
        estoqueModelo.save(vaiParaListaDeEstoques)
    }

    return ( 
        <>                
            <Title>
                Cadastrar Estoque
            </Title>
            <div className="row">
                <div className="col-lg-6 centronewalimento">
                    <div className="shadow card">
                        <div className="card-body">
                            <form>
                                <div className="pl-lg-10 pr-lg-10">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div class="form-group">
                                                <label for="estoque_mercado_id">Escolha o mercado</label>
                                                <select class="form-control" id="estoque_mercado_id" onChange={setMercado}>
                                                    <option></option>
                                                    {mercados.map(mercado => {
                                                        return <option value={mercado.id}>{mercado.nome}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div class="form-group">
                                                <label for="estoque_mercado_id">Escolha o alimento</label>
                                                <select class="form-control" id="estoque_mercado_id" onChange={setAlimento}>
                                                    <option></option>
                                                    {alimentos.map(alimento => {
                                                        return <option value={alimento.id}>{alimento.nome}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>                              
                                </div>
                                <div> &nbsp; </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div class="form-group">
                                            <label class="form-control-label" for="input-quantidade">Quantidade</label>
                                            <input 
                                                id="input-quantidade" 
                                                placeholder="Quantidade" 
                                                type="text"
                                                class="form-control-alternative form-control" 
                                                value={estoque.quantidade}
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setQuantidade(e.target.value);
                                                }}/>
                                        </div>
                                    </div>
                                </div>
                                <div> &nbsp; </div>
                                <div className="row">
                                        <div className="col-lg-6">
                                            <div class="form-group">
                                                <label class="form-control-label" for="input-data_entrada">Data de entrada</label>
                                                <input 
                                                    id="input-data_entrada" 
                                                    placeholder="Data entrada" 
                                                    type="date"
                                                    class="form-control-alternative form-control" 
                                                    value={estoque.data_entrada}
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setDataEntrada(e.target.value);
                                                }}/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div class="form-group">
                                                <label class="form-control-label" for="input-data_validade">Data de validade</label>
                                                <input 
                                                    id="input-data_validade" 
                                                    placeholder="Data validade" 
                                                    type="date"
                                                    class="form-control-alternative form-control" 
                                                    value={estoque.data_validade}
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setDataValidade(e.target.value);
                                                }}/>
                                            </div>
                                        </div>
                                </div>
                                <div class="pl-lg-4 pr-lg-4 espacobotao">
                                    <div class="row">
                                        <div class="col">
                                            <Link className="float-right btn btn-danger" to="/Estoques"> Voltar </Link>
                                        </div>
                                        <div class="col">
                                            <button 
                                                type="button" 
                                                class="float-right btn btn-success"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    salvar()
                                                }}>
                                                Salvar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                            </form>   
                        </div>
                    </div>
                </div>
            </div>
        </>                         
     );
}

export default NovoEstoque;