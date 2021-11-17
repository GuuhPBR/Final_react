import React, {useState, useEffect} from 'react';
import { useHistory, Link, useLocation } from "react-router-dom";
import { Title, TextCenter, BoxCenter } from './Styles';
import Alimento from '../models/Alimento';
import AlimentosAdapter from '../adapters/AlimentosAdapter';

function EditarAlimento(props) {
    const location = useLocation();
    const history = useHistory();
    const [alimento, setAlimento] = useState({});
    const alimentosAdapter = new AlimentosAdapter();

    useEffect(() =>{
        if(props.id){
            alimentosAdapter.fetchResource(props.id, setAlimento)
        }
    }, [props.id])

    function setNome(nome){
        setAlimento({...alimento, nome})
    }

    function setTipo(tipo){
        setAlimento({...alimento, tipo})
    }

    function setQuantidade(quantidade){
        setAlimento({...alimento, quantidade})
    }

    function setDataEntrada(data_entrada){
        setAlimento({...alimento, data_entrada})
    }

    function setDataValidade(data_validade){
        setAlimento({...alimento, data_validade})
    }

    function depoisDeSalvar(){
        history.push("/produtos");
    }

    function salvar(){
        const alimentoModelo = new Alimento(alimento)
        alimentoModelo.save(depoisDeSalvar)
    }

    return ( 
        <>                
            <Title>
                Editar Alimento
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
                                                <label class="form-control-label" for="input-name">* Nome do Alimento</label>
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
                                            <form>    
                                                <formGroup check>
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="input-tipo">Tipo</label>
                                                        <input 
                                                            id="input-tipo" 
                                                            placeholder="Tipo"
                                                            name="radio1" 
                                                            type="radio"
                                                            class="form-control-alternative form-control" 
                                                            onChange={(e) => {
                                                                e.preventDefault();
                                                                setDataEntrada(e.target.value);
                                                        }}/>
                                                    </div>
                                                </formGroup>
                                            </form>
                                            <div class="form-group">
                                                <label class="form-control-label" for="input-quantidade">Quantidade</label>
                                                <input 
                                                    id="input-quantidade" 
                                                    placeholder="Quantidade" 
                                                    type="text"
                                                    class="form-control-alternative form-control" 
                                                    value={alimento.quantidade}
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
                                <div class="pl-lg-4 pr-lg-4 espacobotao">
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

export default EditarAlimento;