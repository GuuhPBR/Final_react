import React, {useState, useEffect} from 'react';
import { useHistory, Link } from "react-router-dom";
import { Title, TextCenter, BoxCenter } from './Styles';
import Reserva from '../models/Reserva';

function NovoReserva() {
    const history = useHistory();
    const [reservas, setReservas] = useState({});
    

    function setNome(nome){
        setReservas({...reservas, nome})
    }


    function alertSalvar(){
        history.push("/reservas");
    }


    function salvar(){
        const reservasModelo = new Reserva(reservas)
        reservasModelo.save(alertSalvar)
    }

    return ( 
        <>                
            <Title>
                Cadastrar Reservas
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
                                                <label class="form-control-label" for="input-name">* Nome da reserva</label>
                                                <input 
                                                    id="input-name-reserva" 
                                                    placeholder="Nome" 
                                                    type="text" 
                                                    class="form-control-alternative form-control" 
                                                    aria-invalid="false" 
                                                    value={reservas.nome}
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
                                            <Link className="float-right btn btn-danger" to="/Reserva"> Voltar </Link>
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

export default NovoReserva;