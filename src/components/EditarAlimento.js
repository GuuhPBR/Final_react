import React, {useState, useEffect} from 'react';
import { useHistory, Link, useLocation  } from "react-router-dom";
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

    function alertSalvar(){
        history.push("/produtos");
    }

    function salvar(){
        const alimentoModelo = new Alimento(alimento)
        alimentoModelo.save(alertSalvar)
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
                                                    id="input-name-alimento" 
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
                                                <label class="form-control-label" for="input-tipo">Tipo</label>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="alimento_tipo" id="in_natura" value="in_natura" checked={alimento.tipo === 'in_natura'} 
                                                    onChange={(e) => {
                                                        setTipo("in_natura");
                                                    }}/>
                                                    <label class="form-check-label" for="in_natura">
                                                        In Natura
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="alimento_tipo" id="processado" value="processado" checked={alimento.tipo === 'processado'} 
                                                    onChange={(e) => {
                                                        setTipo("processado");
                                                    }} />
                                                    <label class="form-check-label" for="processado">
                                                        Processado
                                                    </label>
                                                </div>
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