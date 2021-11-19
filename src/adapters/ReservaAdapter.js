import BaseAdapter from './BaseAdapter';

class ReservaAdapter extends BaseAdapter {

    constructor(){
        super()
    }

    apiPath(){
        return "http://localhost:3001/" + 'reservas'
    }
}

export default ReservaAdapter;