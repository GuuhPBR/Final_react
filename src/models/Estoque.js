import BaseModel from "./BaseModel";
import EstoquesAdapter from '../adapters/EstoquesAdapter';

class Estoque extends BaseModel {

    constructor(attr={}){
        super();
        this.id = attr['id']
        this.alimento_id = attr['alimento_id']
        this.mercado_id = attr['mercado_id']
        this.quantidade = attr['quantidade']
        this.data_entrada = attr['data_entrada']
        this.data_validade = attr['data_validade']
    }

    payload(){
        const {id, quantidade, data_entrada, data_validade, alimento_id, mercado_id} = this
        return {id, quantidade, data_entrada, data_validade, alimento_id, mercado_id}
    }


    adapter(){
        return new EstoquesAdapter();
    }
}

export default Estoque