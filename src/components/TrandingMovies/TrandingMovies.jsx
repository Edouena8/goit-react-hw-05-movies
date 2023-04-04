import { Link } from "react-router-dom";

const TrandingMovies = ({films, location}) => {
    return (
        <div>
            <h1>Tranding today</h1>
            <ul>
                {films.map(({id, title, original_title}) => {
                    return (
                        <li key={id}>
                            <Link to={`movies/${id}`} state={{from: location}}>
                                <p>{original_title ? original_title : title}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
};

export default TrandingMovies;