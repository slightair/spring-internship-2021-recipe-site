import {RESTDataSource} from "apollo-datasource-rest";

export class CookpadDataSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://internship-recipe-api.ckpd.co/';
    }

    protected willSendRequest(request) {
        request.headers.set('X-Api-Key', process.env.API_KEY);
    }

    async getRecipes() {
        return this.get('recipes')
    }
}
