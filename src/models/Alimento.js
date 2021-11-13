import BaseModel from "./BaseModel";
import AlimentosAdapter from '../adapters/AlimentosAdapter';

class Alimento extends BaseModel {

    constructor(attr={}){
        super();
        this.id = attr['id']
        this.nome = attr['nome']
        this.quantidade = attr['quantidade']
        this.tipo = attr['tipo']
        this.data_entrada = attr['data_entrada']
        this.data_validade = attr['data_validade']
    }

    payload(){
        const {id, nome, quantidade, tipo, data_entrada, data_validade} = this
        return {id, nome, quantidade, tipo, data_entrada, data_validade}
    }

    adapter(){
        return new AlimentosAdapter();
    }
}

export default Alimento