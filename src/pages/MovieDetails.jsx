import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {  toast } from 'react-toastify';
import { getMovieDetails } from "services/films-api";
import MovieDetailsInfo from "components/MovieDetailsInfo/MovieDetailsInfo";

const MovieDetails = () => {
    const {movieId} = useParams();
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? "/movies");
    const [film, setFilm] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!movieId) return;
        
        getMovieDetails(movieId)
        .then(resp => {

            if(!resp) {
                toast.error(`Not found`);
                return;
            }
            setFilm(resp);
        })
        .catch(error => setError(error));

    }, [movieId]);

    return (
        <div>
            <div>
                <Link to={backLinkLocationRef.current}>Go back</Link>
            </div>
            {film && <MovieDetailsInfo film={film}/>} 
            {error && <h2>{error.message}</h2>}
        </div>
    )
}

export default MovieDetails;

