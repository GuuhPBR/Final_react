import BaseModel from "./BaseModel";
import MercadosAdapter from '../adapters/MercadosAdapter';

class Mercado extends BaseModel {

    constructor(attr={}){
        super();
        this.id = attr['id']
        this.nome = attr['nome']
        this.quantidade_loja = attr['quantidade_loja']
        this.estoque = attr['estoque']
        this.data_entrada = attr['data_entrada']
        this.data_validade = attr['data_validade']
    }

    payload(){
        const {id, nome, quantidade_loja, estoque, data_entrada, data_validade} = this
        return {id, nome, quantidade_loja, estoque, data_entrada, data_validade}
    }

    adapter(){
        return new MercadosAdapter();
    }
}

export default Mercado