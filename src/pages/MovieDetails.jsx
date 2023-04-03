import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

const MovieDetails = () => {
    const {movieId} = useParams();
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? "/movies");
    const [film, setFilm] = useState({});
    const {original_title, title, poster_path, vote_average, overview, genres} = film;

    useEffect(() => {
        if(!movieId) return;
        
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e7e8717bf37b2131c41f035d5b761556&language=en-US`)
        .then(res => res.json())
        .then(resp => setFilm({...resp}));

    }, [movieId]);

    return (
        <div>
            <div>
                <Link to={backLinkLocationRef.current}>Go back</Link>
            </div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
            </div>
            <div>
                <h2>{original_title ? original_title : title}</h2>
                <p>User Score: {Math.round(vote_average * 100 / 10)}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                {/* <p>{genres.map(genr => genr.name).join(' ')}</p> */}
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

