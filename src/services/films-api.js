// function fetchFilms (search) {
//     const USER_KEY = 'e7e8717bf37b2131c41f035d5b761556';
//     const URL = 'https://api.themoviedb.org/3/';

//     return (
//         fetch(`${URL}trending/all/day?api_key=${USER_KEY}`)
//         .then(response => {
//             if(response.ok) {
//                 return response.json();
//             }
        
//             return Promise.reject(
//                 new Error('Not found')
//             );
//         })
//     );
// };

// export default fetchFilms;

const USER_KEY = 'e7e8717bf37b2131c41f035d5b761556';
const URL = 'https://api.themoviedb.org/3/';

export const getTrandingMovies = () => {
    return fetch(`${URL}trending/all/day?api_key=${USER_KEY}`)
        .then(res => res.json())
    
};

export const searchMovie = (name) => {
    return fetch(`${URL}search/movie?api_key=${USER_KEY}&language=en-US&page=1&include_adult=false&query=${name}`)
    .then(response => {
        if(response.ok) {
            return response.json();
        }
    
        return Promise.reject(
            new Error(`${name} not found`)
        );
    });
};

export const getMovieDetails = (movieId) => {
    return fetch(`${URL}movie/${movieId}?api_key=${USER_KEY}&language=en-US`)
    .then(response => {
        if(response.ok) {
            return response.json();
        }
    
        return Promise.reject(
            new Error('Sorry, not found.')
        );
    });
};

export const getActors = (movieId) => {
    return fetch(`${URL}movie/${movieId}/credits?api_key=${USER_KEY}&language=en-US`)
    .then(res => res.json())
};

export const getReviews = (movieId) => {
    return fetch(`${URL}movie/${movieId}/reviews?api_key=${USER_KEY}&language=en-US&page=1`)
    .then(res => res.json())
};