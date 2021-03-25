import { createClient } from 'pexels';

class pexelApi {

    constructor() { 
        this.client = createClient("563492ad6f91700001000001a8723dc5a040453cbfea74ee559e151c");
    }
    //get images 
    getCurated = (per_page) => { 
        return this.client.photos.curated({ per_page: per_page });
    }
    //search images
    searchParams = (query, per_page) => {
        return this.client.photos.search({ query, per_page: per_page });
    };
}

const PexelApi = new pexelApi();
export default PexelApi;
