
import axios from "axios";

const Url = 'https://api.themoviedb.org/3'
export class Servises {

   static geniric(payload){
        return axios.get(`${Url}/discover/movie`, {
            params: {
                api_key: '1e448e0dfcdbb565f5d329820065b4d2',
                language: 'en-US',
                sort_by: 'popularity.desc',
                include_adult: false,
                include_video: false,
                page: 1,
                with_genres: payload,
                with_watch_monetization_types:"flatrate"
            }

        })
    }

    static list(){
        return axios.get(`${Url}/genre/movie/list`,{
            params: {
                api_key: '1e448e0dfcdbb565f5d329820065b4d2',
                language: 'en-US',
            }
        })
    }

    static Searchlist(payload){
        return axios.get(`${Url}/search/movie`,{
            params: {
                api_key: '1e448e0dfcdbb565f5d329820065b4d2',
                language: 'en-US',
                page : 1,
                query : payload,
            }
        })
    }
    static getvideos(payload){
        return axios.get(`${Url}/movie/${payload}/videos`,{
            params: {
                api_key: '1e448e0dfcdbb565f5d329820065b4d2',
            }
        })
    }

    static getDetails(payload){
    
        return axios.get(`${Url}/movie/${payload}`,{
            params: {
                api_key: '1e448e0dfcdbb565f5d329820065b4d2',
            }
        })
    }
}