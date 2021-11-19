import BaseModel from "./BaseModel";
import ReservaAdapter from '../adapters/ReservaAdapter';

class Reserva extends BaseModel {

    constructor(attr={}){
        super();
        this.id = attr['id']
        this.estoque_id = attr['estoque_id']
        this.instituicao_id = attr['instituicao_id']
    }

    payload(){
        const {id, estoque_id, instituicao_id} = this
        return {id, estoque_id, instituicao_id}
    }

    adapter(){
        return new ReservaAdapter();
    }
}

export default Reserva