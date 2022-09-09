const key ='13d355c5b729b8388f8f818922a9712c';

export  const request = {
    requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestLatest : `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,
    requestRecommendation: `https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=${key}&language=en-US&page=1`,
    requestImageUrl : `https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=${key}&language=en-US`,
}


export const requestTv = {
    requestTvPopular : `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    
    requestTvRated : `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
}

