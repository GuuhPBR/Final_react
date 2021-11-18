import BaseAdapter from './BaseAdapter';

class EstoquesAdapter extends BaseAdapter {

    constructor(){
        super()
    }

    apiPath(){
        return "http://localhost:3001/" + 'estoques'
    }
}

export default EstoquesAdapter;