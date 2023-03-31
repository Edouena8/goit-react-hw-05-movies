function fetchFilms (search) {
    const USER_KEY = 'e7e8717bf37b2131c41f035d5b761556';
    const URL = 'https://api.themoviedb.org/3/';

    return (
        fetch(`${URL}trending/all/day?api_key=${USER_KEY}`)
        .then(response => {
            if(response.ok) {
                return response.json();
            }
        
            return Promise.reject(
                new Error('Not found')
            );
        })
    );
};

export default fetchFilms;