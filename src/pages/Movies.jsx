import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useSearchParams } from "react-router-dom";

const Movies = () => {
    const location = useLocation();
    const [films, setFilms] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const filmTitle = searchParams.get('title' || '');
    console.log(films);
    console.log(filmTitle)

    useEffect(() => {
        if(!filmTitle) return;

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=e7e8717bf37b2131c41f035d5b761556&language=en-US&page=1&include_adult=false&query=${filmTitle}`)
        .then(res => res.json())
        .then(({results}) => setFilms(results));

    }, [filmTitle]);

    // const onParamsChange = evt => {
    //     setSearchParams({title: evt.target.value});
    // }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        setSearchParams({ title: form.elements.filmtitle.value });
        form.reset();
      };

    // const updateQueryString = (name) => {
    //     const nextParams = name !== "" ? { name } : {};
    //     setSearchParams(nextParams);
    // };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>                   
                    <input 
                        type="text"
                        name="filmtitle"
                        // onChange={onParamsChange}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
            <ul>
                {films.map(film => {
                    return (
                        <li key={film.id}>
                            <Link to={`${film.id}`} state={{ from: location}}>
                                {film.original_title }
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <Outlet/>
        </>
    )

};

export default Movies;
