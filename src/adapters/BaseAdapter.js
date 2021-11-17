const axios = require('axios');

class BaseAdapter {

    constructor(){
        this.api_host = "http://localhost:3001/";
    }

    apiPath(){
        return this.api_host
    }

    async delete(id) {
        return await axios.delete(`${this.apiPath()}/${id}`);
    }

    async patch(id, payload) {
        return await axios.patch(`${this.apiPath()}/${id}`, payload);
    }

    async post(payload) {
        return await axios.post(this.apiPath(), payload);
    }

    async get(id) {
        return await axios.get(`${this.apiPath()}/${id}`);
    }

    async getAll(query) {
        const queryValue = `${query.length > 0 ? '?'+ query : query}`
        const requestUrl = this.apiPath() + queryValue
        return await axios.get(requestUrl);
    }

    buildQuery(queries=[]){
        const requestQuery = queries.map((query) => {
            return `${query['name']}=${query['value']}`
        }).join('&')
        return requestQuery;
    }

    fetchResources(setter, queries=[], callback=null) {
        const requestQuery = this.buildQuery(queries);
        const req = this.getAll(requestQuery);
        req.then(response => {
            if(response.status == 200){
                setter(response.data, callback);
            }
        }).catch(error => {
            console.error(error);
        })

    }

    fetchResource(id, setter, callback=null) {
        const req = this.get(id);
        req.then(response => {
            if(response.status == 200){
                setter(response.data, callback);
            }
        }).catch(error => {
            console.error(error);
        })

    }
} 

export default BaseAdapter