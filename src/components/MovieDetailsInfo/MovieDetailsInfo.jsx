import AdditionalInfo from "components/AdditionalInfo";

const MovieDetailsInfo = ({film}) => {
    const {original_title, title, poster_path, vote_average, overview, genres} = film;

    return (
        <div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
            </div>
            <div>
                <h2>{original_title ? original_title : title}</h2>
                <p>User Score: {Math.round(vote_average * 100 / 10)}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres.map(({name}) => name).join(' ')}</p>
            </div>
            <AdditionalInfo/>
        </div>
    );
};

export default MovieDetailsInfo;