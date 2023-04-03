import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    const [films, setFilms] = useState([]);

    useEffect(() => {
        
        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=e7e8717bf37b2131c41f035d5b761556')
        .then(res => res.json())
        .then(resp => setFilms([...resp.results]));
    }, []);

    console.log(films);

    return (
        <div>
            <h1>Tranding today</h1>
            <ul>
                {films.map((film) => {
                    return (
                        <li key={film.id}>
                            <Link to={`movies/${film.id}`} state={{from: location}}>
                                <p>{film.title}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Home;