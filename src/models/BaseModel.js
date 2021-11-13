class Model {

    adapter(){

    }

    save(callback=null, args=null){
        const modelAdapter = this.adapter();
        const payload = this.payload();
        let req;

        if(payload.id){
            req = modelAdapter.patch(payload.id, payload);
        }else{
            req = modelAdapter.post(payload);
        }

        req.then(resp => {
            if(callback){
                callback(resp.data, args);
            }
        })
    }

    destroy(callback=null, args=null){
        const modelAdapter = this.adapre();
        const payload = this.payload();

        modelAdapter.delete(payload.id).then(resp => {
            if(callback){
                callback(resp.data, args);
            }
        })
    }

}

export default Model;