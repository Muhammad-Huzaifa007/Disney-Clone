import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='c65a116abafe219da58b1da600120fb2'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=c65a116abafe219da58b1da600120fb2';

//https://api.themoviedb.org/3/trending/all/day?api_key=c65a116abafe219da58b1da600120fb2
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}