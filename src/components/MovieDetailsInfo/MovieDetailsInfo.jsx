import PropTypes from "prop-types";
import AdditionalInfo from "components/AdditionalInfo";
import { 
    Container, 
    BackLink, 
    InfoWrap, 
    InfoBox, 
    MovieTitle, 
    Title, 
    Info 
} from "./MovieDetailsInfo.styled";

const MovieDetailsInfo = ({film, backLinkLocationRef}) => {
    const {original_title, title, poster_path, vote_average, overview, genres} = film;

    return (
        <Container>
                <BackLink to={backLinkLocationRef}>Go back</BackLink>           
            <InfoWrap>
                <img 
                    src={
                        poster_path
                         ? `https://image.tmdb.org/t/p/w300${poster_path}`
                         : `https://via.placeholder.com/300x450`
                    } 
                    alt={title} />
                    <InfoBox>
                        <MovieTitle>{original_title ? original_title : title}</MovieTitle>
                        <Info>User Score: {Math.round(vote_average * 100 / 10)}%</Info>
                        <Title>Overview</Title>
                        <Info>{overview}</Info>
                        <Title>Genres</Title>
                        <Info>{genres.map(({name}) => name).join(' ')}</Info>
                    </InfoBox>               
            </InfoWrap>
            <AdditionalInfo/>
        </Container>
    );
};

MovieDetailsInfo.propTypes = {
    film: PropTypes.shape({
        original_title: PropTypes.string, 
        title: PropTypes.string, 
        poster_path: PropTypes.string.isRequired, 
        vote_average: PropTypes.number.isRequired, 
        overview: PropTypes.string.isRequired, 
        genres: PropTypes.array.isRequired
    }),
    backLinkLocationRef: PropTypes.object.isRequired,
};

export default MovieDetailsInfo;