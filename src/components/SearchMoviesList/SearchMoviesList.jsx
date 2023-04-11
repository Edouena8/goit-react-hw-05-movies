import PropTypes from "prop-types";
import { 
    Container, 
    SearchList, 
    SeatchItem, 
    LinkTitle 
} from "./SearchMoviesList.styled";

const SearchMoviesList = ({films, location}) => {
   
    return (
        <Container>
            <SearchList>
                {films.map(({id, original_title, title, poster_path}) => {
                    return (
                        <SeatchItem key={id}>
                            <LinkTitle to={`${id}`} state={{ from: location}}>
                                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="" />
                                <p>{original_title ? original_title : title}</p>
                            </LinkTitle>
                        </SeatchItem>
                    )
                })}
            </SearchList>
        </Container>
    )
};

SearchMoviesList.propTypes = {
    films: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
};

export default SearchMoviesList;