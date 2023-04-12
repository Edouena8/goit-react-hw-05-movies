import PropTypes from "prop-types";
import { Container, List, Item, LinkTitle } from "./MoviesList.styled";

const MoviesList = ({films, location, linkTo}) => {
   
    return (
        <Container>
            <List>
                {films.map(({id, original_title, title, poster_path}) => {
                    return (
                        <Item key={id}>
                            <LinkTitle to={`${linkTo ?? ''}${id}`} state={{ from: location}}>
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
    location: PropTypes.object.isRequired,
};

export default MoviesList;