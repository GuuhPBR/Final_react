import React, {useState, useEffect} from 'react';
import { useHistory, Link } from "react-router-dom";
import { Title, TextCenter } from './Styles';
import Alimento from '../models/Alimento';

function NovoAlimento() {
    const history = useHistory();
    const [alimento, setAlimento] = useState({});
    
    function criarCadastro(event){
        event.preventDefault();
        history.push("/Registro");
    }

    function setNome(nome){
        setAlimento({...alimento, nome})
    }

    function setDataEntrada(data_entrada){
        setAlimento({...alimento, data_entrada})
    }

    function setDataValidade(data_validade){
        setAlimento({...alimento, data_validade})
    }

    function salvar(){
        const alimentoModelo = new Alimento(alimento)
        alimentoModelo.save()
    }

    return ( 
        <>                
            <Title>
                Cadastrar Frutas
            </Title>
            <div className="row">
                <div className="col-lg-6">
                    <div className="shadow card">
                        <div className="card-body">
                            <form>
                                <div className="pl-lg-4 pr-lg-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div class="form-group">
                                                <label class="form-control-label" for="input-name">* Nome da fruta</label>
                                                <input 
                                                    id="input-name" 
                                                    placeholder="Nome" 
                                                    type="text" 
                                                    class="form-control-alternative form-control" 
                                                    aria-invalid="false" 
                                                    value={alimento.nome}
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
                                                <label class="form-control-label" for="input-data_entrada">Data de entrada</label>
                                                <input 
                                                    id="input-data_entrada" 
                                                    placeholder="Data entrada" 
                                                    type="date"
                                                    class="form-control-alternative form-control" 
                                                    value={alimento.data_entrada}
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
                                                    value={alimento.data_validade}
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setDataValidade(e.target.value);
                                                    }}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pl-lg-4 pr-lg-4">
                                <div class="row">
                                        <div class="col">
                                            <Link className="float-right btn btn-danger" to="/Produtos"> Voltar </Link>
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

export default NovoAlimento;