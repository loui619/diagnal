import axios from 'axios'
const MOVIE_LIST = "https://test.create.diagnal.com/data/page1.json"
export class Api {
    static async getMovieList(page_no){
    try{
        const resp = await axios.get(`https://test.create.diagnal.com/data/page${page_no}.json`)
        return Promise.resolve(resp)
    }catch(err){
        return Promise.reject(err) 
    }
    }
}