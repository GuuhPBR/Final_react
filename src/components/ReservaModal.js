import React, {useState, useEffect} from 'react';

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function ReservaModal(props) {
    const [instituicao, setInstituicao] = useState({});

    function selecionaInstituicao(e){
        
        if(props.instituicoes){
            const result = props.instituicoes.find(i => `${i.id}` === e.target.value);
            setInstituicao(result)
        }
    }

    function renderForm(){
        return (
            <form>
                <div className="pl-lg-12 pr-lg-12">
                    <div className="row">
                        <div className="col-lg-12">
                            <div class="form-group">
                                <label for="estoque_mercado_id">Escolha a instituicao</label>
                                <select class="form-control" id="estoque_mercado_id" onChange={selecionaInstituicao}>
                                    <option></option>
                                    {props.instituicoes.map(instituicao => {
                                        return  (
                                                    <option value={instituicao.id}>
                                                        {instituicao.nome}
                                                    </option>
                                                )
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>                              
                </div>
            </form>  

        )
    }

    return (
        <>
            <Modal isOpen={props.modalOpen}>
                <div className=" modal-header">
                <h5 className=" modal-title" id="exampleModalLabel">
                    Fazer nova reserva
                </h5>
                </div>
                <ModalBody>
                    {renderForm()}
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        type="button"
                        onClick={props.cancelaAcao}
                    >
                        Voltar
                    </Button>
                    <Button color="primary" type="button" onClick={e => {
                        props.confirmaReserva(instituicao, props.estoque);
                    }}>
                        Fazer Reserva
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default ReservaModal;