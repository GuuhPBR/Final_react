import BaseModel from "./BaseModel";
import ReservaAdapter from '../adapters/ReservaAdapter';

class Reserva extends BaseModel {

    constructor(attr={}){
        super();
        this.id = attr['id']
        this.nome = attr['nome']
    }

    payload(){
        const {id, nome,} = this
        return {id, nome, }
    }

    adapter(){
        return new ReservaAdapter();
    }
}

export default Reserva