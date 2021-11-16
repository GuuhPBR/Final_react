import React, {useState, useEffect} from 'react';
import { useHistory, Link } from "react-router-dom";
import { Title, TextCenter, BoxCenter } from './Styles';
import Mercado from '../models/Mercado';

function NovoMercado() {
    const history = useHistory();
    const [mercados, setMercados] = useState({});
    

    function setNome(nome){
        setMercados({...mercados, nome})
    }

    function setEstoque(estoque){
        setMercados({...mercados, estoque})
    }

    function setQuantidadeLoja(quantidade_loja){
        setMercados({...mercados, quantidade_loja})
    }

    function setDataEntrada(data_entrada){
        setMercados({...mercados, data_entrada})
    }

    function setDataValidade(data_validade){
        setMercados({...mercados, data_validade})
    }

    function alertSalvar(){
        history.push("/mercados");
    }


    function salvar(){
        const mercadosModelo = new Mercado(mercados)
        mercadosModelo.save()
    }

    return ( 
        <>                
            <Title>
                Cadastrar Mercados
            </Title>
            <div className="row">
                <div className="col-lg-6 centronewalimento">
                    <div className="shadow card">
                        <div className="card-body">
                            <form>
                                <div className="pl-lg-4 pr-lg-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div class="form-group">
                                                <label class="form-control-label" for="input-name">* Nome do mercado</label>
                                                <input 
                                                    id="input-name" 
                                                    placeholder="Nome" 
                                                    type="text" 
                                                    class="form-control-alternative form-control" 
                                                    aria-invalid="false" 
                                                    value={mercados.nome}
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setNome(e.target.value);
                                                    }}/>
                                                <div class="invalid-feedback"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div class="form-group">
                                                <label class="form-control-label" for="input-tipo">Estoque</label>
                                                <input 
                                                    id="input-tipo" 
                                                    placeholder="Tipo" 
                                                    type="text"
                                                    class="form-control-alternative form-control" 
                                                    value={mercados.estoque} 
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setDataEntrada(e.target.value);
                                                    }}/>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-control-label" for="input-quantidade">Quantidade disponivel</label>
                                                <input 
                                                    id="input-quantidade" 
                                                    placeholder="Quantidade" 
                                                    type="text"
                                                    class="form-control-alternative form-control" 
                                                    value={mercados.quantidade_loja}
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setDataValidade(e.target.value);
                                                    }}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div class="form-group">
                                                <label class="form-control-label" for="input-data_entrada">Data de entrada</label>
                                                <input 
                                                    id="input-data_entrada" 
                                                    placeholder="Data entrada" 
                                                    type="date"
                                                    class="form-control-alternative form-control" 
                                                    value={mercados.data_entrada}
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setDataEntrada(e.target.value);
                                                    }}/>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-control-label" for="input-data_validade">Data de validade</label>
                                                <input 
                                                    id="input-data_validade" 
                                                    placeholder="Data validade" 
                                                    type="date"
                                                    class="form-control-alternative form-control" 
                                                    value={mercados.data_validade}
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setDataValidade(e.target.value);
                                                    }}/>
                                            </div>
                                        </div>
                                    </div>                               
                                </div>
                                <div class="pl-lg-4 pr-lg-4 espacobotao">
                                    <div class="row">
                                        <div class="col">
                                            <Link className="float-right btn btn-danger" to="/Mercados"> Voltar </Link>
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

export default NovoMercado;