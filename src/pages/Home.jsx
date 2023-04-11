import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getTrandingMovies } from "services/films-api";
import TrandingMovies from "components/TrandingMovies";

const Home = () => {
    const location = useLocation();
    const [films, setFilms] = useState([]);

    useEffect(() => { 
        
        getTrandingMovies()
        .then(resp => setFilms([...resp.results]));
    }, []);

    console.log(films);

    return (
        <TrandingMovies films={films} location={location}/>
    );
};

export default Home;