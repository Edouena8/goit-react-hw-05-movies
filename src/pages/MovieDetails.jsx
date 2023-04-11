import { useState, useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
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
                toast.error(`Sorry, not found`);
                return;
            }
            setFilm(resp);
        })
        .catch(error => setError(error));

    }, [movieId]);

    return (
        <div>
            {film && <MovieDetailsInfo film={film} backLinkLocationRef={backLinkLocationRef.current}/>} 
            {error && (
                <h2 
                    style={{
                        textAlign: 'center',
                        color: 'white',
                    }}>
                        {error.message}
                </h2>
            )}
        </div>
    )
}

export default MovieDetails;

