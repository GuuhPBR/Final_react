import BaseAdapter from './BaseAdapter';

class AlimentosAdapter extends BaseAdapter {

    constructor(){
        super()
    }

    apiPath(){
        return "http://localhost:3001/" + 'alimentos'
    }
}

export default AlimentosAdapter;