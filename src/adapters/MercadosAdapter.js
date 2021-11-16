import BaseAdapter from './BaseAdapter';

class MercadosAdapter extends BaseAdapter {

    constructor(){
        super()
    }

    apiPath(){
        return "http://localhost:3001/" + 'mercados'
    }
}

export default MercadosAdapter;