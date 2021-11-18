import BaseModel from "./BaseModel";
import InstituicoesAdapter from '../adapters/InstituicoesAdapter';

class Instituicao extends BaseModel {

    constructor(attr={}){
        super();
        this.id = attr['id']
        this.nome = attr['nome']
    }

    payload(){
        const {id, nome } = this
        return {id, nome }
    }

    adapter(){
        return new InstituicoesAdapter();
    }
}

export default Instituicao