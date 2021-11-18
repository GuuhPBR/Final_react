import BaseModel from "./BaseModel";
import AlimentosAdapter from '../adapters/AlimentosAdapter';

class Alimento extends BaseModel {

    constructor(attr={}){
        super();
        this.id = attr['id']
        this.nome = attr['nome']
        this.tipo = attr['tipo']
    }

    payload(){
        const {id, nome, tipo} = this
        return {id, nome, tipo}
    }

    adapter(){
        return new AlimentosAdapter();
    }
}

export default Alimento