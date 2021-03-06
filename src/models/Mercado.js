import BaseModel from "./BaseModel";
import MercadosAdapter from '../adapters/MercadosAdapter';

class Mercado extends BaseModel {

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
        return new MercadosAdapter();
    }
}

export default Mercado