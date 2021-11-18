import BaseAdapter from './BaseAdapter';

class InstituicoesAdapter extends BaseAdapter {

    constructor(){
        super()
    }

    apiPath(){
        return "http://localhost:3001/" + 'instituicoes'
    }
}

export default InstituicoesAdapter;