import React, {useState, useEffect} from 'react';
import { useHistory, Link, useLocation } from "react-router-dom";
import { Title, TextCenter, BoxCenter } from './Styles';
import Instituicao from '../models/Instituicao';
import InstituicoesAdapter from '../adapters/InstituicoesAdapter';

function EditarInstituicao(props) {
    const location = useLocation();
    const history = useHistory();
    const [instituicoes, setinstituicoes] = useState({});
    const instituicoesAdapter = new InstituicoesAdapter();

    useEffect(() =>{
        if(props.id){
            instituicoesAdapter.fetchResource(props.id, setinstituicoes)
        }
    }, [props.id])

    function setNome(nome){
        setinstituicoes({...instituicoes, nome})
    }

    function alertSalvar(){
        history.push("/instituicoes");
    }


    function salvar(){
        const instituicoesModelo = new Instituicao(instituicoes)
        instituicoesModelo.save(alertSalvar)
    }

    return ( 
        <>                
            <Title>
                Cadastrar Instituição
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
                                                <label class="form-control-label" for="input-name">* Nome da instituição</label>
                                                <input 
                                                    id="input-name-instituicao" 
                                                    placeholder="Nome" 
                                                    type="text" 
                                                    class="form-control-alternative form-control" 
                                                    aria-invalid="false" 
                                                    value={instituicoes.nome}
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setNome(e.target.value);
                                                    }}/>
                                                <div class="invalid-feedback"></div>
                                            </div>
                                        </div>
                                    </div>                           
                                </div>
                                <div class="pl-lg-4 pr-lg-4 espacobotao">
                                    <div class="row">
                                        <div class="col">
                                            <Link className="float-right btn btn-danger" to="/instituicoes"> Voltar </Link>
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

export default EditarInstituicao;