import { Container, TrendingTitle, TrendingList, TrendongItem, LinkTitle } from "./TrandingMovies.styled";

const TrandingMovies = ({films, location}) => {
    return (
            <Container>
            <TrendingTitle>Tranding today</TrendingTitle>
            <TrendingList>
                {films.map(({id, title, original_title, poster_path}) => {
                    return (
                        <TrendongItem key={id}>
                            <LinkTitle to={`movies/${id}`} state={{from: location}}>
                                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="" />
                                <p>{original_title ? original_title : title}</p>
                            </LinkTitle>
                        </TrendongItem>
                    );
                })}
            </TrendingList>
        </Container>
    );
};

export default TrandingMovies;