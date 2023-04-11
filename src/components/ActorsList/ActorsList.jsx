import PropTypes from "prop-types";
import { 
    ActorsWrap, 
    ActorsItem, 
    ActorsImg, 
    ActorsName 
} from "./ActorsList.styled";

const ActorsList = ({actors}) => {
    return (
        <>
            <ActorsWrap>
                {actors.map(({id, profile_path, name, character}) => {
                    return (
                        <ActorsItem key={id}>
                            <ActorsImg src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt="" />
                            <ActorsName>{name}</ActorsName>
                            <p>{character}</p>
                        </ActorsItem>                       
                    )
                })}
            </ActorsWrap>
        </>
    );
};

ActorsList.propTypes = {
    actors: PropTypes.array.isRequired,
}

export default ActorsList;