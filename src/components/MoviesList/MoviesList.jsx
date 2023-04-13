import PropTypes from "prop-types";
import { Container, List, Item, LinkTitle } from "./MoviesList.styled";
import { useLocation } from "react-router-dom";

const MoviesList = ({films}) => {

    const location = useLocation();
   
    return (
        <Container>
            <List>
                {films.map(({id, original_title, title, poster_path}) => {
                    return (
                        <Item key={id}>
                            <LinkTitle to={`/movies/${id}`} state={{ from: location}}>
                                <img 
                                    src={
                                        poster_path
                                         ? `https://image.tmdb.org/t/p/w200${poster_path}`
                                         : `https://via.placeholder.com/200x300`
                                    } 
                                    alt="" 
                                />
                                <p>{original_title ? original_title : title}</p>
                            </LinkTitle>
                        </Item>
                    );
                })}
            </List>
        </Container>
    )
};

MoviesList.propTypes = {
    films: PropTypes.array.isRequired,
};

export default MoviesList;