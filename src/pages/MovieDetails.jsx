import { useState, useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const MovieDetails = () => {
    const {movieId} = useParams();

    const [film, setFilm] = useState({});

    useEffect(() => {
        
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e7e8717bf37b2131c41f035d5b761556&language=en-US`)
        .then(res => res.json())
        .then(resp => setFilm({...resp}));

    }, [movieId]);

    return (
        <div>
            <div>
                <img src={film.poster_path} alt={film.title} />
            </div>
            <div>
                <h2>{film.title}</h2>
                <p>User Score: {film.vote_average}</p>
                <h3>Overview</h3>
                <p>{film.overview}</p>
                <h3>Genres</h3>
                {/* <p>{film.genres.map(genr => genr.name).join(' ')}</p> */}
            </div>
            <div>
                <p>Additional information</p>

                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
                <Outlet/>
            </div>
        </div>
    )
}

export default MovieDetails;

