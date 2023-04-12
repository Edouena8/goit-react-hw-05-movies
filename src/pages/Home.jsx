import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getTrandingMovies } from "services/films-api";
// import TrandingMovies from "components/TrandingMovies";
import MoviesList from "components/MoviesList";

const Home = () => {
    const location = useLocation();
    const [films, setFilms] = useState([]);

    useEffect(() => { 
        
        getTrandingMovies()
        .then(resp => setFilms([...resp.results]));
    }, []);

    console.log(films);

    return (
        <>
            <h1 
                style={{
                    margin: "0 auto",
                    textAlign: "center",
                    marginBottom: "60px",
                    color: "#FFFFFF",
                    // background: #333333;
                    textShadow: "0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00",
                }}
            >Tranding today</h1>
            <MoviesList films={films} location={location} linkTo="movies/"/>
        </>
    );
};

export default Home;