import { Link } from "react-router-dom";

const SearchMoviesList = ({films, location}) => {
   
    return (
        <>
            <ul>
                {films.map(({id, original_title, title}) => {
                    return (
                        <li key={id}>
                            <Link to={`${id}`} state={{ from: location}}>
                                {original_title ? original_title : title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
};

export default SearchMoviesList;