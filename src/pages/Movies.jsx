import { useState, useEffect, Suspense } from "react";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { searchMovie } from "services/films-api";
import SeaechForm from "components/SearchForm";
import SearchMoviesList from "components/SearchMoviesList";
import Loader from "components/Loader";

const Movies = () => {
    const location = useLocation();
    const [films, setFilms] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const filmTitle = searchParams.get('title' || '');
    
    // console.log(films);
    // console.log(filmTitle)

    useEffect(() => {
        if(!filmTitle) return;

        searchMovie(filmTitle)
        .then(({results}) => {
            if(!results.length) {
                toast.error(`${filmTitle} not found`);
                return;
            }
            
            setFilms(results);
        })
        .catch(error => setError(error));
            

    }, [filmTitle]);

    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.filmtitle.value;

        if(name === '') {
            toast.error(`Enter movie name`);
        } else {
            setSearchParams({ title: name })
            form.reset();
        }
      };

    return (
        <>
            <SeaechForm handleFormSubmit={handleFormSubmit} />
            {films.length > 0 && <SearchMoviesList films={films} location={location}/>}
            {error && <h2>{error.message}</h2>}
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
        </>
    );

};

export default Movies;
