// import { Link } from "react-router-dom";
import AdditionalInfo from "components/AdditionalInfo";
import { Container, BackLink, InfoWrap, InfoBox, MovieTitle, Title, Info } from "./MovieDetailsInfo.styled";

const MovieDetailsInfo = ({film, backLinkLocationRef}) => {
    const {original_title, title, poster_path, vote_average, overview, genres} = film;

    return (
        <Container>
            {/* <div> */}
                <BackLink to={backLinkLocationRef}>Go back</BackLink>
            {/* </div> */}
            <InfoWrap>
                <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
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

export default MovieDetailsInfo;